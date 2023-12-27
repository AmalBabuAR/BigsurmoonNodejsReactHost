import React from "react";
import bg from "../../assets/Home/WhyBigsurmoon.png";
import mobBg from "../../assets/Home/WhyBigsurmoonMobBG.png";
import { whyBigsurmoonCard } from "../../assets/data/data";
import "../style.css";

const WhyBigsurmoonCard = () => {
  return (
    <div className="mx-auto bg-black bg-cover h-full bg-center text-white relative overflow-hidden mt-[-2px] lg:mt-0">
      <img
        src={bg}
        alt="bgimg"
        className="hidden lg:block absolute w-full z-10  md:h-auto"
      />
      <img
        src={mobBg}
        alt="bgimg"
        className="lg:hidden absolute bottom-[-3px] w-full z-10  h-full"
      />
      <div className="flex mt-[50px] lg:mt-[82px] mb-[77px] flex-col items-center justify-center font-roboto">
        <div className="">
          <h1 className="text-[30px] lg:text-[42px] leading-[29px] lg:leading-[41px] font-bold ">
            Why Bigsurmoon?
          </h1>
        </div>
        <div className="mt-[50px]  gap-[50px] grid grid-cols-1 lg:grid-cols-2 ">
          {whyBigsurmoonCard.map((c) => (
            <div
              className="flex flex-col w-[350px] lg:w-[466px] py-[30px] pl-[25px] pr-[25px] lg:pr-[120px] border border-solid border-[#4767D8] rounded-[20px] shadow-2xl whyBigsurmoonCard"
              key={c.id}
            >
              <img className="w-[57px] h-[56px]" src={c.img} alt={c.title} />
              <h1 className="mt-[20px] text-[20px] lg:text-[26px] font-semibold leading-[19px] lg:leading-[25px]">
                {c.title}
              </h1>
              <p className="mt-[20px] text-[14px] lg:text-[16px] font-normal leading-[20px]">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyBigsurmoonCard;
