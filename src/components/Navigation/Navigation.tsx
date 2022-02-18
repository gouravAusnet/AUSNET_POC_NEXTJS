
import Image from 'next/image';
import ausnetLogo from '../../../public/AusnetAssets/AusnetLogo.png';
import searchIcon from '../../../public/AusnetAssets/icon/24/Vector.svg';
import personIcon from '../../../public/AusnetAssets/icon/24/person.png'
import { useI18n } from 'next-localization';
import Link from 'next/link';
import './Navigation.module.scss';
const Navigation = ({childComponents}:any) => {
    const { t } = useI18n();
    return (
      <div>
    <div className="align-items-center border-bottom mt-2">
      <div className="row mx-3">
<div className='col-4'>
<h5 className="my-0 mr-md-auto font-weight-normal  ml-2">
          <Link href="/">
            <a className="text-dark ml-3 my-2">
              <Image src={ausnetLogo} alt="Ausnet logo"
                layout="fixed"
                width={100}
                height={65} />
            </a>
          </Link>
        </h5>
</div>
<div className='col-8  mr-md-auto '>
<div className="row">
      <div className="col-12">
      <nav className="my-2 my-md-0 float-right main-menu">
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
                layout="fixed"
                width={15}
                height={15} />
              {t('header.mainMenu.myHomeEneargy')}</a>
          </Link>
      </nav>
        </div>
        </div>
        <div className="row mt-3">
        <div className='col-12 sub-menu'>
        <nav className="my-2  float-right">
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
          <span className="searchicon">
          <Image src={searchIcon} alt="Ausnet logo"
                layout="fixed"
                width={15}
                height={15} 
                className="searchiconImg"/>
          </span>
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