import React from "react";
import logo from "../assets/Logos/logo.gif";
import arrowup from "../assets/Arrows/Arrowup.svg";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from "react-icons/sl";
const Footer = () => {
  return (
    <>
      <div className="bg-[#0A142F]">
        <div className="bg-[#0A142F] max-w-[1440px] mx-auto font-roboto p-4 text-white text-sm md:hidden ">
          <div className="flex justify-between px-3 mb-5">
            <div>
              <img src={logo} alt="logo" className="w-35 h-7" />
            </div>
            <div>
              <img src={arrowup} className="w-8" />
            </div>
          </div>
          <div className="px-3 flex justify-between opacity-70 ">
            <div>
              <h3 className="text-[10px] font-extralight leading-5">
                47/785 D1,
                <br />
                F Tower, East Ponnurunni,
                <br /> Vyttila, Kochi, Kerala <br /> 682028
              </h3>
            </div>
            <div className="text-[10px] font-extralight leading-5 text-right">
              <h3>About</h3>
              <h3>Privacy Policy</h3>
              <h3> Terms and conditions</h3>
              <h3>Careers</h3>
              <h3>Contact</h3>
            </div>
          </div>
          <div className="flex justify-between mt-4 px-3 opacity-70">
            <div className="opacity-70">
              <h2 className="underline text-[10px] font-extralight underline-offset-4">(+91) 7995-925304</h2>
            </div>
            <div className="flex gap-4">
              <span>
                <SlSocialInstagram />
              </span>
              <span>
                <SlSocialFacebook />
              </span>
              <span>
                <SlSocialLinkedin />
              </span>
              <span>
                <SlSocialTwitter />
              </span>
            </div>
          </div>
          <div className="mt-3 opacity-70 px-3">
            <h3 className="text-[10px] opacity-70 font-extralight underline underline-offset-4">support@bigsurmoon.com</h3>
          </div>
          <div>
            <h3 className=" flex justify-center mt-5 opacity-70 text-[9px] font-extralight">
              © 2023 Bigsurmoon Pvt. Ltd. All rights reserved.
            </h3>
          </div>
        </div>

        <div className="bg-[#0A142F] max-w-[1440px] mx-auto font-roboto p-4 text-white hidden md:block text-sm lg:hidden ">
          <div className="flex w-[700px] justify-between mx-auto  px-3 mb-8">
            <div>
              <img src={logo} alt="logo" className="w-40 " />
            </div>
            <div>
              <img src={arrowup} className="w-8" />
            </div>
          </div>
          <div className="flex w-[680px] mx-auto  justify-between">
            <div className="opacity-70">
              <h3>
                12/514 Peringala <br />
                Ernakulam, India <br />
                Pin - 683565
              </h3>
            </div>
            <div className="opacity-70">
              <h3 className="mb-1">About</h3>
              <h3 className="mb-1">Privacy Policy</h3>
              <h3 className="mb-1">Terms&Conditions</h3>
              <h3 className="mb-1">Careers</h3>
              <h3 className="mb-1">Contact</h3>
            </div>
            <div className="opacity-70">
              <h3 className="mb-1">LinkedIn</h3>
              <h3 className="mb-1">Twitter</h3>
              <h3 className="mb-1">Instagram</h3>
              <h3 className="mb-1">Youtube</h3>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-between opacity-70  w-[680px] items- mx-auto mt-5">
              <h2 className="underline">(+91) 7995-925304</h2>
              <h3 className="pt-4 underline">support@bigsurmoon.com</h3>
            </div>
            <div className="mt-3 opacity-70 flex justify-center g"></div>{" "}
            <h3 className="text-center  text-sm  opacity-70">
              © 2023 Bigsurmoon pvt ltd. all rights reserved.
            </h3>
          </div>
        </div>

        <div className="bg-[#0A142F] max-w-[1440px] mx-auto font-sans p-4 text-white hidden lg:block ">
          <div className="p-20">
            <div className="  flex justify-between">
              <div>
                <img src={logo} alt="logo" className="w-52" />
              </div>
              <div className="opacity-90">
                <h3>
                  12/514 Peringala <br />
                  Ernakulam, India <br />
                  Pin - 683565
                </h3>
              </div>
              <div className="opacity-70">
                <h3 className="mb-1">About</h3>
                <h3 className="mb-1">Privacy Policy</h3>
                <h3 className="mb-1">Terms&Conditions</h3>
                <h3 className="mb-1">Careers</h3>
                <h3 className="mb-1">Contact</h3>
              </div>
              <div className="opacity-70">
                <h3 className="mb-1">LinkedIn</h3>
                <h3 className="mb-1">Twitter</h3>
                <h3 className="mb-1">Instagram</h3>
                <h3 className="mb-1">Youtube</h3>
              </div>
              <div className="w-16">
                <img src={arrowup} className="w-10" />
              </div>
            </div>
            <div className="flex flex-col justify-between w-[500px] items- mx-auto mt-5">
              <h2 className="underline underline-offset-8 opacity-90">
                (+91) 7995-925304
              </h2>
              <h3 className="pt-4 underline underline-offset-8 opacity-90">
                support@bigsurmoon.com
              </h3>
            </div>
            <div className="mt-[-19px] opacity-70 flex justify-center g"></div>{" "}
            <h3 className="text-center text-sm pl-[345px] opacity-70">
              © 2023 Bigsurmoon pvt ltd. all rights reserved.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
