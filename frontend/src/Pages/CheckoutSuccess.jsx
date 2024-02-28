import React from "react";
import phone from "../assets/pricing/BG 1.png";
import lap from "../assets/pricing/Lighting and Shading - Pricing 1.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const CheckoutSuccess = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto overflow-hidden text-white bg-center bg-cover font-roboto lg:h-screen">
        <img
          src={phone}
          alt="Bigsurmoon"
          className="absolute w-full h-full bg-black md:hidden -z-10"
        />
        <img
          src={lap}
          alt="Bigsurmoon"
          className="absolute hidden w-full bg-black md:flex -z-10 md:h-1/2 lg:h-2/4"
        />
        <div>
          <div className="flex justify-center mt-[-150px] items-center border md:mt-[-200px] lg:mt-[1px] md:min-h-screen  ">
            <div className="w-[50vw] mx-auto mt-10 h-[50vh] bg-[#ffffff] shadow-2xl rounded-2xl ">
              <div className="flex justify-center flex-col items-center my-auto h-[40vh]">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="80" rx="40" fill="#26A212" />
                  <g clip-path="url(#clip0_441_4014)">
                    <path
                      d="M50.6665 29.3335H29.3332C27.8532 29.3335 26.6798 30.5202 26.6798 32.0002L26.6665 48.0002C26.6665 49.4802 27.8532 50.6668 29.3332 50.6668H34.6665C35.3998 50.6668 35.9998 50.0668 35.9998 49.3335C35.9998 48.6002 35.3998 48.0002 34.6665 48.0002H29.3332V40.0002H53.3332V32.0002C53.3332 30.5335 52.1332 29.3335 50.6665 29.3335ZM50.6665 34.6668H29.3332V32.0002H50.6665V34.6668ZM43.9065 49.5602L41.0798 46.7335C40.5598 46.2135 39.7198 46.2135 39.1998 46.7335C38.6798 47.2535 38.6798 48.0935 39.1998 48.6135L42.9732 52.3868C43.4932 52.9068 44.3332 52.9068 44.8532 52.3868L52.3998 44.8402C52.9198 44.3202 52.9198 43.4802 52.3998 42.9602C51.8798 42.4402 51.0398 42.4402 50.5198 42.9602L43.9065 49.5602Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_441_4014">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(24 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h1 className="mt-5 text-3xl font-medium text-center text-black">
                    Subscribion Successfully <br /> Completed
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutSuccess;
