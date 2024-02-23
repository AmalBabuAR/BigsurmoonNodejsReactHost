import React from "react";
import { ovelOne, ovelTwo } from "../../assets/V2Home";
import "../style.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeConversionCard = () => {
  const [fade, setFade] = React.useState(false);

  const [fadeTwo, setFadeTwo] = React.useState(false);

  const [divOne, setDivOne] = React.useState(false);

  const [divTwo, setDivTwo] = React.useState(false);

  const handleEnterDivOne = () => {
    setDivOne(true);
    setFade(true);
  };

  const handleLeaveDivOne = () => {
    setDivOne(false);
    setFade(false);
  };

  const handleEnterDivTwo = () => {
    setDivTwo(true);
    setFadeTwo(true);
  };

  const handleLeaveDivTwo = () => {
    setDivTwo(false);
    setFadeTwo(false);
  };

  return (
    <>
      {" "}
      <div className="w-full h-auto font-roboto text-white bg-black flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-[25px] lg:gap-[64px] xl:gap-[100px] mx-auto px-[25px] py-[50px] lg:px-[50px] lg:py-[150px] xl:p-[100px] ">
        <div
          onTouchStart={handleEnterDivOne}
          onMouseEnter={handleEnterDivOne}
          onTouchEnd={handleLeaveDivOne}
          onMouseLeave={handleLeaveDivOne}
          className={`${divOne && "homeConversionCard"} ${
            fade && "homeConversionCardFade"
          } flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] lg:p-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] lg:w-[500px] xl:w-[574px] h-[419px] lg:h-[510px] xl:h-[510px]`}
        >
          <img
            src={ovelOne}
            alt="Fala"
            className="w-[100px] h-[98.729px] rounded-[100px] border border-solid border-[#fff]"
          />
          <h3 className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
            Fala & Bebe
          </h3>
          {divOne ? (
            <h4 className="xl:text-[22px] lg:text-[22px] text-[16px] leading-[20px] lg:leading-[33px] xl:leading-[33px] tracking-[0.88px] self-stretch">
              3D product visualisation and marketing events with Bigsurmoon had
              the highest rate of engagement ever. Additionally, our photography
              and other visual content creation has been lot more cost-effective
              and streamlined.
            </h4>
          ) : (
            <>
              <h4 className="text-[35px] lg:text-[60px] xl:text-[60px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.4px] lg:tracking-[2.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col lg:h-[124px] xl:h-[124px]">
                200%
                <span className="text-[26px] lg:text-[40px] xl:text-[40px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.04px] lg:tracking-[1.6px] xl:tracking-[1.6px] font-semibold text-white">
                  Engagement rate
                </span>
              </h4>
              <h4 className="text-[35px] lg:text-[60px] xl:text-[60px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.4px] lg:tracking-[2.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col lg:h-[124px] xl:h-[124px]">
                {">2X"}
                <span className="text-[26px] lg:text-[40px] xl:text-[40px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.04px] lg:tracking-[1.6px] xl:tracking-[1.6px] font-semibold text-white">
                  Conversion
                </span>
              </h4>
            </>
          )}
        </div>
        <div
          onTouchStart={handleEnterDivTwo}
          onMouseEnter={handleEnterDivTwo}
          onTouchEnd={handleLeaveDivTwo}
          onMouseLeave={handleLeaveDivTwo}
          className={`${divTwo && "homeConversionCard"} ${
            fadeTwo && "homeConversionCardFade"
          } flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] lg:p-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] lg:w-[500px] xl:w-[574px] h-[419px] lg:h-[510px] xl:h-[510px]`}
        >
          <img
            src={ovelTwo}
            alt="Travelluxis"
            className="w-[100px] h-[98.729px] rounded-[100px] border border-solid border-[#fff]"
          />
          <h3 className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
            Travelluxis.in
          </h3>
          {divTwo ? (
            <h4 className="xl:text-[22px] lg:text-[22px] text-[16px] leading-[20px] lg:leading-[33px] xl:leading-[33px] tracking-[0.88px] self-stretch">
              Custom requirements and suggestions are handled well by
              Bigsurmoon. Augmented reality experiences for travel and tourism
              industry helped us standout from the competition and create
              unforgettable campaigns. Kudos to the whole team!
            </h4>
          ) : (
            <>
              <h4 className="text-[35px] lg:text-[60px] xl:text-[60px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.4px] lg:tracking-[2.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col lg:h-[124px] xl:h-[124px]">
                160%
                <span className="text-[26px] lg:text-[40px] xl:text-[40px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.04px] lg:tracking-[1.6px] xl:tracking-[1.6px] font-semibold text-white">
                  Engagement rate
                </span>
              </h4>
              <h4 className="text-[35px] lg:text-[60px] xl:text-[60px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.4px] lg:tracking-[2.4px] xl:tracking-[2.4px] font-semibold text-[#07BDFF] flex flex-col lg:h-[124px] xl:h-[124px]">
                {">3X"}
                <span className="text-[26px] lg:text-[40px] xl:text-[40px] leading-[43.75px] lg:leading-[72px] xl:leading-[72px] tracking-[1.04px] lg:tracking-[1.6px] xl:tracking-[1.6px] font-semibold text-white">
                  Conversion
                </span>
              </h4>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeConversionCard;
