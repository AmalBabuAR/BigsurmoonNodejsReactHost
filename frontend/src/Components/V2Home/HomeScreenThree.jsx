import React from "react";
import "../style.css";

const HomeScreenThree = (props) => {
  // console.log(props);
  return (
    <>
      {props.data.map((x) => (
        <div
          className="w-full h-auto font-roboto text-white bg-black mx-auto flex flex-col justify-center items-center px-[25px] lg:px-[50px] xl:px-[100px] py-[25px] lg:py-[100px] xl:py-[100px]  gap-[25px] lg:gap-[50px] xl:gap-[50px] text-center"
          key={x.id}
        >
          <h1 className="order-1 lg:order-1 xl:order-1 mt-[25px] lg:mt-[50px] xl:mt-[50px] text-[18px] font-medium">
            {x.title}
          </h1>
          <h1
            className={`${
              x.id === 2 && "xl:w-[1243px] xl:px-[100px]"
            } text-[26px] lg:text-[50px] xl:text-[50px] font-bold leading-[31.2px] lg:leading-[50px] xl:leading-[50px] order-3 lg:order-2 xl:order-2 w-[293px] lg:w-[1064px] xl:w-auto`}
          >
            {x.titleHead}
          </h1>
          <p className="w-[293px] lg:w-[1064px] xl:w-[1258px] text-[16px] font-normal lg:text-[18px] xl:text-[18px] leading-[19.2px] lg:leading-[27px] xl:leading-[27px] lg:mt-[-25px] xl:mt-[-25px] order-4 lg:order-3 xl:order-3">
            {x.desc}
          </p>
          <button
            className={`${
              x.id === 3 && "bg-[#2875FF] lg:bg-transparent xl:bg-transparent"
            } px-[25px] lg:px-[30px] xl:px-[30px] py-[7.5px] lg:py-[15px] xl:py-[15px] text-[14px] lg:text-[18px] xl:text-[18px] font-medium border border-solid border-[#0090F8] rounded-[20px] lg:rounded-[50px] xl:rounded-[50px] order-5 lg:order-4 xl:order-4`}
          >
            {x.btn}
          </button>
          <img
            src={x.img}
            alt="images"
            className=" w-[343px] lg:w-[1064px] xl:w-[1248px] h-[195.136px] lg:h-[590.188px] xl:h-[710px] rounded-[20px] border border-solid border-[#8D8D8D] homeSecondScreenImage order-2 lg:order-5 xl:order-5"
          />
        </div>
      ))}
    </>
  );
};

export default HomeScreenThree;
