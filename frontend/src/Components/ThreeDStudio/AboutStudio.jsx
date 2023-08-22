import React, { useState } from "react";
import bgphone from "../../assets/Background/3DstudioMobile1.png";
import sofarotating from "../../assets/3Dstudio/sofa1.png";
import ringpng from "../../assets/Aboutar/Logo (2) 2.png";
import bglarge from "../../assets/Aboutar/BG 1.png";
import { studitems } from "../../assets/data/data";
import pcimg from "../../assets/backgrounds/3D2.png";
import { useNavigate } from "react-router-dom";

const AboutStudio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const navigate = useNavigate();

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const threshold = 50;

    if (touchStartX - touchEndX > threshold) {
      // Swipe left, move to the next slide
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, studitems.length - 1)
      );
    } else if (touchEndX - touchStartX > threshold) {
      // Swipe right, move to the previous slide
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }

    // Reset touchStartX after handling the swipe
    setTouchStartX(null);
  };

  return (
    <>
      <div className=" mx-auto font-roboto   text-white relative overflow-hidden  lg:h-full  ">
        <img
          src={bgphone}
          className=" lg:hidden h-full lg:h-auto w-screen absolute -z-10 bg-black "
        />
        <img
          src={pcimg}
          className=" absolute w-screen h-auto  hidden lg:block -z-10 z md:h-auto bg-black "
        />

        <div className="pt-14 lg:hidden md:grid md:grid-cols-2">
          <div className="md:hidden">
            <img src={sofarotating} className=" md:hidden" />
          </div>

          <div className="">
            <div className="flex flex-col  font-outfit md:pt-20 justify-center items-center md:items-start font-medium ">
              <h3 className="text-4xl md:text-5xl  mb-2  md:pl-14 md:text-[38px]">
                3D Modelling
              </h3>
              <div className="flex gap-2 items-center  md:pl-14">
                <img src={ringpng} className="w-6 h-7 " />
                <h3 className="text-4xl md:text-5xl mb-2 md:text-[38px] ">
                  {" "}
                  Solutions
                </h3>
              </div>
              <h3 className="text-4xl md:pl-14  md:text-[38px] text-[#3090f7] mb-5">
                Delivered!{" "}
              </h3>
            </div>

            <button
              onClick={() => navigate("/support")}
              className="p-2 md:ml-12 mx-auto text-[12px] md:mx-0 bg-gradient-to-r from-blue-500  to-blue-400 text-center flex justify-center items-center rounded-full w-[125px] h-[30px] mb-10"
            >
              Get in Touch
            </button>
          </div>
          <div>
            <img src={sofarotating} className="hidden md:block " />
          </div>
        </div>
        <div className="lg:hidden md:mt-36 md:px-24 ">
          <div className="text-xl md:text-2xl text-center  mt-[-20px]  pt-10">
            <h3 className="text-2xl pb-3">
              About Bigsurmoon <span className="text-[#3090f7]">Studio</span>
            </h3>
            <h3 className="text-sm px-6 font-light leading-6 text-center pb-10">
              At Bigsurmoon, we understand the significance of captivating
              visuals in today's digital world. Our expert team of skilled 3D
              artists and designers harness the power of advanced technologies
              to transform your products into stunning, interactive 3D models.
              By leveraging the latest augmented reality and 360 visualization
              techniques, we create realistic representations that allow your
              customers to explore and interact with your products in ways never
              before possible.
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center lg:min-h-screen ">
          <div className="max-w-[1440px]  mx-auto ">
            <div className=" hidden xl:px-28 lg:grid lg:grid-cols-2 items-center justify-center  font-outfit font-medium  ">
              <div className="flex flex-col justify-center text-left  content-center items-center   ">
                <h3 className="text-4xl md:text-5xl lg:text-8xl   w-full mb-4">
                  3D Modelling
                </h3>
                <div className="flex gap-2  w-full   items-center">
                  <img
                    src={ringpng}
                    className="w-6 lg:w-20 xl:w-[88px] xl:h-[91px] h-7 lg:h-16"
                  />
                  <h3 className="text-4xl md:text-5xl w-full lg:text-8xl mb-4">
                    Solutions
                  </h3>
                </div>
                <h3 className="text-4xl md:text-5xl text-[#3090f7] w-full   lg:text-8xl">
                  Delivered!
                </h3>
              </div>

              <img src={sofarotating} className=" xl:ml-16 mt-[-100px]" />
            </div>

            <div className="xl:px-28 mt-[-50px]">
              <button
                onClick={() => navigate("/support")}
                className="p-2 hidden bg-gradient-to-r from-blue-500  to-blue-400 text-center text-lg justify-center lg:flex  items-center rounded-full w-[238px] h-[65px] "
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto font-roboto text-white hidden   lg:block ">
          <div className="text-xl md:text-2xl text-center    pt-10">
            <h3 className="text-[56px] pb-14">
              About Bigsurmoon <span className="text-[#3090f7]">Studio</span>
            </h3>

            <h3 className=" px-3 font-light pb-10 lg:px-20 xl:px-32  text-[26px] leading-[40px]   mx-auto">
              At Bigsurmoon, we understand the significance of captivating
              visuals in today's digital world. Our expert team of skilled 3D
              artists and designers harness the power of advanced technologies
              to transform your products into stunning, interactive 3D models.
              By leveraging the latest augmented reality and 360 visualization
              techniques, we create realistic representations that allow your
              customers to explore and interact with your products in ways never
              before possible.
            </h3>
          </div>
        </div>
        {/*  */}
        <h3 className="text-center hidden md:block font-outfit md:text-[30px] lg:tracking-[13px] md:pt-44 md:pb-40 mx-auto md:mx-0 tracking-[4px] w-2/4 md:w-full font-bold">
          WHAT’S SPECIAL ABOUT US
        </h3>
        <h3 className="text-center md:hidden font-outfit md:text-[30px] lg:tracking-[16px] font-medium text-[20px] md:pt-44 md:pb-40 mx-auto md:mx-0 tracking-[4px] w-3/4 md:w-full pt-10 pb-10 ">
          WHAT’S SPECIAL <br />
          ABOUT US
        </h3>

        <div className="md:hidden relative overflow-hidden bg-black font-outfit text-white">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {studitems.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={slide.img}
                  alt={`Slide ${index}`}
                  className=" pr-5   mx-auto"
                />
                <div className="bg-[#292929] rounded-3xl text-white w-[296px] mt-[-120px] h-[250px]  mx-auto">
                  <p className="text-center pt-24 mt-[-50px] text-lg font-medium pb-1 ">
                    {slide.title}
                  </p>
                  <p className="text-center mt-2 text-sm px-7 font-extralight">
                    {slide.t}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 mb-10">
            {studitems.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-700"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <div className=" hidden md:flex md:justify-center font-outfit md:items-start gap-3 lg:gap-8 md:pb-40">
          {studitems.map((m) => (
            <div key={m.id} className=" ">
              <img
                src={m.img}
                className="w-32 lg:w-60 xl:h-56 h-28  mx-auto "
              />
              <div className="w-44 xl:w-[296px] xl:h-[348px] mx-auto  h-44 rounded-2xl xl:rounded-3xl flex flex-col  justify-cente  bg-[#292929] mt-[-60px] xl:mt-[-120px]">
                <h2 className="text-[15px] xl:text-[24px] text-center  flex flex-col  justify-end w-24 xl:w-full mx-auto h-24 xl:pt-40  ">
                  {m.title}
                </h2>
                <h2 className=" text-[12px] xl:text-[17px]  text-center xl:pt-5 xl:px-4">
                  {m.t}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutStudio;
