import React from "react";
import { referralTermsData } from "./ReferralTermsData";
import close from "../../assets/Referral/close.svg";

const ReferralTermsAndCondition = (props) => {
  const handleCloseButton = () => {
    sendDataToParent(!props.terms);
  };
  const sendDataToParent = (data) => {
    props.onDataReceived(data);
  };
  return (
    <div>
      <div className="fixed inset-0 flex justify-center z-50 items-center bg-black text-white bg-opacity-80">
        <div className="bg-black lg:w-[90vw] h-[99vh] lg:h-[90vh] lg:rounded-3xl px-[5vw] py-[8vh] overflow-auto ">
          <div className="flex justify-between items-start">
            <h1 className="text-[40px] font-bold">
              Referral Program: <br />
              Suggest & Earn
            </h1>
            <img
              onClick={handleCloseButton}
              src={close}
              alt="close"
              className="cursor-pointer mt-[-40px] lg:mt-0"
            />
          </div>
          <h1 className="mt-6">
            This program is designed exclusively for digital marketers,
            Influencers, web developers, advertisers, web designers, and
            individuals with similar expertise who wish to refer others to our
            services. Please read these terms and conditions carefully before
            participating in the program.
          </h1>
          {referralTermsData.map((p) => (
            <div className="text-left mt-5" key={p.id}>
              <h1 className="text-[19px] font-semibold mb-[1px] uppercase">
                {p.title}
              </h1>
              <p style={{ whiteSpace: "pre-line" }} className="text-[17px]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferralTermsAndCondition;
