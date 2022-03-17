// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Home component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function Home(manifest: Manifest): void {
  manifest.addComponent({
    name: 'Home',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'heading', type: CommonFieldTypes.SingleLineText },
      { name: 'headingCommunities', type: CommonFieldTypes.SingleLineText },
      { name: 'headingElectricity', type: CommonFieldTypes.SingleLineText },
      { name: 'headingSolar', type: CommonFieldTypes.SingleLineText },
      { name: 'headingGas', type: CommonFieldTypes.SingleLineText },
      { name: 'bodyCommunities', type: CommonFieldTypes.MultiLineText },
      { name: 'bodyElectricity', type: CommonFieldTypes.MultiLineText },
      { name: 'bodySolar', type: CommonFieldTypes.MultiLineText },
      { name: 'bodyGas', type: CommonFieldTypes.MultiLineText },
      { name: 'commonCommunities', type: CommonFieldTypes.RichText },
      { name: 'improveNetwork', type: CommonFieldTypes.SingleLineText },
      { name: 'improveNetworkText', type: CommonFieldTypes.RichText },
      { name: 'imgBanner', type: CommonFieldTypes.Image },
      { name: 'contentImage', type: CommonFieldTypes.Image },
      { name: 'connectElectricity', type: CommonFieldTypes.GeneralLink },
      { name: 'connectSolar', type: CommonFieldTypes.GeneralLink },
      { name: 'connectGas', type: CommonFieldTypes.GeneralLink },
      { name: 'reportOutage', type: CommonFieldTypes.SingleLineText },
      { name: 'reportOutageText', type: CommonFieldTypes.SingleLineText },
      { name: 'reportLinks', type: CommonFieldTypes.GeneralLink },
      { name: 'lifeImage', type: CommonFieldTypes.Image },
      { name: 'tileText1', type: CommonFieldTypes.SingleLineText },
      { name: 'tilecontentText1', type: CommonFieldTypes.SingleLineText },
      { name: 'tileLink1', type: CommonFieldTypes.GeneralLink },
      { name: 'newsImg', type: CommonFieldTypes.Image },
      { name: 'newsTile', type: CommonFieldTypes.SingleLineText },
      { name: 'newsContent', type: CommonFieldTypes.SingleLineText },
      { name: 'MoreStories', type: CommonFieldTypes.GeneralLink },
      { name: 'arrowButton', type: CommonFieldTypes.Image },
      { name: 'arrowButtonBorder', type: CommonFieldTypes.Image },
      { name: 'carouselLeft', type: CommonFieldTypes.Image },
      { name: 'carouselRight', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
