import { Text, Image, Link, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

// type RightComponentProps = StyleguideComponentProps &  {
//   fields: {
//     heading: Field<string>;
//     commonCommunities: Field<string>;
//     improveNetwork: Field<string>;
//     improveNetworkText: Field<string>;
//     connectElectricity: LinkField;
//     connectSolar: LinkField;
//     connectGas: LinkField;
//     arrowButton: ImageField;
//   };
// };


const RightComponent = (props: any): JSX.Element => (
  <div>
    <p style={{ display: 'grid' }}>
      <span className='header-title common-title'>Connecting</span>
      <span className='header-title change-title'>Communities</span>
    </p>
    <RichText className='para-text' field={props.contentCommunities} />
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
          <Text field={props.improveNetwork} />
        </p>
        <RichText className='paraImprove-text improveNetwork-text' field={props.improveNetworkText} />
        <div style={{ display: 'flex', marginLeft: '60px' }}>
          <span className='outages-section'>12<br /><span className='outages-innersection'>Planned outages</span></span>
          <span className='outages-section'>4<br /><span className='outages-innersection'>Unplanned outages</span></span>
          <span className='outages-section last-outages'>16<br /><span className='outages-innersection'>Restored today</span></span>
        </div>
      </div>
    </div>
    <p className='sub-text common-title'>
      <Text field={props.heading} />
    </p>
    <RichText className='para-text' field={props.commonCommunities} />
    <ul className='ulinks'>
      <li className='links'>
        <div className="arrowStyle">
          <Image className="d-block w-100" media={props.arrowButton} />
        </div>
        <Link field={props.connectElectricity} />
      </li>
      <li className='links'>
        <div className="arrowStyle">
          <Image className="d-block w-100" media={props.arrowButton} />
        </div>
        <Link field={props.connectSolar} />
      </li>
      <li className='links'>
        <div className="arrowStyle">
          <Image className="d-block w-100" media={props.arrowButton} />
        </div>
        <Link field={props.connectGas} />
      </li>
    </ul>
  </div>
);

// export default withDatasourceCheck()<RightComponentProps>(RightComponent);

export default RightComponent;
