import React from "react";
import logo from "../assets/Logos/logo.gif";
import arrowup from "../assets/Arrows/Arrowup.svg";
import { useNavigate } from "react-router-dom";
import {
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";
const Footer = () => {
  const navigate = useNavigate();
  const youtubeLink =
    "https://www.youtube.com/channel/UCBKhKN-gaz0AT3tEEucIakw";
  const linkedInLink =
    "https://www.linkedin.com/company/91409077/admin/feed/posts/";
  const twitterLink = "https://twitter.com/BigsurmoonLtd";

  const handleClick = () => {
    console.log("upbutton");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="bg-[#0A142F]">
        <div className="bg-[#0A142F] max-w-[1440px] mx-auto font-roboto p-4 text-white text-sm md:hidden ">
          <div className="flex justify-between px-3 mb-5">
            <div onClick={() => navigate("/")}>
              <img src={logo} alt="logo" className="w-35 h-7 cursor-pointer" />
            </div>
            <div onClick={handleClick}>
              <img src={arrowup} className="w-8" />
            </div>
          </div>
          <div className="px-4 flex justify-between opacity-70 ">
            <div>
              <h3 className="text-[10px] font-semibold">Resources</h3>
              <h3 className="text-[10px]">Blogs</h3>
              <h3 className="text-[10px]">F.A.Q</h3>
              <div className="flex gap-4 mt-10">
                <span onClick={() => window.open(linkedInLink, "_blank")}>
                  <SlSocialLinkedin />
                </span>
                <span onClick={() => window.open(twitterLink, "_blank")}>
                  <SlSocialTwitter />
                </span>
                <span onClick={() => window.open(youtubeLink, "_blank")}>
                  <SlSocialYoutube />
                </span>
              </div>
            </div>

            <div></div>
            <div className="text-[10px] font-extralight leading-5 text-right">
              <h3
                onClick={() => navigate("/support")}
                className="cursor-pointer"
              >
                Contact
              </h3>
              <h3>Careers</h3>
              {/* <h3>About</h3> */}
              <h3
                onClick={() => navigate("/privacyPolicy")}
                className="cursor-pointer"
              >
                Privacy Policy
              </h3>
              <h3
                onClick={() => navigate("/termsAndCondition")}
                className="cursor-pointer"
              >
                Terms & <br />
                conditions
              </h3>
            </div>
          </div>
          <div className="flex justify-center mt-4 px-3 opacity-70">
            <div className="opacity-70">
              <h2 className="text-[10px] font-extralight ">
                © 2023 Bigsurmoon pvt ltd. all rights reserved.
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-[#0A142F] max-w-[1440px] mx-auto font-roboto p-4 text-white hidden md:block text-sm lg:hidden ">
          <div className="flex w-[700px] justify-between mx-auto  px-3 mb-8">
            <div onClick={() => navigate("/")}>
              <img src={logo} alt="logo" className="w-40 cursor-pointer" />
            </div>
            <div onClick={handleClick}>
              <img src={arrowup} className="w-8" />
            </div>
          </div>
          <div className="flex w-[680px] mx-auto  justify-between">
            <div className="opacity-70">
            <h3
                onClick={() => navigate("/support")}
                className="mb-1 cursor-pointer"
              >
                Contact
              </h3>
              <h3 className="mb-1">Careers</h3>
              <h3
                onClick={() => navigate("/privacyPolicy")}
                className="mb-1 cursor-pointer"
              >
                Privacy Policy
              </h3>
              <h3
                onClick={() => navigate("/termsAndCondition")}
                className="mb-1 cursor-pointer"
              >
                Terms & <br />
                Conditions
              </h3>
            </div>
            <div className="opacity-70">
              <h3 className="mb-1 font-bold">Resources</h3>
              <h3 className="mb-1">F.A.Q</h3>
              <h3 className="mb-1">Blogs</h3>
            </div>
            <div className="opacity-70">
            <h3
                onClick={() => window.open(linkedInLink, "_blank")}
                className="mb-1 cursor-pointer"
              >
                LinkedIn
              </h3>
              <h3
                onClick={() => window.open(twitterLink, "_blank")}
                className="mb-1 cursor-pointer"
              >
                Twitter
              </h3>
              <h3
                onClick={() => window.open(youtubeLink, "_blank")}
                className="mb-1 cursor-pointer"
              >
                Youtube
              </h3>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-center  text-sm  opacity-70 text-[#C5C5C5]">
              © 2023 Bigsurmoon pvt ltd. all rights reserved.
            </h3>
          </div>
        </div>

        <div className="bg-[#0A142F] max-w-[1440px] mx-auto font-roboto p-4 text-white hidden lg:block ">
          <div className="px-20 pt-20 pb-4">
            <div className="flex justify-between">
              <div onClick={() => navigate("/")}>
                <img src={logo} alt="logo" className="w-52 cursor-pointer" />
              </div>
              <div className="opacity-70">
              <h3
                  onClick={() => navigate("/support")}
                  className="mb-[9px] cursor-pointer"
                >
                  Contact
                </h3>
                <h3 className="mb-[9px] cursor-none">Careers</h3>
                <h3
                  onClick={() => navigate("/privacyPolicy")}
                  className="mb-[9px] cursor-pointer"
                >
                  Privacy Policy
                </h3>
                <h3
                  onClick={() => navigate("/termsAndCondition")}
                  className="mb-[9px] cursor-pointer"
                >
                  Terms & <br />
                  Conditions
                </h3>
              </div>
              <div className="opacity-70 ">
                <h3 className="mb-[9px] font-bold">Resources</h3>
                <h3 className="mb-[9px]">F.A.Q</h3>
                <h3 className="mb-[9px]">Blogs</h3>
              </div>
              <div className="opacity-70">
              <h3
                  onClick={() => window.open(linkedInLink, "_blank")}
                  className="mb-[9px] cursor-pointer"
                >
                  LinkedIn
                </h3>
                <h3
                  onClick={() => window.open(twitterLink, "_blank")}
                  className="mb-[9px] cursor-pointer"
                >
                  Twitter
                </h3>
                <h3
                  onClick={() => window.open(youtubeLink, "_blank")}
                  className="mb-[9px] cursor-pointer"
                >
                  Youtube
                </h3>
              </div>
              <div onClick={handleClick} className="w-16 cursor-pointer">
                <img src={arrowup} className="w-10" />
              </div>
            </div>
            <div className="mt-[123px]">
              <h3 className="text-center text-sm opacity-70 text-[#C5C5C5]">
                © 2023 Bigsurmoon pvt ltd. all rights reserved.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
