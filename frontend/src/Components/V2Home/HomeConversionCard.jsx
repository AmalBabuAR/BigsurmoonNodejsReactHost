import React from "react";
import { ovel } from "../../assets/V2Home";
import "../style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeConversionCard = () => {
  const [divOne, setDivOne] = React.useState(false);

  const [divTwo, setDivTwo] = React.useState(false);

  const handleEnterDivOne = () => {
    setDivOne(true);
  };

  const handleLeaveDivOne = () => {
    setDivOne(false);
  };

  const handleEnterDivTwo = () => {
    setDivTwo(true);
  };

  const handleLeaveDivTwo = () => {
    setDivTwo(false);
  };

  return (
    <>
      {" "}
      <div className="w-full h-auto font-roboto text-white bg-black flex flex-col xl:flex-row justify-center items-center gap-[25px] xl:gap-[100px] mx-auto p-[25px] xl:p-[100px] ">
        <div
          onTouchStart={handleEnterDivOne}
          onMouseEnter={handleEnterDivOne}
          onTouchEnd={handleLeaveDivOne}
          onMouseLeave={handleLeaveDivOne}
          className={`${
            divOne && "homeConversionCard"
          } flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] xl:w-[574px] h-[419px] xl:h-[500px]`}
        >
          <img
            src={ovel}
            alt=""
            className="w-[100px] h-[98.729px] rounded-[100px]"
          />
          <p className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
            Founder: Fala & Bebe
          </p>
          {divOne ? (
            <h1 className="xl:text-[22px] text-[16px] leading-[20px] xl:leading-[33px] tracking-[0.88px] self-stretch">
              3D product visualisation and marketing events with Bigsurmoon had
              the highest rate of engagement ever. Additionally, our photography
              and other visual content creation has been lot more cost-effective
              and streamlined.
            </h1>
          ) : (
            <>
              <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col xl:h-[124px]">
                200%
                <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
                  Engagement rate
                </span>
              </h1>
              <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col xl:h-[124px]">
                {">2X"}
                <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
                  Conversion
                </span>
              </h1>
            </>
          )}
        </div>
        <div
          onTouchStart={handleEnterDivTwo}
          onMouseEnter={handleEnterDivTwo}
          onTouchEnd={handleLeaveDivTwo}
          onMouseLeave={handleLeaveDivTwo}
          className={`${
            divTwo && "homeConversionCard"
          } flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] xl:w-[574px] h-[419px] xl:h-[500px]`}
        >
          <img
            src={ovel}
            alt=""
            className="w-[100px] h-[98.729px] rounded-[100px]"
          />
          <p className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
            C.E.O: Traveluxis.in
          </p>
          {divTwo ? (
            <h1 className="text-[16px] xl:text-[22px] leading-[20px] xl:leading-[33px] tracking-[0.88px] self-stretch">
              Custom requirements and suggestions are handled well by
              Bigsurmoon. Augmented reality experiences for travel and tourism
              industry helped us standout from the competition and create
              unforgettable campaigns. Kudos to the whole team!
            </h1>
          ) : (
            <>
              <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col  xl:h-[124px]">
                160%
                <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
                  Engagement rate
                </span>
              </h1>
              <h1 className="text-[35px] xl:text-[60px] leading-[43.75px] xl:leading-[72px] tracking-[1.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col  xl:h-[124px]">
                {">3X"}
                <span className="text-[26px] xl:text-[40px] leading-[43.75px] xl:leading-[72px] tracking-[1.04px] xl:tracking-[1.6px] font-semibold text-white">
                  Conversion
                </span>
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeConversionCard;
