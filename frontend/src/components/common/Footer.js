import React from "react";
import Logo from "../../assets/home/Logo White.svg";
import UpButton from "./reusable/UpButton";
import main_logo from '../../assets/home/main_logo.svg'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-header">
        <div>
          <img className="main-view-1" src={main_logo} alt="Logo" />
        </div>
        <div>
          <UpButton  className="footer-upbutton"/>
        </div>
      </div>
      <div className="links">
        <div className="contact-details">
          {/* Contact details content */}
          <div>
            12/514 Peringala <br />
            Ernakulam, India <br /> Pin - 683565
          </div>
          <div className="contact">
            <p className="custom-text" style={{width: "130px"}}>(+91) 7995-925304</p>
            <p  className="custom-text">support@bigsurmoon.com</p>
          </div>
        </div>
        <div className="footer-link">
          {/* Footer links content */}
          <div className="footer-navlinks">
            <div>
              <ul>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Terms & Conditions</a>
                </li>
                <li>
                  {" "}
                  <a>Careers</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <a>Linkedin</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
                <li>
                  <a>Instagram</a>
                </li>
                <li>
                  {" "}
                  <a>Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          < div className="at2023">© 2023 Bigsurmoon pvt ltd. all rights reserved.</div>
        </div>
       
      </div>
    </div>
    
  );
}

export default Footer;
