import React from "react";
import { ARCard } from "../../assets/data/data";
import img1 from "../../assets/Aboutar/imageContainer/imageContainer1.png";
import img2 from "../../assets/Aboutar/imageContainer/imageContainer2.png";
import img3 from "../../assets/Aboutar/imageContainer/imageContainer3.png";

const ARImageContainer = () => {
  return (
    <div className="mx-auto w-full overflow-hidden text-white bg-black">
      {/* image container */}
      <div className="my-[75px] lg:my-[200px] flex flex-col mx-[20px] lg:mx-[78px] gap-y-[100px] font-outfit text-[25px] lg:text-[52px] leading-[24px] lg:leading-[51px] font-bold">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[160px] justify-center items-center">
          <div>
            <img
              src={img1}
              alt="imageContainer1.png"
              className="w-[350px] lg:w-[611px] h-[217px] lg:h-[381px]"
            />
          </div>
          <div>
            <h1>
              Immersive <br /> Augmented Reality
            </h1>
            <h1 className="mt-[18px] font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              Augmented reality reshapes interaction and informed <br /> buying.
              Immersive try-before-you-buy for confident <br />
              purchases
            </h1>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[160px] justify-center items-center">
          <div>
            <h1>
              Real-world scale <br /> and fit
            </h1>
            <h1 className="mt-[18px] font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              Tailored to fit in exact dimension as of real-world , Our <br />
              technology ensures that every product you see in <br /> augmented
              reality matches its real-world scale and fit
            </h1>
          </div>
          <div className="order-first lg:order-last">
            <img
              src={img2}
              alt="imageContainer1.png"
              className="w-[350px] lg:w-[611px] h-[217px] lg:h-[381px]"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[160px] justify-center items-center">
          <div>
            <img
              src={img3}
              alt="imageContainer1.png"
              className="w-[350px] lg:w-[611px] h-[217px] lg:h-[381px]"
            />
          </div>
          <div>
            <h1>
              Try all Variations in <br /> your space
            </h1>
            <h1 className="mt-[18px] font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              Configure your variations and view in Augmented Reality. <br />{" "}
              Creating new possibilities for configurations and how it <br />{" "}
              looks in your space, for a faster and easier decision <br />{" "}
              making
            </h1>
          </div>
        </div>
      </div>
      {/* card container */}
      <div className="flex justify-center items-center flex-col mt-[50px] lg:mt-0 mb-[50px] lg:mb-[75px]">
        <h1 className="font-outfit text-[30px] lg:text-[39px] leading-[45px]  lg:leading-[29px] font-semibold lg:font-bold text-center">
          Augmented Reality <br className="lg:hidden" /> Benefits to the Fullest{" "}
          <br className="lg:hidden" /> with Bigsurmoon
        </h1>
        <div className="mt-[50px] lg:mt-[60px] flex flex-col lg:flex-row gap-[25px] lg:gap-[20px]">
          {ARCard.map((c) => (
            <div
              className="w-[302px] h-auto py-[20px] px-[20px] lg:p-0 lg:h-[450px] rounded-[10px] border border-solid border-[#4767D8] flex justify-start items-center flex-col text-center font-outfit bg-black transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
              key={c.id}
            >
              <img
                src={c.img}
                alt={c.title}
                className="lg:pt-[43px]"
              />
              <h1 className="pt-[15px] lg:pt-[34px] text-[20px] lg:text-[22px] leading-[30px] lg:leading-[29px] font-bold">
                {c.title} <br />
                {c.titleBR}
              </h1>
              <h1 className="pt-[15px] lg:pt-[31px] text-[14px] lg:text-[18px] leading-[21px] lg:leading-[20px] font-normal lg:px-[47px] tracking-wide">
                {c.desc}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ARImageContainer;
