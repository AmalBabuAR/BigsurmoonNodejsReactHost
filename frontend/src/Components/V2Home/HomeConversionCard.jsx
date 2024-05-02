import React from "react";
import { ovelOne, ovelTwo } from "../../assets/V2Home";
import "../style.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeConversionCard = () => {
  return (
    <>
      <div className="w-full h-auto font-roboto text-white bg-black flex flex-col lg:flex-row xl:flex-row justify-center items-center gap-[25px] lg:gap-[64px] xl:gap-[100px] mx-auto px-[25px] py-[50px] lg:px-[50px] lg:py-[150px] xl:p-[100px] ">
        <div className="flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] lg:p-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] lg:w-[500px] xl:w-[574px] h-[434px] lg:h-[581px] xl:h-[518px]">
          <img
            src={ovelOne}
            alt="3D product visualisation and marketing events with Bigsurmoon had the highest rate of engagement ever"
            className="w-[225px] h-[89px] rounded-[15px] border border-solid border-[black]"
          />
          <p className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
            Noor <br />
            A.E CEO, Hawaii Store
          </p>

          <h1 className="xl:text-[22px] lg:text-[22px] text-[16px] leading-[20px] lg:leading-[33px] xl:leading-[33px] tracking-[0.88px] self-stretch">
            We had a such a great experience with Bigsurmoon team for our
            website's 3D product catalogue! You guys paid such a close attention
            too the details and made our product look amazing. You beautifully
            captured the essence of our products in 3D model. We are very
            satisfied with your work.
          </h1>
        </div>
        <div className="flex flex-col justify-start items-start gap-[15px] px-[25px] py-[50px] lg:p-[50px] xl:p-[50px] border border-solid rounded-[15px] w-[343px] lg:w-[500px] xl:w-[574px] h-[453px] lg:h-[581px] xl:h-[518px]">
          <img
            src={ovelTwo}
            alt="Custom requirements and suggestions are handled well by Bigsurmoon"
            className="w-[225px] h-[89px] rounded-[15px] border border-solid border-[black]"
          />
          <p className="text-[14px] leading-[16.616px] tracking-[0.56px] opacity-75">
            Sharvin M P <br />
            CEO, Euro Guard Hysquare
          </p>

          <h1 className="xl:text-[22px] lg:text-[22px] text-[16px] leading-[20px] lg:leading-[33px] xl:leading-[33px] tracking-[0.88px] self-stretch">
            Working on 3D platform was an absolute breeze and with tons of
            customisation options. Our products are showcased in such a way that
            we are having our most engagement sessions ever. It really helped
            conveying the true story of our products and creating brand
            awareness. Great support from the team too.
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomeConversionCard;
