import React from "react";
import Logo from "../../assets/home/Logo White.svg";
import UpButton from "./reusable/UpButton";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={Logo} />
      </div>
      <div className="contact-details">
        <div>
          12/514 Peringala <br />
          Ernakulam, India <br /> Pin - 683565
        </div>
        <div>
          <p>(+91) 7995-925304</p>
          <p>support@bigsurmoon.com</p>
        </div>
      </div>
      <div className="footer-link">
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
        <div>© 2023 Bigsurmoon pvt ltd. all rights reserved.</div>
      </div>
      <div>
        <UpButton />
      </div>
    </div>
  );
}

export default Footer;
