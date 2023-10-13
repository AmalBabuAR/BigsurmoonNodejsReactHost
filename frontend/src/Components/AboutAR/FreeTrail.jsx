import React from "react";
import { useNavigate } from "react-router-dom";

const FreeTrail = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-auto bg-black text-white pt-[50px] pb-[50px] lg:pb-[125px]">
      <div className="flex flex-col lg:flex-row justify-evenly items-center mx-6 lg:mx-auto gap-[25px] lg:gap-[400px]">
        <div className=" font-outfit">
          <h1 className="text-[25px] lg:text-[36px] leading-6 lg:leading-9 font-bold">
            Start your 7-day free trial
          </h1>
          <p className="mt-[25px] text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px]">
            Experience the platform's full potential, with exclusive 7-day free
            <br className="hidden lg:block" />
            trial, allowing you to explore all the features and benefits
          </p>
        </div>
        <div className="font-roboto text-center">
          <button 
           onClick={() => navigate("/pricing")}
          className="w-[125px] lg:w-[175px] h-[41px] lg:h-[61px] text-[12px] lg:text-[18px] font-medium bg-gradient-to-r from-blue-500 to-blue-400 rounded-full">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTrail;
