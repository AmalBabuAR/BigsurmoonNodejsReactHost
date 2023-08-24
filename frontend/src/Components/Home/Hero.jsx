import React from "react";
import img from "../../assets/Background/BGMobileHome.png";
import arlogo from "../../assets/Arrows/Ar.png";
import vid from "../../assets/Home/Trailer.mp4";
import watch from "../../assets/Home/watch.jpeg";
import pcimg from "../../assets/backgrounds/homepc.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" mx-auto font-roboto  bg-cover bg-center text-white relative overflow-hidden lg:h-full  ">
        <img
          src={pcimg}
          alt="bgimg"
          className="hidden md:block absolute w-full -z-10 h-full md:h-auto bg-[#0E1035] "
        />
        <img
          src={img}
          alt="bgimg"
          className="md:hidden absolute w-full -z-10  bg-[#0E1035] "
        />

        <div className=" flex flex-col justify-center lg:hidden  text-center w-[320px] md:w-[500px]  mx-auto">
          <h1 className="text-6xl md:text-7xl mt-16 font-medium pt-14  mb-3">
            It’s time{" "}
          </h1>
          <h1 className="text-6xl md:text-7xl font-medium mb-3">
            to make the{" "}
          </h1>
          <div className="flex  justify-between md:justify-center md:gap-10 items-center">
            <img src={arlogo} alt="heroar" className="w-32" />
            <h1 className="text-6xl font-medium md:text-7xl">switch</h1>
          </div>
        </div>
        <div className="flex items-center justify-center lg:min-h-screen">
          <div className="max-w-[1440px]  mx-auto  xl:mt-36 ">
            <div className="  flex-col justify-center hidden  lg:flex  text-center   mx-auto">
              <span className="text-[139px] font-medium  tracking-tight leading-[75px]  ">
                It’s time to make{" "}
              </span>
              <div className="flex tracking-tighter  justify-between md:justify-center md:gap-10 items-center">
                <span className="text-[139px] font-medium "> the </span>
                <img src={arlogo} alt="heroar" className="ml-[-30px]" />
                <span className="text-[139px] font-medium ml-[-30px] ">
                  switch
                </span>
              </div>
            </div>

            <div className="w-[320px] lg:w-[550px] lg:text-2xl font-normal  text-sm mx-auto fo text-center lg:mt-5 lg:mb-6 mt-8 pb-8 ">
              <p>
                Personalised 3D and AR solutions for e-commerce <br /> that
                build brand loyalty and drive conversions
              </p>
            </div>

            <div className="flex justify-center items-center gap-5 lg:gap-10 pb-10">
              <button
                onClick={() => navigate("/support")}
                className="bg-gradient-to-r text-[12px] font-normal md:text-base lg:text-lg from-blue-600 to-blue-400 rounded-full p-3 lg:p-5 w-32 lg:h-16 lg:w-44 text-center"
              >
                Book a Demo
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="bg-gradient-to-r lg:text-lg text-[12px] font-normal md:text-base from-blue-600 to-blue-400 rounded-full p-3 w-32 lg:p-5 lg:w-44 lg:h-16 text-center"
              >
                Start Trial
              </button>
            </div>
          </div>
        </div>

        <>
          <div className="bg-bl">
            <div className="max-w-[1440px] mx-auto font-outfit  p-2 bg-bl text-white">
              <div className="flex justify-center items-center w-full">
                <video
                  className="max-w-[90vw] lg:max-w-[80vw] border-4 rounded-3xl"
                  src={vid}
                  controls
                />
              </div>
              <div className="flex flex-col justify-center items-center md:mt-24  align-middle text-center text-3xl lg:text-[76px]  lg:mt-44 mt-10 mb-10 md:mb-10">
                <h2>
                  All-in-one{" "}
                  <span className="text-[#49BCF8] weight font-extrabold ">
                    {" "}
                    Product
                  </span>{" "}
                  <br />{" "}
                  <div className="lg:mt-20">
                    <span className="text-[#49BCF8] font-extrabold">
                      Visualisation
                    </span>{" "}
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
                    <span className="text-[#49BCF8] font-extrabold text-lg">
                      50%
                    </span>
                    <br />
                    Total Cost <br /> Saving
                  </h3>
                  <h3>
                    <span className="text-[#49BCF8] font-extrabold text-lg">
                      80%
                    </span>
                    <br />
                    Less Return <br /> Rate
                  </h3>
                </div>
              </div>

              <div className="mb-32 hidden px-10 md:flex md:justify-around text-center font-bold  lg:hidden">
                <h3>
                  <span className="text-[#49BCF8] font- text-lg">{">"}3x</span>{" "}
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
                  <span className="text-[#49BCF8] font-extrabold text-lg">
                    50%
                  </span>
                  <br />
                  Total Cost <br /> Saving
                </h3>
                <h3>
                  <span className="text-[#49BCF8] font-extrabold text-lg">
                    80%
                  </span>
                  <br />
                  Less Return <br /> Rate
                </h3>
              </div>

              <div className="mb-16 hidden lg:flex  justify-around font-bold items-center text-4xl text-center mt-28">
                <h3>
                  <span className="text-[#49BCF8]  text-6xl">{">"}3x</span>{" "}
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
                  <span className="text-[#49BCF8] font-extrabold  text-6xl">
                    50%
                  </span>
                  <br />
                  Total Cost <br /> Saving
                </h3>
                <h3>
                  <span className="text-[#49BCF8] font-extrabold  text-6xl">
                    80%
                  </span>
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
                  <h3 className="mb-5 mt-5 font-bold lg:text-3xl lg:mt-24 lg:mb-20 tracking-[5px] lg:tracking-[16px]">
                    SEE IT IN ACTION!
                  </h3>
                  <div className="md:hidden lg:hidden">
                    <iframe
                      src="https://bigsurmoon.com/editor/ModelViewer/?id=64d9ffff6accdaec5267fbea"
                      className="border border-black rounded-xl"
                      width="325"
                      height="420"
                    ></iframe>
                  </div>
                  <div className="hidden md:block lg:hidden">
                    <iframe
                      src="https://bigsurmoon.com/editor/ModelViewer/?id=64d9ffff6accdaec5267fbea"
                      className="border border-black rounded-xl"
                      width="500"
                      height="450"
                    ></iframe>
                  </div>
                  <div className="hidden lg:block mb-10">
                    <iframe
                      src="https://bigsurmoon.com/editor/ModelViewer/?id=64d9ffff6accdaec5267fbea"
                      className="border border-black rounded-xl"
                      width="1200"
                      height="600"
                    ></iframe>
                  </div>
                  {/* <img
                    src={watch}
                    className="border border-black rounded-xl  lg:scale-125 lg:mt-14 lg:mb-24   "
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Hero;
