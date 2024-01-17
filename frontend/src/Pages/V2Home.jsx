import React from "react";
import Navbar from "../Components/Navbar";
import {
  Home3DModel,
  HomeCarosal,
  HomeConversionCard,
  HomeScreenOne,
  HomeScreenThree,
  HomeScreenTwo,
  Seamless,
  V2Intergration,
} from "../Components/V2Home";
import { V2HomeScreen3Data } from "../assets/data/data";
import Footer from "../Components/Footer";

const V2Home = () => {
  return (
    <>
      <Navbar />
      <HomeScreenOne />
      <HomeScreenThree data={V2HomeScreen3Data} />
      <Home3DModel />
      <HomeCarosal />
      <HomeConversionCard />
      <HomeScreenTwo />
      <Seamless />
      <V2Intergration />
      <Footer />
    </>
  );
};

export default V2Home;
