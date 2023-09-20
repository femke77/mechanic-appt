import * as React from "react";
import ServiceCategories from "../modules/views/ServiceCategories";
import AppFooter from "../modules/views/AppFooter";
import Hero from "../modules/views/Hero";
import HowItWorks from "../modules/views/HowItWorks";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import AIPortalHero from "../modules/views/AIPortalHero";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />

      <Hero />
      <ServiceCategories />

      <HowItWorks />
      <AIPortalHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
