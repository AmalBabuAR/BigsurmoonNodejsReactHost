import React, { useEffect, useState } from "react";
import logo from "../assets/Logos/logo.gif";
import drop from "../assets/Navbar/dropDown.svg";
import arrowlogin from "../assets/Arrows/Login shape 1.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pageName, setPageName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [user, setUser] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [aboutMobOpen, SetAboutMobOpen] = useState(false);
  const [home, setHome] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    if (pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
    const parts = pathname.split("/");
    const lastPart = parts[parts.length - 1];

    setPageName(lastPart);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(pageName);
  return (
    <>
      <div className="w-full bg-black lg:hidden lg:bg-opacity-50 ">
        <div className="items-center mx-auto font-roboto">
          <div className="fixed z-10 w-screen bg-black lg:hidden">
            <div className="flex items-center justify-between p-4 ">
              <div className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer h-7"
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
                  <img
                    src={logo}
                    alt="Bigsurmoon"
                    className="h-6 ml-8 md:ml-10"
                  />
                </Link>
              </div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className={`text-white ${
                    pageName === "register" && "invisible"
                  } ${
                    pageName === "login" && "invisible"
                  }  flex items-center justify-center rounded-full btnClr`}
                >
                  <h3 className=" text-center my-auto text-[10px] font-semibold md:text-[13px] px-[15px] py-[5px]">
                    Logout
                  </h3>
                </button>
              ) : (
                <Link to="/login">
                  <button
                    className={`text-white ${
                      pageName === "register" && "invisible"
                    } ${
                      pageName === "login" && "invisible"
                    }  flex items-center justify-center rounded-full btnClr`}
                  >
                    <h3 className=" text-center my-auto text-[10px] font-semibold md:text-[13px] px-[15px] py-[5px]">
                      Login{" "}
                    </h3>
                  </button>
                </Link>
              )}
            </div>

            <div>
              {isMenuOpen && (
                <div className="  fixed left-0 right-0 bg-black md:w-[400px] w-3/4  z-50">
                  <div className="h-screen py-10 mx-auto text-white bg-black ">
                    <ul className="flex flex-col justify-around pl-10 text-2xl font-bold md:pl-16 font-outfit">
                      <Link to="/">
                        <li className="w-[150px] mb-3">Home</li>
                      </Link>
                      <div>
                        <div onClick={handleButtonClick} className="flex mb-3">
                          <h3 className="w-[150px]">Platform </h3>
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
                              <li className="w-[150px] mb-3">
                                Augmented Reality
                              </li>
                            </Link>
                            <Link to="/aboutconfigurator">
                              <li className="w-[150px]">Configurator</li>
                            </Link>
                          </div>
                        )}
                      </div>

                      <Link to="/studio">
                        <li className="w-[150px] mb-3">3D Modelling</li>
                      </Link>
                      <Link to="/plan">
                        <li className="w-[150px] mb-3">Pricing</li>
                      </Link>
                      <Link to="/support">
                        <li className="w-[150px]">Support</li>
                      </Link>
                    </ul>
                    <div className="pl-10 mt-10 md:pl-16 opacity-60">
                      <Link to="/privacyPolicy">
                        <h2 className="mt-2">Privacy & legal</h2>
                      </Link>
                      <Link to="/termsAndCondition">
                        <h2 className="mt-2">Terms and conditions</h2>
                      </Link>
                      <div className="flex gap-4 mt-4">
                        <Link to={linkedInLink} target="_blank">
                          <SlSocialLinkedin />
                        </Link>
                        <Link to={twitterLink} target="_blank">
                          <SlSocialTwitter />
                        </Link>
                        <Link to={youtubeLink} target="_blank">
                          <SlSocialYoutube />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed z-10 hidden font-medium text-white lg:block font-roboto ">
        <div
          className={`${home && "opacity-100"} ${
            home && scrolled && "opacity-100"
          } w-screen bg-black `}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center justify-between px-10">
              <div>
                <Link to="/">
                  <img
                    src={logo}
                    alt="Bigsurmoon"
                    className="w-[180px] h-[31px] object-cover"
                  />
                </Link>
              </div>
              <div className="flex py-8 ml-[-50px] text-[18px] font-medium tracking-wide gap-10">
                <div className="relative group">
                  <Link
                    className="cursor-pointer"
                    onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <h3
                      className={`${
                        pageName === "aboutar" ||
                        pageName === "aboutconfigurator"
                          ? "text-[#07BDFF]"
                          : "hover:text-gray-500"
                      } flex`}
                    >
                      Platform
                      <img
                        src={drop}
                        alt="drop"
                        className="self-center mt-2 ml-1"
                      />
                    </h3>
                  </Link>
                </div>
                <Link to="/studio">
                  <h3
                    className={`${
                      pageName === "studio"
                        ? "text-[#07BDFF]"
                        : "hover:text-gray-500"
                    }  `}
                  >
                    3D Modelling
                  </h3>
                </Link>
                <Link to="/plan">
                  <h3
                    className={`${
                      pageName === "pricing"
                        ? "text-[#07BDFF]"
                        : "hover:text-gray-500"
                    } `}
                  >
                    Pricing
                  </h3>
                </Link>
                <Link to="/support">
                  <h3
                    className={`${
                      pageName === "support"
                        ? "text-[#07BDFF]"
                        : " hover:text-gray-500"
                    } `}
                  >
                    Support
                  </h3>
                </Link>
                {user && (
                  <Link to="/dashboard">
                    <h3
                      className={`${
                        pageName === "dashboard"
                          ? "text-[#07BDFF]"
                          : " hover:text-gray-500"
                      }`}
                    >
                      Dashboard
                    </h3>{" "}
                  </Link>
                )}
              </div>
              {user ? (
                <button
                  onClick={handleLogout}
                  className={`text-white  ${
                    pageName === "register" && "invisible"
                  } ${
                    pageName === "login" && "invisible"
                  } rounded-[50px] btnClr lg:px-[25px] xl:px-[30px] lg:py-auto xl:py-[15px] lg:h-[40px] xl:h-[50px] lg:w-auto flex justify-center items-center`}
                >
                  <h3 className="text-[18px] font-medium tracking-[0.72px] font-roboto ">
                    Logout
                  </h3>
                </button>
              ) : (
                <Link to="/login">
                  <div
                    className={`text-white ${
                      pageName === "register" && "invisible"
                    } ${
                      pageName === "login" && "invisible"
                    } rounded-[50px] btnClr lg:px-[25px] xl:px-[30px] lg:py-auto xl:py-[15px] lg:h-[40px] xl:h-[50px] lg:w-auto flex justify-center items-center`}
                  >
                    <h3 className="text-[18px] font-medium tracking-[0.72px] font-roboto ">
                      Login
                    </h3>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        {showDropdown && (
          <div
            className={`${home && "opacity-100"} ${
              home && scrolled && "opacity-100"
            } bg-black w-[90vw] mx-auto p-[25px] flex justify-evenly`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="m-[25px]">
              <Link to="/aboutar">
                <h3
                  className={`${
                    pageName === "aboutar"
                      ? "text-[#07BDFF]"
                      : "hover:text-gray-500"
                  } text-[20px] font-medium`}
                >
                  Augmented Reality
                </h3>
                <p className="text-[16px] font-light tracking-custome mt-[10px]">
                  Try-before-you-buy solution for unparalleled <br />
                  Engagement and Sales Growth
                </p>
              </Link>
            </div>
            <div className="m-[25px]">
              <Link to="/aboutconfigurator">
                <h3
                  className={`${
                    pageName === "aboutconfigurator"
                      ? "text-[#07BDFF]"
                      : "hover:text-gray-500"
                  } text-[20px] font-medium`}
                >
                  Platform
                </h3>
                <p className="text-[16px] font-light tracking-custome mt-[10px]">
                  Explore Endless possibilities to create engaging <br />
                  experiences
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
