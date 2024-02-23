import React from "react";
import { V2HomeScreen2Data } from "../../assets/data/data";

const HomeScreenTwo = () => {
  return (
    <div className="w-full h-auto bg-black pt-[50px] lg:pt-[150px] xl:pt-[200px] pb-[50px] lg:pb-[100px] xl:pb-[100px] mx-auto px-[24px] lg:px-[50px] xl:px-auto text-white font-roboto flex justify-center items-center flex-col  lg:gap-[60px] xl:gap-[60px]">
      <h4 className=" text-[30px] text-center lg:text-[42px] xl:text-[42px] font-bold leading-[29.906px] lg:leading-[41.869px] xl:leading-[41.869px]">
        Empowering Businesses <br className="lg:hidden xl:hidden" /> for better
        Growth
      </h4>
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center self-start lg:self-auto xl:select-auto gap-[25px] lg:gap-[37px] xl:gap-[60px]">
        {V2HomeScreen2Data.map((x) => (
          <div
            className="py-[25px] pl-0 pr-[25px] mx-auto lg:p-[25px] xl:p-[25px] flex flex-col justify-start items-start gap-[25px]"
            key={x.id}
          >
            <img src={x.img} alt="iconone" className={x.imgSpeck} />
            <h4 className="text-[30px] font-bold leading-[29.906px] tracking-[1.2px]">
              {x.title}
            </h4>
            <p className="w-[318px] lg:w-[280px] xl:w-[326px] lg:h-[120px] text-[16px] font-normal leading-[20px] lg:tracking-[0.64px] xl:tracking-[0.64px]">
              {x.dec}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreenTwo;
