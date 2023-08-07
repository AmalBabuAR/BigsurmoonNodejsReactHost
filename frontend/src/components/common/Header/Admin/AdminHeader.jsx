import React, { useState, useEffect } from "react";
import Logo from "../../../assets/home/Logo White.svg";
import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";

function AdminHeader() {
  const navigate = useNavigate();
  const firstName = "Anees";
  const lastName = "Mohammed";
  const [initials, setInitials] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setInitials(firstName.charAt(0) + lastName.charAt(0));
  }, [firstName, lastName]);

  const closeSidenav = (e) => {
    e.preventDefault();
    setShowMenu(false);
    console.log("nooo");
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    console.log("yssss");
  };

  return (
    <>
      <div className="private-header">
        <div className="head-logo">
          <img onClick={() => navigate("/")} src={Logo} alt="Logo" />
        </div>

        <div className={`name ${showMenu ? "show-menu" : ""}`}>
          <div>
            <span id="firstName">{firstName} </span>
            <span id="lastName">{lastName}</span>
          </div>
          <div id="profileImage">
            <span>{initials}</span>
          </div>
        </div>
        <div
          className={`hamburger-menu ${showMenu ? "show-menu" : ""}`}
          onClick={handleToggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <SideNav showMenu={showMenu} closeSidenav={closeSidenav} />
    </>
  );
}

export default AdminHeader;
