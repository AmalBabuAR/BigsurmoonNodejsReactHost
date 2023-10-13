import React, { useEffect } from "react";

const EnterPriseForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.oncehub.com/mergedjs/so.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="mt-[69px] lg:mt-[100px] flex w-[365px] lg:w-[1149px] h-full mx-auto gap-[35px] rounded-[20px] ">
        <div className="w-[100vw] h-[100vh] border-black max-h-screen">
          <div
            id="SOIDIV_Bigsurmoon"
            data-so-page="Bigsurmoon"
            data-height="800"
            data-style="border: 2px solid #d8d8d8; min-width: 290px; max-width: 100vw;"
            data-psz="00"
          ></div>
        </div>
      </div>
    </>
  );
};

export default EnterPriseForm;
