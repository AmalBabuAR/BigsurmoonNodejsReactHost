import React from "react";
import bg from "../assets/404/404.svg";
import img from "../assets/404/errorIcon.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const naviagate = useNavigate()
  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-roboto">
      <img src={bg} alt="Bigsurmoon" className="absolute -z-10" />
      <div>
        <img src={img} alt="Bigsurmoon" className="" />
      </div>
      <div className="flex flex-col top-[40vh] items-end right-0 absolute mr-[10vw]">
        <h2 className="text-[48px] font-bold ">Are you lost?</h2>
        <p className="mt-[28px] text-right text-[24px] font-medium">
          Looks like the page you were looking <br />
          for is not found.
        </p>
        <button
        onClick={() => naviagate('/')}
        className="mt-[67px] text-[20px] font-medium tracking-widest w-[225px] h-[68px] border-2 border-solid rounded-[24px]">
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Error;
