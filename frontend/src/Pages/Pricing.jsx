import React, { useState } from "react";
import CustomSlider from "../components/common/reusable/CustomSlider";
import Button from "../components/common/reusable/Button";
import Tick from "../assets/icons/Tick";
import { useLocation, useNavigate } from "react-router-dom";
import PayButton from "../components/PayButton";

function Pricing() {
  const [value, setValue] = useState();
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = ({ max }) => {
    setValue(max);
    console.log(max);
    setPrice(max * 10);
  };
  return (
    <div className="pricing">
      <div className="heading">
        <h2>Pricing</h2>
        <p>
          Our affordable pricing scales with your business. We don’t lock our
          features behind expensive plans. You get all the features on every
          plan.
        </p>
      </div>
      <div className="pricing-componenet">
        <div className="left">
          <h2>How Many 3D files Do You Have?</h2>
          <span>{value}</span>
          <div className="line"></div>
          <CustomSlider
            className="filterpopup-range singleRange"
            min={0}
            max={500}
            onChange={handleChange}
          />
          <p>If you have more than 500 files, get in touch.</p>
        </div>
        <div className="right">
          <div className="price">
            <span>${price}</span>
            <p>per month</p>
          </div>
          <div className="line-heading">
            <div className="line-1"></div>
            <div>All Plans Include</div>
            <div className="line-1"></div>
          </div>

          <div className="details">
            <div className="details-column">
              <Tick className="tick" />
              3D Asset Management
            </div>
            <div className="details-column">
              <Tick />
              Product variant support
            </div>

            <div className="details-column">
              <Tick />
              QR code access to AR
            </div>
            <div className="details-column">
              <Tick />
              Unlimited Animations
            </div>
          </div>
          <PayButton values={value} prices={price} />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
