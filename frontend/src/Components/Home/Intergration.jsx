import React from "react";
import pic1 from "../../assets/Home/intergration/Google.png";
import pic2 from "../../assets/Home/intergration/Bigcommerce_Logo.png";
import pic3 from "../../assets/Home/intergration/Shopify_Logo.png";
import pic4 from "../../assets/Home/intergration/Woocommerce_Logo.png";
import picMob1 from "../../assets/Home/intergration/int1.svg";
import picMob2 from "../../assets/Home/intergration/int2.svg";
import picMob3 from "../../assets/Home/intergration/int3.svg";
import picMob4 from "../../assets/Home/intergration/int4.svg";
import { useNavigate } from "react-router-dom";

const Intergration = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-[-2px] lg:mt-0 bg-black text-white flex flex-col justify-center items-center">
      <div className="mt-[50px] lg:mt-[75px] font-outfit text-center">
        <h1 className="text-[24px] lg:text-[40px] font-bold lg:font-normal leading-[43px lg:leading-[77px]">
          Robust Integrations: <br className="lg:hidden" /> No Change In
          Existing Process
        </h1>
        <p className="mt-[15px] text-[14px] lg:text-[16px] font-normal leading-[20px]">
          Bigsurmoon also seamlessly integrates with:
        </p>
      </div>
      <div className="mx-auto hidden lg:flex">
        <img src={pic1} alt="" />
        <img src={pic2} alt="" />
        <img src={pic3} alt="" />
        <img src={pic4} alt="" />
      </div>
      <div className="lg:hidden my-[25px] flex flex-col mx-auto gap-[15px]">
        <div className="flex flex-row gap-[15px]">
          <div className="w-[146px] h-[25px]">
            <img src={picMob1} alt="" />
          </div>
          <div className="w-[146px] h-[25px]">
            <img src={picMob2} alt="" />
          </div>
        </div>
        <div className="flex flex-row gap-[15px] mt-[15px]">
          <div className="w-[146px] h-[25px]">
            <img src={picMob3} alt="" />
          </div>
          <div className="w-[146px] h-[25px]">
            <img src={picMob4} alt="" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex mb-[100px] mx-[72px] flex-row gap-[325px]">
        <div className="flex flex-col font-outfit">
          <h1 className="text-[25px] lg:text-[52px] font-bold leading-[24px] lg:leading-[51px]">
            Take the next step
          </h1>
          <p className="mt-[20px] text-[20px] font-normal leading-[24px] font-roboto">
            Click below to start your journey to enhanced shopping experience.
            <br /> Explore all the features and benefits with Our 7 day free
            trial.
          </p>
        </div>
        <div className="flex flex-row gap-[25px] items-end justify-center text-[18px] font-medium">
          <button
            onClick={() => navigate("/support")}
            className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-[175px] h-[62px] text-center"
          >
            Get A Demo
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-[175px] h-[62px] text-center"
          >
            {" "}
            Start Trial
          </button>
        </div>
      </div>
      <div className="lg:hidden mt-[50px] flex flex-col justify-center mx-[20px] font-outfit">
        <h1 className="text-[25px] leading-[24px] font-bold">
          Take the next step
        </h1>
        <p className="mt-[20px] text-[14px] leading-[17px] font-roboto">
          Click below to start your journey to enhanced shopping experience.
          Explore all the features and benefits with Our 7 day free trial.
        </p>

        <div
          onClick={() => navigate("/support")}
          className="mt-[25px] mb-[50px] flex gap-[21px] font-roboto font-medium text-xs"
        >
          <button className="w-[123px] h-[41px]  bg-gradient-to-r from-blue-500 to-blue-400 rounded-full">
            Get A Demo
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="w-[123px] h-[41px]  bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
          >
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intergration;
