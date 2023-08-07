import React, { useEffect } from "react";

const BookADemo = () => {
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
    <div className='demo-page'>
      <div
        id="SOIDIV_Bigsurmoon"
        data-so-page="Bigsurmoon"
        data-height="550"
        data-style="border: 1px solid #d8d8d8; min-width: 290px; max-width: 900px;"
        data-psz="11"
      />
    </div>
  );
};

export default BookADemo;
