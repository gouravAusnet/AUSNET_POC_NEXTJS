import React from 'react';
import Head from 'next/head';
import deepEqual from 'deep-equal';
import Navigation from 'components/Navigation/Navigation';
import {
  Placeholder,
  VisitorIdentification,
  withSitecoreContext,
  getPublicUrl,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';
// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

// This is boilerplate navigation for sample purposes. Most apps should throw this away and use their own navigation implementation.
// Most apps may also wish to use GraphQL for their navigation construction; this sample does not simply to support disconnected mode.
// const Navigation = ({childComponents}:any) => {
//   const { t } = useI18n();
//   return (
//     <div>
//   <div className="align-items-center border-bottom">
//       <div className="row">
//     <div className="col-12">
//     <nav className="my-2 my-md-0 mr-md-3 float-right">
//     <Link href="/About">
//           <a className="p-2 text-secondary">{t('header.mainMenu.About')}</a>
//         </Link>
//         <Link href="/News">
//           <a className="p-2 text-secondary">{t('header.mainMenu.news')}</a>
//         </Link>
//         <Link href="/Careers">
//           <a className="p-2 text-secondary">{t('header.mainMenu.careers')}</a>
//         </Link>
//         <Link href="/Investors">
//           <a className="p-2 text-secondary">{t('header.mainMenu.Investors')}</a>
//         </Link>
//         <Link href="/Contact">
//           <a className="p-2 text-secondary">{t('header.mainMenu.Contact')}</a>
//         </Link>
//         <Link href="/myHomeEneargy">
//           <a className="p-2 text-secondary">{t('header.mainMenu.myHomeEneargy')}</a>
//         </Link>
//     </nav>
//       </div>
//       </div>
//       <div className="row">
//       <div className="col-6">
//       <h5 className="my-0 mr-md-auto font-weight-normal  ml-2">
//         <Link href="/">
//           <a className="text-dark">
//             <Image src={ausnetLogo} alt="Ausnet logo"
//               layout="fixed"
//               width={100}
//               height={65} />
//           </a>
//         </Link>
//       </h5>
//       </div>
//       <div className='col-6'>
//       <nav className="my-2  float-right">
//         <Link href="/">
//           <a className="p-2 text-dark">{t('header.subMenu.Electricity')}</a>
//         </Link>
//         <Link href="/Gas">
//           <a className="p-2 text-dark">{t('header.subMenu.Gas')}</a>
//         </Link>
//         <Link href="/Solar">
//           <a className="p-2 text-dark">{t('header.subMenu.Solar')}</a>
//         </Link>
//         <Link href="/Safety">
//           <a className="p-2 text-dark">{t('header.subMenu.Safety')}</a>
//         </Link>
//         <Link href="/Outages">
//           <a className="p-2 text-dark">{t('header.subMenu.Outages')}</a>
//         </Link>
//       </nav>
//       </div>
//       </div>
//     </div>
// {childComponents}
//     </div>
//   );
// };

interface LayoutProps {
  sitecoreContext: StyleguideSitecoreContextValue;
}

const Layout = ({ sitecoreContext: { route } }: LayoutProps): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>{route?.fields?.pageTitle?.value || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>

      {/*
        VisitorIdentification is necessary for Sitecore Analytics to determine if the visitor is a robot.
        If Sitecore XP (with xConnect/xDB) is used, this is required or else analytics will not be collected for the JSS app.
        For XM (CMS-only) apps, this should be removed.

        VI detection only runs once for a given analytics ID, so this is not a recurring operation once cookies are established.
      */}
      {/* <VisitorIdentification /> */}

      {/* <Navigation/> */}
      {/* root placeholder for the app, which we add components to using route data */}

      <div className="home-container">
        <Navigation />
        {/* <Placeholder name="jss-main" rendering={route} /> */}
        <Placeholder name="jss-home" rendering={route} />
      </div>
    </React.Fragment>
  );
};

const propsAreEqual = (prevProps: LayoutProps, nextProps: LayoutProps) => {
  if (deepEqual(prevProps.sitecoreContext.route, nextProps.sitecoreContext.route)) return true;

  return false;
};

export default withSitecoreContext()(React.memo(Layout, propsAreEqual));
