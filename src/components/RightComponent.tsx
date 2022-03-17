import type { LinkField, ImageField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { Text, Image, Link, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useMemo, useState } from 'react';

type RightComponentProps = {
  headingCommunities: Field<string>;
  headingElectricity: Field<string>;
  headingSolar: Field<string>;
  headingGas: Field<string>;
  bodyCommunities: Field<string>;
  bodyElectricity: Field<string>;
  bodySolar: Field<string>;
  bodyGas: Field<string>;
  improveNetwork: Field<string>;
  improveNetworkText: Field<string>;
  heading: Field<string>;
  commonCommunities: Field<string>;
  connectElectricity: LinkField;
  connectSolar: LinkField;
  connectGas: LinkField;
  arrowButton: ImageField;
  carouselLeft: ImageField;
  carouselRight: ImageField;
};

const RightComponent = (props: RightComponentProps): JSX.Element => {
  const controls = useAnimation();
  const [carouselCounter, setCarouselCounter] = useState(0);
  const slides = useMemo(
    () => [
      {
        heading: props.headingCommunities,
        body: props.bodyCommunities,
        headingColour: 'communities',
      },
      {
        heading: props.headingElectricity,
        body: props.bodyElectricity,
        headingColour: 'electricity',
      },
      {
        heading: props.headingSolar,
        body: props.bodySolar,
        headingColour: 'solar',
      },
      {
        heading: props.headingGas,
        body: props.bodyGas,
        headingColour: 'gas',
      },
    ],
    [props]
  );

  const onChangeSlide = (i: number) => {
    setCarouselCounter((p) => (p + i >= slides.length ? 0 : p + i < 0 ? slides.length - 1 : p + i));
    controls.start({ opacity: [0, 1], y: [20, 0] });
  };

  return (
    <div>
      <div className="carousel">
        <h2 className="carousel__heading">
          <span className="carousel__heading--1">Connecting</span>
          <motion.span
            animate={controls}
            className={clsx('carousel__heading--2', slides[carouselCounter].headingColour)}
          >
            <Text field={slides[carouselCounter].heading} />
          </motion.span>
        </h2>

        <motion.p animate={controls} className="carousel__body">
          <Text field={slides[carouselCounter].body} />
        </motion.p>

        <div className="carousel__btn-group">
          <button onClick={() => onChangeSlide(-1)} className="carousel__btn">
            <Image media={props.carouselLeft} />
          </button>
          <button onClick={() => onChangeSlide(1)} className="carousel__btn">
            <Image media={props.carouselRight} />
          </button>
        </div>
      </div>

      <div className="network-container">
        <div className="network-search">
          <div className="network-search-input">
            <input
              type="text"
              className="form-control"
              id="goal"
              // ref={this.goal}
              placeholder="Search town or postcode for electrical outages"
            />
          </div>
          <div className="network-searchIcon">
            {/* <Image src={searchIcon} alt="Ausnet logo"
              layout="fixed"
              width={'50px'}
              height={'20px'}
              className="networksearchiconImg" /> */}
          </div>
        </div>
        <div className="network-box">
          <p className="sub-text improveNetwork-text">
            <Text field={props.improveNetwork} />
          </p>
          <RichText
            className="paraImprove-text improveNetwork-text"
            field={props.improveNetworkText}
          />
          <div style={{ display: 'flex', marginLeft: '60px' }}>
            <span className="outages-section">
              12
              <br />
              <span className="outages-innersection">Planned outages</span>
            </span>
            <span className="outages-section">
              4<br />
              <span className="outages-innersection">Unplanned outages</span>
            </span>
            <span className="outages-section last-outages">
              16
              <br />
              <span className="outages-innersection">Restored today</span>
            </span>
          </div>
        </div>
      </div>
      <p className="sub-text common-title">
        <Text field={props.heading} />
      </p>
      <RichText className="para-text" field={props.commonCommunities} />
      <ul className="ulinks">
        <li className="links">
          <div className="arrowStyle">
            <Image className="d-block w-100" media={props.arrowButton} />
          </div>
          <Link field={props.connectElectricity} />
        </li>
        <li className="links">
          <div className="arrowStyle">
            <Image className="d-block w-100" media={props.arrowButton} />
          </div>
          <Link field={props.connectSolar} />
        </li>
        <li className="links">
          <div className="arrowStyle">
            <Image className="d-block w-100" media={props.arrowButton} />
          </div>
          <Link field={props.connectGas} />
        </li>
      </ul>
    </div>
  );
};

// export default withDatasourceCheck()<RightComponentProps>(RightComponent);

export default RightComponent;
