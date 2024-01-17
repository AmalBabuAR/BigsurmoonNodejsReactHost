import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  SlideMob1,
  SlideMob2,
  SlideMob3,
  SlideMob4,
  SlideMob5,
} from "../../assets/V2Home";
import "../util/swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselComp = () => {
  const [activeSlot, setActiveSlot] = useState(0);

  const style = {
    p: `text-[25px] xl:text-[36px]  font-bold leading-[25px] xl:leading-[36px]`,
    btn: `px-[25px] xl:px-[30px] py-[8px] xl:py-[15px] text-[16px] xl:text-[18px] font-medium border border-solid border-[#0090F8] rounded-[50px]`,
  };
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        onSlideChange={(swiper) => {
          setActiveSlot(
            swiper.slides[swiper.activeIndex]
              .querySelector("img")
              .getAttribute("slot")
          );
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-paginationss", clickable: true }}
        navigation={{
          nextEl: ".forward",
          prevEl: ".prevv",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="1"
              src={SlideMob1}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              slot="1"
              src={Slide1}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="2"
              src={SlideMob2}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              slot="2"
              src={Slide2}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="3"
              src={SlideMob3}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              slot="3"
              src={Slide3}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="4"
              src={SlideMob4}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              slot="4"
              src={Slide4}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="5"
              src={SlideMob5}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              slot="5"
              src={Slide5}
              alt="slide_image"
              className="w-full h-full object-cover"
            />
          )}
        </SwiperSlide>
        <div className="flex justify-center items-center flex-col ">
          <div className="">
            <div className="mt-[35px] flex justify-center items-center flex-col gap-[25px]">
              {activeSlot == 1 && (
                <>
                  <p className={style.p}>Automobile</p>
                  <button className={style.btn}>View Demo</button>
                </>
              )}
              {activeSlot == 2 && (
                <>
                  <p className={style.p}>Clothing</p>
                  <button className={style.btn}>View Demo</button>
                </>
              )}
              {activeSlot == 3 && (
                <>
                  <p className={style.p}>Education</p>
                  <button className={style.btn}>View Demo</button>
                </>
              )}
              {activeSlot == 4 && (
                <>
                  <p className={style.p}>Electronics</p>
                  <button className={style.btn}>View Demo</button>
                </>
              )}
              {activeSlot == 5 && (
                <>
                  <p className={style.p}>Furniture & Home</p>
                  <button className={style.btn}>View Demo</button>
                </>
              )}
            </div>
          </div>
          <div className=" flex justify-center items-center xl:gap-[10px] mt-[15px] w-[190px]">
            <div>
              {" "}
              <IoArrowBackOutline className="text-[25px] xl:text-[45px] text-[#999999] cursor-pointer prevv" />
            </div>
            <div className="swiper-paginationss w-[200px]"></div>
            <div>
              {" "}
              <IoArrowForwardOutline className="text-[25px] xl:text-[45px] text-[#999999] cursor-pointer forward" />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselComp;
