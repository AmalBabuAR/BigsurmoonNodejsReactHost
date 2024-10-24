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
      <div className="mx-auto mb-12 text-white bg-center bg-cover font-roboto lg:mb-52">
        <img
          src={phone}
          alt="Bigsurmoon Support"
          className="absolute w-full h-full bg-black md:hidden -z-10"
        />
        <img
          src={lap}
          alt="Bigsurmoon Support"
          className="absolute hidden w-full bg-black md:flex -z-10 md:h-1/2 lg:h-3/4"
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
            <div className="flex items-center justify-center w-full max-h-screen mt-40 border-black">
              <iframe
                src="https://app.simplymeet.me/bigsurmoon?is_widget=1&view=compact"
                className="bg-white md:border md:rounded-md  h-[600px] w-[100%] md:w-[75%] md:h-[580px] lg:w-[70%] lg:h-[800px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Support;
