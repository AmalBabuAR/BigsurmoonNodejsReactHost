import React from "react";
import { privacyPolicyData } from "./PrivacyPolicyData";

const PrivacyPolicyContent = () => {
  return (
    <div className="mx-auto w-full  h-full bg-black text-white">
      <div className="py-32 lg:py-40  mx-auto w-[80vw] h-full flex flex-col justify-centen text-center overflow-hidden font-roboto">
        <h1 className="text-[28px] font-bold">Privacy Policy | Bigsurmoon</h1>
        <p className="text-[18px] mb-8 font-bold">
          Last updated: July 1st, 2023
        </p>
        {privacyPolicyData.map((p) => (
          <div className="text-left mt-5" key={p.id}>
            <h4 className="text-[19px] font-semibold mb-5 uppercase">
              {p.title}
            </h4>
            <p style={{ whiteSpace: "pre-line" }} className="text-[17px]">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
