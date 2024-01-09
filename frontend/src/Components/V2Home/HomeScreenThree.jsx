import React from "react";

const HomeScreenThree = (props) => {
  console.log(props);
  return (
    <>
      {props.data.map((x) => (
        <div
          className="w-full h-auto font-roboto text-white bg-black mx-auto flex flex-col justify-center items-center px-[25px] xl:px-[100px] gap-[25px] xl:gap-[50px] text-center"
          key={x.id}
        >
          <h1 className="mt-[25px] xl:mt-[50px] text-[18px] font-medium">
            {x.title}
          </h1>
          <h1 className="text-[26px] xl:text-[50px] font-bold leading-[26px] xl:leading-[50px]">
            {x.titleHead}
          </h1>
          <p className="w-[293px] xl:w-[1258px] text-[16px] xl:text-[18px] leading-[24px] xl:leading-[27px]">
            {x.desc}
          </p>
          <button className="px-[25px] xl:px-[30px] py-[7.5px] xl:py-[15px] text-[10px] xl:text-[18px] font-medium border border-solid border-[#0090F8] rounded-[20px] xl:rounded-[50px]">
            {x.btn}
          </button>
          <img
            src={x.img}
            alt="images"
            className="mb-[25px] xl:mb-[100px] w-[343px] xl:w-[1248px] h-[195.136px] xl:h-[710px] rounded-[20px]"
          />
        </div>
      ))}
    </>
  );
};

export default HomeScreenThree;
