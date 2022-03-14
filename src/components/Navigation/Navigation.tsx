
import Image from 'next/image';
import personIcon from '../../../public/AusnetAssets/icon/24/person.png'
import { useI18n } from 'next-localization';
import Link from 'next/link';

const Navigation = ({ childComponents }: any) => {
  const { t } = useI18n();
  const handleClick = (e: any) => {
    console.log(e)
    const links = document.getElementsByClassName('navbar-links')[0];
    links.classList.toggle('active')
  }
  return (
    <div>
      <div className="align-items-center">
        <div className="row mx-3">
          <div className='col-12 p-0  mr-md-auto'>
            <div className="row border-bottom top-menu">
              <div className="col-12 my-3">
                <nav className="my-2 my-md-0  main-menu">
                  <Link href="/About">
                    <a className="p-2 text-secondary">{t('header.mainMenu.About')}</a>
                  </Link>
                  <Link href="/News">
                    <a className="p-2 text-secondary">{t('header.mainMenu.News')}</a>
                  </Link>
                  <Link href="/Careers">
                    <a className="p-2 text-secondary">{t('header.mainMenu.Careers')}</a>
                  </Link>
                  <Link href="/Investors">
                    <a className="p-2 text-secondary">{t('header.mainMenu.Investors')}</a>
                  </Link>
                  <Link href="/Contact">
                    <a className="p-2 text-secondary">{t('header.mainMenu.Contact')}</a>
                  </Link>
                  <Link href="/myHomeEneargy">

                    <a className="p-2 text-secondary">
                      <Image src={personIcon} alt="Person icon"
                        layout="intrinsic"
                        width={15}
                        height={15}
                        key="personIcon" />
                      <div className='personIcon'>{t('header.mainMenu.myHomeEneargy')}</div></a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="row mt-2">
             
              <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 '>
                 <a className="toggle-button" onClick={(e) => handleClick(e)}>
                <i className="fa fa-bars"></i>
              </a>
                <div className="my-0 mr-md-auto font-weight-normal  ml-2">
                  <Link href="/">
                    <h3>
                      <a className="text-dark ml-3 my-2">Ausnet</a>
                    </h3>
                  </Link>
                  {/* <div className="searchicon-responsive text-center">
                    <i className="fa fa-search"></i>
                  </div> */}
                </div>
               
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12 sub-menu'>
                <nav className="my-2">

                  <div className='navbar-links'>
                    <Link href="/Electricity">
                      <a className="p-3 text-dark">{t('header.subMenu.Electricity')}</a>
                    </Link>
                    <Link href="/Gas">
                      <a className="p-3  text-dark">{t('header.subMenu.Gas')}</a>
                    </Link>
                    <Link href="/Solar">
                      <a className="p-3 text-dark">{t('header.subMenu.Solar')}</a>
                    </Link>
                    <Link href="/Safety">
                      <a className="p-3  text-dark">{t('header.subMenu.Safety')}</a>
                    </Link>
                    <Link href="/Outages">
                      <a className="p-3 text-dark">{t('header.subMenu.Outages')}</a>
                    </Link>
                    <div className="searchicon text-center">
                    <i className="fa fa-search"></i>
                  </div>
                  </div>
                  
                </nav>
              </div>
            </div>
          </div>
        </div>

      </div>
      {childComponents}
    </div>
  );
};
export default Navigation