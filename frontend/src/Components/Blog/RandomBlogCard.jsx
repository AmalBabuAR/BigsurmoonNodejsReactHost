import React from "react";
import BlogCard from "./BlogCard";
import { BlogData } from "../../assets/data/data";

const RandomBlogCard = () => {
  // Function to get a random subset of the array
  function getRandomSubset(array, count) {
    let shuffledArray = array.slice(); // Create a copy of the array to avoid modifying the original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, count);
  }

  // Get a random subset of 3 objects
  let randomSubset = getRandomSubset(BlogData, 3);

  console.log("randomSubset", randomSubset);

  return (
    <div className="bg-[#070707] text-white font-roboto xl:w-full flex justify-center items-center xl:pt-[90px] xl:px-[316px]">
      <div className="my-[50px]">
        <h1 className="text-[32px] xl:text-[75px] font-bold leading-[75px] text-center">
          What to read next?
        </h1>
        <div className="mt-[50px] xl:mt-[100px] grid grid-cols-1 xl:grid-cols-3 gap-[50px] xl:gap-[80px]">
          <BlogCard data={randomSubset} />
        </div>
      </div>
    </div>
  );
};

export default RandomBlogCard;
