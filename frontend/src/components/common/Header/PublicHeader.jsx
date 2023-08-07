import React,{useEffect, useState} from "react";
import Logo from "../../../assets/home/Logo White.svg";
import Button from "../reusable/Button";
import Vector from "../../../assets/Vector.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PublicSidenav from "./PublicSidenav";
import main_logo from '../../../assets/home/main_logo.svg'

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(false);


  const closeSidenav = (e) => {
    e.preventDefault();
    setShowMenu(false);
    
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
    
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("auth");
      setUser(false);
      navigate("/");
    } catch (err) {
      navigate("/");
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("auth");
    const userID = JSON.parse(data);
    console.log(userID);
    if (userID !== null) {
      setUser(true);
    }
  }, [setUser, user]);

  return (
    <>
    <div className="header">
    <div
          className={`hamburger-menu ${showMenu ? "show-menu" : ""}`}
          onClick={handleToggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      <img onClick={() => navigate("/")} src={main_logo} />
      <div className="navlink">
        <div className="dropdown">
          <a>About</a>
          <div class="dropdown-content">
            <Link to="/about-ar">AR</Link>
            <Link to="/configurator">3D Configurator</Link>
          </div>
        </div>
        <Link to="/3d-studio"> 3D Studio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/book-a-demo"> Support</Link>
        {user && <Link to="/dashboard"> Dashboard</Link>}
      </div>
      

      {user ? (
        <Button onClick={handleLogout} className="login-btn">
          <span>Logout</span>
          <img className="vector" src={Vector} />
        </Button>
      ) : (
        <Button onClick={() => navigate("/login")} className="login-btn">
          <span>Login</span>
          <img className="vector" src={Vector} />
        </Button>
      )}


    </div>
    <PublicSidenav showMenu={showMenu} closeSidenav={closeSidenav} user={user} />
    </>
  );
}

export default Header;
