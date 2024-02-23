import React from "react";
import CarouselComp from "../util/CarouselComp";

const HomeCarosal = () => {
  return (
    <div className="w-full h-auto font-roboto text-white bg-black mx-auto flex flex-col justify-center items-center pt-[25px] pb-[50px] px-[24px] lg:px-[50px] xl:px-[100px] gap-[25px] text-center">
      <div className="flex flex-col text-center py-[25px] lg:py-[50px] xl:py-[50px] gap-[25px]">
        <h4 className="text-[26px] lg:text-[50px] xl:text-[50px] leading-[26px] lg:leading-[50px] xl:leading-[50px] font-bold">
          Industries we serve
        </h4>
        <p className="hidden lg:block xl:block text-[16px] lg:text-[18px] xl:text-[18px] leading-[24px] lg:leading-[27px] xl:leading-[27px] w-[293px] lg:w-[1064px] xl:w-[1258px]">
          Create stunning photographs for any image use case scenarios. choose
          your light set up, create custom backgrounds and get the finest
          virtual photography studio at your fingertips.
        </p>
      </div>
      <div className="w-full h-auto mx-auto px-auto xl:px-[100px]">
        <CarouselComp />
      </div>
    </div>
  );
};

export default HomeCarosal;
