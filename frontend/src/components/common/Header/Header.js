import React, { useEffect, useState } from "react";
import Logo from "../../../assets/home/Logo White.svg";
import Button from "../reusable/Button";
import Vector from "../../../assets/Vector.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("auth");
    const userID = JSON.parse(data);
    console.log(userID);
    if (userID !== null) {
      setUser(true);
    }
  }, [setUser, user]);

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

  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} />
      </Link>
      <div className="navlink">
        <div className="dropdown">
          <a>About</a>
          <div className="dropdown-content">
            <Link to="/about-ar">AR</Link>
            <Link to="/configurator">3D Configurator</Link>
          </div>
        </div>
        <Link to="/3d-studio"> 3D Studio</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/support"> Support</Link>
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
  );
}

export default Header;
