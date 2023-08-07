import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Symbol from "../../../assets/3DStudio/Symbol 1.svg";
import attentionToDetail from '../../../assets/3DStudio/AttentiontoDetails.png'
import medal from '../../../assets/3DStudio/medal.png'
import Technical from '../../../assets/3DStudio/TechnicalCompetancy.png'
import Quality from '../../../assets/3DStudio/Quality.png'

function StudioSlider() {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div style={{  width:"300px" ,height:"250px" }} className="studio-slider">
      <Slider {...Settings}>
        <div className="slider">
          {/* <div> */}
            <img src={Quality} />
            <h2>Highly Optimised</h2>
            <p>
              With years of experience, we provide highly optimized files for
              fast loading and seamless user experience
            </p>
          {/* </div> */}
        </div>
        <div className="slider">
          <div>
            <img src={attentionToDetail} />
            <h2>Attention to Detail</h2>
            <p>
              We study your product like it was made from beginning. Each detail
              your product has is represented exactly
            </p>
          </div>
        </div>
        <div className="slider">
          {/* <div> */}
            <img src={medal} />
            <h2>Quality, TAT & Delivery</h2>
            <p>
              Assured quality because of proficiency and experience and quick
              TAT assuring on-time delivery
            </p>
          {/* </div> */}
        </div>
        <div className="slider">
          <div>
            <img src={Technical} />
            <h2>Technical Competency</h2>
            <p>
              Technically qualified team in various mfg. technologies, ensuring
              exceptional expertise{" "}
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default StudioSlider;
