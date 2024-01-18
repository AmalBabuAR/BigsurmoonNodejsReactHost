import React from "react";

const V2Intergration = () => {
  return (
    <div
      className="w-full h-auto font-roboto text-white bg-black mx-auto flex lg:flex-row xl:flex-row flex-col justify-center items-center py-[50px] 
    px-[25px] lg:py-[100px] lg:px-auto xl:p-[100px] gap-[25px] lg:gap-[129px] xl:gap-[126px]"
    >
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[26px] lg:text-[52px] xl:text-[52px] text-[#EDEDED] font-bold leading-[25.919px] lg:leading-[51.837px] xl:leading-[51.837px] tracking-[1.04px] lg:tracking-[2.08px] xl:tracking-[2.08px]">
          Take the next step
        </h1>
        <p className="text-[16px] lg:text-[20px] xl:text-[20px] leading-[19.2px] lg:leading-[24px] xl:leading-[24px] tracking-[0.64px] lg:tracking-[0.8px] xl:tracking-[0.8px] text-[#FFF] lg:w-[480px] xl:w-auto">
          Click below to start your journey to enhanced shopping experience.{" "}
          <br /> Explore all the features and benefits with Our 7 day free
          trial.
        </p>
      </div>
      <div className="flex gap-[50px] lg:gap-[50px] xl:gap-[100px]">
        <button className="btnClr text-[10px] lg:text-[18px] xl:text-[18px] lg:tracking-[0.72px] px-[25px] py-[10px] lg:px-[30px] lg:py-[15px] xl:px-[50px] xl:py-[20px] rounded-[21px] lg:rounded-[51px] xl:rounded-[51px] font-medium">
          Talk to Experts
        </button>
        <button className="btnClr text-[10px] lg:text-[18px] xl:text-[18px] lg:tracking-[0.72px] px-[25px] py-[10px] lg:px-[44px] lg:py-[15px] xl:px-[44px] xl:py-[20px] rounded-[21px] lg:rounded-[51px] xl:rounded-[51px] font-medium">
          Start Trial
        </button>
      </div>
    </div>
  );
};

export default V2Intergration;
