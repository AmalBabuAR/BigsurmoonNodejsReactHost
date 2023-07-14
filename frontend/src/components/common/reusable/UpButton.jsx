import React from "react";

function UpButton() {
  const handleClick=()=>{
    console.log("upbutton");
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  }
  return (
    <div>
      <button
        onClick={handleClick} className="up-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 30"
          x="0px"
          y="0px"
          height="70px"
          width="70px"
          fill="#2875FF"
        >
          <title>Arrow-Up-Circle</title>
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,9.71a1,1,0,0,1-1.41,0L13,10.41V16a1,1,0,0,1-2,0V10.41L9.71,11.71a1,1,0,0,1-1.41-1.41l3-3a1,1,0,0,1,1.41,0l3,3A1,1,0,0,1,15.71,11.71Z" />
        </svg>
      </button>
    </div>
  );
}

export default UpButton;
