import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../assets/Background/BG.png";
import overlayImagesm from "../assets/Login/bg-s.png";
import overlayImagelg from "../assets/Login/bg-l.png";
import pcimg from "../assets/backgrounds/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isEmail, isEmpty, isLength } from "../utils/validation";
import axios from "axios";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
    answer: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [emailVerificationOpen, setEmailVerificationOpen] = useState(true);
  const [answerVerificationOpen, setAnswerVerificationOpen] = useState(false);
  const [passwordVerificationOpen, setPasswordVerificationOpen] =
    useState(false);
  const [question, setQuestion] = useState("");
  const [reqEmail, setReqEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setValues((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (isEmpty(values.email)) {
      setError("Please fill in all fields");
    }
    if (!isEmail(values.email)) {
      setError("Invalid Email");
    }
    try {
      const res = await axios.post("/api/forgotPassword", {
        values,
      });
      console.log("res", res);
      if (res && res.data.success) {
        console.log(res.data);
        setEmailVerificationOpen(false);
        setQuestion(res.data.question);
        setReqEmail(res.data.email);
        setAnswerVerificationOpen(true);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (isEmpty(values.answer)) {
      setError("Please fill in all fields");
    }
    try {
      const res = await axios.post("/api/forgotPassword", {
        values,
      });
      console.log("res", res);
      if (res && res.data.success) {
        console.log(res.data);
        setEmailVerificationOpen(false);
        setAnswerVerificationOpen(false);
        setReqEmail(res.data.email);
        setPasswordVerificationOpen(true);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    if (isEmpty(values.password) || isEmpty(values.confirmPassword)) {
      setError("Please fill in all fields");
    } else if (isLength(values.password) || isLength(values.confirmPassword)) {
      setError("Password must be at least 6 characters");
    } else if (values.password !== values.confirmPassword) {
      setError("The password confirmation does not match");
    } else if (values) {
      try {
        const res = await axios.post("/api/forgotPassword", {
          values,
        });
        console.log("res", res);
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
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="flex md:hidden   min-h-screen overflow-hidden bg-cover bg-black text-white bg-center relative"
        style={{ backgroundImage: `url(${pcimg})` }}
      >
        <div className="  transform  text-center">
          <img
            src={overlayImagesm}
            alt="Overlay"
            className="mx-auto  absolute -z-10 w-screen h-full "
          />
          <div className=" flex flex-col justify-center h-full items-center  ">
            <h1 className="invisible w-screen">e</h1>
            <h1 className="text-white text-3xl  font-bold shadow-md mb-9">
              Visualisation <br /> Re-imagined
            </h1>

            {emailVerificationOpen && (
              <h1 className="text-sm text-center mb-16 text-gray-200">
                Please provide the email address that you used <br /> when you
                signed up for your account.
              </h1>
            )}
            {error && <p className="text-red-600 text-center mb-10">{error}</p>}
            {emailVerificationOpen && (
              <>
                <form onSubmit={handleSubmit}>
                  <div className="relative z-0 mb-10">
                    <input
                      type="text"
                      id="floating_mobile_email"
                      className="block py-2.5 px-0 w-[320px]  text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floating_mobile_email"
                      className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <button
                    className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[150px]  h-[50px] mx-auto rounded-full mt-12"
                    type="submit"
                  >
                    <h3 className="px-4 py-1">Submit </h3>
                  </button>
                </form>
              </>
            )}
            {answerVerificationOpen && (
              <form onSubmit={handleQuestionSubmit}>
                <div className="mb-10">
                  <label
                    htmlFor=""
                    className="text-left mr-32 w-[320px] mb-3"
                  >
                    {question}
                  </label>
                  <br />
                  <input
                    type="text"
                    className="w-[320px] bg-transparent outline-none border-b border-gray-200 mt-3"
                    placeholder="Please Enter the Answer"
                    required
                    name="answer"
                    value={values.answer}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    value={reqEmail}
                    onChange={(e) => e.preventDefault()}
                    hidden
                  />
                </div>
                <button
                  className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[150px]  h-[50px] mx-auto rounded-full mt-12"
                  type="submit"
                >
                  <h3 className="px-4 py-1">Submit </h3>
                </button>
              </form>
            )}

            {passwordVerificationOpen && (
              <form onSubmit={handlePasswordSubmit}>
                <div className="relative z-0 mb-10">
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
                    className="absolute text-base left-0 text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                  <i
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-3 text-white"
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
                <div className="relative z-0 mb-10">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="floating_standard_conformPassword"
                    className="block py-2.5 px-0 w-[320px] text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="email"
                    value={reqEmail}
                    onChange={(e) => e.preventDefault()}
                    hidden
                  />
                  <label
                    htmlFor="floating_standard_conformPassword"
                    className="absolute text-base left-0 text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm Passwordd
                  </label>
                  <i
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute right-4 top-3 text-white"
                  >
                    {showConfirmPassword ? (
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

                <button
                  className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[150px]  h-[50px] mx-auto rounded-full mt-12"
                  type="submit"
                >
                  <h3 className="px-4 py-1">Submit </h3>
                </button>
              </form>
            )}
            <div className="flex  w-full justify-around items-center mt-10">
              <h2 className="text-gray-300">
                {" "}
                Don't have an account yet?{" "}
                <Link to="/register" className="pl-2 text-white font-semibold">
                  Sign Up
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" hidden md:flex items-center justify-center h-screen bg-cover bg-black text-white bg-center bg-bla xl:gap-20"
        style={{ backgroundImage: `url(${pcimg})` }}
      >
        <div className="  xl:mt-28 xl:ml-10">
          <h1 className="text-white text-4xl lg:text-[40px] font-bold leading-[50px] text-center mb-16">
            Visualisation <br /> Re-imagined
          </h1>
          {emailVerificationOpen && (
            <h1 className="text-sm text-center mb-16 text-gray-200">
              Please provide the email address that you used <br /> when you
              signed up for your account.
            </h1>
          )}
          {error && <p className="text-red-600 text-center mb-10">{error}</p>}
          {emailVerificationOpen && (
            <>
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
                <button
                  className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[200px]  h-[65px] mx-auto rounded-full mt-12"
                  type="submit"
                >
                  <h3 className="px-4 py-1">Submit </h3>
                </button>
              </form>
            </>
          )}
          {answerVerificationOpen && (
            <form onSubmit={handleQuestionSubmit}>
              <div className="mb-10">
                <label htmlFor="" className="text-left w-[600px] md:ml-5 mb-3">
                  {question}
                </label>
                <br />
                <input
                  type="text"
                  className="lg:w-[489px] md:w-[420px] md:ml-5 bg-transparent outline-none border-b border-gray-200 mt-3"
                  placeholder="Please Enter the Answer"
                  required
                  name="answer"
                  value={values.answer}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  value={reqEmail}
                  onChange={(e) => e.preventDefault()}
                  hidden
                />
              </div>
              <button
                className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[200px]  h-[65px] mx-auto rounded-full mt-12"
                type="submit"
              >
                <h3 className="px-4 py-1">Submit </h3>
              </button>
            </form>
          )}

          {passwordVerificationOpen && (
            <form onSubmit={handlePasswordSubmit}>
              <div className="relative z-0 mb-10">
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
                  className="absolute text-base text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
                <i
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-3 text-white"
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
              <div className="relative z-0 mb-10">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="floating_standard_conformPassword"
                  className="block py-2.5 px-0 lg:w-[489px] md:w-[420px] md:ml-5 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="email"
                  value={reqEmail}
                  onChange={(e) => e.preventDefault()}
                  hidden
                />
                <label
                  htmlFor="floating_standard_conformPassword"
                  className="absolute text-base text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm Passwordd
                </label>
                <i
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute right-4 top-3 text-white"
                >
                  {showConfirmPassword ? (
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

              <button
                className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[200px]  h-[65px] mx-auto rounded-full mt-12"
                type="submit"
              >
                <h3 className="px-4 py-1">Submit </h3>
              </button>
            </form>
          )}

          <div className="flex w-full justify-around items-center mt-10">
            <h2 className="text-gray-300">
              {" "}
              Don't have an account yet?{" "}
              <Link to="/register" className="pl-2 text-white font-semibold">
                Sign Up
              </Link>
            </h2>
          </div>
        </div>
        <div className="hidden  md:block">
          <img src={overlayImagelg} alt="Large Overlay" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;
