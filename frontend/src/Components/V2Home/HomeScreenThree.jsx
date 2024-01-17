import React from "react";
import "../style.css";

const HomeScreenThree = (props) => {
  // console.log(props);
  return (
    <>
      {props.data.map((x) => (
        <div
          className="w-full h-auto font-roboto text-white bg-black mx-auto flex flex-col justify-center items-center px-[25px] xl:px-[100px] xl:py-[100px] py-[25px] gap-[25px] xl:gap-[50px] text-center"
          key={x.id}
        >
          <h1 className="order-1 xl:order-1 mt-[25px] xl:mt-[50px] text-[18px] font-medium">
            {x.title}
          </h1>
          <h1
            className={`${
              x.id === 2 && "xl:w-[1243px] xl:px-[100px]"
            } text-[26px] xl:text-[50px] font-bold leading-[31.2px] xl:leading-[50px] order-3 xl:order-2 w-[293px] xl:w-auto`}
          >
            {x.titleHead}
          </h1>
          <p className="w-[293px] xl:w-[1258px] text-[16px] font-normal xl:text-[18px] leading-[19.2px] xl:leading-[27px] xl:mt-[-25px] order-4 xl:order-3">
            {x.desc}
          </p>
          <button
            className={`${
              x.id === 3 && "bg-[#2875FF] xl:bg-transparent"
            } px-[25px] xl:px-[30px] py-[7.5px] xl:py-[15px] text-[14px] xl:text-[18px] font-medium border border-solid border-[#0090F8] rounded-[20px] xl:rounded-[50px] order-5 xl:order-4`}
          >
            {x.btn}
          </button>
          <img
            src={x.img}
            alt="images"
            className=" w-[343px] xl:w-[1248px] h-[195.136px] xl:h-[710px] rounded-[20px] border border-solid border-[#8D8D8D] homeSecondScreenImage order-2 xl:order-5"
          />
        </div>
      ))}
    </>
  );
};

export default HomeScreenThree;
