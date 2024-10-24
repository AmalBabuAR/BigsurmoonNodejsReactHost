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
      <div className="mt-[69px]  lg:mt-[100px] flex w-[100%] md:w-[100%] lg:w-[1149px] h-full mx-auto gap-[35px] rounded-[20px] ">
        <div className="w-[100vw] h-[100vh] border-black max-h-screen flex justify-center">
          <iframe
            src="https://app.simplymeet.me/bigsurmoon?is_widget=1&view=compact"
            className="bg-white md:border md:rounded-md  h-[100%] w-[100%] md:w-[80%] md:h-[100%] lg:w-[90%] lg:h-[800px] xl:w-[100%] xl:h-[800px] "
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default EnterPriseForm;
