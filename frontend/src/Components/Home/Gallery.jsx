import React from "react";
import pic1 from "../../assets/Home/gallery/gallery1.png";
import pic2 from "../../assets/Home/gallery/gallery2.png";
import pic2b from "../../assets/Home/gallery/gallery2b.svg";
import pic3 from "../../assets/Home/gallery/gallery3.svg";
import pic4 from "../../assets/Home/gallery/gallery4.svg";
import pic5 from "../../assets/Home/gallery/gallery5.svg";
import pic6 from "../../assets/Home/gallery/gallery6.svg";
import pic7 from "../../assets/Home/gallery/gallery7.svg";
import pic8 from "../../assets/Home/gallery/gallery8.svg";
import pic9 from "../../assets/Home/gallery/gallery9.svg";

import "./css/style.css";

const Gallery = () => {
  return (
    
    <div className="h-full bg-[#0B0E1B] text-white font-roboto mx-auto mt-[-2px] lg:mt-0">
      <div className=" flex flex-col justify-center items-center">
        <h1 className="mt-[50px] lg:mt-[75px] text-center text-[25px] lg:text-[42px] font-bold">
          Custom Experience for Every Visualisation Use Case
        </h1>
        <p className="mt-[20px] text-[14px] text-center px-2 lg:px-0 lg:text-[20px] font-normal">
          Leverage 360 and AR to create engaging visuals for an extraordinary
          catalog
        </p>
      </div>

      <div className="lg:hidden mt-[70px] pb-[70px] grid place-items-center">
        <div className="m-auto relative w-[100%] grid place-items-center overflow-hidden">
          <div className="slides flex flex-row gap-[15px] text-[12px] leading-[20px] ">
            {/* section 1 */}
            <div className="flex flex-col gap-y-[15px]">
              <div className="bg-[#0D0230] flex flex-col w-[220px] h-[190px] rounded-[20px]">
                <img src={pic1} alt="Outdoor" className="w-[220px] h-[170px]" />
                <h1 className="pl-3">Outdoor</h1>
              </div>
              <div className="bg-[#0D0230] flex flex-col w-[220px] h-[190px] rounded-[20px]">
                <img src={pic6} alt="Fashion" className="w-[220px] h-[170px]" />
                <h1 className="pl-3">Fashion</h1>
              </div>
            </div>

            {/* section 2 */}
            <div className="flex flex-col gap-y-[15px]">
              <div className="bg-[#0D0230] flex flex-col w-[457px] h-[190px] rounded-[20px]">
                <img src={pic2} alt="Furniture" className="w-[457px] h-[170px]" />
                <h1 className="pl-3">Furniture</h1>
              </div>
              {/* section 2 b */}
              <div className="flex flex-row gap-[15px]">
                <div className="bg-[#0D0230] flex flex-col w-[220px] h-[190px] rounded-[20px]">
                  <img src={pic7} alt="Electronics" className="w-[220px] h-[170px]" />
                  <h1 className="pl-3">Electronics</h1>
                </div>
                <div className="bg-[#0D0230] flex flex-col w-[220px] h-[190px] rounded-[20px]">
                  <img src={pic8} alt="Interior" className="w-[220px] h-[170px]" />
                  <h1 className="pl-3">Interior/Modular</h1>
                </div>
              </div>
            </div>
            {/* section 3 */}

            <div className="bg-[#0D0230] flex flex-col w-[220px] h-[395px] rounded-[20px]">
              <img src={pic3} alt="Clothing" className="w-[220px] h-[375px]" />
              <h1 className="pl-3">Clothing</h1>
            </div>
            {/* section 4 */}
            <div className="flex flex-col gap-y-[15px]">
              {/* section 2 b */}
              <div className="flex flex-row gap-[15px]">
                <div className="bg-[#0D0230] flex flex-col w-[220px] h-[190px] rounded-[20px]">
                  <img src={pic4} alt="Education" className="w-[220px] h-[170px]" />
                  <h1 className="pl-3">Education</h1>
                </div>
                <div className="bg-[#0D0230] flex flex-col w-[220px] h-[190px] rounded-[20px]">
                  <img src={pic5} alt="Tourism" className="w-[220px] h-[170px]" />
                  <h1 className="pl-3">Tourism</h1>
                </div>
              </div>
              {/* section 2 a */}
              <div className="bg-[#0D0230] flex flex-col w-[457px] h-[190px] rounded-[20px]">
                <div className="bg-white w-[457px] h-[170px] rounded-[20px] flex justify-center">
                <img src={pic9} alt="Automobile" />
                </div>
                <h1 className="pl-3">Automobile</h1>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="mt-[50px] pb-[75px] hidden lg:grid  grid-cols-6 grid-rows-2 gap-x-[15px] items-center mx-auto lg:w-[1440px] gap-y-[17px] text-[12px] leading-[20px] overflow-x-hidden">
        <div className="bg-[#0D0230] flex flex-col w-[220px] h-[200px] rounded-[20px]">
          <img className=" w-[220px] h-[170px]" src={pic1} alt="Outdoor" />
          <h1 className="pl-2">Outdoor</h1>
        </div>
        <div className="bg-[#0D0230] col-span-2  flex flex-col w-[457px] h-[200px] rounded-[20px]">
          <div className=" w-[457px] h-[170px] flex justify-center relative">
            <img className="" src={pic2} alt="Furniture" />
            <img className="absolute top-[-7px]" src={pic2b} alt="Furniture" />
          </div>
          <h1 className="pl-2">Furniture</h1>
        </div>
        <div className="bg-[#0D0230] flex row-span-2 flex-col w-[224px] h-[411px] rounded-[20px]">
          <img className=" w-[224px] h-[385px]" src={pic3} alt="Clothing" />
          <h1 className="pl-2">Clothing</h1>
        </div>
        <div className="bg-[#0D0230] flex flex-col w-[220px] h-[200px] rounded-[20px]">
          <img className=" w-[220px] h-[170px]" src={pic4} alt="Education" />
          <h1 className="pl-2">Education</h1>
        </div>
        <div className="bg-[#0D0230] flex flex-col w-[220px] h-[200px] rounded-[20px]">
          <img className=" w-[220px] h-[170px]" src={pic5} alt="Tourism" />
          <h1 className="pl-2">Tourism (like a social A.R game)</h1>
        </div>
        <div className="bg-[#0D0230] flex flex-col w-[220px] h-[200px] rounded-[20px]">
          <img className=" w-[220px] h-[170px]" src={pic6} alt="Fashion" />
          <h1 className="pl-2">Fashion</h1>
        </div>
        <div className="bg-[#0D0230] flex flex-col w-[220px] h-[200px] rounded-[20px]">
          <img className=" w-[220px] h-[170px]" src={pic7} alt="Electronics" />
          <h1 className="pl-2">Electronics</h1>
        </div>
        <div className="bg-[#0D0230] flex flex-col w-[220px] h-[200px] rounded-[20px]">
          <img
            className=" w-[220px] h-[170px]"
            src={pic8}
            alt="Interior/Modular"
          />
          <h1 className="pl-2">Interior/Modular</h1>
        </div>
        <div className="bg-[#0D0230] col-span-2  flex flex-col w-[457px] h-[200px] rounded-[20px]">
          <div className="bg-white  w-[457px] h-[170px] rounded-[20px] flex justify-center">
            <img className="" src={pic9} alt="Automobile" />
          </div>
          <h1 className="pl-2">
            Automobile (car cockpit view 3d (showroom bg)
          </h1>
        </div>
      </div>
    </div>


  );
};

export default Gallery;
