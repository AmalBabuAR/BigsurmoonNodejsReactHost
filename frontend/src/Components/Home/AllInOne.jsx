import React from "react";
import tabimg from "../../assets/Home/2.png";
import watch from "../../assets/Home/watch.jpeg";

const AllInOne = () => {
  return (
    <>
    <div className="bg-black">

      <div className="max-w-[1440px] mx-auto font-outfit  p-2 bg-black text-white   ">
        <div className="flex items-center justify-center md:px-10 md:mt-16 lg:px-0">
          <img src={tabimg} />
        </div>
        <div className="flex flex-col justify-center items-center md:mt-24  align-middle text-center text-3xl lg:text-[76px]  lg:mt-44 mt-10 mb-16 md:mb-10">
          <h2>
            All-in-one{" "}
            <span className="text-[#49BCF8] weight font-extrabold "> Product</span>{" "}
            <br />{" "}
            <div className="lg:mt-20">

            <span className="text-[#49BCF8] font-extrabold">Visualisation</span>{" "}
            Solution
            </div>

          </h2>
        </div>
        <div className="mb-16 md:hidden  font-bold">
          <div className="flex justify-around text-center mb-8 text-sm">
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">
                {">"}3x
              </span>{" "}
              <br />
              Sales <br /> Conversions
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">
                200%
              </span>
              <br />
              More <br /> Engagement
            </h3>
          </div>
          <div className="flex justify-around text-center text-sm">
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">50%</span>
              <br />
              Total Cost <br /> Saving
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">80%</span>
              <br />
              Less Return <br /> Rate
            </h3>
          </div>
        </div>

        <div className="mb-32 hidden px-10 md:flex md:justify-around text-center font-bold  lg:hidden">
            <h3>
              <span className="text-[#49BCF8] font- text-lg">
                {">"}3x
              </span>{" "}
              <br />
              Sales <br /> Conversions
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">
                200%
              </span>
              <br />
              More <br /> Engagement
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">50%</span>
              <br />
              Total Cost <br /> Saving
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold text-lg">80%</span>
              <br />
              Less Return <br /> Rate
            </h3>
        </div>

        <div className="mb-16 hidden lg:flex  justify-around font-bold items-center text-4xl text-center mt-28">
            <h3>
              <span className="text-[#49BCF8]  text-6xl">
                {">"}3x
              </span>{" "}
              <br />
              Sales <br /> Conversions
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold  text-6xl">
                200%
              </span>
              <br />
              More <br /> Engagement
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold  text-6xl">50%</span>
              <br />
              Total Cost <br /> Saving
            </h3>
            <h3>
              <span className="text-[#49BCF8] font-extrabold  text-6xl">80%</span>
              <br />
              Less Return <br /> Rate
            </h3>
          </div>
        </div>
        </div>
<div className="bg-white">

      <div className="max-w-[1440px] font-outfit font-bold mx-auto md:pt-16 md:pb-20 lg:pb-0 lg:pt-0  p-2 bg-white text-black   ">
        <div className="bg-white">
          <div className="px-10 md:px-52 lg:px-0 pb-5 flex flex-col justify-center items-center overflow-hidden ">
          <h3 className="mb-5 mt-5 font-bold lg:text-3xl lg:mt-24 lg:mb-32 lg:tracking-[16px]">S IT IN ACTION!</h3>
            <img src={watch} className="border border-black rounded-xl  lg:scale-125 lg:mt-14 lg:mb-24   " />
          </div>
        </div>
      </div>
      </div>

    </>
  );
};

export default AllInOne;
