import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
// import backgroundImage from "../assets/Background/BG.png";
import overlayImagesm from "../assets/Login/bg-s.png";
import overlayImagelg from "../assets/Login/bg-l.png";
import pcimg from "../assets/backgrounds/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isEmail, isEmpty, isLength } from "../utils/validation";
import axios from "axios";
import "../Components/style.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const previousLocation = location.state ? location.state.from : null;

  const togglePasswordVisibility = () => {
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
        console.log(location.state);
        navigate(previousLocation || "/dashboard");
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative flex min-h-screen overflow-hidden text-white bg-black bg-center bg-cover md:hidden"
        style={{ backgroundImage: `url(${pcimg})` }}
      >
        <div className="text-center transform ">
          <img
            src={overlayImagesm}
            alt="Bigsurmoon"
            className="absolute w-screen h-full mx-auto -z-10 "
          />
          <div className="flex flex-col items-center justify-center h-full ">
            <p className="invisible w-screen">e</p>
            <h1 className="text-3xl font-bold text-white shadow-md mb-9">
              Visualisation <br /> Re-imagined
            </h1>
            {error && <p className="mb-10 text-center text-red-600">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 mb-10">
                <input
                  type="text"
                  id="floating_mobile_email"
                  className="block py-2.5 px-0 w-[320px] text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_mobile_email"
                  className="absolute text-white duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
                >
                  Email
                </label>
              </div>

              <div className="relative z-0">
                <input
                  type={showPassword ? "text" : "password"}
                  id="floating_mobile_password"
                  className="block py-2.5 px-0 w-[320px] text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_mobile_password"
                  className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                <i
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute text-white right-4 top-3"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="23"
                      height="18"
                      fill="white"
                    >
                      <g id="_01_align_center" data-name="01 align center">
                        <path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" />
                        <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
                      </g>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="23"
                      height="18"
                      fill="white"
                    >
                      <g id="_01_align_center" data-name="01 align center">
                        <path d="M23.821,11.181v0a15.736,15.736,0,0,0-4.145-5.44l3.032-3.032L21.293,1.293,18,4.583A11.783,11.783,0,0,0,12,3C4.5,3,1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64,15.736,15.736,0,0,0,4.145,5.44L1.293,21.293l1.414,1.414L6,19.417A11.783,11.783,0,0,0,12,21c7.5,0,10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM2,12.011C2.75,10.366,5.693,5,12,5a9.847,9.847,0,0,1,4.518,1.068L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92L5.754,16.832A13.647,13.647,0,0,1,2,12.011ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm3,7a9.847,9.847,0,0,1-4.518-1.068l1.765-1.765a4.992,4.992,0,0,0,6.92-6.92l2.078-2.078A13.584,13.584,0,0,1,22,12C21.236,13.657,18.292,19,12,19Z" />
                      </g>
                    </svg>
                  )}
                </i>
              </div>
              <div className="flex justify-end mt-3 mb-10">
                <p
                  onClick={(e) => navigate("/forgot")}
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  Forgot Password ?
                </p>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white text-sm flex items-center justify-center w-[125px] h-[40px] rounded-full mt-5 btnClr"
                >
                  <h3 className="px-4 py-1 ">Login </h3>
                </button>
              </div>
            </form>
            <div className="flex items-center justify-around w-full mt-10">
              <h2 className="text-gray-300">
                {" "}
                Don't have an account yet?{" "}
                <Link to="/register" className="pl-2 font-semibold text-white">
                  Sign Up
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        className="items-center justify-center hidden h-screen text-white bg-black bg-center bg-cover md:flex bg-bla xl:gap-20"
        style={{ backgroundImage: `url(${pcimg})` }}
      >
        <div className=" xl:mt-28 xl:ml-10">
          <h1 className="text-white text-4xl lg:text-[40px] font-bold leading-[50px] text-center mb-16">
            Visualisation <br /> Re-imagined
          </h1>
          {error && <p className="mb-10 text-center text-red-600">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-10">
              <input
                type="text"
                id="floating_standard_email"
                className="block py-2.5 px-0 lg:w-[489px] md:w-[420px] md:ml-5 text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_standard_email"
                className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>

            <div className="relative z-0 ">
              <input
                type={showPassword ? "text" : "password"}
                id="floating_standard_password"
                className="block py-2.5 px-0 lg:w-[489px] md:w-[420px] md:ml-5 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_standard_password"
                className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
              <i
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute text-white right-4 top-3"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="23"
                    height="18"
                    fill="white"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z" />
                      <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="23"
                    height="18"
                    fill="white"
                  >
                    <g id="_01_align_center" data-name="01 align center">
                      <path d="M23.821,11.181v0a15.736,15.736,0,0,0-4.145-5.44l3.032-3.032L21.293,1.293,18,4.583A11.783,11.783,0,0,0,12,3C4.5,3,1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64,15.736,15.736,0,0,0,4.145,5.44L1.293,21.293l1.414,1.414L6,19.417A11.783,11.783,0,0,0,12,21c7.5,0,10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM2,12.011C2.75,10.366,5.693,5,12,5a9.847,9.847,0,0,1,4.518,1.068L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92L5.754,16.832A13.647,13.647,0,0,1,2,12.011ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm3,7a9.847,9.847,0,0,1-4.518-1.068l1.765-1.765a4.992,4.992,0,0,0,6.92-6.92l2.078-2.078A13.584,13.584,0,0,1,22,12C21.236,13.657,18.292,19,12,19Z" />
                    </g>
                  </svg>
                )}
              </i>
            </div>
            <div className="flex justify-end mt-3 mb-10">
              <p
                onClick={(e) => navigate("/forgot")}
                className="text-sm text-gray-400 cursor-pointer"
              >
                Forgot Password ?
              </p>
            </div>

            <button
              className="text-white text-lg flex items-center justify-center w-[200px] h-[65px] mx-auto rounded-full mt-12 btnClr"
              type="submit"
            >
              <h3 className="px-4 py-1">Login </h3>
            </button>
          </form>
          <div className="flex items-center justify-around w-full mt-10">
            <h2 className="text-gray-300">
              {" "}
              Don't have an account yet?{" "}
              <Link to="/register" className="pl-2 font-semibold text-white">
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={overlayImagelg} alt="Bigsurmoon" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
