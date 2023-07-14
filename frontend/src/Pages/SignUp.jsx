import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/reusable/Button";
import Eye from "../assets/icons/Eye";
import Crossedeye from "../assets/icons/Crossedeye";
import axios from "axios";
import { isEmail, isEmpty, isLength } from "../components/common/utils/validation";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError('')
    if (name === "question") {
      setOpen(true);
    }
    setValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    
    if (
      isEmpty(values.name) ||
      isEmpty(values.companyName) ||
      isEmpty(values.email) ||
      isEmpty(values.question) ||
      isEmpty(values.answer) ||
      isEmpty(values.password)
    ) {
      setError("Please fill in all fields");
    }
    if (!isEmail(values.email)) {
      setError("Invalid Email");
    }
    if (isLength(values.password)) {
      setError("Password must be at least 6 characters");
    }
    console.log(error);
    try {
      const res = await axios.post("/api/register", {
        values,
      });
      if (res && res.data.success) {
        alert(res.data.message);
        navigate("/login");
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
        <h2>Get Started.</h2>
        {error && <p style={{ color: 'red',paddingBottom: '10px' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div class="group">
            <input
              type="text"
              required
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Name</label>
          </div>
          <div class="group">
            <input
              type="text"
              required
              name="companyName"
              value={values.companyName}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Company Name</label>
          </div>

          <div class="group">
            <input
              type="text"
              required
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Email</label>
          </div>

          <div class="group">
            <select
              defaultValue="default"
              required
              name="question"
              value={values.question}
              onChange={handleChange}
            >
              <option value="default" disabled>
                Choose a Security Questions
              </option>
              <option value="When is your date of birth?">
                When is your date of birth?
              </option>
              <option value="In what city were you born?">
                In what city were you born?
              </option>
              <option value="What is your mother's maiden name?">
                What is your mother's maiden name?
              </option>
              <option value="What was the name of your elementary school?">
                What was the name of your elementary school?
              </option>
              <option value="What was your favorite food as a child?">
                What was your favorite food as a child?
              </option>
            </select>
            <span class="bar"></span>
            {open && <label className="">Choose a Security Questions</label>}
          </div>
          {open && (
            <div class="group">
              <input
                type="text"
                required
                name="answer"
                value={values.answer}
                onChange={handleChange}
              />
              <span class="bar"></span>
              <label>Security Answer</label>
            </div>
          )}
          <div class="group">
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <span class="bar"></span>
            <label>Password</label>
            <i
              className={`password-toggle-icon ${showPassword ? "show" : ""}`}
              onClick={handleTogglePassword}
            >
              {showPassword ? <Eye /> : <Crossedeye />}
            </i>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="signup-link">
          Already have an Account{" "}
          <Link to="/login" className="link">
            Sign In
          </Link>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default SignUp;
