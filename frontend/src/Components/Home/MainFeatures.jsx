import React from "react";
import img1 from "../../assets/Aboutar/imageContainer/imageContainer1.png";
import img2 from "../../assets/Home/mainFeatures/image2.png";
import img3 from "../../assets/Home/mainFeatures/image3.png";
import img4 from "../../assets/Home/mainFeatures/image4.png";


const MainFeatures = () => {
  
  return (
    <div className="mx-auto w-full mt-[-2px] lg:mt-0 overflow-hidden text-white bg-[#0B0E1B]">
      {/* image container */}
      <div className="my-[50px] lg:my-[150px] flex flex-col mx-auto lg:mx-[78px] gap-y-[100px] font-outfit text-[30px] lg:text-[52px] leading-[30px] lg:leading-[51px] font-bold">
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[160px] justify-center items-center">
          <div>
            <img
              src={img1}
              alt="imageContainer1.png"
              className="w-[350px] lg:w-[611px] h-[217px] lg:h-[381px] rounded-[25px]"
            />
          </div>
          <div className="w-[350px] lg:w-auto">
            <h1>
              Augmented <br /> Reality
            </h1>
            <h1 className="mt-[15px] lg:mt-[18px] font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              One Augmented Reality platform, wide use cases.{" "}
              <br className="hidden lg:block" /> Closing the divide between
              online and offline shopping, <br className="hidden lg:block" />{" "}
              our Augmented Reality for e-commerce help audience to{" "}
              <br className="hidden lg:block" />
              visualise products in their real-space with just a click.
            </h1>
            <p className="mt-[15px] font-roboto text-[16px] lg:text-[22px] leading-[15px] lg:leading-[21px] font-medium text-[#57BFFF]">
              Learn more{">"}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[160px] justify-center items-center">
          <div className="w-[350px] lg:w-auto">
            <h1>
              3D Viewer and <br /> Configurator
            </h1>
            <h1 className="mt-[15px] font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              Online shopping thrives on visual storytelling. Our{" "}
              <br className="hidden lg:block" /> interactive, engaging, and
              responsive engine is precisely <br className="hidden lg:block" />{" "}
              crafted for e-commerce platforms ensuring sustained{" "}
              <br className="hidden lg:block" /> audience engagement and
              effective conversion.
            </h1>
            <p className="mt-[15px] font-roboto text-[16px] lg:text-[22px] leading-[15px] lg:leading-[21px] font-medium text-[#57BFFF]">
              Learn more{">"}
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img
              src={img2}
              alt="imageContainer1.png"
              className="w-[350px] lg:w-[611px] h-[217px] lg:h-[381px] rounded-[25px]"
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
          <div className="w-[350px] lg:w-auto">
            <h1>
              3D Modelling <br /> Support
            </h1>
            <h1 className="mt-[15px] font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              Doesn't have 3D Models? Our dedicated 3D Modelling{" "}
              <br className="hidden lg:block" /> expertise providing 3D
              resources, with the best quality-to-{" "}
              <br className="hidden lg:block" />
              optimisation possible for more fluid Web-AR loading{" "}
              <br className="hidden lg:block" /> experience.
            </h1>
            <p className="mt-[15px] font-roboto text-[16px] lg:text-[22px] leading-[15px] lg:leading-[21px] font-medium text-[#57BFFF]">
              Learn more{">"}
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-[160px] justify-center items-center">
          <div className="w-[350px] lg:w-auto">
            <button className="hidden lg:block w-[164px] h-[47px] font-roboto text-[18px] leading-[27px] font-bold text-center text-[#D9D9D9] border border-solid border-[#009BF2] cursor-none rounded-full">
              COMING SOON
            </button>
            <h1 className="lg:mt-[43px]">Virtual Photography</h1>
            <h1 className="mt-[18px]  font-roboto text-[14px] lg:text-[20px] leading-[21px] lg:leading-[30px] font-normal">
              Create stunning photographs for any image use case{" "}
              <br className="hidden lg:block" /> scenarios. choose your light
              set up, create custom <br className="hidden lg:block" />
              backgrounds and get the finest virtual photography studio{" "}
              <br className="hidden lg:block" /> at your fingertips.
            </h1>
          </div>
          <div className="order-first lg:order-last">
            <button className=" lg:hidden w-[113px] h-[36px] font-roboto text-[12px] leading-[18px] font-bold text-center text-[#D9D9D9] border border-solid border-[#009BF2] cursor-none rounded-full">
              COMING SOON
            </button>
            <img
              src={img4}
              alt="imageContainer1.png"
              className="w-[350px] lg:w-[611px] h-[217px] lg:h-[381px] mt-[25px] lg:mt-0  rounded-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFeatures;
