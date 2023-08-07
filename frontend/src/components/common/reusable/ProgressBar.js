import React from "react";

const Progressbar = ({ number = 0 }) => {
  // console.log("number", number);
  // return (
  //     <div class="surveybar-conatiner">
  //         <progress>{number}%</progress>
  //         <span className='bar' style={{ width: `${number}%` }}></span>
  //     </div>
  // )
  return (
    <div className="progress-container">
      <progress>{number}%</progress>
      <span className="bar" style={{ width: `${number}%` }}></span>
    </div>
  );
};
export default Progressbar;
