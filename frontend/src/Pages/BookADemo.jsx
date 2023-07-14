import React, { useEffect } from "react";
import {useAuth} from '../context/auth.jsx' 
const BookADemo = () => {
  const [auth, setAuth] = useAuth()
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
    <div >
      <pre>{JSON.stringify(auth,null,5)}</pre>
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