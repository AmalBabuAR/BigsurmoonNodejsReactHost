import React from "react";

const Home3DModel = () => {
  return (
    <div className="w-full h-auto font-roboto text-white bg-black mx-auto flex flex-col justify-center items-center px-[25px] xl:px-[100px] gap-[25px] xl:gap-[50px] text-center">
      <h1 className="mt-[25px] xl:mt-[50px] text-[18px] font-medium">
        SHARING
      </h1>
      <h1 className="text-[26px] xl:text-[50px] font-bold leading-[26px] xl:leading-[50px] text-center">
        Share creations with precision and quality
      </h1>
      <p className="w-[293px] xl:w-[1258px] text-[16px] xl:text-[18px] leading-[24px] xl:leading-[27px]">
        Just a link is all you need. Export your files with no code URL, or
        embed on any website with iFrame. No more sending large files or email
        attachments. Share 3D and AR content which is accessible on any device.
      </p>
      <p className="w-[293px] xl:w-[1258px] text-[16px] xl:text-[18px] leading-[24px] xl:leading-[27px] font-bold">
        Try it out. Copy the link and add it to any online productivity tool,
        presentation or a chat.
      </p>
      <button className="px-[25px] xl:px-[30px] py-[7.5px] xl:py-[15px] text-[10px] xl:text-[18px] font-medium border border-solid border-[#0090F8] rounded-[20px] xl:rounded-[50px]">
        COPY LINK
      </button>
      <div className="hidden xl:block mb-[100px] h-screen">
        <iframe
          src="http://localhost:5000/editor/Viewer"
          width="1248"
          // height="auto"
          className=" rounded-[20px] border border-solid h-screen"
        ></iframe>
      </div>
      <div className="xl:hidden mb-[25px]">
        <iframe
          src="https://bigsurmoon.com/editor/Viewer"
          width="343"
          height="430"
          className="rounded-[20px] border border-solid"
        ></iframe>
      </div>
    </div>
  );
};

export default Home3DModel;
