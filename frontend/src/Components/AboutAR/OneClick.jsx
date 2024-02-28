import React from "react";
import codeBg from "../../assets/Aboutar/codeBG.png";
import screenChair from "../../assets/Aboutar/ARScreenChair.png";
import { useNavigate } from "react-router-dom";
import "../style.css";
// import qr from "../../assets/Aboutar/QRcode.svg";
// import barBg from "../../assets/Aboutar/barCode.png";
// import noCodeImg1 from "../../assets/Aboutar/noCode/noCodeImg1.svg";
// import noCodeImg2 from "../../assets/Aboutar/noCode/noCodeimg2.svg";
// import noCodeBg from "../../assets/Aboutar/noCode/noCodeBG.png";

const OneClick = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* ON CLICK CONTENT */}
      <div className="mx-auto w-full relative overflow-hidden text-white font-roboto bg-[rgb(0,6,30)]">
        <div className="mt-[50px] lg:mt-[100px] mb-[40px] mx-[20px] lg:mx-auto flex justify-center flex-col">
          <div className="flex flex-col justify-center text-center ">
            <h4 className="text-[25px] lg:text-[50px] leading-[40px] lg:leading-[110px] font-bold ">
              One-Click Augmented Reality <br className="lg:hidden" /> for
              E-commerce
            </h4>
            <h4 className="mt-[15px] lg:mt-0 text-[14px] lg:text-[20px] font-normal leading-[21px] lg:leading-[30px] ">
              Simply scan the QR code with your camera and place the object in
              your space <br className="hidden lg:block" />
              or <br className="hidden lg:block" />
              just click the “A.R” icon in <br className="lg:hidden" /> mobile
              devices.
            </h4>
          </div>
          <div className="mt-[25px] lg:mt-[45px] flex justify-center items-center flex-row">
            <div className="">
              <button
                onClick={() => navigate("/plan")}
                className="h-[38px] lg:h-[61px] w-[115px] lg:w-[218px] text-center text-[12px] lg:text-[18px] font-medium rounded-full btnClr"
              >
                Start <span className="hidden lg:inline-block">Free </span>{" "}
                Trial
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MEET THE UNLIMATE CONTENT */}
      <div className="bg-black text-white flex flex-col lg:flex-row justify-center items-center gap-[60px] py-[50px] mx-auto">
        <div className="w-[350px] lg:w-[655px] flex flex-col order-last lg:order-first gap-[15px] lg:gap-[25px] items-start font-outfit ">
          <h4 className="text-[20px] leading-[30px] lg:text-[30px] lg:leading-[40px] font-bold">
            Meet the Ultimate E-commerce solution
          </h4>
          <h4 className="text-[16px] leading-[24px] lg:text-[24px] lg:leading-[36px] ">
            E-commerce relies on visual storytelling, but many businesses
            struggle to bridge the online-in-store gap, leading to customer
            uncertainty and cart abandonment.
          </h4>
          <h4 className="text-[14px] leading-[21px] lg:text-[20px] lg:leading-[30px] font-normal">
            Switch to Bigsurmoon’s game-changing solution. We bring products to
            life using augmented reality, allowing customers to virtually try
            before they buy. Conveying the true essence of a product to Boost
            confidence, reduce returns, and supercharge conversions with our
            immersive shopping experience.
          </h4>
          <h4 className="text-[14px] leading-[21px] lg:text-[20px] lg:leading-[30px] font-normal">
            No more leaving your audience uncertain about their purchases.
          </h4>
        </div>
        <div className="w-[250px] lg:w-[483px]">
          <img src={screenChair} alt="Meet the Ultimate E-commerce solution" />
        </div>
      </div>
      {/* NO CODE CONTENT */}
      <div className="relative w-full mx-auto overflow-hidden text-white font-outfit">
        <img
          src={codeBg}
          alt="No-Code, No App"
          className="absolute object-fill w-full h-full -z-10"
        />
        <div className="flex flex-col justify-center items-center my-[27px] lg:my-[100px]">
          <h4 className="text-[20px] lg:text-[50px] leading-[25px] lg:leading-[60px] font-bold ">
            No-Code, No App{" "}
          </h4>
          <h4 className="mt-[15px] lg:mt-[25px] text-[12px] lg:text-[20px] font-normal leading-[18px] lg:leading-[30px] px-7 lg:px-0 text-center">
            Integrations made easy with Bigsurmoon’s No-code, no-app{" "}
            <br className="lg:hidden" /> augmented reality.{" "}
            <br className="hidden lg:block" /> We eliminate the need of any app
            download or <br className="lg:hidden" /> plug-ins with our easy to
            use API.
          </h4>
        </div>
      </div>
    </>
  );
};

export default OneClick;
