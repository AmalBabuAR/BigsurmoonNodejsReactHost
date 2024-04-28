import React, { useState } from "react";

const EmbedModal = (props) => {
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(480);
  const [copyed, setCopyed] = useState(false);
  const [iframeBtn, setIframeBtn] = useState(true);
  const [urlBtn, setUrlBtn] = useState(false);
  const [copyText, setCopyText] = useState("Copy to Clipboard");

  const [urlValue, setUrlValue] = useState(
    `https://bigsurmoon.com/editor/testViewer/?id=${props.embedID}`
  );

  const [inputValue, setInputValue] = useState(
    `<iframe src="https://bigsurmoon.com/editor/testViewer/?id=${props.embedID}" frameborder="0" width="${width}" height="${height}" > </iframe>`
  );

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
    setInputValue(
      `<iframe src="https://bigsurmoon.com/editor/testViewer/?id=${props.embedID}" frameborder="0" width="${e.target.value}" height="${height}" > </iframe>`
    );
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    setInputValue(
      `<iframe src="https://bigsurmoon.com/editor/testViewer/?id=${props.embedID}" frameborder="0" width="${width}" height="${e.target.value}" > </iframe>`
    );
  };

  const handleCloseButton = () => {
    sendDataToParent(!props.embedModel);
  };

  const handelCopyBtn = () => {
    console.log("click");
    const textArea = document.querySelector("textarea");

    if (textArea) {
      textArea.select(); // Select the text inside the textarea
      document.execCommand("copy"); // Copy the selected text to the clipboard
    }
    setCopyed(true);
    if (iframeBtn) {
      setCopyText("iframe copied");
    } else {
      setCopyText("URL copied");
    }
  };

  const sendDataToParent = (data) => {
    // Call this function when you want to send data back to the parent component
    props.onDataReceived(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-[#232234] text-gray-400 px-[52px] py-[37px] w-[300px]  xl:w-[721px] xl:h-auto rounded-lg font-roboto">
        <div className="flex items-center justify-between">
          <h4 className="text-left text-[24px] font-medium leading-[26px] text-[#F1EEF9] ">
            Share/Embed
          </h4>
          <button
            onClick={handleCloseButton}
            className=" w-[44px] h-[44px] rounded-[10px] border border-solid border-[#545454] hover:bg-[#0000008e] bg-black flex items-center justify-center"
          >
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.92188 0.9375L7.02344 7.47656L11.125 0.9375H13.7617L8.37109 9.38672L13.8906 18H11.2305L7.02344 11.332L2.81641 18H0.15625L5.67578 9.38672L0.285156 0.9375H2.92188Z"
                fill="#D9D9D9"
              />
            </svg>
          </button>
        </div>
        <div className="mt-[18px] flex flex-row items-center">
          <h4 className="text-[14px] mt-3 font-normal leading-5">
            Choose Resolution
          </h4>
          <div className="ml-[15px] flex flex-row gap-[9px]">
            <div className="">
              <h4 className="text-[10px] font-light  leading-5">Width</h4>
              <input
                type="number"
                value={width}
                onChange={handleWidthChange}
                className="w-[62px] h-[24px] bg-transparent border border-solid boreder-[#fff] rounded-[4px] text-[12px] text-center leading-5 pl-2"
              />
            </div>
            <div>
              <h4 className="text-[10px] font-light leading-5">Height</h4>
              <input
                type="number"
                value={height}
                onChange={handleHeightChange}
                className="w-[62px] h-[24px] bg-transparent border border-solid boreder-[#fff] rounded-[4px] text-[12px] text-center leading-5 pl-2"
              />
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <div className="flex justify-center items-center text-[14px] font-semibold leading-5 text-[#fff]">
            <button
              onClick={() => {
                setIframeBtn(!iframeBtn);
                setUrlBtn(!urlBtn);
                setCopyText("Copy to Clipboard");
              }}
              className={
                iframeBtn
                  ? `h-[31px] w-[86px] bg-[#1E1E1E] `
                  : `h-[31px] w-[86px] bg-[#444]`
              }
            >
              Iframe
            </button>
            <button
              onClick={() => {
                setIframeBtn(!iframeBtn);
                setUrlBtn(!urlBtn);
                setCopyText("Copy to Clipboard");
              }}
              className={
                urlBtn
                  ? `h-[31px] w-[86px] bg-[#1E1E1E] `
                  : `h-[31px] w-[86px] bg-[#444]`
              }
            >
              URL
            </button>
          </div>
          <div className="flex flex-wrap ">
            <textarea
              type="text"
              className="text-[#fff] text-[12px] px-[12px] py-[7px] bg-[#1E1E1E] tracking-wider resize-none font-medium leading-[26px] w-full h-auto overscroll-none overflow-hidden"
              value={iframeBtn ? inputValue : urlValue}
            ></textarea>
          </div>
        </div>
        <div className="flex mt-[40px] justify-center items-center flex-col">
          <button
            onClick={handelCopyBtn}
            className="w-[230px] h-[46px] bg-blue-500 text-center text-[16px] font-bold text-white rounded-[10px]"
          >
            {copyText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmbedModal;
