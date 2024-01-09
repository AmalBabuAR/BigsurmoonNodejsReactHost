import React from "react";

const V2Intergration = () => {
  return (
    <div className="w-full h-auto font-roboto text-white bg-black mx-auto flex xl:flex-row flex-col justify-center items-center py-[50px] px-[25px] xl:p-[100px] gap-[25px] xl:gap-[126px]">
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[26px] xl:text-[52px] text-[#EDEDED] font-bold leading-[25.919px] xl:leading-[51.837px] tracking-[1.04px] xl:tracking-[2.08px]">
          Take the next step
        </h1>
        <p className="text-[16px] xl:text-[20px] leading-[19.2px] xl:leading-[24px] tracking-[0.64px] xl:tracking-[0.8px] text-[#FFF]">
          Click below to start your journey to enhanced shopping experience.{" "}
          <br /> Explore all the features and benefits with Our 7 day free
          trial.
        </p>
      </div>
      <div className="flex gap-[50px] xl:gap-[100px]">
        <button className="btnClr text-[10px] xl:text-[18px] px-[25px] py-[10px] xl:px-[50px] xl:py-[20px] rounded-[21px] xl:rounded-[51px] font-medium">
          Get a Demo
        </button>
        <button className="btnClr text-[10px] xl:text-[18px] px-[25px] py-[10px] xl:px-[44px] xl:py-[20px] rounded-[21px] xl:rounded-[51px] font-medium">
          Start Trial
        </button>
      </div>
    </div>
  );
};

export default V2Intergration;
