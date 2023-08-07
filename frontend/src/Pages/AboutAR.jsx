import React from "react";
import Logo2 from "../assets/3DStudio/Logo(2).svg";
import Chair from "../assets/about-ar/sofa.gif";
import Jewllery from "../assets/about-ar/Untitled-2.png";
import Furnitures from "../assets/about-ar/Untitled-1.png";
import Electronics from "../assets/about-ar/Electronics.png";
import Architecture from "../assets/about-ar/Interior.png";
import Watches from "../assets/about-ar/watch.png";
import Eyewear from "../assets/about-ar/Eyewear.png";
import Button from "../components/common/reusable/Button";
import Vector from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";

function AboutAR() {
  const navigate = useNavigate();
  return (
    <div className="about-ar">
      <div className="ar-top">
        <div className="about-ar-main">
          <p>
            Product <br />
            <img src={Logo2} /> Visualisation <br />
            <span className="blue-text">Re-Imagined</span>
          </p>
        </div>
        
          <img className="chair-main" src={Chair} />
        
      </div>
      <div className="ar-main">
        <div className="main-heading">
          One <span className="blue-text">Augmented Reality </span>Engine,
          Multiple use cases
          <div style={{display:'flex', justifyContent: 'center', marginLeft:'auto', marginRight:'auto' ,marginTop:'40px'}}>
          <Button onClick={() => navigate("/book-a-demo")}>Get a free demo</Button>
          </div>
        </div>
        <div className="images">
          <div style={{ backgroundImage: `url(${Jewllery})`, color: "white" }}>
            <span>Jewellery</span>
          </div>
          <div style={{ backgroundImage: `url(${Furnitures})` }}>
            <span>Furnitures</span>
          </div>
          <div style={{ backgroundImage: `url(${Eyewear})` }}>
            <span>Eyewear</span>
          </div>
          <div style={{ backgroundImage: `url(${Electronics})` }}>
            <span>Electronics</span>
          </div>
          <div style={{ backgroundImage: `url(${Architecture})` }}>
            <span>Architecture</span>
          </div>
          <div style={{ backgroundImage: `url(${Watches})` }}>
            <span>Watches</span>
          </div>
        </div>
      </div>
      <div className="features-footer">
        <div>
          <h2>7-day free trial</h2>
          <p>
            Experience our platform's full potential, with our exclusive 7-day
            free trial, allowing you to explore all the features and benefits
          </p>
        </div>
        <Button onClick={() => navigate("/pricing")} className="button">
          <span>Explore Plans</span>
          <img className="vector" src={Vector} />
        </Button>
      </div>
    </div>
  );
}

export default AboutAR;
