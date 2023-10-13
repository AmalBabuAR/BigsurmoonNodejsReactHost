import React from "react";
import qr from "../../assets/Aboutar/QRcode.svg";
import codeBg from "../../assets/Aboutar/codeBG.png";
import barBg from "../../assets/Aboutar/barCode.png";
import screenChair from "../../assets/Aboutar/ARScreenChair.png";
import noCodeImg1 from "../../assets/Aboutar/noCode/noCodeImg1.svg";
import noCodeImg2 from "../../assets/Aboutar/noCode/noCodeimg2.svg";
import noCodeBg from "../../assets/Aboutar/noCode/noCodeBG.png";
import { useNavigate } from "react-router-dom";

const OneClick = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* ON CLICK CONTENT */}
      <div className="mx-auto w-full relative overflow-hidden text-white font-roboto bg-[rgb(0,6,30)]">
        <div className="mt-[50px] lg:mt-[100px] mb-[40px] mx-[20px] lg:mx-auto flex justify-center flex-col">
          <div className="flex justify-center flex-col text-center ">
            <h1 className="text-[25px] lg:text-[50px] leading-[40px] lg:leading-[110px] font-bold ">
              One-Click Augmented Reality <br className="lg:hidden" /> for
              E-commerce
            </h1>
            <h1 className="mt-[15px] lg:mt-0 text-[14px] lg:text-[20px] font-normal leading-[21px] lg:leading-[30px] ">
              Simply scan the QR code with your camera and place the object in
              your space <br className="hidden lg:block" />
              or <br className="hidden lg:block" />
              just click the “A.R” icon in <br className="lg:hidden" /> mobile
              devices.
            </h1>
          </div>
          <div className="mt-[25px] flex justify-center items-center flex-row gap-[300px] ">
            <div className="w-[75px] lg:w-[169px] h-[93px] lg:h-[210px]">
              <img src={qr} alt="" className="" />
            </div>
            <div className="">
              <button
               onClick={() => navigate("/pricing")}
              className="h-[38px] lg:h-[61px] w-[115px] lg:w-[218px] text-center text-[12px] lg:text-[18px] font-medium bg-gradient-to-r from-blue-500 to-blue-400 rounded-full">
                Start <span className="hidden lg:inline-block">Free </span>{" "}
                Trial
              </button>
            </div>
            <div className="w-[75px] h-[93px] lg:w-[169px] lg:h-[210px]">
              <img src={barBg} alt="" className=" " />
            </div>
          </div>
        </div>
      </div>
      {/* MEET THE UNLIMATE CONTENT */}
      <div className="bg-black text-white flex flex-col lg:flex-row justify-center items-center gap-[60px] py-[50px] mx-auto">
        <div className="w-[350px] lg:w-[655px] flex flex-col order-last lg:order-first gap-[15px] lg:gap-[25px] items-start font-outfit ">
          <h1 className="text-[20px] leading-[30px] lg:text-[30px] lg:leading-[40px] font-bold">
            Meet the Ultimate E-commerce solution
          </h1>
          <h1 className="text-[16px] leading-[24px] lg:text-[24px] lg:leading-[36px] ">
            E-commerce relies on visual storytelling, but many businesses
            struggle to bridge the online-in-store gap, leading to customer
            uncertainty and cart abandonment.
          </h1>
          <h1 className="text-[14px] leading-[21px] lg:text-[20px] lg:leading-[30px] font-normal">
            Switch to Bigsurmoon’s game-changing solution. We bring products to
            life using augmented reality, allowing customers to virtually try
            before they buy. Conveying the true essence of a product to Boost
            confidence, reduce returns, and supercharge conversions with our
            immersive shopping experience.
          </h1>
          <h1 className="text-[14px] leading-[21px] lg:text-[20px] lg:leading-[30px] font-normal">
            No more leaving your audience uncertain about their purchases.
          </h1>
        </div>
        <div className="w-[250px] lg:w-[483px]">
          <img src={screenChair} alt="" />
        </div>
      </div>
      {/* NO CODE CONTENT */}
      <div className="w-full mx-auto overflow-hidden relative text-white font-outfit">
        <img src={codeBg} alt="" className="w-full h-full object-fill -z-10 absolute" />
        <div className="flex flex-col justify-center items-center my-[27px] lg:my-[100px]">
          <h1 className="text-[20px] lg:text-[50px] leading-[25px] lg:leading-[60px] font-bold ">
            No-Code, No App{" "}
          </h1>
          <h1 className="mt-[15px] lg:mt-[25px] text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[30px] px-7 lg:px-0 text-center">
            Integrations made easy with Bigsurmoon’s No-code, no-app{" "}
            <br className="lg:hidden" /> augmented reality.{" "}
            <br className="hidden lg:block" /> We eliminate the need of any app
            download or <br className="lg:hidden" /> plug-ins with our easy to
            use API.
          </h1>
        </div>
      </div>
  
    </>
  );
};

export default OneClick;
