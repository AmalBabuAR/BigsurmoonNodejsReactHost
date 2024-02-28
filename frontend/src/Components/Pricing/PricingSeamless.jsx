import React from "react";
import pic1 from "../../assets/Home/intergration/Google.png";
import pic2 from "../../assets/Home/intergration/Bigcommerce_Logo.png";
import pic3 from "../../assets/Home/intergration/Shopify_Logo.png";
import pic4 from "../../assets/Home/intergration/Woocommerce_Logo.png";

import picMob1 from "../../assets/Home/intergration/int1.svg";
import picMob2 from "../../assets/Home/intergration/int2.svg";
import picMob3 from "../../assets/Home/intergration/int3.svg";
import picMob4 from "../../assets/Home/intergration/int4.svg";

const PricingSeamless = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full mt-[-2px] lg:mt-0 lg:h-auto bg-[#0F1425] text-white font-outfit">
      <h4 className="mt-[58px] text-[24px] lg:text-[30px] font-bold">
        Seamless Integrations
      </h4>
      <p className="mt-[10px] text-[14px] lg:flex hidden font-normal">
        Bigsurmoon integrates with all major e-commerce platforms
      </p>
      <p className="mt-[10px] lg:hidden text-[12px] lg:text-[14px] font-normal text-center">
        Bigsurmoon integrates with all major <br /> e-commerce platforms
      </p>
      <div className="hidden mx-auto lg:flex">
        <img
          src={pic1}
          alt="Bigsurmoon also seamlessly integrates with Google Ads"
        />
        <img
          src={pic2}
          alt="Bigsurmoon also seamlessly integrates with Big Commerce"
        />
        <img
          src={pic3}
          alt="Bigsurmoon also seamlessly integrates with Shopify"
        />
        <img
          src={pic4}
          alt="Bigsurmoon also seamlessly integrates with Woo Commerce"
        />
      </div>
      <div className="lg:hidden mt-[25px] mb-[86px] flex flex-col mx-auto gap-[15px]">
        <div className="flex flex-row gap-[15px]">
          <div className="w-[146px] h-[25px]">
          <img src={picMob1} alt="Bigsurmoon also seamlessly integrates with Google Ads" />
          </div>
          <div className="w-[146px] h-[25px]">
          <img src={picMob2} alt="Bigsurmoon also seamlessly integrates with Big Commerce" />
          </div>
        </div>
        <div className="flex flex-row gap-[15px] mt-[15px]">
          <div className="w-[146px] h-[25px]">
          <img src={picMob3} alt="Bigsurmoon also seamlessly integrates with Shopify" />
          </div>
          <div className="w-[146px] h-[25px]">
          <img src={picMob4} alt="Bigsurmoon also seamlessly integrates with Woo Commerce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSeamless;
