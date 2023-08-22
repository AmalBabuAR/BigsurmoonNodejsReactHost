import React from "react";
import AboutStudio from "../Components/ThreeDStudio/AboutStudio";
import HowItWorks from "../Components/ThreeDStudio/HowItWorks";
import SupportTeamFeatures from "../Components/ThreeDStudio/SupportTeamFeatures";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ThreeDStudio = () => {
  return (
    <div>
      <Navbar />
      <AboutStudio />
      <SupportTeamFeatures />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default ThreeDStudio;
