import React from "react";
import QuotationMark from "../../assets/Home/QuotationMark.svg";
import { useNavigate } from "react-router-dom";
import "../style.css";

const EnterprisesCard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black mt-[-1px] flex justify-center items-center flex-col text-white">
      <div className="flex flex-row justify-between items-center gap-[150px] lg:mt-[100px]">
        <div className="">
          <h1 className="text-[20px] lg:text-[40px] text-center lg:text-left font-roboto font-bold leading-[25px] lg:leading-[50px]">
            100+ Enterprises Make Their <br />
            Product Listings Standout Everyday
          </h1>
        </div>
        <div className="hidden lg:block">
          <button
            onClick={() => navigate("/plan")}
            className="w-[175px] h-[61px] text-[12px] font-medium md:text-base lg:text-[18px] btnClr rounded-full  text-center"
          >
            Start Trial
          </button>
        </div>
      </div>
      <div className="mt-[50px] lg:mb-[100px] flex flex-col lg:flex-row gap-[25px] lg:gap-[38px] font-roboto">
        <div className="w-[330px] mx-auto lg:w-[434px] rounded-[20px] lg:rounded-none py-[25px] px-[15px] lg:p-[50px] bg-[#151515]">
          <img
            className="w-[52px] lg:w-[72px] h-[46px] lg:h-[64px]"
            src={QuotationMark}
            alt="QuotationMark"
          />
          <h1 className="text-[14px] lg:text-[22px] mt-[32px] lg:mt-[25px] leading-[17px] lg:leading-[26px] font-normal overflow-hidden ">
            3D product visualisation and marketing events with Bigsurmoon had
            the highest rate of engagement ever. Additionally, our photography
            and other visual content creation has been lot more cost-effective
            and streamlined.
          </h1>
          <p className="mt-[32px] lg:mt-[25px] text-[14px] font-normal leading-4 opacity-75">
            Founder: Fala & Bebe
          </p>
        </div>
        <div className="w-[330px] mx-auto lg:w-[434px] rounded-[20px] lg:rounded-none py-[25px] px-[15px] lg:p-[50px] bg-[#151515]">
          <img
            src={QuotationMark}
            alt="QuotationMark"
            className="w-[52px] lg:w-[72px] h-[46px] lg:h-[64px]"
          />
          <h1 className="text-[14px] lg:text-[22px] mt-[32px] lg:mt-[25px] leading-[17px] lg:leading-[26px] font-normal overflow-hidden ">
            Custom requirements and suggestions are handled well by Bigsurmoon.
            Augmented reality experiences for travel and tourism industry helped
            us standout from the competition and create unforgettable campaigns.
            Kudos to the whole team!
          </h1>
          <p className="mt-[32px] lg:mt-[25px] text-[14px] font-normal leading-4 opacity-75">
            C.E.O: Traveluxis.in
          </p>
        </div>
      </div>
      <div className="lg:hidden md:hidden my-[50px]">
        <button
          onClick={() => navigate("/plan")}
          className="bg-gradient-to-r text-[12px] font-medium md:text-base lg:text-lg from-blue-600 to-blue-400 rounded-full p-3 lg:p-5 w-32 lg:h-16 lg:w-44 text-center"
        >
          Start Trial
        </button>
      </div>
    </div>
  );
};

export default EnterprisesCard;
