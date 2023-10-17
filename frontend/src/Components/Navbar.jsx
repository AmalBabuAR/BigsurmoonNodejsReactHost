import React, { useEffect, useState } from "react";
import logo from "../assets/Logos/logo.gif";
import arrowlogin from "../assets/Arrows/Login shape 1.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageName, setPageName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [aboutMobOpen, SetAboutMobOpen] = useState(false);

  const navigate = useNavigate();
  const youtubeLink =
  "https://www.youtube.com/channel/UCBKhKN-gaz0AT3tEEucIakw";
const linkedInLink =
  "https://www.linkedin.com/company/91409077/admin/feed/posts/";
const twitterLink = "https://twitter.com/BigsurmoonLtd";


  const handleButtonClick = () => {
    SetAboutMobOpen(!aboutMobOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("auth");
      setUser(false);
      navigate("/");
    } catch (err) {
      navigate("/");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("auth");
    const userID = JSON.parse(data);
    // console.log(userID);
    if (userID !== null) {
      setUser(true);
    }
  }, [setUser, user]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];

    setPageName(lastPart);
  }, []);
  // console.log(pageName);
  return (
    <>
      <div className="bg-black lg:hidden lg:bg-opacity-50 w-full ">
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
                  <img src={logo} alt="logo" className="h-6 ml-8 md:ml-10" />
                </Link>
              </div>
              <div
                className={`text-white ${
                  pageName === "register" && "invisible"
                } ${
                  pageName === "login" && "invisible"
                }  flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400  rounded-full w-[57px] h-[22px] md:w-20`}
              >
                <h3 className="w-[32px] text-center my-auto h-[14px] text-[8px] font-semibold md:text-[13px]">
                  Login{" "}
                </h3>
                <img src={arrowlogin} alt="arrowright" className="" />
              </div>
            </div>

            <div>
              {isMenuOpen && (
                <div className="  fixed left-0 right-0 bg-black md:w-[400px] w-3/4  z-50">
                  <div className="bg-black py-10  h-screen text-white  mx-auto ">
                    <ul className="  h-72 flex flex-col justify-around text-2xl pl-10 md:pl-16 font-outfit font-bold  ">
                      <Link to="/">
                        <li className="w-[150px]">Home</li>
                      </Link>
                      <div>
                        <div onClick={handleButtonClick} className="flex">
                          <h1 className="w-[150px]">Platform </h1>
                          <div className="flex items-center">
                            <svg
                              data-accordion-icon=""
                              className={`w-3 h-3 ${
                                aboutMobOpen ? "rotate-360" : "rotate-180"
                              } shrink-0`}
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5 5 1 1 5"
                              />
                            </svg>
                          </div>
                        </div>
                        {aboutMobOpen && (
                          <div className="bg-black flex justify-start items-start flex-col p-4 w-[200px]">
                            <Link to="/aboutar">
                              <li className="w-[150px]">Augmented Reality</li>
                            </Link>
                            <Link to="/aboutconfigurator">
                              <li className="w-[150px]">Configurator</li>
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link to="/studio">
                        <li className="w-[150px]">3D Modelling</li>
                      </Link>
                      <Link to="/pricing">
                        <li className="w-[150px]">Pricing</li>
                      </Link>
                      <Link to="/support">
                        <li className="w-[150px]">Support</li>
                      </Link>
                    </ul>
                    <div className=" pl-10 mt-10 md:pl-16 opacity-60">
                      <Link to="/privacyPolicy">
                        <h2 className="mt-2">Privacy & legal</h2>
                      </Link>
                      <Link to="/termsAndCondition">
                        <h2 className="mt-2">Terms and conditions</h2>
                      </Link>
                      <div className="flex gap-4 mt-4">
                      <span
                          onClick={() => window.open(linkedInLink, "_blank")}
                        >
                          <SlSocialLinkedin />
                        </span>
                        <span
                          onClick={() => window.open(twitterLink, "_blank")}
                        >
                          <SlSocialTwitter />
                        </span>
                        <span
                          onClick={() => window.open(youtubeLink, "_blank")}
                        >
                          <SlSocialYoutube />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-black fixed bg-opacity-50 text-gray-400  w-screen font-medium z-10  ">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex  justify-between px-10 items-center  ">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="w-[204px] h-[44px] " />
              </Link>
            </div>
            <div className="flex opacity-50 py-8 ml-[-50px] text-lg gap-10">
              <div className="relative group">
                <Link
                  className="cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h3
                    className={`${
                      pageName === "aboutar" || pageName === "aboutconfigurator"
                        ? "text-gray-50 opacity-100"
                        : ""
                    }`}
                  >
                    Platform
                  </h3>
                </Link>
                {showDropdown && (
                  <div
                    className="absolute top-full left-0 rounded-xl bg-black border-gray-300 p-2 w-52 shadow-md"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Dropdown content */}
                    <ul>
                      <Link to="/aboutar">
                        <li
                          className={`${
                            pageName === "aboutar" ? "text-gray-50" : ""
                          }hover:text-white hover:text-lg text-base`}
                        >
                          Augmented Reality
                        </li>
                      </Link>
                      <Link to="/aboutconfigurator">
                        <li
                          className={`${
                            pageName === "aboutconfigurator"
                              ? "text-gray-50 opacity-100"
                              : ""
                          }hover:text-white hover:text-lg text-base`}
                        >
                          Configurator
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <Link to="/studio">
                <h3
                  className={`${
                    pageName === "studio" ? "text-gray-50" : ""
                  } hover:text-white hover:text-xl`}
                >
                  3D Modelling
                </h3>
              </Link>
              <Link to="/pricing">
                <h3
                  className={`${
                    pageName === "pricing" ? "text-gray-50" : ""
                  } hover:text-white hover:text-xl`}
                >
                  Pricing
                </h3>
              </Link>
              <Link to="/support">
                <h3
                  className={`${
                    pageName === "support" ? "text-gray-50" : ""
                  } hover:text-white hover:text-xl`}
                >
                  Support
                </h3>
              </Link>
              {user && (
                <Link to="/dashboard">
                  <h3
                    className={`${
                      pageName === "dashboard" ? "text-gray-50" : ""
                    } hover:text-white hover:text-xl`}
                  >
                    Dashboard
                  </h3>{" "}
                </Link>
              )}
            </div>
            {user ? (
              <button
                onClick={handleLogout}
                className={`text-white text-base flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 ${
                  pageName === "register" && "invisible"
                } ${
                  pageName === "login" && "invisible"
                }  rounded-full w-[155px] h-[61px] `}
              >
                <h3 className="px-6 py-6 text-lg">Logout</h3>
                <img
                  src={arrowlogin}
                  alt="arrowright"
                  className="h-8 ml-[-10px]"
                />
              </button>
            ) : (
              <Link to="/login">
                <div
                  className={`text-white text-base flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 ${
                    pageName === "register" && "invisible"
                  } ${
                    pageName === "login" && "invisible"
                  }  rounded-full w-[155px] h-[61px] `}
                >
                  <h3 className="px-6 py-6 text-lg">Login</h3>
                  <img
                    src={arrowlogin}
                    alt="arrowright"
                    className="h-8 ml-[-10px]"
                  />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
