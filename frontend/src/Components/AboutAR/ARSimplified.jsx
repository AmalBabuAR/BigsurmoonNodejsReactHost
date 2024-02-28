import React from "react";
import pcimg from "../../assets/backgrounds/ARBg.png";
import mobimg from "../../assets/backgrounds/ARBgMobile.png";

import chair from "../../assets/Aboutar/ARChair4.gif";
import chairMob from "../../assets/Aboutar/ChairMobile.gif";
import { useNavigate } from "react-router-dom";
import "../style.css";

const ARSimplified = () => {
  const navigate = useNavigate();
  return (
    <div className="relative z-0 h-full mx-auto overflow-hidden text-white bg-black">
      <img
        className="absolute hidden lg:block  bg-black -z-10 w-full h-screen mt-[80px]"
        src={pcimg}
        alt="Augmented Reality"
      />
      <img
        className="absolute w-full h-screen bg-black lg:hidden -z-10"
        src={mobimg}
        alt="Augmented Reality"
      />
      <div className="mt-[100px] lg:mt-[190px] mb-[50px] lg:mb-[100px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center gap-[25px]">
          <div className="order-last text-center font-outfit lg:order-first lg:text-left">
            <div className="text-[40px] lg:text-[80px] font-bold lg:font-medium leading-[51px] lg:leading-[102px]  lg:w-[669px] ">
              <h1 className="lg:hidden">Augmented Reality</h1>
              <h1 className="hidden lg:block">Augmented</h1>
              <h1 className="hidden lg:block">Reality</h1>
              <h2 className="text-[#07B5FF]">Simplified</h2>
            </div>
            <p className="mt-[5px] lg:mt-[25px] text-[14px] lg:text-[24px] leading-[21px] lg:leading-[37px] font-normal ">
              Try-before-you-buy for Unparalleled Engagement <br /> and Sales
              Growth
            </p>
            <div className="mt-[25px]">
              <button
                onClick={() => navigate("/support")}
                className="py-[15px] lg:py-[20px] px-auto text-center w-[125px] lg:w-[227px] text-[12px] lg:text-[18px] font-medium rounded-full font-roboto btnClr"
              >
                Get a Demo
              </button>
            </div>
          </div>
          <div className="">
            <div className="hidden lg:block w-[580px] px-9 h-[474px] ">
              <img src={chair} alt="One Step, Huge Leap Augmented Reality Powered Transformation" />
            </div>
            <div className="flex justify-center lg:hidden">
              <img src={chairMob} alt="One Step, Huge Leap Augmented Reality Powered Transformation" />
            </div>
          </div>
        </div>
        <div className="mt-[100px] flex justify-center mx-auto font-outfit flex-col">
          <h3 className="text-center text-[25px] lg:text-[40px] font-semibold lg:font-bold leading-[35px] lg:leading-[56px]">
            One Step, Huge Leap. <br /> Augmented Reality{" "}
            <br className="lg:hidden" /> Powered Transformation.
          </h3>
          <div className="mt-[25px] lg:mt-[100px] text-[14px] lg:text-[40px] font-bold leading-[18px] lg:leading-[50px] text-center flex flex-col items-center  lg:flex-row justify-center gap-y-[25px] lg:gap-[119px]">
            <div className="flex flex-row gap-[90px] lg:gap-[119px]">
              <div>
                <h4 className="text-[18px] lg:text-[55px] leading-[22px] lg:leading-[69px] text-[#07BDFF]">
                  {">3x"}
                </h4>
                <h4>
                  Sales <br />
                  Conversions
                </h4>
              </div>
              <div>
                <h4 className="text-[18px] lg:text-[55px] leading-[22px] lg:leading-[69px] text-[#07BDFF]">
                  200%
                </h4>
                <h4>
                  More <br />
                  Engagement
                </h4>
              </div>
            </div>
            <div className="flex flex-row gap-[60px] lg:gap-[119px]">
              <div>
                <h4 className="text-[18px] lg:text-[55px] leading-[22px] lg:leading-[69px] text-[#07BDFF]">
                  50%
                </h4>
                <h4>
                  Total Cost <br className="hidden lg:block" />
                  Saving
                </h4>
              </div>
              <div>
                <h4 className="text-[18px] lg:text-[55px] leading-[22px] lg:leading-[69px] text-[#07BDFF]">
                  80%
                </h4>
                <h4>
                  Less Return <br className="hidden lg:block" />
                  Rate
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARSimplified;
