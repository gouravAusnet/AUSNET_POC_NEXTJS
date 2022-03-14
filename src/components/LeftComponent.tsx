import { Image } from '@sitecore-jss/sitecore-jss-nextjs';

const LeftComponent = (props: any): JSX.Element => (
  <div className='leftComponent'>
    <Image className="d-block w-100" media={props.imgBanner} />
  </div>
);

export default LeftComponent;
