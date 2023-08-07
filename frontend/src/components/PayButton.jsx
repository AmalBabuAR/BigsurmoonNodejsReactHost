import React from "react";
import Button from "./common/reusable/Button";
import axiosInstance from "../axios/axiosInterceptors/axiosInstance.js";

const PayButton = ({ values, prices }) => {
  const handleClick = async () => {
    console.log("paybut", values, prices);
    try {
      const res = await axiosInstance.post("/stripe/create-checkout-session", {values,prices});
      console.log(res);
      if(res.data){
        console.log('res in if cond of post stripe');
        window.location.href = res.data.url
      }
    } catch (error) {
        console.log(error.message);
    }
  };
  return (
    <>
      <Button className="button" onClick={() => handleClick()}>
        Start My Free Trial
      </Button>
    </>
  );
};

export default PayButton;
