import React from "react";
import AllInOne from "../Components/Home/AllInOne";
import Hero from "../Components/Home/Hero";
import MainFeatures from "../Components/Home/MainFeatures";
import SubFeatures from "../Components/Home/SubFeatures";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import EnterprisesCard from "../Components/Home/EnterprisesCard";
import WhyBigsurmoonCard from "../Components/Home/WhyBigsurmoonCard";
import Gallery from "../Components/Home/Gallery";
import Intergration from "../Components/Home/Intergration";
import ThreeDModel from "../Components/Home/ThreeDModel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <EnterprisesCard />
      {/* <AllInOne  /> */}
      <MainFeatures />
      <WhyBigsurmoonCard />
      <Gallery />
      <SubFeatures />
      <ThreeDModel />
      <Intergration />
      <Footer />
    </>
  );
};

export default Home;
