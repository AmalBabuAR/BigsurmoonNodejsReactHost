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
  Slide6,
  SlideMob1,
  SlideMob2,
  SlideMob3,
  SlideMob4,
  SlideMob5,
  SlideMob6,
} from "../../assets/V2Home";
import "../util/swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CarouselComp = () => {
  const [activeSlot, setActiveSlot] = useState(0);

  const urls = {
    1: "https://bigsurmoon.com/editor/ModelViewer/?id=659a7c8ebe41b4fd28f249da",
    2: "https://bigsurmoon.com/editor/ModelViewer/?id=659c268abe41b4fd28f24a0c",
    3: "https://bigsurmoon.com/editor/ModelViewer/?id=65ae1c514e3deb609979a664",
    4: "https://bigsurmoon.com/editor/ModelViewer/?id=65ab560ce8c9b2d4a0a655d7",
    5: "https://bigsurmoon.com/editor/ModelViewer/?id=65492fbc23d350407c12e11a",
    6: "https://bigsurmoon.com/editor/ModelViewer/?id=65af85680dd34c73a74dad1c",
  };

  function handleViewDemo() {
    const url = urls[activeSlot];
    window.open(url, "_blank");
  }

  const style = {
    p: `text-[25px] xl:text-[36px]  font-bold leading-[25px] xl:leading-[36px]`,
    btn: `h-[30px] lg:h-[40px] xl:h-[51px] w-auto flex justify-center items-center px-[25px] lg:px-[34px]  xl:px-[30px] py-auto text-[16px] lg:text-[18px] xl:text-[18px] font-medium border-2 border-solid border-[#0090F8] rounded-[21px] lg:rounded-[50px] xl:rounded-[50px]`,
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
              alt="Automobile Configurator"
              className="object-cover swiperImg"
            />
          ) : (
            <img
              slot="1"
              src={Slide1}
              alt="Automobile Configurator"
              className="object-cover w-full h-full"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="2"
              src={SlideMob2}
              alt="Clothing Configurator"
              className="object-cover swiperImg"
            />
          ) : (
            <img
              slot="2"
              src={Slide2}
              alt="Clothing Configurator"
              className="object-cover w-full h-full"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="3"
              src={SlideMob3}
              alt="Education Configurator"
              className="object-cover swiperImg"
            />
          ) : (
            <img
              slot="3"
              src={Slide3}
              alt="Education Configurator"
              className="object-cover w-full h-full"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="4"
              src={SlideMob4}
              alt="Electronics Configurator"
              className="object-cover swiperImg"
            />
          ) : (
            <img
              slot="4"
              src={Slide4}
              alt="Electronics Configurator"
              className="object-cover w-full h-full"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="5"
              src={SlideMob5}
              alt="Gym Equipments Configurator"
              className="object-cover swiperImg"
            />
          ) : (
            <img
              slot="5"
              src={Slide5}
              alt="Gym Equipments Configurator"
              className="object-cover w-full h-full"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {window.innerWidth < 768 ? (
            <img
              slot="6"
              src={SlideMob6}
              alt="slide_image"
              className="object-cover swiperImg"
            />
          ) : (
            <img
              slot="6"
              src={Slide6}
              alt="slide_image"
              className="object-cover w-full h-full"
            />
          )}
        </SwiperSlide>
        <div className="flex flex-col items-center justify-center ">
          <div className="">
            <div className="mt-[35px] flex justify-center items-center flex-col gap-[25px]">
              {activeSlot == 1 && (
                <>
                  <p className={style.p}>Education</p>
                  <button className={style.btn} onClick={handleViewDemo}>
                    View Demo
                  </button>
                </>
              )}
              {activeSlot == 2 && (
                <>
                  <p className={style.p}>Clothing</p>
                  <button className={style.btn} onClick={handleViewDemo}>
                    View Demo
                  </button>
                </>
              )}
              {activeSlot == 3 && (
                <>
                  <p className={style.p}>Electronics</p>
                  <button className={style.btn} onClick={handleViewDemo}>
                    View Demo
                  </button>
                </>
              )}
              {activeSlot == 4 && (
                <>
                  <p className={style.p}>Gym Equipments</p>
                  <button className={style.btn} onClick={handleViewDemo}>
                    View Demo
                  </button>
                </>
              )}
              {activeSlot == 5 && (
                <>
                  <p className={style.p}>Furniture</p>
                  <button className={style.btn} onClick={handleViewDemo}>
                    View Demo
                  </button>
                </>
              )}
              {activeSlot == 6 && (
                <>
                  <p className={style.p}>Automobile</p>
                  <button className={style.btn} onClick={handleViewDemo}>
                    View Demo
                  </button>
                </>
              )}
            </div>
          </div>
          <div className=" flex justify-center items-center xl:gap-[10px] mt-[15px] w-auto">
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
