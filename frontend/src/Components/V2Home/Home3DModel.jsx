import React, { useState } from "react";

const Home3DModel = () => {
  const iframeUrl = `https://bigsurmoon.com/editor/Viewer`;

  const [copyText, setCopyText] = useState("COPY LINK");

  const handelCopyBtn = () => {
    navigator.clipboard.writeText(iframeUrl);
    setCopyText("COPIED!");
    setTimeout(() => {
      setCopyText("COPY LINK");
    }, 5000);
  };
  return (
    <div className="w-full h-auto font-roboto text-white bg-black mx-auto flex flex-col justify-center items-center py-[25px] lg:py-[100px] xl:py-[100px] px-[25px] lg:px-[50px] xl:px-[100px] gap-[25px] lg:gap-[50px] xl:gap-[50px] text-center">
      <h1 className="pt-[25px] lg:pt-[50px] xl:pt-[50px] text-[18px] font-medium">
        SHARING
      </h1>
      <h1 className="text-[26px] lg:text-[50px] xl:text-[50px] font-bold leading-[26px] lg:leading-[50px] xl:leading-[50px] text-center">
        Share creations with precision and quality
      </h1>
      <p className="w-[293px] lg:w-[1064px] xl:w-[1258px] text-[16px] lg:text-[18px] xl:text-[18px] leading-[24px] lg:leading-[27px] xl:leading-[27px]">
        Just a link is all you need. Export your files with no code URL, or use
        on any website anywhere with iFrame. No more sending large files or
        email attachments. Share 3D and AR content which is accessible on any
        device.
      </p>
      <p className="w-[293px] lg:w-[1064px] xl:w-[1258px] text-[16px] lg:text-[20px] xl:text-[20px] leading-[24px] lg:leading-[27px] xl:leading-[27px] font-bold">
        Try it out. Copy the link and add it to any catalog, website, social
        mediaor a presentation.
      </p>
      <button
        onClick={handelCopyBtn}
        className="px-[25px] lg:px-[30px] xl:px-[30px] py-[7.5px] lg:py-[15px] xl:py-[15px] text-[10px] lg:text-[18px] xl:text-[18px] font-medium border border-solid border-[#0090F8] rounded-[20px] lg:rounded-[50px] xl:rounded-[50px]"
      >
        {copyText}
      </button>
      <div className="hidden lg:hidden xl:block mb-[100px] h-screen stroke-1 stroke-[#8D8D8D]">
        <iframe
          src={iframeUrl}
          width="1248"
          // height="auto"
          className=" rounded-[20px] border border-solid h-screen"
        ></iframe>
      </div>
      <div className="hidden lg:block xl:hidden mb-0 h-screen stroke-1 stroke-[#8D8D8D]">
        <iframe
          src={iframeUrl}
          width="1064"
          // height="591"
          className=" rounded-[20px] border border-solid h-screen"
        ></iframe>
      </div>
      <div className="lg:hidden xl:hidden mb-[25px] stroke-1 stroke-[#8D8D8D]">
        <iframe
          src={iframeUrl}
          width="343"
          height="480"
          className="rounded-[20px] border border-solid"
        ></iframe>
      </div>
    </div>
  );
};

export default Home3DModel;
