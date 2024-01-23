import React from "react";
import { homeVideo } from "../../assets/V2Home";
import "../style.css";
import { useNavigate } from "react-router-dom";

const HomeScreenOne = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black text-white font-roboto h-auto lg:h-auto xl:h-auto mx-auto overflow-hidden">
      <div className="min-w-[320px] max-w-[450px] lg:max-w-[1280px] xl:max-w-[1920px] mx-auto  mt-[60px] lg:mt-0 xl:mt-0 relative">
        <video
          autoPlay
          muted
          preload="auto"
          playsInline
          loop
          className=" xl:hidden lg:hidden w-full h-auto"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="videot hidden xl:block lg:block"
          id="videot"
          height="100%"
          preload="auto"
        >
          <source src={homeVideo} type="video/mp4" />
          <object data={homeVideo} height="1080">
            <param name="wmode" value="transparent" />
            <param name="autoplay" value="true" />
            <param name="loop" value="true" />
          </object>
        </video>
        <div className="absolute top-0 left-0 right-0 mx-auto">
          <div className="flex flex-col justify-center items-center homeCreateVirtual py-[25px] lg:py-0 xl:py-0 text-center gap-[15px] lg:gap-[25px] xl:gap-[25px] lg:mt-[90px]">
            <h1 className="text-[26px] lg:text-[100px] xl:text-[100px] leading-[26px] lg:leading-[100px] xl:leading-[100px] font-bold blogTextShadow">
              Create Virtual <br className="lg:block xl:block hidden" />
              Experiences
            </h1>
            <p className="text-[16px] lg:text-[24px] xl:text-[24px] leading-[20px] lg:leading-[36px] xl:leading-[36px] flex flex-col homeHead">
              Visualisation solutions built for businesses
              <span className="font-extrabold">
                No downloads, no-code: all in the browser.
              </span>
            </p>
            <button
              onClick={() => navigate("/plan")}
              className="h-[27px] lg:h-[40px] xl:h-[61px] flex justify-center items-center text-[14px] lg:text-[18px] xl:text-[18px] tracking-[0.56px] lg:tracking-[0px] xl:tracking-[0px] font-medium px-[15px] lg:px-[25px] xl:px-[50px] py-auto  btnClr rounded-[20px] lg:rounded-[50px] xl:rounded-[50px]"
            >
              Get started for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenOne;
