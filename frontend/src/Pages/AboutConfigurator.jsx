import React from "react";
import CustomizationSimplified from "../Components/AboutConfigurator/CustomizationSimplified";
import ConfiguratorItems from "../Components/AboutConfigurator/ConfiguratorItems";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const AboutConfigurator = () => {
  return (
    <div>
      <Navbar />
      <CustomizationSimplified />
      <ConfiguratorItems />
      <Footer />
    </div>
  );
};

export default AboutConfigurator;
