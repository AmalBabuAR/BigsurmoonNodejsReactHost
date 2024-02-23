import React, { useState } from "react";
import { pricingDetails } from "../../assets/data/data";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axiosInterceptors/axiosInstance";
import "../style.css";

const PricingCard = () => {
  const [yearStarter, setYearStarter] = useState(false);
  const [yearGrowth, setYearGrowth] = useState(false);
  const [yearElite, setYearElite] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMonthely = (id) => {
    if (id === 1) {
      setYearStarter(false);
    } else if (id === 2) {
      setYearGrowth(false);
    } else {
      setYearElite(false);
    }
  };
  const handleYearly = (id) => {
    if (id === 1) {
      setYearStarter(true);
    } else if (id === 2) {
      setYearGrowth(true);
    } else {
      setYearElite(true);
    }
  };

  function yearCheck(id) {
    if (id === 1 && yearStarter === true) {
      const year = { id: 1, year: true };
      return year;
    } else if (id === 2 && yearGrowth === true) {
      const year = { id: 2, year: true };
      return year;
    } else if (id === 3 && yearElite === true) {
      const year = { id: 3, year: true };
      return year;
    } else {
      return false;
    }
  }

  const handlePayButton = async (priceDetails) => {
    if (!localStorage.getItem("auth")) {
      navigate("/login", { state: { from: location } });
    } else {
      try {
        const checkyear = yearCheck(priceDetails.id);
        console.log(checkyear);
        console.log(priceDetails);
        const res = await axiosInstance.post(
          "/stripe/create-checkout-session",
          { priceDetails, checkyear }
        );
        console.log(res);
        if (res.data.success) {
          console.log("res in if cond of post stripe");
          window.location.href = res.data.url;
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <div className="mt-[76px] lg:mt-[100px] flex flex-col lg:flex-row w-[365px] lg:w-[1270px] mx-auto gap-[20px] lg:gap-[35px] ">
        {pricingDetails.map((p) => (
          <div className="bg-[#0F1425] rounded-[20px] lg:w-[400px]" key={p.id}>
            <div className="my-[40px] lg:my-[50px] mx-[28px] lg:mx-[46px]  font-outfit">
              <h2 className="text-[28px] lg:text-[30px] font-bold text-[#EFEFEF]">
                {p.title}
              </h2>
              <p className="mt-[5px] lg:mt-[10px] text-[12px] pr-[120px] lg:pr-0 lg:text-[12.8px] font-normal leading-[18px] lg:leading-5 text-[#F1F1F1]">
                {p.desc}
              </p>
              <div className="mt-[35px] lg:mt-[40px] flex flex-row">
                {yearStarter && p.id === 1 && (
                  <>
                    <button
                      onClick={() => handleMonthely(p.id)}
                      className="w-[172px] h-[41px] flex flex-col justify-center items-center  bg-[#1C1C1C] rounded-l-3xl"
                    >
                      <h4 className="text-[12px] font-bold">Pay Monthly</h4>
                      <h4 className="text-[10px] font-normal">
                        Commit monthly
                      </h4>
                    </button>
                    <button
                      onClick={() => handleYearly(p.id)}
                      className="w-[147px] h-[46px] flex flex-col justify-center items-center  bg-black ml-[-12px] rounded-3xl border-[#2482FF] border border-solid px-[9px] py-[12px]"
                    >
                      <h4 className="text-[12px] font-bold">
                        Pay Upfront{" "}
                        <span className="text-[#31A8FE]">SAVE 10%</span>
                      </h4>
                      <h4 className="text-[10px] font-normal">
                        Commit Annually
                      </h4>
                    </button>
                  </>
                )}
                {yearStarter === false && p.id === 1 && (
                  <>
                    <button
                      onClick={() => handleMonthely(p.id)}
                      className="w-[147px] h-[46px] flex flex-col justify-center items-center bg-black rounded-3xl mr-[-12px] z-10 border-[#2482FF] border border-solid px-[9px] py-[12px]"
                    >
                      <h4 className="text-[12px] font-bold">Pay Monthly</h4>
                      <h4 className="text-[10px] font-normal">
                        Commit monthly
                      </h4>
                    </button>
                    <button
                      onClick={() => handleYearly(p.id)}
                      className=" w-[172px] h-[41px] flex flex-col justify-center items-center bg-[#1C1C1C] rounded-r-3xl 
              "
                    >
                      <h4 className="text-[12px] font-bold">
                        Pay Upfront{" "}
                        <span className="text-[#31A8FE]">SAVE 10%</span>
                      </h4>
                      <h4 className="text-[10px] font-normal">
                        Commit Annually
                      </h4>
                    </button>
                  </>
                )}
                {yearGrowth && p.id === 2 && (
                  <>
                    <button
                      onClick={() => handleMonthely(p.id)}
                      className="w-[172px] h-[41px] flex flex-col justify-center items-center  bg-[#1C1C1C] rounded-l-3xl"
                    >
                      <h4 className="text-[12px] font-bold">Pay Monthly</h4>
                      <h4 className="text-[10px] font-normal">
                        Commit monthly
                      </h4>
                    </button>
                    <button
                      onClick={() => handleYearly(p.id)}
                      className="w-[147px] h-[46px] flex flex-col justify-center items-center  bg-black ml-[-12px] rounded-3xl border-[#2482FF] border border-solid px-[9px] py-[12px]"
                    >
                      <h4 className="text-[12px] font-bold">
                        Pay Upfront{" "}
                        <span className="text-[#31A8FE]">SAVE 10%</span>
                      </h4>
                      <h4 className="text-[10px] font-normal">
                        Commit Annually
                      </h4>
                    </button>
                  </>
                )}
                {yearGrowth === false && p.id === 2 && (
                  <>
                    <button
                      onClick={() => handleMonthely(p.id)}
                      className="w-[147px] h-[46px] flex flex-col justify-center items-center bg-black rounded-3xl mr-[-12px] z-10 border-[#2482FF] border border-solid px-[9px] py-[12px]"
                    >
                      <h4 className="text-[12px] font-bold">Pay Monthly</h4>
                      <h4 className="text-[10px] font-normal">
                        Commit monthly
                      </h4>
                    </button>
                    <button
                      onClick={() => handleYearly(p.id)}
                      className=" w-[172px] h-[41px]  flex flex-col justify-center items-center bg-[#1C1C1C]  rounded-r-3xl"
                    >
                      <h4 className="text-[12px] font-bold">
                        Pay Upfront{" "}
                        <span className="text-[#31A8FE]">SAVE 10%</span>
                      </h4>
                      <h4 className="text-[10px] font-normal">
                        Commit Annually
                      </h4>
                    </button>
                  </>
                )}
                {yearElite && p.id === 3 && (
                  <>
                    <button
                      onClick={() => handleMonthely(p.id)}
                      className="w-[172px] h-[41px] flex flex-col justify-center items-center  bg-[#1C1C1C] rounded-l-3xl"
                    >
                      <h4 className="text-[12px] font-bold">Pay Monthly</h4>
                      <h4 className="text-[10px] font-normal">
                        Commit monthly
                      </h4>
                    </button>
                    <button
                      onClick={() => handleYearly(p.id)}
                      className="w-[147px] h-[46px] flex flex-col justify-center items-center  bg-black ml-[-12px] rounded-3xl border-[#2482FF] border border-solid px-[9px] py-[12px] "
                    >
                      <h4 className="text-[12px] font-bold">
                        Pay Upfront{" "}
                        <span className="text-[#31A8FE]">SAVE 10%</span>
                      </h4>
                      <h4 className="text-[10px] font-normal">
                        Commit Annually
                      </h4>
                    </button>
                  </>
                )}
                {yearElite === false && p.id === 3 && (
                  <>
                    <button
                      onClick={() => handleMonthely(p.id)}
                      className="w-[147px] h-[46px] flex flex-col justify-center items-center bg-black rounded-3xl mr-[-12px] z-10 border-[#2482FF] border border-solid px-[9px] py-[12px]"
                    >
                      <h4 className="text-[12px] font-bold">Pay Monthly</h4>
                      <h4 className="text-[10px] font-normal">
                        Commit monthly
                      </h4>
                    </button>
                    <button
                      onClick={() => handleYearly(p.id)}
                      className=" w-[172px] h-[41px]  flex flex-col justify-center items-center bg-[#1C1C1C]  rounded-r-3xl 
            "
                    >
                      <h4 className="text-[12px] font-bold">
                        Pay Upfront{" "}
                        <span className="text-[#31A8FE]">SAVE 10%</span>
                      </h4>
                      <h4 className="text-[10px] font-normal">
                        Commit Annually
                      </h4>
                    </button>
                  </>
                )}
              </div>
              <div className="mt-[35px] lg:mt-[40px] text-[24px] lg:text-[30px] font-bold lg:font-medium">
                {yearStarter === false && p.id === 1 && (
                  <h4 className="pb-[31px]">{p.priceTitle}</h4>
                )}
                {yearStarter && p.id === 1 && <h4>{p.yearly.priceTitle}</h4>}
                {yearGrowth === false && p.id === 2 && (
                  <h4 className="pb-[31px]">{p.priceTitle}</h4>
                )}
                {yearGrowth && p.id === 2 && <h4>{p.yearly.priceTitle}</h4>}
                {yearElite === false && p.id === 3 && (
                  <h4 className="pb-[31px]">{p.priceTitle}</h4>
                )}
                {yearElite && p.id === 3 && <h4>{p.yearly.priceTitle}</h4>}
              </div>
              {yearStarter && p.id === 1 && (
                <h4>
                  <h4 className="mt-[5px] lg:mt-[10px] text-[14px] font-normal">
                    billed at{" "}
                    <span className="line-through">{p.priceDesc}</span> $
                    {p.yearly.price}
                  </h4>
                </h4>
              )}
              {yearGrowth && p.id === 2 && (
                <h4>
                  <h4 className="mt-[5px] lg:mt-[10px] text-[14px] font-normal">
                    billed at{" "}
                    <span className="line-through">{p.priceDesc}</span> $
                    {p.yearly.price}
                  </h4>
                </h4>
              )}
              {yearElite && p.id === 3 && (
                <h4>
                  <h4 className="mt-[5px] lg:mt-[10px] text-[14px] font-normal">
                    billed at{" "}
                    <span className="line-through">{p.priceDesc}</span> $
                    {p.yearly.price}
                  </h4>
                </h4>
              )}
              <h4 className="mt-[35px] lg:mt-[40px] text-[14px] font-medium">
                <span className="text-[20px] font-bold">{p.files}</span>
                &nbsp;
                {p.filesDetails}
              </h4>
              <h4 className="mt-[35px] lg:mt-[40px] text-[12px] lg:text-[14px] font-normal">
                Includes <span className="font-medium">{p.view}</span>
                &nbsp;views/month
              </h4>
              <h4 className="mt-[5px] lg:mt-[10px] font-normal text-[12px]">
                Additional views will be charged $0.01/view <br />
                Billed monthly.
              </h4>
              <div className="mt-[35px] lg:mt-[40px] flex justify-center">
                <button
                  onClick={() => handlePayButton(p)}
                  className="w-[307px] h-[48px] text-center rounded-[65px] text-[18px] font-roboto font-medium btnClr"
                >
                  Buy Now
                </button>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingCard;
