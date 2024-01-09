import React from "react";
import { bgImage, bgImageMob } from "../../assets/V2Home";
import "../style.css";

const HomeScreenOne = () => {
  return (
    <div className="w-full bg-black text-white font-roboto h-auto xl:h-screen mx-auto overflow-hidden ">
      <div className="min-w-[320px] max-w-[400px] xl:min-w-[1024px] xl:max-w-[1920px] mx-auto mt-[60px] xl:mt-[90px] relative">
        <img
          src={bgImage}
          alt=""
          className="homeVideo w-full hidden xl:block"
        />
        <img src={bgImageMob} alt="" className="xl:hidden w-full h-auto" />
        <div className="absolute top-0 left-0 right-0  mx-auto">
          <div className="flex flex-col justify-center items-center h-[220px] xl:h-[85vh] py-[25px] xl:py-0 text-center gap-[15px] xl:gap-[25px]">
            <h1 className="text-[26px] xl:text-[100px] leading-[26px] xl:leading-[100px] font-bold blogTextShadow">
              Create Virtual <br className="xl:block hidden" /> Experiences
            </h1>
            <p className="text-[16px] xl:text-[24px] leading-[20px] xl:leading-[36px] flex flex-col homeHead">
              Visualisation solutions built for businesses
              <span className="font-bold">
                No downloads, no-code: all in the browser.
              </span>
            </p>
            <button className="text-[10px] xl:text-[18px] tracking-[0.4px] xl:tracking-[0px] font-medium px-[10px] xl:px-[50px] py-[10px] xl:py-[20px] btnClr rounded-[20px] xl:rounded-[50px]">
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenOne;
