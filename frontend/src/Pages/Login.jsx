import React, { useState } from "react";
import Button from "../components/common/reusable/Button";
import Eye from "../assets/icons/Eye";
import Crossedeye from "../assets/icons/Crossedeye";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmail, isEmpty, isLength } from "../components/common/utils/validation";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  // const [auth, setAuth] = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state,location);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (isEmpty(values.email) || isEmpty(values.password)) {
      setError("Please fill in all fields");
    }
    if (!isEmail(values.email)) {
      setError("Invalid Email");
    }
    if (isLength(values.password)) {
      setError("Password must be at least 6 characters");
    }
    try {
      const res = await axios.post("/api/login", {
        values,
      });
      if (res && res.data.success) {
        alert(res.data.message);
        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token
        // })
        localStorage.setItem("auth", JSON.stringify(res.data.token));
        navigate(location.state || "/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <div className="login">
      <div className="form">
        <h2>
          Visualisation <br />
          Re-imagined
        </h2>
        {error && <p style={{ color: 'red',paddingBottom: '10px' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="group">
            <input
              type="text"
              required
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <span className="bar"></span>
            <label>Email</label>
          </div>

          <div className="group">
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <span className="bar"></span>
            <label>Password</label>
            <i
              className={`password-toggle-icon ${showPassword ? "show" : ""}`}
              onClick={handleTogglePassword}
            >
              {showPassword ? <Eye /> : <Crossedeye />}
            </i>
          </div>
          <Button type="submit">Login</Button>
        </form>
        <div className="signup-link">
          Don't have an account yet?{" "}
          <Link to="/signup" className="link">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default Login;
