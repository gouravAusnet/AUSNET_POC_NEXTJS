import { Image } from '@sitecore-jss/sitecore-jss-nextjs';

// type LeftComponentProps = StyleguideComponentProps &  {
//   fields: {
//     imgBanner: ImageField;
//   };
// };

const LeftComponent = (props: any): JSX.Element => (
  <div className='leftComponent'>
    <Image className="d-block w-100" media={props.imgBanner} />
  </div>
);

// export default withDatasourceCheck()<LeftComponentProps>(LeftComponent);
export default LeftComponent;
