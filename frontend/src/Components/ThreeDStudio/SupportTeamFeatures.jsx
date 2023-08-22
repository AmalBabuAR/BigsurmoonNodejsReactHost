import React from "react";
import { mainFeaturesconfig, supportitems } from "../../assets/data/data";
import box from "../../assets/Home/boximg.png";
import lights from "../../assets/Home/lightsimg.png";
import pc from "../../assets/Home/pcimg.png";

import m5 from "../../assets/Configurator/globe.png";
import m1 from "../../assets/Configurator/unstucksofa.gif";
import m4 from "../../assets/Configurator/piechart.png";
import m3 from "../../assets/Configurator/stucksofa.gif";
import mtbl from "../../assets/Configurator/tbc.gif";

import m2 from "../../assets/Configurator/table.gif";
import s1 from "../../assets/3Dstudio/img1.png";
import s2 from "../../assets/3Dstudio/img2.png";
import s3 from "../../assets/3Dstudio/img3.png";

const SupportTeamFeatures = () => {
  return (
    <div className="bg-[#070911]">
      <div className="bg-[#070911]  max-w-[1440px] mx-auto p-4 text-white">
        <div className="lg:hidden">
          {supportitems.map((m) => (
            <div
              key={m.id}
              className="md:hidden  md:grid-cols-2 md:gap-32 justify-center items-center"
            >
              <div className="flex justify-center  ">
                <img
                  src={m.img}
                  className={`${m.id === 2 || (m.id === 5 && "h-48")}  ${
                    m.id === 3 || m.id === 5 ? "h-40 px-20" : " h-48"
                  } px-10`}
                />
              </div>
              <div>
                <h2 className="font-bold text-2xl px-3 mt-10 mb-4">
                  {m.title}
                </h2>
                <h2 className="mb-4 text-sm px-3 pb-5 font-normal">
                  {m.desc}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden  md:block">
          <div className="md:grid md:grid-cols-2 md:gap-1   mt-12 lg:mt-52 lg:pb-36  justify-between items-center xl:px-10 px-10 ">
            <div className="flex justify-center mt-10  ">
              <img
                src={s1}
                className=" xl:w-[460px] w-[300px]  mt-[-40px] lg:w-full  xl:h-[250px]   "
              />
            </div>
            <div className="  flex  flex-col justify-center mx-auto pl-5 ">
              <h2 className="font-medium  font-outfit  hidden lg:block text-2xl xl:pl-10  mb-4 lg:w-full lg:text-5xl">
                Dedicated Support
                <br />
                Team{" "}
              </h2>
              <h2 className="font-medium lg:hidden   font-outfit text-2xl  mb-4 lg:w-full lg:text-5xl">
                Dedicated Support Team{" "}
              </h2>
              <h2 className="mb-4  text-[14px] font-light xl:pl-10 lg:text-2xl leading-5 xl:w-3/4 ">
                With our dedicated support team to meet all your queries
                throughout, we value your input, ensuring your vision is
                accurately reflected in the final deliverables.
              </h2>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:px-10 mt-32  lg:pb-36  justify-center items-center lg:px-28 ">
            <div className=" flex flex-col justify-center mx-auto ">
              <h2 className="font-medium hidden lg:flex font-outfit  text-3xl mt-10 mb-4 lg:w-full lg:text-5xl">
                Scalability and
                <br />
                Flexibility
              </h2>
              <h2 className="font-medium font-outfit lg:hidden text-2xl pt-4  mb-4 lg:w-full lg:text-5xl">
                Scalability and Flexibility
              </h2>
              <h2 className="mb-4 text-[14px] font-light  lg:text-2xl leading-5 xl:w-3/4 ">
                Whether it's a single 3D model or a large-scale project, we have
                the expertise to meet your needs. Our team efficiently handles
                projects of all sizes, ensuring quality and timely delivery.
              </h2>
            </div>
            <div className="flex justify-center pl-12  ">
              <img
                src={s2}
                className="xl:w-[300px]   w-[170px] h-[150px] lg:h-full lg:w-full  xl:h-[338px]  "
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 px- mt-32  lg:pb-20    justify-between items-center lg:px-10 mb-12 ">
            <div className="flex justify-center  ">
              <img
                src={s3}
                className=" xl:w-[416px] w-[250px] h-[161px] lg:w-full lg:h-full  xl:h-[300px]  "
              />
            </div>
            <div className=" flex flex-col justify-center mx-auto  px-5 ">
              <h2 className="font-medium hidden lg:block font-outfit xl:pl-10  text-3xl  mb-4 lg:w-full lg:text-5xl">
                Streamlined <br />
                Project <br /> Management{" "}
              </h2>
              <h2 className="font-medium lg:hidden font-outfit  text-2xl  mb-4 lg:w-full lg:text-5xl">
                Streamlined Project Management{" "}
              </h2>
              <h2 className="mb-4 text-[14px] xl:pl-10   font-light lg:text-2xl leading-5  xl:w-3/4 ">
                Our seamless project management solutions ensure efficient
                workflows from start to finish. With proven methodologies and
                expert coordination, we meet deadlines, maintain clear
                communication, and deliver exceptional results within budget.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTeamFeatures;
