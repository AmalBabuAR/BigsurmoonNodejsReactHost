import React from "react";
import { ovel } from "../../assets/V2Home";

const HomeConversionCard = () => {
  return (
    <div className="w-full h-auto font-roboto text-white bg-black flex flex-col xl:flex-row justify-center items-center gap-[25px] xl:gap-[100px] mx-auto p-[25px] xl:p-[100px] ">
      <div className="flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] xl:w-[574px]">
        <img
          src={ovel}
          alt=""
          className="w-[100px] h-[98.729px] rounded-[100px]"
        />
        <p className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
          Founder: Fala & Bebe
        </p>
        <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col">
          200%
          <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
            Engagement rate
          </span>
        </h1>
        <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col">
          {">2X"}
          <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
            Conversion
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] xl:w-[574px]">
        <img
          src={ovel}
          alt=""
          className="w-[100px] h-[98.729px] rounded-[100px]"
        />
        <p className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
          Founder: Axile Berox Co.
        </p>
        <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col">
          160%
          <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
            Engagement rate
          </span>
        </h1>
        <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col">
          {">3X"}
          <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
            Conversion
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HomeConversionCard;
