import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PricingScreeen from "../Components/Pricing/PricingScreeen";
import PricingSeamless from "../Components/Pricing/PricingSeamless";
import PricingSubFeature from "../Components/Pricing/PricingSubFeature";

const Pricing = () => {
  return (
    <>
      <Navbar />
      {/* <Pricingbigsur /> */}
      <PricingScreeen />
      <PricingSeamless />
      <PricingSubFeature />
      <Footer />
    </>
  );
};

export default Pricing;
