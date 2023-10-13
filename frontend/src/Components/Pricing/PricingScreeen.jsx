import React, { useState } from "react";
import lap from "../../assets/pricing/BGDesktop.png";
import mob from "../../assets/pricing/BGMobile.png";
import PricingCard from "./PricingCard";
import EnterPriseForm from "./EnterPriseForm";

const PricingScreeen = () => {
  const [priceFormView, setPriceFormView] = useState(true);
  return (
    <>
      <div className="mx-auto font-roboto bg-black  bg-cover bg-center text-white relative overflow-hidden lg:h-full z-0">
        <img src={mob} className="md:flex bg-black w-full absolute -z-10" />
        <img
          src={lap}
          className="hidden md:flex bg-black w-full absolute -z-10"
        />
        <div className="mt-[133px] lg:mt-44 mb-[104px]">
          <div className="">
            <h1 className="pt-1 flex justify-center text-[20px] lg:text-[45px]  font-outfit font-bold">
              Grow better with the right plan
            </h1>
            <h1 className="mt-[6px] lg:mt-5 flex justify-center text-[12px] lg:text-[16px] font-outfit font-normal leading-[16px] lg:leading-[21px]">
              Pay for what you need (when you need it)
            </h1>
          </div>
          <div className="mt-[76px] lg:mt-[100px] flex justify-center text-[12px] lg:text-[16px] font-outfit  tracking-wide">
            <button
              onClick={() => setPriceFormView(!priceFormView)}
              className={`${
                priceFormView
                  ? "bg-[#0F1425] font-semibold text-[#5189E8]"
                  : "font-normal"
              } border w-[165px] lg:w-[183px] h-[50px] flex justify-center items-center`}
            >
              Professional
            </button>
            <button
              onClick={() => setPriceFormView(!priceFormView)}
              className={`${
                priceFormView
                  ? "font-normal"
                  : "bg-[#0F1425] font-semibold text-[#5189E8]"
              } border w-[165px] lg:w-[183px] h-[50px] flex justify-center items-center`}
            >
              Enterprise
            </button>
          </div>

          {priceFormView ? (
            <>
              <div className="flex justify-center mt-[31px]">
                <h1 className="text-center hidden lg:flex lg:text-[16px] font-outfit font-normal leading-5">
                  Our affordable pricing scales with your business. We don’t
                  lock our features <br /> behind expensive plans. You get all
                  the features on every plan.
                </h1>
                <h1 className="text-center text-[12px] lg:hidden font-outfit font-normal leading-5">
                  Our affordable pricing scales with your business. We don’t
                  <br />
                  lock our features behind expensive plans. You get all <br />
                  the features on every plan.
                </h1>
              </div>
              <PricingCard />
            </>
          ) : (
            <>
              <div className="flex justify-center mt-[31px]">
                <h1 className="text-center text-[12px] lg:text-[16px] font-outfit font-normal leading-5">
                  Custom solutions tailored for businesses. <br /> Talk to one
                  of our experts.
                </h1>
              </div>
              <EnterPriseForm />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingScreeen;
