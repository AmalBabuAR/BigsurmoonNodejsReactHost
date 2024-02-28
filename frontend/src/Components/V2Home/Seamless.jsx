import React from "react";
import { google, shopify } from "../../assets/V2Home";

const Seamless = () => {
  return (
    <div className="w-full h-auto font-roboto text-white bg-[#0F1425] mx-auto flex flex-col justify-center items-center px-[25px] py-[50px] lg:p-[100px] xl:p-[100px] gap-[15px]">
      <h4 className="text-[26px] lg:text-[40px] xl:text-[40px] font-bold lg:font-normal xl:font-normal leading-[34px] lg:leading-[77.5px] xl:leading-[77.5px]  lg:tracking-[1.6px]  xl:tracking-[1.6px] text-center lg:w-[1021px] ">
        Seamless Integration: No Change In Existing Process
      </h4>
      <p className="text-[16px] lg:text-[16px] xl:text-[16px] font-normal leading-[16px] lg:leading-[20px] xl:leading-[20px] lg:tracking-[0.64px] xl:tracking-[0.64px] text-center">
        Bigsurmoon also seamlessly integrates with:
      </p>
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-[25px] lg:gap-[50px] xl:gap-[100px] py-[25px] xl:py-0">
        <div className="p-[25px] w-[343px] lg:w-[380px] xl:w-[491px] h-[100px] lg:h-[144px] xl:h-[164px] flex justify-center items-center">
          <img src={google} alt="Bigsurmoon also seamlessly integrates with Google Ads" />
        </div>
        <div className="p-[25px] w-[343px] lg:w-[380px] xl:w-[491px] h-[100px] lg:h-[144px] xl:h-[164px] flex justify-center items-center">
          <img src={shopify} alt="Bigsurmoon also seamlessly integrates with Shopify"  className="" />
        </div>
      </div>
    </div>
  );
};

export default Seamless;
