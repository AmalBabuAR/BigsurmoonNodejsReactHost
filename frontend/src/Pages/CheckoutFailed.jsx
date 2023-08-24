import React from "react";
import phone from "../assets/pricing/BG 1.png";
import lap from "../assets/pricing/Lighting and Shading - Pricing 1.png";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const CheckoutFailed = () => {
    const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className=" mx-auto font-roboto  bg-cover bg-center text-white overflow-hidden       lg:h-screen   ">
        <img
          src={phone}
          className=" md:hidden absolute -z-10 w-full h-full bg-black "
        />
        <img
          src={lap}
          className=" hidden md:flex absolute w-full -z-10  md:h-1/2 lg:h-2/4 bg-black "
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
                  <rect width="80" height="80" rx="40" fill="#FF3B30" />
                  <g clip-path="url(#clip0_441_4020)">
                    <path
                      d="M33.1066 29.3331H50.6666C52.1466 29.3331 53.3333 30.5198 53.3333 31.9998V47.9998C53.3333 48.4531 53.2266 48.8798 53.0266 49.2531L50.6666 46.8931V39.9998H43.7733L38.4399 34.6665H50.6666V31.9998H35.7733L33.1066 29.3331ZM51.3199 55.0798L46.8933 50.6665H29.3333C27.8533 50.6665 26.6666 49.4798 26.6666 47.9998L26.6799 31.9998C26.6799 31.5465 26.7866 31.1198 26.9866 30.7598L24.9199 28.6798L26.7999 26.7998L53.1999 53.1998L51.3199 55.0798ZM29.3333 33.1065V34.6665H30.8933L29.3333 33.1065ZM44.2266 47.9998L36.2266 39.9998H29.3333V47.9998H44.2266Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_441_4020">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(24 24)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <h1 className="text-3xl text-center font-medium text-black mt-5">
                  Subscribing Failed
                </h1>
                <button onClick={() => navigate('/pricing') } className="text-center text-blue-700 text-base mt-4 font-normal">Go Back To Pricing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutFailed;
