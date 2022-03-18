import type { LinkField, ImageField, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import type { ContentImageBlockProps } from 'components/container/ContentImageBlock/ContentImageBlock';
import type { PromotionalTilesProps } from 'components/container/PromotionalTiles/PromotionalTiles';

import { Text, Image, Link, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import ContentImageBlock from 'components/container/ContentImageBlock/ContentImageBlock';
import LeftComponent from '../LeftComponent';
import RightComponenet from '../RightComponent';

// Temporary only
// TODO: remove this and read data from sitecore
import json from 'assets/sitecore.json';
import PromotionalTiles from 'components/container/PromotionalTiles/PromotionalTiles';
const contentImageBlockProps = json.sitecore.route.placeholders['jss-main'][0]
  .fields as unknown as ContentImageBlockProps['fields'];
const promotionalTilesProps = json.sitecore.route.placeholders['jss-main'][1]
  .fields as unknown as PromotionalTilesProps['fields'];

type HomeProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    headingCommunities: Field<string>;
    headingElectricity: Field<string>;
    headingSolar: Field<string>;
    headingGas: Field<string>;
    bodyCommunities: Field<string>;
    bodyElectricity: Field<string>;
    bodySolar: Field<string>;
    bodyGas: Field<string>;
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
    carouselLeft: ImageField;
    carouselRight: ImageField;
  };
};

const Home = (props: HomeProps): JSX.Element => (
  <div className="jss-main">
    <div className="jss-main-sub banner-section">
      <div className="jss-main-sub-left carosal left-section">
        <LeftComponent imgBanner={props.fields.imgBanner} />
      </div>

      <div className="jss-main-sub-right right-section">
        <RightComponenet
          headingCommunities={props.fields.headingCommunities}
          bodyCommunities={props.fields.bodyCommunities}
          headingElectricity={props.fields.headingElectricity}
          bodyElectricity={props.fields.bodyElectricity}
          headingSolar={props.fields.headingSolar}
          bodySolar={props.fields.bodySolar}
          headingGas={props.fields.headingGas}
          bodyGas={props.fields.bodyGas}
          improveNetwork={props.fields.improveNetwork}
          improveNetworkText={props.fields.improveNetworkText}
          heading={props.fields.heading}
          commonCommunities={props.fields.commonCommunities}
          connectElectricity={props.fields.connectElectricity}
          connectSolar={props.fields.connectSolar}
          connectGas={props.fields.connectGas}
          arrowButton={props.fields.arrowButton}
          carouselLeft={props.fields.carouselLeft}
          carouselRight={props.fields.carouselRight}
        />
      </div>
    </div>

    <div className="keep-our-comm-safe">
      <ContentImageBlock fields={contentImageBlockProps} />
      <PromotionalTiles fields={promotionalTilesProps} />
    </div>

    <div className="Latest-News">
      <p style={{ display: 'grid' }}>
        <span className="header-title common-title">Transforming</span>
        <span className="header-title change-title">our communities</span>
      </p>
      <div className="news-section">
        <div className="news-left-section">
          <Image className="d-block newsImg-section" media={props.fields.newsImg} />
        </div>
        <div className="news-right-section">
          <div className="news-card">
            <p className="news-title">
              <Text field={props.fields.newsTile} />
            </p>
            <p className="news-Content">
              <Text field={props.fields.newsContent} />
            </p>
          </div>
          <li className="links moreStories">
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
