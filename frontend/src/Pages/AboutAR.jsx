import React from "react";
import ProductVisualisation from "../Components/AboutAR/ProductVisualisation";
import AugumentedReality from "../Components/AboutAR/AugumentedReality";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const AboutAR = () => {
  return (
    <div>
      <Navbar />
      <ProductVisualisation />
      <AugumentedReality />
      <Footer />
    </div>
  );
};

export default AboutAR;
