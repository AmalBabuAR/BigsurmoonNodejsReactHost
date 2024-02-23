import React from "react";
import { useNavigate } from "react-router-dom";

const V2Intergration = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto font-roboto text-white bg-black mx-auto flex lg:flex-row xl:flex-row flex-col justify-center items-center py-[50px] px-[25px] lg:py-[100px] lg:px-auto xl:p-[100px] gap-[25px] lg:gap-[190px] xl:gap-[126px]">
      <div className="flex flex-col gap-[20px]">
        <h4 className="text-[26px] lg:text-[45px] xl:text-[52px] text-[#EDEDED] font-bold leading-[25.919px] lg:leading-[44.859px] xl:leading-[51.837px] tracking-[1.04px] lg:tracking-[1.8px] xl:tracking-[2.08px]">
          Take the next step
        </h4>
        <p className="text-[16px] lg:text-[16px] xl:text-[20px] leading-[19.2px] lg:leading-[19.2px] xl:leading-[24px] tracking-[0.64px] lg:tracking-[0.64px] xl:tracking-[0.8px] font-normal text-[#FFF] lg:w-[517px] xl:w-auto">
          Click below to start your journey to enhanced shopping experience.{" "}
          <br /> Explore all the features and benefits with Our 7 day free
          trial.
        </p>
      </div>
      <div className="flex justify-center lg:justify-normal xl:justify-normal w-full lg:w-auto xl:w-auto gap-[50px] lg:gap-[50px] xl:gap-[100px]">
        <button
          onClick={() => navigate("/support")}
          className="btnClr w-auto h-[30px] lg:h-[40px] xl:h-[61px] flex justify-center items-center  px-[20px]  lg:px-[20px] xl:px-[50px] py-auto  rounded-[21px] lg:rounded-[51px] xl:rounded-[51px] "
        >
          <h4 className="h-auto w-[116px] lg:w-[130px] text-[16px] lg:text-[18px] xl:text-[18px] tracking-[0.64px] lg:tracking-[0.72px] font-medium">
            Talk to Experts
          </h4>
        </button>
        <button
          onClick={() => navigate("/plan")}
          className="btnClr w-auto h-[30px] lg:h-[40px] xl:h-[61px] flex justify-center items-center  px-[20px] lg:px-[25px] xl:px-[44px] py-auto rounded-[21px] lg:rounded-[51px] xl:rounded-[51px]"
        >
          <h4 className="h-auto w-[87px] text-[16px] lg:text-[18px] xl:text-[18px] tracking-[0.64px] lg:tracking-[0.72px] font-medium">
            Start Trial
          </h4>
        </button>
      </div>
    </div>
  );
};

export default V2Intergration;
