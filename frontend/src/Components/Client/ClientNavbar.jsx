import React, { useEffect, useState } from "react";
import logo from "../../assets/Logos/logo.gif";
import arrowlogin from "../../assets/Arrows/Login shape 1.svg";
import { Link, useParams } from "react-router-dom";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageName, setPageName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];

    setPageName(lastPart);
  }, []);
  console.log(pageName);
  return (
    <>
      <div className="bg-black lg:hidden  w-full ">
        <div className="mx-auto font-roboto  items-center">
          <div className=" lg:hidden fixed w-screen bg-black  z-10   ">
            <div className="flex  justify-between items-center p-4  ">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7  cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </div>

              <div>
                <Link to="/">
                  <img src={logo} alt="logo" className="h-6 ml-10 " />
                </Link>
              </div>
              <div
                className={`text-white invisible ${
                  pageName === "register" && "invisible"
                } ${
                  pageName === "login" && "invisible"
                } text-sm flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400  rounded-full w-20`}
              >
                <h3 className=" px-4 py-1 text-[12px] md:text-[18px] ">
                  Login{" "}
                </h3>
                <img
                  src={arrowlogin}
                  alt="arrowright"
                  className="h-6 ml-[-10px]"
                />
              </div>
            </div>

            <div>
              {isMenuOpen && (
                <div className="  fixed left-0 right-0 bg-black md:w-[400px] w-2/4  z-50">
                  <div className="bg-black py-10  h-screen text-white  mx-auto ">
                    <aside
                      id="logo-sidebar"
                      className="fixed top-14 left-0 z-40 w-64 h-screen pt-20  bg-[#131313]   sm:translate-x-0 "
                      aria-label="Sidebar"
                    >
                      <div className="h-full px-3 pb-4 overflow-y-auto bg-[#131313] da">
                        <ul className="space-y-2 font-medium">
                          <div>
                            <li>
                              <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                              >
                                <svg
                                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 22 21"
                                >
                                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">Dashboard</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                              >
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 20 18"
                                >
                                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                  Profile
                                </span>
                              </a>
                            </li>

                            <div className="pt-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="235"
                                height="22"
                                viewBox="0 0 235 22"
                                fill="none"
                              >
                                <g opacity="0.2" filter="url(#filter0_b_34_97)">
                                  <path
                                    d="M0 10.8002C0 16.765 4.83542 21.6005 10.8002 21.6005H224.2C230.165 21.6005 235 16.765 235 10.8002C235 4.83546 230.165 3.43323e-05 224.2 3.43323e-05H10.8002C4.83542 3.43323e-05 0 4.83546 0 10.8002Z"
                                    fill="url(#paint0_linear_34_97)"
                                  />
                                </g>
                                <path
                                  d="M2.35791 10.8003C2.35791 15.5721 6.22625 19.4404 10.9981 19.4404H171.343C176.115 19.4404 179.983 15.5721 179.983 10.8003C179.983 6.02843 176.115 2.16009 171.343 2.16009H10.9981C6.22625 2.16009 2.35791 6.02843 2.35791 10.8003Z"
                                  fill="url(#paint1_linear_34_97)"
                                />
                                <defs>
                                  <filter
                                    id="filter0_b_34_97"
                                    x="-1355.42"
                                    y="-1355.42"
                                    width="2945.84"
                                    height="2732.44"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                  >
                                    <feFlood
                                      flood-opacity="0"
                                      result="BackgroundImageFix"
                                    />
                                    <feGaussianBlur
                                      in="BackgroundImageFix"
                                      stdDeviation="677.711"
                                    />
                                    <feComposite
                                      in2="SourceAlpha"
                                      operator="in"
                                      result="effect1_backgroundBlur_34_97"
                                    />
                                    <feBlend
                                      mode="normal"
                                      in="SourceGraphic"
                                      in2="effect1_backgroundBlur_34_97"
                                      result="shape"
                                    />
                                  </filter>
                                  <linearGradient
                                    id="paint0_linear_34_97"
                                    x1="151.313"
                                    y1="3.69464e-05"
                                    x2="150.609"
                                    y2="21.6051"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#4E90F3" />
                                    <stop offset="1" stop-color="#5451FF" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_34_97"
                                    x1="175.204"
                                    y1="2.16011"
                                    x2="8.07369"
                                    y2="-2.67884"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stop-color="#2265D5" />
                                    <stop offset="1" stop-color="#181D9A" />
                                  </linearGradient>
                                </defs>
                              </svg>
                              <h1 className="text-gray-400">
                                40 Out of 50 files used
                              </h1>
                            </div>
                            <div className="w-[234px] h-[124px] bg-[#202020] rounded-2xl flex flex-col items-center justify-center mt-10">
                              <h1 className="text-[10px] w-[182px] mx-auto text-center text-white">
                                Ready to go beyond current plan? Upgrade to give
                                your ideas and designs room to grow without
                                limits.
                              </h1>
                              <h1 className="w-[127px] h-[26px] bg-[#2898FF] flex justify-center items-center rounded-full text-white mt-5 text-[10px]">
                                view plans
                              </h1>
                            </div>
                            <li className="mt-10">
                              <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                              >
                                <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 18 16"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                  />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">
                                  Log out
                                </span>
                              </a>
                            </li>
                          </div>
                        </ul>
                      </div>
                    </aside>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-black fixed   text-white  w-screen     z-10  ">
        <div className="max-w-[1440px]  mx-auto">
          <div className="flex  justify-between px-10 items-center  ">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="w-[204px] h-[44px] " />
              </Link>
            </div>
            <div className="flex invisible opacity-50 py-8 ml-[-50px] text-lg gap-10">
              <div className="relative group">
                <Link
                  className="cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h3>About</h3>
                </Link>
                {showDropdown && (
                  <div
                    className="absolute top-full left-0  border border-gray-300 p-2  shadow-md"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Dropdown content */}
                    <ul>
                      <Link to="/aboutar">
                        <li>AR</li>
                      </Link>
                      <Link to="/aboutconfigurator">
                        <li>Configurator</li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <Link to="/studio">
                <h3>3D Studio</h3>
              </Link>
              <Link to="/plan">
                <h3>Pricing</h3>
              </Link>
              <Link to="/support">
                <h3>Support</h3>
              </Link>
            </div>
            <div className="flex justify-center items-center gap-4">
              {/* <h1 className="">Anees Mohammed</h1>
              <h2 className="w-[32px] h-[32px] bg-[#F53B00] flex justify-center items-center rounded-full">
                A
              </h2> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
