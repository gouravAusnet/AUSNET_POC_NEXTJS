import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import banner1 from '../../../public/AusnetAssets/banner1.png';
import banner2 from '../../../public/AusnetAssets/banner2.png';
import banner3 from '../../../public/AusnetAssets/banner3.png';
import Image from 'next/image';

type HomeProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    contentCommunities: Field<string>;
    commonCommunities: Field<string>;
    improveNetwork: Field<string>;
    improveNetworkText: Field<string>;
  };
};

const banners = [banner1, banner2, banner3];

const Home = (props: HomeProps): JSX.Element => (
  <div className='banner-section'>
    <div className='carosal left-section'>
      {
        banners.map((banner) =>
          <Image className="d-block w-100" src={banner} alt="AusNet slide" />)
      }
    </div>
    <div className='right-section'>
      <p style={{display: 'grid'}}>
        <span className='header-title common-title'>Connecting</span> 
        <span className='header-title change-title'>Communities</span>
      </p>
      <RichText className='para-text' field={props.fields.contentCommunities} />
      <div className='network-box'>
        <p className='sub-text improveNetwork-text'>
          <Text field={props.fields.improveNetwork} />
        </p>
        <RichText className='paraImprove-text improveNetwork-text' field={props.fields.improveNetworkText} />
        <div style={{display: 'flex', marginLeft: '60px'}}>
          <span className='outages-section'>12<br/><span className='outages-innersection'>Planned outages</span></span>
          <span className='outages-section'>4<br/><span className='outages-innersection'>Unplanned outages</span></span>
          <span className='outages-section last-outages'>16<br/><span className='outages-innersection'>Restored today</span></span>
        </div>
      </div>
      <p className='sub-text common-title'>
        <Text field={props.fields.heading} />
      </p>
      <RichText className='para-text' field={props.fields.commonCommunities} />
    </div>
  </div>
);

export default withDatasourceCheck()<HomeProps>(Home);
