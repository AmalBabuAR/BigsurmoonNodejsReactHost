import React, { useEffect, useState } from "react";
import phone from "../assets/pricing/BG 1.png";
import lap from "../assets/pricing/Lighting and Shading - Pricing 1.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Support = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.oncehub.com/mergedjs/so.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Navbar />
      <div className=" mx-auto font-roboto mb-12 lg:mb-52 bg-cover bg-center text-white ">
        <img
          src={phone}
          className=" md:hidden absolute -z-10 w-full h-full bg-black "
        />
        <img
          src={lap}
          className=" hidden md:flex absolute w-full -z-10   md:h-1/2 lg:h-3/4 bg-black "
        />
        <div>
          <div>
            <h1 className="pt-32 flex justify-center text-[38px] lg:text-[48px]  font-outfit font-medium">
              Let’s Reinvent!
            </h1>
            <h3 className="mt-2 mb-16  md:w-[500px] lg:w-[640px] mx-auto font-light  text-[14px] lg:text-[18px] px-6 flex items-center align-middle text-center justify-center ">
              We're excited to connect with you! Whether you have questions
              about our services, want to discuss a project, we're here and
              ready to help.
            </h3>
          </div>

          <div className="flex justify-center mt-[-150px] items-center md:mt-[-200px] lg:mt-[-200px] md:min-h-screen  ">
            <div className="w-full mt-40 border-black max-h-screen">
              <div
                id="SOIDIV_Bigsurmoon"
                data-so-page="Bigsurmoon"
                data-height="750"
                data-style="border: 2px solid #d8d8d8; min-width: 290px; max-width: 900px;"
                data-psz="00"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
