import React from "react";
import AllInOne from "../Components/Home/AllInOne";
import Hero from "../Components/Home/Hero";
import MainFeatures from "../Components/Home/MainFeatures";
import SubFeatures from "../Components/Home/SubFeatures";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <AllInOne  /> */}
      <MainFeatures />
      <SubFeatures />
      <Footer />
    </>
  );
};

export default Home;
