import React from "react";
import {
  blogRoundImage,
  linkedIN,
  shoes,
  twitter,
  twoEye,
  watch,
  whatsapp,
} from "../../assets/Blog";

const BlogCategoryScreen = () => {
  return (
    <div className="bg-[#070707] font-roboto pt-[60px] xl:pt-[95px] text-white ">
      <div className="xl:max-w-[1920px] overflow-x-hidden mx-auto px-[175px] ">
        <nav className="hidden xl:flex mx-[175px] my-[25px] list-none gap-[8px] text-[18px] text-[#ffffff] opacity-50 tracking-[0.72px]">
          <li>Home</li>
          <li>{">"}</li>
          <li>Resources</li>
          <li>{">"}</li>
          <li>Blog</li>
        </nav>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center text-center py-[50px] px-[50px] gap-[25px]">
            <h1 className="text-[36px] xl:text-[54px] leading-normal xl:leading-[54px] font-normal xl:w-[858px] w-[335px]">
              A few words about this blog platform, Ghost, and how this site was
              made
            </h1>
            <p className="text-[16px] xl:text-[20px] font-normal leading-[27.2px]  xl:leading-[34px] w-[335px] xl:w-[858px] text-center mx-auto">
              Why Ghost (& Figma) instead of Medium, WordPress or other
              options?t
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[50px]">
            <img
              src={shoes}
              alt="PictureOne"
              className="w-[343px] xl:w-[1570px] h-[214.947px] xl:h-[750px] rounded-[20px] xl:rounded-[50px] flex-shrink-0"
            />
            <div className="px-auto xl:px-[115px] text-left flex flex-col gap-[25px] xl:gap-[40px] text-[16px] xl:text-[20px] leading-[27.2px] xl:leading-[34px] w-[343px] xl:w-auto">
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
                velit tempus erat egestas efficitur. In hac habitasse platea
                dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean
                pharetra quis lacus at viverra.{" "}
              </h3>
              <h3>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aliquam quis posuere ligula. In
                eu dui molestie, molestie lectus eu, semper lectus.{" "}
              </h3>
              <h1 className="text-[26px] xl:text-[32px] leading-normal xl:leading-[51.2px] py-0 xl:py-[10px]">
                Next on the pipeline
              </h1>
              <h3>
                Duis eu velit tempus erat egestas efficitur. In hac habitasse
                platea dictumst. Fusce a nunc eget ligula suscipit finibus.
                Aenean pharetra quis lacus at viverra. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos.{" "}
              </h3>
              <h3>
                Morbi efficitur auctor metus, id mollis lorem pellentesque id.
                Nullam posuere maximus dui et fringilla.{" "}
              </h3>
            </div>
            <img
              src={watch}
              alt="PictureTwo"
              className="w-[343px] xl:w-[1570px] h-[214.947px] xl:h-[750px] rounded-[20px] xl:rounded-[50px] flex-shrink-0"
            />
            <div className="px-auto xl:px-[115px] text-left flex flex-col gap-[25px] xl:gap-[40px] text-[16px] xl:text-[20px] leading-[27.2px] xl:leading-[34px] w-[343px] xl:w-auto">
              <h3>
                Aenean pharetra quis lacus at viverra. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Aliquam quis posuere ligula.{" "}
              </h3>
              <h3>
                In eu dui molestie, molestie lectus eu, semper lectus. Proin at
                justo lacinia, auctor nisl et, consequat ante. Donec sit amet
                nisi arcu. Morbi efficitur auctor metus, id mollis lorem
                pellentesque id. Nullam posuere maximus dui et fringilla. Nulla
                non volutpat leo.
              </h3>
              <ul className="flex flex-col gap-[10px] list-disc list-inside ">
                <p>A list looks like this:</p>
                <li>First item in the list</li>
                <li>
                  Second item in the list lorem ipsum dolor sit amet nunc felis
                  dolor lorem ipsum sit amet
                </li>
                <li>Third item in the list</li>
              </ul>

              <h3>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aliquam quis posuere ligula.{" "}
              </h3>
              <p>
                Thanks for reading, <br /> <span>Mika</span>
              </p>
            </div>
            <div className="flex flex-col justify-center items-center pt-0 xl:pt-[177px] xl:pb-[65px]">
              <div className="hidden xl:flex gap-[99px]">
                <button className="flex justify-center items-center gap-[26px] py-[15px] pl-[58.5px] pr-[69.5px] btnClr rounded-[50px]">
                  <img src={twitter} alt="" />
                  <span className=" text-[18px] font-medium">
                    Share on Twitter
                  </span>
                </button>
                <button className="flex justify-center items-center gap-[26px] py-[15px] pl-[58.5px] pr-[69.5px] btnClr rounded-[50px]">
                  <img src={linkedIN} alt="" />
                  <span className="text-[18px] font-medium">
                    Share on Linekdin
                  </span>
                </button>
              </div>
              <div className="xl:hidden flex divide-[#1D8EE6] border border-[#1D8EE6] divide-x h-[54px] px-[6.5px] rounded-[60px] border-solid divide-solid">
                <button className="px-[45px]">
                  <img src={linkedIN} alt="" />
                </button>
                <button className="px-[45px]">
                  <img src={twitter} alt="" />
                </button>
                <button className="px-[45px]">
                  <img src={whatsapp} alt="" />
                </button>
              </div>
              <p className="hidden xl:flex mt-[55px] text-[16px] ">
                Tags: product design, culture
              </p>
              <hr className="border-dotted w-[343px] xl:w-[640px] my-[25px] xl:my-[34px]" />
              <div className="flex gap-[16px] xl:gap-[48px]">
                <img
                  src={blogRoundImage}
                  alt="roundedImage"
                  className="rounded-full w-[71.25px] h-[71.25px]"
                />
                <h1 className="w-[257px] xl:w-[543px] text-[14px] xl:text-[16px] leading-[22.4px] xl:leading-[25.6px]">
                  Mika Matikainen is a Design Founder & Advisor, Berlin School
                  of Creative Leadership Executive MBA participant, Zippie
                  advisor, Wolt co-founder, and Nordic Rose stakeholder.{" "}
                </h1>
              </div>
            </div>
            <div className="w-full xl:w-screen flex flex-row items-center mt-[-25px] xl:mt-0">
              <div className="h-[2px] w-full bg-white" />
              <img
                src={twoEye}
                alt="two eye"
                className="w-[65.6px] xl:w-[92.224px] h-[52px] xl:h-[64.285px]"
              />
              <div className="h-[2px] w-full bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryScreen;
