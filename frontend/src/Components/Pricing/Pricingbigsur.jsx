import React, { useEffect, useState } from "react";
import phone from "../../assets/pricing/BG 1.png";
import lap from "../../assets/pricing/Lighting and Shading - Pricing 1.png";
import axiosInstance from "../../axios/axiosInterceptors/axiosInstance.js";
import { useLocation, useNavigate } from "react-router-dom";

const Pricingbigsur = () => {
  const [sliderValue, setSliderValue] = useState(10);
  const [price, setPrice] = useState(19.8);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value);
    const value = newValue * 1.98;
    setSliderValue(newValue);
    setPrice(value);
    console.log(newValue, value);
  };

  const handlePayButton = async () => {
    if (!localStorage.getItem("auth")) {
      navigate("/login", { state: { from: location } });
    } else {
      try {
        if (price !== 0) {
          console.log(price, sliderValue);
          const res = await axiosInstance.post(
            "/stripe/create-checkout-session",
            { price, sliderValue }
          );
          console.log(res);
          if (res.data) {
            console.log("res in if cond of post stripe");
            window.location.href = res.data.url;
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };


  return (
    <>
      <div className=" mx-auto font-roboto  bg-cover bg-center text-white  relative overflow-   lg:h-screen   ">
        <img
          src={phone}
          className=" md:hidden absolute -z-10 w-full  bg-black "
        />
        <img
          src={lap}
          className=" hidden md:flex absolute w-full -z-10   md:h-1/2 lg:h-3/4 bg-black "
        />
        <div>
          <div>
            <h1 className="pt-32 flex justify-center text-[38px] lg:text-[48px]  font-outfit font-medium">
              Pricing
            </h1>
            <h3 className="mt-2 mb-16  md:w-[500px] lg:w-[640px] mx-auto font-light  text-[14px] lg:text-[18px] px-6 flex items-center align-middle text-center justify-center ">
              Our affordable pricing scales with your business. We don’t lock
              our features behind expensive plans. You get all the features on
              every plan.
            </h3>
          </div>

          <div className="flex justify-center  items-center md:mt-[-200px] lg:mt-[-150px] md:min-h-screen ">
            <div className="md:flex md:w-[660px] lg:w-[950px]    md:items-center md:justify-center mx-auto">
              {" "}
              <div className="w-screen  text-xl h-[300px] md:h-[300px] lg:h-[410px] lg:mt-[-35px]   mx-auto bg-[#040D42] md:rounded-xl ">
                <h1 className=" text-center text-[20px] lg:text-[28px] lg:w-[250px] pt-5 lg:pt-10 font-outfit  pb-8 w-[190px] mx-auto">
                  How Many 3D files Do You Have?
                </h1>
                <div className="text-center">
                  <div className="mb-2 lg:mb-4 lg:mt-4  text-[38px] lg:text-[48px] font-outfit font-">
                    {sliderValue}
                  </div>
                  <h2 className="w-20  h-[2px] mt-8 mx-auto lg:mt-12 bg-white"></h2>
                  <div className="">
                    <div className="flex   justify-center items-center lg:pt-10">
                      <h2 className="hidden lg:flex text-[18px] ">10</h2>

                      <div className=" h-[40px] rounded-lg shadow">
                        <div className="w-full md:w-96 p-2 rounded-lg shadow">
                          <input
                            id="slider"
                            type="range"
                            min="10"
                            max="500"
                            step="10"
                            value={sliderValue}
                            onChange={handleSliderChange}
                            className="w-[300px] lg:w-[310px] xl:w-[330px] h-[10px] appearance-none rounded-lg bg-gray-200 focus:outline-none focus:bg-blue-300"
                            style={{
                              background: `linear-gradient(to right, #4299e1 0%, #4299e1 ${
                                ((sliderValue - 10) / 490) * 100
                              }%, #f7fafc ${
                                ((sliderValue - 10) / 490) * 100
                              }%, #f7fafc 100%)`,
                              height: "10px",
                            }}
                          />
                          <style>
                            {`
            /* Style for the slider thumb (button) */
            #slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 32px; /* Set the width of the slider thumb */
              height: 32px; /* Set the height of the slider thumb */
              background-color: #4299e1;
              border-radius: 50%;
              cursor: pointer;
            }
            
            #slider::-moz-range-thumb {
              width: 32px;
              height: 32px;
              background-color: #4299e1;
              border-radius: 50%;
              cursor: pointer;
            }

            /* Responsive styles */
            @media (max-width: 768px) {
              #slider::-webkit-slider-thumb {
                width: 24px;
                height: 24px;
              }
              
              #slider::-moz-range-thumb {
                width: 24px;
                height: 24px;
              }
            }
          `}
                          </style>
                        </div>
                      </div>
                      <h2 className="hidden lg:block text-[18px]">500+</h2>
                    </div>
                  </div>

                  <div className="flex lg:hidden justify-between px-10 text-[16px]">
                    <h2>10</h2>

                    <h2>500+</h2>
                  </div>
                </div>
                <h3 className="text-sm  text-center font-outfit w-[190px] pb-10 mb-10 lg:pt-10 lg:w-full mx-auto text-[14px]  flex flex-col justify-end">
                  If you have more than 500 files, get in touch
                </h3>
              </div>
              <div className="w-screen  lg:h-[516px] px-6 flex flex-col justify-around text-center bg-white mx-auto shadow-2xl text-black md:rounded-xl ">
                <h3 className="text-4xl lg:text-[64px] mt-8 lg:pt-8 mb-2">
                  ${price} <span className="text-lg">per month</span>
                </h3>
                <div className="flex justify-center gap-2 items-center align-middle">
                  <h3 className="w-20 h-[2px] bg-gray-300"></h3>
                  <h3 className="mt-5 w-32 text text-gray-500 mb-3">
                    All Plans Include
                  </h3>
                  <h3 className="w-20 h-[2px] bg-gray-300"></h3>
                </div>
                <div className="lg:flex gap-3 lg:mx-auto">
                  <div className="flex justify-center items-center gap-5  flex-row mt-3 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 5.94444L7.08036 11.5L17.125 1.5"
                        stroke="#0076E2"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="text-sm">3D Asset Management</h3>
                  </div>

                  <div className="flex justify-center items-center gap-5 flex-row mt-3 lg:mt-0 mb-">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 5.94444L7.08036 11.5L17.125 1.5"
                        stroke="#0076E2"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="text-sm">Product variant support</h3>
                  </div>
                </div>
                <div className="lg:flex gap-3 lg:mx-auto">
                  <div className="flex justify-center items-center gap-5 flex-row mt-3 lg:mt-0 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 5.94444L7.08036 11.5L17.125 1.5"
                        stroke="#0076E2"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="text-sm">QR code access to AR</h3>
                  </div>
                  <div className="flex justify-center items-center gap-5 flex-row mt-3 lg:mt-0 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                    >
                      <path
                        d="M1.5 5.94444L7.08036 11.5L17.125 1.5"
                        stroke="#0076E2"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <h3 className="text-sm">Unlimited Animations</h3>
                  </div>
                </div>

                <div className=" mx-auto mt-5 lg:mt-0 lg:mb-10 mb-5">
                  <button
                    onClick={handlePayButton}
                    className="p-2  bg-[#0076E2] text-center lg:text-lg  text-[16px] text-white  justify-center align-middle flex  items-center rounded-full w-[238px] h-[40px] lg:h-[55px] lg:rounded-2xl "
                  >
                    Start My Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:block mb-40 invisible">d</div>
    </>
  );
};

export default Pricingbigsur;
