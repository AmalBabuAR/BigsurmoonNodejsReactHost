import React from "react";
import { titleIcon, timer } from "../../assets/Blog/index.js";
import "../style.css";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  console.log(props.data);
  const data = props.data;

  return (
    <>
      {data.map((x) => (
        <div
          key={x.id}
          className="flex flex-col justify-center items-center  blogBoxShadow"
        >
          <div className="w-[320px] relative">
            <img src={x.img} alt="pic" className="rounded-t-[10px]" />
            <div className="absolute top-4 left-4 inline-flex items-center text-[18px] leading-[30px] blogImagetextshadow gap-[7px]">
              <img src={titleIcon} alt="" />
              {x.imgTitle}
            </div>
          </div>
          <div className="px-[25px] py-[28px] w-[320px]">
            <h1 className="text-[24px] xl:text-[26px] font-bold leading-[38px]">
              {x.heading}
            </h1>
            <div className="py-[10px] inline-flex gap-[10px]">
              <img src={timer} alt="" />
              <h1 className="text-[14px] xl:text-[16px] leading-[30px]">
                {x.time}
              </h1>
            </div>
            <p className="text-[14px] xl:text-[20px] font-normal leading-[22px] xl:leading-[30px]">
              {x.desc}
            </p>
            <Link to={`/blog/${x.imgTitle}`}>
              <button className="px-[50px] py-[7px] mt-[25px] border-solid border-[#fff] border-[1px] rounded-[50px] ">
                <h1 className="text-[20px] font-medium leading-normal text-center">
                  Read more
                </h1>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
