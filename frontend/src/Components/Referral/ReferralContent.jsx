import React, { useEffect, useState } from "react";
import logo from "../../assets/Referral/logo.png";
import check from "../../assets/Referral/Icon.svg";
import circle from "../../assets/Referral/circle.svg";
import LI from "../../assets/Referral/LinkedIN.png";
import YT from "../../assets/Referral/youtube.png";
import img1 from "../../assets/Referral/img.png";
import icon1 from "../../assets/Referral/sendIcon.svg";
import icon2 from "../../assets/Referral/shoppingIcon.svg";
import icon3 from "../../assets/Referral/reffIcon.svg";
import modelPic from "../../assets/Referral/modal1.png";
import modelMob from "../../assets/Referral/modalMob1.png";
import modelPic2 from "../../assets/Referral/model2.png";
import { isEmail, isEmpty } from "../../utils/validation";
import axios from "axios";
import ReferralTermsAndCondition from "./ReferralTermsAndCondition";

const ReferralContent = () => {
  const [model, setModel] = useState(false);
  const [successModel, setSuccessModel] = useState(false);
  const [terms, setTerms] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const link = {
    youTube: "https://www.youtube.com/channel/UCBKhKN-gaz0AT3tEEucIakw",
    linkedIN: "https://www.linkedin.com/company/91409077/admin/feed/posts/",
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleDataReceived = (data) => {
    setTerms(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    if (isEmpty(email)) {
      setError("Please Fill the field");
    } else if (!isEmail(email)) {
      setError("Invalid Email");
    }
    try {
      const res = await axios.post("api/ref", {
        email,
      });
      if (res.data.success) {
        setModel(false);
        setSuccessModel(true);
      } else {
        setError(res.data.message);
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    console.log("reaxched");
  };

  useEffect(() => {
    const handleModelEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        setModel(false);
      }
    };

    const handleSuccessModelEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        setSuccessModel(false);
      }
    };
    const handleTermsEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        setTerms(false);
      }
    };

    if (model) {
      document.addEventListener("keydown", handleModelEscapeKeyPress);
    }

    if (successModel) {
      document.addEventListener("keydown", handleSuccessModelEscapeKeyPress);
    }

    if (terms) {
      document.addEventListener("keydown", handleTermsEscapeKeyPress);
    }
  }, [model, successModel, terms]);

  return (
    <>
      <div className="h-screen mx-auto w-screen py-[70px] px-[27px] lg:px-[108px] flex flex-col lg:flex-row justify-between lg:justify-center lg:gap-[15vw] gap-10 overflow-x-hidden font-inter">
        <div className="flex flex-col gap-[33px] lg:gap-[50px]">
          <img
            src={logo}
            alt="Bigsurmoon"
            className="w-[105px] lg:w-[250px] h-[17px] lg:h-[41px] "
          />
          <div className="text-[30px] lg:text-[80px] leading-[43px] lg:leading-[97px] font-bold ">
            <h1>Referral Program</h1>
            <h1 className="text-[#163ED4]">Suggest & Earn</h1>
          </div>
          <div className="flex flex-col gap-[10px] lg:gap-[17px] text-[#323232] font-medium text-[12px] lg:text-[28px] leading-[30px] lg:leading-[60px]">
            <div className="flex items-center gap-[18px] lg:gap-[50px]">
              <img src={check} alt="check" className="hidden lg:block" />
              <img src={circle} alt="circle" className=" lg:hidden" />
              <p>Extensive milestone achievements</p>
            </div>
            <div className="flex items-center gap-[18px] lg:gap-[50px]">
              <img src={check} alt="check" className="hidden lg:block" />
              <img src={circle} alt="circle" className=" lg:hidden" />
              <p>INR 50,000 or more on Enterprise referrals</p>
            </div>
            <div className="flex items-center gap-[18px] lg:gap-[50px]">
              <img src={check} alt="check" className="hidden lg:block" />
              <img src={circle} alt="circle" className=" lg:hidden" />
              <p>Free access to Webinars </p>
            </div>
          </div>
          <div className="hidden gap-[15px] items-center lg:flex">
            <img
              onClick={() => window.open(link.linkedIN, "_blank")}
              src={LI}
              alt="LinkedIN"
              className="cursor-pointer"
              width="62px"
              height="59px"
            />
            <img
              onClick={() => window.open(link.youTube, "_blank")}
              src={YT}
              alt="Youtube"
              className="cursor-pointer"
              width="60px"
              height="54px"
            />
          </div>
        </div>
        <div className="mt-[20px] lg:mt-0 rounded-[32px] shadow-3xl p-[21px] lg:p-[30px] flex flex-col items-center">
          <h1 className="mb-[10px] text-[16px] lg:text-[28px] font-bold leading-[40px] text-[#001246]">
            10% Every month
          </h1>
          <img
            src={img1}
            alt="img"
            className="h-[179px] lg:h-[240px] w-[311px] lg:w-[460px]"
          />
          <div className="flex flex-col gap-[20px] lg:gap-[18px] text-[#001246] text-[12px] lg:text-[18px] font-medium leading-[15px] lg:leading-[20px]">
            <div className="flex items-center gap-[20px] mt-[22px] lg:mt-[20px]">
              <img src={icon1} alt="" />
              <p className="">
                Invite your referrals to <br className="lg:hidden" />{" "}
                Bigsurmoon.
              </p>
            </div>
            <div className="flex items-center gap-[20px]">
              <img src={icon2} alt="" />
              <p>
                Your Referral gets 30% off for the <br className=" lg:hidden" />
                first 3 <br className="hidden lg:block" /> months.
              </p>
            </div>
            <div className="flex items-center gap-[20px]">
              <img src={icon3} alt="" />
              <p>
                You get 10% every month for every referral{" "}
                <br className=" lg:hidden" /> that
                <br className="hidden lg:block" /> makes a purchase.
              </p>
            </div>
          </div>
          <h1
            onClick={() => setTerms(!terms)}
            className="mt-[18px] text-[#001246] text-[12px] lg:text-[16px] font-semibold leading-[24px] underline cursor-pointer"
          >
            Terms & Conditions
          </h1>
          <button
            onClick={() => setModel(!model)}
            className="mt-[18px] w-[266px] lg:w-[356px] px-[32px] py-[13px] lg:py-[20px] bg-[#001246] text-white text-[14px] lg:text-[18px] font-semibold leading-[24px] rounded-[4px] shadow-md"
          >
            Apply now
          </button>
        </div>
        <div className="flex gap-[15px] items-center lg:hidden mt-[35px]">
          <img
            onClick={() => window.open(link.linkedIN, "_blank")}
            src={LI}
            alt="LinkedIN"
            width="34px"
            height="32px"
          />
          <img
            onClick={() => window.open(link.youTube, "_blank")}
            src={YT}
            alt="Youtube"
            width="32px"
            height="30px"
          />
        </div>
      </div>
      {model && (
        <div className="fixed inset-0 flex justify-center z-50 items-center bg-black text-white bg-opacity-80">
          <div className="bg-[#ededef] w-[351px] lg:w-[746px] h-[422px] lg:h-[322px] text-black rounded-[20px] lg:rounded-[24px] lg:pl-[40px] lg:pr-[20px] flex flex-col lg:flex-row lg:justify-between items-center font-inter gap-[20px] lg:gap-0">
            <div className="">
              <img src={modelPic} alt="" className="hidden lg:block " />
              <img
                src={modelMob}
                alt=""
                className="lg:hidden rounded-t-[20px]"
              />
            </div>
            <div className="flex flex-col gap-[17px]">
              <h1 className="text-[14px] lg:text-[17px] font-bold">
                Straight from our desk, to your inbox.
              </h1>
              <h1 className="text-[10px] lg:text-[12px] font-normal">
                Subscribe to our newsletter
              </h1>
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center"
              >
                <input
                  value={email}
                  onChange={handleEmailChange}
                  type="email"
                  className="h-[42px] bg-[#ededef] w-full px-[14px]  text-[12px]"
                  placeholder="Your Email"
                />
                <button
                  type="submit"
                  className="w-[87px] px-[17px] text-[11px] h-[42px] text-white  text-center bg-[#163ED4] rounded-r-[12px] "
                >
                  Subscribe
                </button>
              </form>
              {error && (
                <p className="text-red-500 mt-[-15px] text-[12px] ml-3">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {successModel && (
        <div className="fixed inset-0 flex justify-center z-50 items-center bg-black text-white bg-opacity-80">
          <div className="bg-[#fff] w-[351px] lg:w-[716px] h-[415px] lg:h-[285px] text-black rounded-[24px] px-5 lg:pl-[40px] lg:pr-[20px] flex flex-col gap-[29px] lg:gap-0 lg:flex-row items-center font-inter">
            <div>
              <img src={modelPic2} alt="" />
            </div>
            <div className="text-[#394452] flex flex-col gap-[20px] lg:gap-[15px] lg:ml-[-40px]">
              <h1 className="text-[36px] font-bold leading-[37px] ">
                Stay tuned
              </h1>
              <p className="text-[10px] leading-[16px]">
                Thank you for applying to referral program. Get the latest{" "}
                <br />
                updates on your referrals.{" "}
              </p>
              <button
                onClick={() => window.open("/", "_blank")}
                className="w-[79px] h-[39px] rounded-r-[12px] rounded-bl-[19px] bg-[#163ED4] text-white self-end text-[12px]"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      )}

      {terms && (
        <ReferralTermsAndCondition
          terms={terms}
          onDataReceived={handleDataReceived}
        />
      )}
    </>
  );
};

export default ReferralContent;
