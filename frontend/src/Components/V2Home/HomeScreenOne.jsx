import React from "react";
import { bgImage, bgImageMob, bgImageLap } from "../../assets/V2Home";
import "../style.css";

const HomeScreenOne = () => {
  return (
    <div className="w-full bg-black text-white font-roboto h-auto lg:h-auto xl:h-auto mx-auto overflow-hidden">
      <div className="min-w-[320px] max-w-[400px] lg:max-w-[1280px] xl:max-w-[1920px] mx-auto mt-[60px] lg:mt-[90px] xl:mt-[90px] relative">
        <img
          src={bgImage}
          alt="Image"
          className="homeVideo w-full max-w-[1920px] h-auto hidden lg:hidden xl:block"
        />
        <img
          src={bgImageLap}
          alt="Image"
          className="homeVideo w-full max-w-[1280px] h-auto hidden lg:block xl:hidden"
        />
        <img
          src={bgImageMob}
          alt="Image"
          className="xl:hidden lg:hidden w-full h-auto "
        />
        <div className="absolute top-0 left-0 right-0 mx-auto">
          <div className="flex flex-col justify-center items-center h-[220px] lg:h-[85vh] xl:h-[85vh] py-[25px] lg:py-0 xl:py-0 text-center gap-[15px] lg:gap-[25px] xl:gap-[25px]">
            <h1 className="text-[26px] lg:text-[100px] xl:text-[100px] leading-[26px] lg:leading-[100px] xl:leading-[100px] font-bold blogTextShadow">
              Create Virtual <br className="lg:block xl:block hidden" />
              Experiences
            </h1>
            <p className="text-[16px] lg:text-[24px] xl:text-[24px] leading-[20px] lg:leading-[36px] xl:leading-[36px] flex flex-col homeHead">
              Visualisation solutions built for businesses
              <span className="font-extrabold">
                No downloads, no-code: all in the browser.
              </span>
            </p>
            <button className="text-[14px] lg:text-[18px] xl:text-[18px] tracking-[0.56px] lg:tracking-[0px] xl:tracking-[0px] font-medium px-[15px] lg:px-[25px] xl:px-[50px] py-[5px] lg:py-[15px] xl:py-[20px] btnClr rounded-[20px] lg:rounded-[50px] xl:rounded-[50px]">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenOne;
