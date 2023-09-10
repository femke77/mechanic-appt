import * as React from 'react';
import ServiceCategories from '../modules/views/ServiceCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import Hero from '../modules/views/Hero';
import HowItWorks from '../modules/views/HowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';
import withRoot from '../modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Hero />
      <ServiceCategories />
      <HowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
