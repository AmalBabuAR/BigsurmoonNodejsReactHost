import React from "react";
import Button from "../components/common/reusable/Button";
import { useNavigate } from "react-router-dom";
import Chair from "../assets/Configurator/main.png";
import Configure from "../assets/Configurator/CONFIGUREICON.png";
import upload from "../assets/Configurator/UPLOADICON_3.png";
import publish from "../assets/Configurator/PUBLISHICON.png";
import chair2 from "../assets/Configurator/chair.gif";
import image2 from '../assets/Configurator/image2.gif';
import image3 from '../assets/Configurator/image3.gif';
import monitor from '../assets/monitor.svg';
import temp2 from '../assets/3DStudio/temp2.png'
import Globe from '../assets/Configurator/Globe.png'
import Presentation from '../assets/Configurator/Presentation.png'
import BookADemo from "./BookADemo";

function Congigurator() {
  const navigate = useNavigate();
  return (
    <div className="configurator">
      <div className="congigurator-main">
        <div className="main-content">
          <h2>
            Customization,
            <br /> Simplified
          </h2>
          <p>
            No-Code, No app required.
            <br />
            Completely web-based and easy-to-use.
          </p>
          <div>
            <Button onClick={() => navigate("/pricing")}>Start Trial</Button>
            <Button onClick={() => navigate("/book-a-demo")}>Learn More</Button>
          </div>
        </div>
        
          <img src={Chair} />
        
      </div>
       <div className="upload">
        <div className="upload-img">
          <img src={upload} className="upload-img cloud-img"/>
          <h2 className="upload blue-text">1.Upload</h2>
          <p>
            Seamlessly upload files and assets for integration into your
            project.
          </p>
        </div>
        <div>
          <img src={Configure} />
          <h2 className="blue-text">2.Configure</h2>
          <p>Customize every aspect with intuitive options.</p>
        </div>
        <div>
          <img src={publish} />
          <h2 className="blue-text">3.Publish</h2>
          <p>Share your creations with ease and make an impact.</p>
        </div>
      </div>
      <div className="configurator-detail">
        <div className="detailss">
          <img src={chair2} />
          <div>
            <span>Multiple variations for single product</span>
            <p>
              Offer endless choices with multiple variations for your product.
              Cater to diverse customer preferences and increase customer
              satisfaction by providing a wide range of customizable options.
            </p>
          </div>
        </div>
        <div className="detailss">
          <div>
            <span>Animated 3D Content</span>
            <p>
              Engage your audience with hassle-free animated 3D content, a
              dynamic alternative to traditional explainer videos. Convey your
              message effectively with captivating visuals that leave a lasting
              impact.
            </p>
          </div>
          <img className="table-img"  src={image2}/>
        </div>
        <div className="detailss">
          <img  src={image3}/>
          <div>
            <span>Image mode</span>
            <p>
              Experience the ultimate all-in-one image mode. Immerse yourself in
              stunning visuals with enhanced details and vibrant colors, all in
              a single, comprehensive viewing experience.
            </p>
          </div>
        </div>
        <div className="detailss">
          <div>
            <span>Streamlined Project Management</span>
            <p>
              No matter the size of your project, we possess the expertise to
              fulfill your requirements. Our platform seamlessly handles
              projects, allowing you to store files, make edits at any time, and
              publish whenever you choose.
            </p>
          </div>
          <img src={Presentation}  className="globe-img"/>
        </div>
        <div className="detailss">
          <img src={Globe} className="globe-img"/>
          <div>
            <span>No code, No App All through your Browser</span>
            <p>
              Unlock limitless possibilities without the need for code or an
              app. Access and control everything through your browser,
              simplifying the process and empowering you to create and customize
              with ease.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-us">
        <div className="ccontact">
        <span>Contact us</span>
       
        </div>
         
        <BookADemo />
       
      </div> 
     
    </div>
  );
}

export default Congigurator;
