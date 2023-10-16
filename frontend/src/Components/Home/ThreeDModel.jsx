import React, { useEffect, useRef } from "react";

const ThreeDModel = () => {
  const disabledScrollDivRef = useRef(null);
  useEffect(() => {
    const handleScroll = (e) => {
      // Check if the user has scrolled within the disabledScrollDiv element
      if (disabledScrollDivRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="my-[75px] lg:mt-[150px] lg:mb-[100px] lg:px-[5vw]  justify-center items-center lg:items-start flex flex-col lg:flex-row mx-auto overflow-hidden gap-[26px] lg:gap-[30px]">
      <div className="font-roboto lg:w-[366px]">
        <h1 className="text-[20px] lg:text-[24px] font-semibold leading-6 lg:leading-7">
          Experience The Transformation. <br />
          Your E-commerce Demands it!
        </h1>
        <p className="mt-[15px] lg:mt-[18px] text-[14px] lg:text-[18px] font-normal leading-[17px] lg:leading-7">
          Configure what you want and use A.R to view <br /> in your space
        </p>
      </div>
      <div className="" ref={disabledScrollDivRef}>
        <div
          className="md:hidden lg:hidden cursor-not-allowed overflow-hidden"
          ref={disabledScrollDivRef}
        >
          <iframe
            ref={disabledScrollDivRef}
            src="https://bigsurmoon.com/editor/Viewer"
            className=""
            width="345"
            height="430"
          ></iframe>
        </div>
        <div className="hidden md:block lg:hidden">
          <iframe
            src="https://bigsurmoon.com/editor/Viewer"
            className=""
            width="500"
            height="450"
          ></iframe>
        </div>
        <div className="hidden lg:block">
          <iframe
            src="https://bigsurmoon.com/editor/Viewer"
            className=""
            width="800"
            height="600"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ThreeDModel;
