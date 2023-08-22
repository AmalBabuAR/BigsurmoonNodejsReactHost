import React from "react";
import { mainFeatures } from "../../assets/data/data";
import box from "../../assets/Home/boximg.png";
import lights from "../../assets/Home/lightsimg.png";
import pc from "../../assets/Home/pcimg.png";

const MainFeatures = () => {
  return (
    <div className="bg-[#070911] w-auto ">
      <div className="bg-[#070911] max-w-[1440px] mx-auto p-4 text-white">
        <div className="md:hidden">
          {mainFeatures.map((m) => (
            <div
              key={m.id}
              className="md:grid md:grid-cols-2 md:gap-32 justify-center items-center"
            >
              <div className="flex justify-center mt-10  ">
                <img
                  src={m.img}
                  className={` ${m.id === 1 ? "px-2 " : "px-[65px]"}  `}
                />
              </div>
              <div>
                <h2 className="font-bold text-2xl  mt-10 mb-3">{m.title}</h2>
                <h2 className="mb-3 font-normal text-[14px] text-left">{m.desc}</h2>
                <h2 className="text-base mb-20 text-[#57BEF8]">{m.move}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden ">
          <div className="md:grid md:grid-cols-2 md:gap-32 mt-20   lg:justify-between items-center lg:px-10 ">
            <div className="flex justify-center mt-10 ">
              <img
                src={lights}
                className=" xl:w-[700px] xl:h-[380px] md:w-[350px] md:h-[199px] m  lg:pt-0   lg:mt-[-80px] "
              />
            </div>
            <div className=" flex flex-col justify-center mx-auto  ">
              <h2 className="font-bold text-3xl mt-10 mb-4 lg:w-full md:text-[25px] lg:text-5xl">
                3D Modelling
                <br />
                Studio
              </h2>
              <h2 className="mb-4 font-light lg:text-2xl">
                Doesn't have 3D Models? our experienced 3D team will help you
                model the files and upload in platform with the best quality and
                optimisation for much more loading experience and fluidity
              </h2>
              <h2 className="text-2xl mb-20 text-[#57BEF8]">
                Visit the Studio {">"}
              </h2>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-32 mt-36  justify-between items-center lg:px-10 ">
            <div className=" flex flex-col justify-center mx-auto ">
              <h2 className="font-bold text-3xl mt-10 mb-4 lg:w-full lg:text-5xl">
                Product <br />
                Configurator
              </h2>
              <h2 className="mb-4 font-light lg:text-2xl ">
                Customize and visualize your dream designs in real-time, from
                furniture to architectural spaces. Experience the power of
                personalization and bring your ideas to life with ease.
              </h2>
              <h2 className="text-2xl mb-20 text-[#57BEF8]">
                Explore customisation {">"}
              </h2>
            </div>
            <div className="flex justify-center mt-10 ">
              <img src={pc} className="xl:w-[450px] xl:h-[400px] " />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-32 mt-36  justify-between items-center lg:px-10 ">
            <div className="flex justify-center mt-10 ">
              <img
                src={box}
                className="xl:w-[340px] xl:h-[400px] mt-[-120px] "
              />
            </div>
            <div className=" flex flex-col justify-center mx-auto ">
              <h2 className="font-bold text-3xl mt-10 mb-4 lg:w-full lg:text-5xl">
                Release your <br />
                Product
              </h2>
              <h2 className="mb-4 font-light lg:text-2xl ">
                Unleash your product to the world with confidence. With the best
                quality lighting and shading, Bigsurmoon ensuring a viewer that
                captures attention and drives sales. Maximize your market impact
                and reach your target audience effectively.
              </h2>
              <h2 className="text-lg mb-44 text-[#57BEF8]"></h2>
            </div>
          </div>
        </div>

        <div className="hidden md:block ">
          <div className=" grid grid-cols-2 justify-between  pt-20 pb-24 px-4 lg:px-0 lg:pt-36 lg:pb-48">
            <img
              src={lights}
              className="w-[350px] h-[199px] mx-auto lg:w-[629px] lg:h-[355px]  "
            />

            <div className="flex flex-col justify-between px-6 py-5   xl:py-10    ">
              <div className="xl:w-[465px]  mx-auto  ">
                <h2 className="text-[25px] lg:text-[52px] font-outfit font-bold  lg:w-3/4 lg:leading-[50px] lg:mb-2 ">
                  3D Modelling Studio
                </h2>
                <h2 className=" text-[14px] lg:text-[23px] font-normal text-left lg:leading-[28px] lg:mb-2">
                  Doesn't have 3D Models? our experienced 3D team will help you
                  model the files and upload in platform with the best quality
                  and optimisation for much more loading experience and fluidity
                </h2>
                <h2 className="text-[#57BEF8] text-[16px] lg:text-[24px] font-medium">
                  Visit the Studio {">"}
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 justify-between   pb-24 px-4 lg:pb-36  ">
            <div className=" flex flex-col justify-between px-10 py-3   xl:py-14  ">
              <h2 className="text-[25px] font-outfit font-bold xl:w-2/4  lg:w-3/4  lg:text-[52px]  lg:leading-[50px] xl:mb-2   ">
                Product Configurator
              </h2>
              <h2 className=" font-normal text-[14px] lg:text-[23px] xl:w-[480px] lg:leading-[28px] ">
                Customize and visualize your dream designs in real-time, from
                furniture to architectural spaces. Experience the power of
                personalization and bring your ideas to life with ease.
              </h2>
              <h2 className="text-[#57BEF8] text-[16px] lg:text-[24px] font-">
                Explore customisation {">"}
              </h2>
            </div>
            <img
              src={pc}
              className="w-[269px] h-[216px]  mx-auto lg:w-[440px]  lg:h-[379px] "
            />
          </div>

          <div className="grid grid-cols-2 justify-center pb-14  items-cente px-4">
            <img
              src={box}
              className=" w-[300px] h-[229px] px-10  mx-auto lg:w-[451px] lg:h-[389px] "
            />
            <div className=" flex flex-col justify-between px-6 py-5  lg:py-20   ">
              <div className="xl:w-[495px]  mx-auto flex flex-col justify-around  ">
                <h2 className=" text-[25px] font-outfit font-bold   lg:w-3/4 lg:leading-[50px] lg:mb-2  lg:text-[52px]">
                  Release your Product
                </h2>
                <h2 className=" font-normal text-[14px] lg:text-[23px]  lg:leading-[28px] ">
                  Unleash your product to the world with confidence. With the
                  best quality lighting and shading, Bigsurmoon ensuring a
                  viewer that captures attention and drives sales. Maximize your
                  market impact and reach your target audience effectively.
                </h2>
                <h2 className=" text-[#57BEF8] text-[16px] lg:text-[24px] invisible  font-medium">
                  s
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
