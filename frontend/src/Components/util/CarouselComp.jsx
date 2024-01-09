import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "../../assets/V2Home";
import "../util/swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselComp = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
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
          <img src={Slide1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide5} alt="slide_image" />
        </SwiperSlide>
        <div className="flex justify-center items-center">
          <div className=" flex justify-center items-center xl:gap-[10px] mt-3 w-[190px]">
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
