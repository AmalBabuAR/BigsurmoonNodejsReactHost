import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import support from "../../../assets/home/Features/support.svg";
import solutions from "../../../assets/home/Features/solutions.svg";
import settings from "../../../assets/home/Features/settings.svg";
import security from "../../../assets/home/Features/security.svg";
import platform from "../../../assets/home/Features/platformSupport.svg";
import clock from "../../../assets/home/Features/clock.svg";
import cart from "../../../assets/home/Features/cart.svg";
import animated from "../../../assets/home/Features/animated3D.svg";
import catlog from "../../../assets/home/Features/3Dcatlog.svg";

function FeaturesSlider() {
  const Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false
  };
  return (
    <div style={{ width:"280px" ,height:"250px" }} className="feature-slider">
      <Slider {...Settings}>
        <div className="slider-component">
          <img src={settings} />
          <h2>Industry-Leading Optimization</h2>
          <p>
            Leading 3D model optimization maximizes performance, reduces file
            size, and improves efficiency for enhanced user experiences.
          </p>
        </div>
        <div className="slider-component">
          <img src={security} />
          <h2>End-End Security</h2>
          <p>
            End-to-end security ensures comprehensive protection across all
            stages, from data creation to transmission and storage.
          </p>
        </div>
        <div className="slider-component">
          <img src={support} />
          <h2>Assisted Support</h2>
          <p>
            Assisted support provides guidance and assistance to users,
            improving their experience and resolving issues effectively.
          </p>
        </div>
        <div className="slider-component">
          <img src={clock} />
          <h2>Fast Turnaround Times</h2>
          <p>
            Fast turn-around times guarantee quick completion of tasks or
            services, minimizing delays and maximizing efficiency.
          </p>
        </div>
        <div className="slider-component">
          <img src={solutions} />
          <h2>Custom Solutions</h2>
          <p>
            Custom solutions provide tailored and personalized approaches to
            address specific needs and requirements of individuals or
            businesses.
          </p>
        </div>
        <div className="slider-component">
          <img src={platform} />
          <h2>Multiple Platorm Support</h2>
          <p>
            Multiple platform support ensures compatibility and functionality
            across various operating systems and devices for seamless user
            experiences.
          </p>
        </div>

        <div className="slider-component">
          <img src={catlog} />
          <h2>3D Catalog</h2>
          <p>
            A 3D catalog offers a visual representation of products or items,
            allowing interactive exploration and detailed showcasing.
          </p>
        </div>
        <div className="slider-component">
          <img src={cart} />
          <h2>Payments made easy</h2>
          <p>
            Payments made easy simplifies the process of financial transactions,
            enabling convenient and hassle-free payment experiences for users.
          </p>
        </div>
        <div className="slider-component">
          <img src={animated} />
          <h2>Animated 3D Content</h2>
          <p>
            Animated 3D contents bring static models to life through dynamic
            movements, enhancing engagement and visual storytelling.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default FeaturesSlider;
