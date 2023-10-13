import React, { useState } from "react";
import s1 from "../../assets/Home/icons sm/Icon.svg";
import s2 from "../../assets/Home/icons sm/Icon (1).svg";
import s3 from "../../assets/Home/icons sm/Icon (2).svg";
import s4 from "../../assets/Home/icons sm/Icon (3).svg";
import s5 from "../../assets/Home/icons sm/Icon (4).svg";
import s6 from "../../assets/Home/icons sm/Icon (5).svg";
import s7 from "../../assets/Home/icons sm/Icon (6).svg";
import s8 from "../../assets/Home/icons sm/Icon (7).svg";
import s9 from "../../assets/Home/icons sm/Icon (8).svg";

import w1 from "../../assets/Home/icons lg/Icon.svg";
import w2 from "../../assets/Home/icons lg/Icon (1).svg";
import w3 from "../../assets/Home/icons lg/Icon (2).svg";
import w4 from "../../assets/Home/icons lg/Icon (3).svg";
import w5 from "../../assets/Home/icons lg/Icon (4).svg";
import w6 from "../../assets/Home/icons lg/Icon (5).svg";
import w7 from "../../assets/Home/icons lg/Icon (6).svg";
import w8 from "../../assets/Home/icons lg/Icon (7).svg";
import w9 from "../../assets/Home/icons lg/Icon (8).svg";
import arrowlogin from "../../assets/Arrows/Login shape 1.svg";
import { useNavigate } from "react-router-dom";

const SubFeatures = () => {
  const slides = [
    {
      imageSrc: s1,
      text: "Industry-Leading Optimization",
      p: "Leading 3D model optimization maximizes performance, reduces file size, and improves efficiency for enhanced user experiences.",
    },
    {
      imageSrc: s2,
      text: "End-End Security",
      p: "End-to-end security ensures comprehensive protection across all stages, from data creation to transmission and storage.",
    },

    {
      imageSrc: s3,
      text: "Assisted Support",
      p: "Assisted support provides guidance and assistance to users, improving their experience and resolving issues effectively.",
    },
    {
      imageSrc: s4,
      text: "Fast Turnaround Times",
      p: "Fast turn-around times guarantee quick completion of tasks or services, minimizing delays and maximizing efficiency.",
    },
    {
      imageSrc: s5,
      text: "Custom Solutions",
      p: "Custom solutions provide tailored and personalized approaches to address specific needs and requirements of individuals or businesses.",
    },
    {
      imageSrc: s6,
      text: "Multiple Platorm Support",
      p: "Multiple platform support ensures compatibility and functionality across various operating systems and devices for seamless user experiences.",
    },
    {
      imageSrc: s7,
      text: "3D Catalog",
      p: "A 3D catalog offers a visual representation of products or items, allowing interactive exploration and detailed showcasing.",
    },
    {
      imageSrc: s8,
      text: "Payments made easy",
      p: "Payments made easy simplifies the process of financial transactions, enabling convenient and hassle-free payment experiences for users.",
    },
    {
      imageSrc: s9,
      text: "Animated 3D Content",
      p: "Animated 3D contents bring static models to life through dynamic movements, enhancing engagement and visual storytelling.",
    },
  ];

  const slideslg = [
    {
      imageSrc: w1,
      text: "Industry-Leading Optimization",
      p: "Leading 3D model optimization maximizes performance, reduces file size, and improves efficiency for enhanced user experiences.",
    },
    {
      imageSrc: w2,
      text: "End-End Security",
      p: "End-to-end security ensures comprehensive protection across all stages, from data creation to transmission and storage.",
    },

    {
      imageSrc: w3,
      text: "Assisted Support",
      p: "Assisted support provides guidance and assistance to users, improving their experience and resolving issues effectively.",
    },
    {
      imageSrc: w4,
      text: "Fast Turnaround Times",
      p: "Fast turn-around times guarantee quick completion of tasks or services, minimizing delays and maximizing efficiency.",
    },
    {
      imageSrc: w5,
      text: "Custom Solutions",
      p: "Custom solutions provide tailored and personalized approaches to address specific needs and requirements of individuals or businesses.",
    },
    {
      imageSrc: w6,
      text: "Multiple Platorm Support",
      p: "Multiple platform support ensures compatibility and functionality across various operating systems and devices for seamless user experiences.",
    },
    {
      imageSrc: w7,
      text: "3D Catalog",
      p: "A 3D catalog offers a visual representation of products or items, allowing interactive exploration and detailed showcasing.",
    },
    {
      imageSrc: w8,
      text: "Payments made easy",
      p: "Payments made easy simplifies the process of financial transactions, enabling convenient and hassle-free payment experiences for users.",
    },
    {
      imageSrc: w9,
      text: "Animated 3D Content",
      p: "Animated 3D contents bring static models to life through dynamic movements, enhancing engagement and visual storytelling.",
    },
  ];

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
        Math.min(prevIndex + 1, slides.length - 1)
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
      <div className="md:hidden relative overflow-hidden bg-black text-white mt-[-2px] lg:mt-0 md:mt-0">
        <div>
          <h1 className="text-4xl font-semibold font-outfit text-center mt-16">Features</h1>
          <h2 className="text-sm w-[300px] mx-auto text-center mt-4 mb-10">
            We are constantly working to bring new updates and features to
            Bigsurmoon, such as:
          </h2>
        </div>
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.imageSrc}
                alt={`Slide ${index}`}
                className=" w-[95px] h-[95px]  mx-auto"
              />
              <div className="bg-[#292929] rounded-3xl text-white w-[290px] h-[210px] mx-auto">
                <p className="text-center font-bold pt-16 mt-[-50px] text-lg ">
                  {slide.text}
                </p>
                <p className="text-center mt-2 text-sm px-7 font-normal">
                  {slide.p}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8 mb-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-700"
              }`}
            ></div>
          ))}
        </div>
      </div>
      <div className="relative hidden md:block md:px-8 lg:px-0 overflow-hidden bg-black text-white pb-20">
        <h3 className="text-center text-5xl font-outfit font-bold mt-36 mb-4 ">
          Features
        </h3>
        <h3 className="w-[550px] font-normal mx-auto  text-[23px] mb-16 text-center leading-7 ">
          We are constantly working to bring new updates and features to
          Bigsurmoon, such as:
        </h3>
        <div className="grid max-w-[1440px]  mx-auto grid-cols-3 gap-4 font-outfit lg:px-28 justify-around mb-8">
          {slideslg.map((m, index) => (
            <div key={index} className="flex flex-col items-center mt-10  ">
              <img src={m.imageSrc} alt={`Image ${index}`} />
              <h2 className="text-[20px] font-semibold text-center mb-3 mt-3">
                {m.text}
              </h2>
              <h3 className="text-center leading-6 text-[18px] lg:w-[300px]">
                {m.p}
              </h3>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="bg-black">
        <div className="bg-black max-w-[1440px] mx-auto text-white px-3 pt-10 md:pt-40 md:flex md:items-center md:justify-between md:px-10 lg:px-16 lg:pb-8 ">
          <div className=" lg:pl-0">
            <h1 className="text-[25px] pl-3 lg:pl-0 font-bold lg:font-semibold lg:text-[36px] mb-3">
              {" "}
              7-day free trial
            </h1>
            <h1 className="w-[300px] text-[12px] pl-3 lg:pl-0 font-light lg:font-normal mb-5 font-roboto lg:leading-8  lg:text-[23px] lg:w-[550px]">
              Experience our platform's full potential, with our exclusive 7-day
              free trial, allowing you to explore all the features and benefits
            </h1>
          </div>
          <div className="pb-12 lg:pb-0 pl-3 lg:pl-0">
            <button
              onClick={() => navigate("/pricing")}
              className={`text-white text-base gap-2 lg:gap-4 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 rounded-full w-[98px] lg:w-[250px] h-[35px] lg:h-[65px]  `}
            >
              <h3 className="text-[10px] font-roboto g lg:text-[18px]  ">
                Explore Plans{" "}
              </h3>
              <img src={arrowlogin} className="h-4 lg:h-10" />
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SubFeatures;
