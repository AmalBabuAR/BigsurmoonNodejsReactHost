import React from "react";
import img from "../../assets/pricing/seamless.svg";

const PricingSeamless = () => {
  return (
    <div className="flex justify-center items-center flex-col h-[250px] lg:h-[300px] bg-[#0F1425] text-white font-outfit">
      <h1 className="text-[24px] lg:text-[30px] font-bold">
        Seamless Integrations
      </h1>
      <h1 className="mt-[10px] text-[14px] lg:flex hidden font-normal">
        Bigsurmoon integrates with all major e-commerce platforms
      </h1>
      <h1 className="mt-[10px] lg:hidden text-[12px] lg:text-[14px] font-normal text-center">
        Bigsurmoon integrates with all major <br /> e-commerce platforms
      </h1>
      <img className="mt-[26px] lg:mt-[50px]" src={img} alt="SeamlessIntegrations" />
    </div>
  );
};

export default PricingSeamless;
