import React from "react";
import { google, shopify } from "../../assets/V2Home";

const Seamless = () => {
  return (
    <div className="w-full h-auto font-roboto text-white bg-[#0F1425] mx-auto flex flex-col justify-center items-center px-[25px] py-[50px] xl:p-[100px] gap-[15px]">
      <h1 className="text-[26px] xl:text-[40px] leading-[40px] xl:leading-[77.5px] tracking-[1.04px] xl:tracking-[1.6px] text-center">
        Seamless Integration: No Change In Existing Process
      </h1>
      <p className="text-[20px] xl:text-[16px] leading-[25px] xl:leading-[20px] tracking-[0.8px] xl:tracking-[0.64px] text-center">
        Bigsurmoon also seamlessly integrates with:
      </p>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-[25px] xl:gap-[100px] py-[25px] xl:py-0">
        <div className="p-[25px] w-[343px] xl:w-[491px] h-[100px] xl:h-[164px]">
          <img src={google} alt="" />
        </div>
        <div className="p-[25px] w-[343px] xl:w-[491px] h-[100px] xl:h-[164px]">
          <img src={shopify} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default Seamless;
