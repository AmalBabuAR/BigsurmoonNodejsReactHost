import React from "react";
import { pricingSubFeatures } from "../../assets/data/data";
import "../style.css";

const PricingSubFeature = () => {
  return (
    <>
      <div className="mt-[-2px] lg:mt-0 bg-black flex justify-center font-outfit mx-auto text-white ">
        <div className="lg:my-[100px] my-[76px]">
          <h3 className="text-[24px] lg:text-[45px] text-center font-bold">
            We’re here for you
          </h3>
          <div className="mt-[25px] lg:mt-[75px] flex justify-center mx-auto gap-[30px] lg:gap-[40px]">
            {pricingSubFeatures.map((data) => (
              <div className="w-[100px] lg:w-[300px]" key={data.id}>
                <img src={data.img} alt={data.imgAlt} />
                <h4 className="mt-[25px] text-[14px] lg:text-[16px] leading-[14px] lg:leading-[24px] font-bold text-center ">
                  {data.title}
                </h4>
                <p className="mt-[10px] text-[12px] lg:text-[14px] leading-[18px] lg:leading-[21px] font-normal  text-center ">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pb-[100px] hidden lg:flex justify-evenly bg-black ">
        <h5 className="text-[30px] mr-[283px] leading-[39px] font-bold tracking-wider text-[#CDCDCD] font-outfit ">
          Still have questions about how Bigsurmoon can <br /> help your
          business?{" "}
        </h5>
        <button className="w-[181px] h-[48px] text-white font-roboto text-[12px] font-medium tracking-wider rounded-full btnClr ">
          Talk to Experts
        </button>
      </div>
      <div className="mt-[-2px] lg:mt-0 bg-black lg:hidden w-full pb-[76px]">
        <div className="w-[343px] mx-auto flex flex-col">
          <h5 className="text-[30px] leading-[39px] font-semibold tracking-wide text-[#CDCDCD] font-outfit ">
            Still have questions about how Bigsurmoon can help your business?{" "}
          </h5>
          <button className="w-[125px] h-[30px] mt-[25px] text-white font-roboto text-[12px] font-medium tracking-wider rounded-full btnClr ">
            Talk to Experts
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingSubFeature;
