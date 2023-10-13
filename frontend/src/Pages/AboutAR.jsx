import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ARSimplified from "../Components/AboutAR/ARSimplified";
import OneClick from "../Components/AboutAR/OneClick";
import ARImageContainer from "../Components/AboutAR/ARImageContainer";
import FreeTrail from "../Components/AboutAR/FreeTrail";

const AboutAR = () => {
  return (
    <div>
      <Navbar />
      <ARSimplified />
      <OneClick />
      <ARImageContainer />
      <FreeTrail />
      <Footer />
    </div>
  );
};

export default AboutAR;
