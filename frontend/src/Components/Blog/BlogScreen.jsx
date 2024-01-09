import React from "react";
import { BlogData } from "../../assets/data/data.js";
import "../style.css";
import BlogCard from "./BlogCard.jsx";

const BlogScreen = () => {
  return (
    <div className="bg-[#070707] font-roboto pt-[60px] xl:pt-[95px] text-white ">
      <div className="xl:max-w-[1920px] overflow-x-hidden mx-auto pb-[50px]">
        <nav className="mx-[175px] my-[25px] flex list-none gap-[8px] text-[18px] text-[#ffffff] opacity-50 tracking-[0.72px]">
          <li>Home</li>
          <li>{">"}</li>
          <li>Resources</li>
          <li>{">"}</li>
          <li>Blog</li>
        </nav>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center text-center py-[50px] px-[25px]  ">
            <h1 className="text-[36px] xl:text-[94px] leading-normal xl:leading-[94px] font-bold blogTextShadow">
              Blog
            </h1>
            <p className="text-[14px] xl:text-[20px] font-normal leading-[22px] mt-[15px] xl:mt-0 xl:leading-9 blogTextShadow w-[335px] h-[66px] xl:w-[721px] xl:h-[129px] flex justify-center items-center mx-auto">
              Get latest trends, useful inights and more here. Blogs{" "}
              <br className="xl:hidden" /> created from our in-house{" "}
              <br className="hidden xl:block" /> team providing updated{" "}
              <br className="xl:hidden" /> informative content
            </p>
          </div>
          <div className="xl:px-[150px] p-[23px] xl:py-[50px] grid grid-cols-1 xl:grid-cols-3 gap-y-[50px] xl:gap-x-[60px] xl:gap-y-[80px]">
            <BlogCard data={BlogData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
