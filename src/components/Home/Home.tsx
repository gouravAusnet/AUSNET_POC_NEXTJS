import { Text, Image, Link, LinkField, RichText, ImageField, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import LeftComponent from '../LeftComponent';

type HomeProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    contentCommunities: Field<string>;
    commonCommunities: Field<string>;
    improveNetwork: Field<string>;
    improveNetworkText: Field<string>;
    imgBanner: ImageField;
    contentImage: ImageField;
    connectElectricity: LinkField;
    connectSolar: LinkField;
    connectGas: LinkField;
    reportOutage: Field<string>;
    reportOutageText: Field<string>;
    reportLinks: LinkField;
    lifeImage: ImageField;
    tileText1: Field<string>;
    tilecontentText1: Field<string>;
    tileLink1: LinkField;
    newsImg: ImageField;
    newsTile: Field<string>;
    newsContent: Field<string>;
    MoreStories: LinkField;
    arrowButton: ImageField;
    arrowButtonBorder: ImageField;
  };
};

const Home = (props: HomeProps): JSX.Element => (
  <div className='jss-main'>
    <div className='jss-main-sub banner-section'>
      <div className='jss-main-sub-left carosal left-section'>
        <LeftComponent
          imgBanner={props.fields.imgBanner}
        />
      </div>
      <div className='jss-main-sub-right right-section'>
        <p style={{ display: 'grid' }}>
          <span className='header-title common-title'>Connecting</span>
          <span className='header-title change-title'>Communities</span>
        </p>
        <RichText className='para-text' field={props.fields.contentCommunities} />
        <div className='carosalBtn'>
          <div className="carosalarrowStyle">
            {/* <Image className="d-block w-100" src={carosalLeft} alt="AusNet slide" /> */}
          </div>
          <div className="carosalarrowStyle">
            {/* <Image className="d-block w-100" src={carosalRight} alt="AusNet slide" /> */}
          </div>
        </div>
        <div className='network-container'>
          <div className='network-search'>
            <div className='network-search-input'>
              <input
                type="text"
                className="form-control"
                id="goal"
                // ref={this.goal}
                placeholder="Search town or postcode for electrical outages"
              />
            </div>
            <div className='network-searchIcon'>
              {/* <Image src={searchIcon} alt="Ausnet logo"
              layout="fixed"
              width={'50px'}
              height={'20px'}
              className="networksearchiconImg" /> */}
            </div>
          </div>
          <div className='network-box'>
            <p className='sub-text improveNetwork-text'>
              <Text field={props.fields.improveNetwork} />
            </p>
            <RichText className='paraImprove-text improveNetwork-text' field={props.fields.improveNetworkText} />
            <div style={{ display: 'flex', marginLeft: '60px' }}>
              <span className='outages-section'>12<br /><span className='outages-innersection'>Planned outages</span></span>
              <span className='outages-section'>4<br /><span className='outages-innersection'>Unplanned outages</span></span>
              <span className='outages-section last-outages'>16<br /><span className='outages-innersection'>Restored today</span></span>
            </div>
          </div>
        </div>
        <p className='sub-text common-title'>
          <Text field={props.fields.heading} />
        </p>
        <RichText className='para-text' field={props.fields.commonCommunities} />
        <ul className='ulinks'>
          <li className='links'>
            <div className="arrowStyle">
              <Image className="d-block w-100" media={props.fields.arrowButton} />
            </div>
            <Link field={props.fields.connectElectricity} />
          </li>
          <li className='links'>
            <div className="arrowStyle">
              <Image className="d-block w-100" media={props.fields.arrowButton} />
            </div>
            <Link field={props.fields.connectSolar} />
          </li>
          <li className='links'>
            <div className="arrowStyle">
              <Image className="d-block w-100" media={props.fields.arrowButton} />
            </div>
            <Link field={props.fields.connectGas} />
          </li>
        </ul>
      </div>
    </div>

    <div className='keep-our-comm-safe'>
      <div className='content-image-block'>
        <p style={{ display: 'grid' }}>
          <span className='header-title keeping-title'>Keeping our</span>
          <span className='header-title community-title'>community safe</span>
        </p>
        <div className='contentImage-Section'>
          <Image className="d-block contentImg" media={props.fields.contentImage} />
          <div className='contentImage-text'>
            <p className='reportOutage'>
              <Text field={props.fields.reportOutage} />
            </p>
            <p className='reportOutageText'>
              <Text field={props.fields.reportOutageText} />
            </p>
            <li className='reportLinks'>
              <div className="arrowStyle">
                <Image className="d-block w-100" media={props.fields.arrowButtonBorder} />
              </div>
              <Link field={props.fields.reportLinks} />
            </li>
          </div>
        </div>
      </div>

      <div className='promationTile-section container'>
        <div className="row">
          <div className="card promationTile col" style={{ width: '22%' }}>
            <div className="card-body">
              <Image className="d-block lifeImg" media={props.fields.lifeImage} />
              <p className='card-title reportOutage'>
                <Text field={props.fields.tileText1} />
              </p>
              <p className="card-text reportOutageText">
                <Text field={props.fields.tilecontentText1} />
              </p>
              <li className='reportLinks'>
                <div className="arrowStyle">
                  <Image className="d-block w-100" media={props.fields.arrowButtonBorder} />
                </div>
                <Link field={props.fields.tileLink1} />
              </li>
            </div>
          </div>
          <div className="card promationTile col" style={{ width: '22%' }}>
            <div className="card-body">
              <Image className="d-block lifeImg" media={props.fields.lifeImage} />
              <p className='card-title reportOutage'>
                <Text field={props.fields.tileText1} />
              </p>
              <p className="card-text reportOutageText">
                <Text field={props.fields.tilecontentText1} />
              </p>
              <li className='reportLinks'>
                <div className="arrowStyle">
                  <Image className="d-block w-100" media={props.fields.arrowButtonBorder} />
                </div>
                <Link field={props.fields.tileLink1} />
              </li>
            </div>
          </div>
          <div className="card promationTile col" style={{ width: '22%' }}>
            <div className="card-body">
              <Image className="d-block lifeImg" media={props.fields.lifeImage} />
              <p className='card-title reportOutage'>
                <Text field={props.fields.tileText1} />
              </p>
              <p className="card-text reportOutageText">
                <Text field={props.fields.tilecontentText1} />
              </p>
              <li className='reportLinks'>
                <div className="arrowStyle">
                  <Image className="d-block w-100" media={props.fields.arrowButtonBorder} />
                </div>
                <Link field={props.fields.tileLink1} />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className='Latest-News'>
      <p style={{ display: 'grid' }}>
        <span className='header-title common-title'>Transforming</span>
        <span className='header-title change-title'>our communities</span>
      </p>
      <div className='news-section'>
        <div className='news-left-section'>
          <Image className="d-block newsImg-section" media={props.fields.newsImg} />
        </div>
        <div className='news-right-section'>
          <div className='news-card'>
            <p className='news-title'>
              <Text field={props.fields.newsTile} />
            </p>
            <p className='news-Content'>
              <Text field={props.fields.newsContent} />
            </p>
          </div>
          <li className='links moreStories'>
            <div className="arrowStyle">
              <Image className="d-block w-100" media={props.fields.arrowButton} />
            </div>
            <Link field={props.fields.MoreStories} />
          </li>
        </div>
      </div>

    </div>
  </div>
);

export default withDatasourceCheck()<HomeProps>(Home);
