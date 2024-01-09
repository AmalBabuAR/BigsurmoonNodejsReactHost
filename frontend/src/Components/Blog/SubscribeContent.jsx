import React from "react";

const SubscribeContent = () => {
  return (
    <>
      <div className="bg-[#070707] xl:bg-[#242424] w-full mx-auto text-white font-roboto overflow-hidden">
        <div className="xl:hidden w-[343px] h-[2px] bg-white mx-auto" />
        <div className="max-w-[390px] xl:max-w-[1920px] mx-auto flex flex-col xl:flex-row justify-center gap-[50px] pt-[66px] pb-[50px] xl:py-[100px] xl:px-[194px]">
          <div className="flex flex-col gap-[25px] xl:gap-[10px] text-center xl:text-start px-[30px] xl:px-0">
            <h1 className="text-[29px] xl:text-[42px] font-semibold leading-[29px]  xl:leading-[41.869px] tracking-[1.68px]">
              Subscribe for new content
            </h1>
            <p className="text-[16px] font-normal leading-[22.4px] xl:tracking-[0.64px]">
              If you want relevant updates occasionally, sign up for the private
              newsletter. Your email is never shared.{" "}
            </p>
          </div>
          <div className="flex xl:gap-[50px] mx-auto">
            <button className="w-[342px] h-[41px] xl:h-[51px] rounded-[51px] border-solid border-white xl:border-[#267BFF] border-[1px] xl:border-[2px] text-left pl-6 text-[12px] xl:text-[16px] font-medium xl:font-normal xl:text-[#B7B7B7]">
              Enter your email...
            </button>
            <button className="w-[100px] xl:w-[129px]  h-[41px] xl:h-[51px] text-center rounded-[51px] text-[12px] xl:text-[18px] font-medium leading-[0.72px] btnClr ml-[-100px] xl:ml-0">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className=""></div>
    </>
  );
};

export default SubscribeContent;
