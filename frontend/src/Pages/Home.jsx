import React from "react";
import Switch from "../assets/home/AR Capsule.svg";
import Button from "../components/common/reusable/Button";
import Section2 from "../assets/home/Section2.png";
import temp from "../assets/home/temp.png";
import support from "../assets/home/Features/support.svg";
import solutions from "../assets/home/Features/solutions.svg";
import settings from "../assets/home/Features/settings.svg";
import security from "../assets/home/Features/security.svg";
import platform from "../assets/home/Features/platformSupport.svg";
import clock from "../assets/home/Features/clock.svg";
import cart from "../assets/home/Features/cart.svg";
import animated from "../assets/home/Features/animated3D.svg";
import catlog from "../assets/home/Features/3Dcatlog.svg";
import Vector from "../assets/Vector.png";
import Watch from '../assets/home/Watch.png'
import Light from '../assets/home/Light.png'
import monitor from '../assets/monitor.svg';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-heading">
          <p>
            It's time to make
            <br />
            the <img src={Switch} />
            switch{" "}
          </p>
        </div>
        <div className="main-sub">
          <p>
            Personalised 3D and A.R solutions for e-commerce
            <br /> that build brand loyalty and drive conversions
          </p>
        </div>
        <div className="home-button">
          <Button onClick={() => navigate("/book-a-demo")}>Book a Demo</Button>
          <Button onClick={() => navigate("/pricing")}>Start Trial</Button>
        </div>
      </div>
      <div className="second-image">
        <img src={Section2} />
      </div>
      <div className="product-positives">
        <p className="headings">
          <span>All-in-one </span>
          <span className="blue-text">
            Product
            <br /> Visualisation{" "}
          </span>
          <span>Solution</span>
        </p>
        <div className="points">
          <p>
            <span className="blue-text">
              {" "}
              &gt;3x <br />
            </span>
            <span>
              Sales <br />
              Conversions
            </span>
          </p>
          <p>
            <span className="blue-text">
              {" "}
              200% <br />
            </span>
            <span>
              more <br />
              engagement
            </span>
          </p>
          <p>
            <span className="blue-text">
              {" "}
              50% <br />
            </span>
            <span>
              Total
              <br />
              Cost saving
            </span>
          </p>
          <p>
            <span className="blue-text">
              {" "}
              80%
              <br />
            </span>
            <span>
              Less <br />
              return rate
            </span>
          </p>
        </div>
      </div>
      <div className="see-it-in-action">
        <span>SEE IT IN ACTION!</span>
        <div>
          <img src={Watch} />
        </div>
      </div>
      <div className="guide">
        <div className="guide-points">
          <img src={Light} />
          <div>
            <h2>3D Modelling Studio</h2>
            <p>
              Doesn't have 3D Models? our experienced 3D team will help you
              model the files and upload in platform with the best quality and
              optimisation for much more loading experience and fluidity
            </p>
            <a>Visit the Studio &gt;</a>
          </div>
        </div>
        <div className="guide-points">
          <div>
            <h2>Product Configurator</h2>
            <p>
              Customize and visualize your dream designs in real-time, from
              furniture to architectural spaces. Experience the power of
              personalization and bring your ideas to life with ease.
            </p>
            <a>Explore customisation &gt;</a>
          </div>
          <img src={monitor} />
        </div>
        <div className="guide-points">
          <img src={temp} />
          <div>
            <h2>Release your Product</h2>
            <p>
              Unleash your product to the world with confidence. With the best
              quality lighting and shading, Bigsurmoon ensuring a viewer that
              captures attention and drives sales. Maximize your market impact
              and reach your target audience effectively
            </p>
          </div>
        </div>
      </div>
      <div className="features">
        <div>
          <div className="feature-heading">
            <h2>Features</h2>
            <p>
              We are constantly working to bring new updates and features to
              Bigsurmoon, such as:
            </p>
          </div>
          <div className="feature-components">
            <div>
              <img src={settings} />
              <h2>Industry-Leading Optimization</h2>
              <p>
                Leading 3D model optimization maximizes performance, reduces
                file size, and improves efficiency for enhanced user
                experiences.
              </p>
            </div>
            <div>
              <img src={security} />
              <h2>End-End Security</h2>
              <p>
                End-to-end security ensures comprehensive protection across all
                stages, from data creation to transmission and storage.
              </p>
            </div>
            <div>
              <img src={support} />
              <h2>Assisted Support</h2>
              <p>
                Assisted support provides guidance and assistance to users,
                improving their experience and resolving issues effectively.
              </p>
            </div>
          </div>
          <div className="feature-components">
            <div>
              <img src={clock} />
              <h2>Fast Turnaround Times</h2>
              <p>
                Fast turn-around times guarantee quick completion of tasks or
                services, minimizing delays and maximizing efficiency.
              </p>
            </div>
            <div>
              <img src={solutions} />
              <h2>Custom Solutions</h2>
              <p>
                Custom solutions provide tailored and personalized approaches to
                address specific needs and requirements of individuals or
                businesses.
              </p>
            </div>
            <div>
              <img src={platform} />
              <h2>Multiple Platorm Support</h2>
              <p>
                Multiple platform support ensures compatibility and
                functionality across various operating systems and devices for
                seamless user experiences.
              </p>
            </div>
          </div>
          <div className="feature-components">
            <div>
              <img src={catlog} />
              <h2>3D Catalog</h2>
              <p>
                A 3D catalog offers a visual representation of products or
                items, allowing interactive exploration and detailed showcasing.
              </p>
            </div>
            <div>
              <img src={cart} />
              <h2>Payments made easy</h2>
              <p>
                Payments made easy simplifies the process of financial
                transactions, enabling convenient and hassle-free payment
                experiences for users.
              </p>
            </div>
            <div>
              <img src={animated} />
              <h2>Animated 3D Content</h2>
              <p>
                Animated 3D contents bring static models to life through dynamic
                movements, enhancing engagement and visual storytelling.
              </p>
            </div>
          </div>
          <div className="features-footer">
            <div>
              <h2>7-day free trial</h2>
              <p>
                Experience our platform's full potential, with our exclusive
                7-day free trial, allowing you to explore all the features and
                benefits
              </p>
            </div>
            <Button onClick={() => navigate("/pricing")} className="button">
              <span>Explore Plans</span>
              <img className="vector" src={Vector} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
