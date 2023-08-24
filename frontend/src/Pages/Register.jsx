import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import overlayImage from "../assets/Arrows/Ar.png";
import backgroundImage from "../assets/Background/BG.png";
import overlayImagesm from "../assets/Login/bg-s.png";
import overlayImagelg from "../assets/Login/bg-l.png";
import g from "../assets/Login/g.png";
import t from "../assets/Login/t.png";
import f from "../assets/Login/f.png";
import pcimg from "../assets/backgrounds/login.png";
import { Link, useNavigate } from "react-router-dom";
import { isEmail, isEmpty, isLength } from "../utils/validation";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
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
              Get Started
            </h1>
            {error && <p className="text-red-600 text-center mb-10">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  id="floating_mobile_name"
                  className="block py-2.5 px-0 w-[320px] text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_mobile_name"
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              <div className="relative z-0 mb-5">
                <input
                  type="text"
                  id="floating_mobile_company"
                  className="block py-2.5 px-0 w-[320px] text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="companyName"
                  value={values.companyName}
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_mobile_company"
                  className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 left-0 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company Name
                </label>
              </div>
              <div className="relative z-0 mb-5">
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
                  className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 left-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>

              <div className="relative z-0 mb-5">
                <select
                  defaultValue="default"
                  required
                  name="question"
                  className="block py-2.5 px-0 w-[320px] text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={values.question}
                  onChange={handleChange}
                >
                  <option className="text-black" value="default" disabled>
                    Choose a Security Questions
                  </option>
                  <option
                    className="text-black"
                    value="When is your date of birth?"
                  >
                    When is your date of birth?
                  </option>
                  <option
                    className="text-black"
                    value="In what city were you born?"
                  >
                    In what city were you born?
                  </option>
                  <option
                    className="text-black"
                    value="What is your mother's maiden name?"
                  >
                    What is your mother's maiden name?
                  </option>
                  <option
                    className="text-black"
                    value="What was the name of your elementary school?"
                  >
                    What was the name of your elementary school?
                  </option>
                  <option
                    className="text-black"
                    value="What was your favorite food as a child?"
                  >
                    What was your favorite food as a child?
                  </option>
                </select>
                {open && (
                  <label className="absolute text-sm text-white duration-300 md:ml-5 left-0 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Choose a Security Questions
                  </label>
                )}
              </div>
              {open && (
                <div className="relative z-0 mb-5">
                  <input
                    type="text"
                    id="floating_mobile_answer"
                    className="block py-2.5 px-0 w-[320px] text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    name="answer"
                    value={values.answer}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="floating_mobile_answer"
                    className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 left-0 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Security Answer
                  </label>
                </div>
              )}

              <div className="relative z-0 mb-5">
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
                  className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              <button
                type="submit"
                className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[125px]  h-[40px] mx-auto rounded-full mt-12"
              >
                <h3 className="px-4 py-1">Sign up </h3>
              </button>
            </form>

            <div className="flex  w-full justify-around items-center mt-10">
              <h2 className="text-gray-300">
                {" "}
                Already have an account?{" "}
                <Link to="/login" className="pl-2 text-white font-semibold">
                  Sign in
                </Link>
              </h2>
            </div>
            {/* <div className="flex gap-10 mt-8">
              <img src={g} />
              <img src={t} />
              <img src={f} />
            </div> */}
          </div>
        </div>
      </div>

      <div
        className=" hidden md:flex items-center justify-center h-screen bg-cover bg-black text-white bg-center xl:gap-20"
        style={{ backgroundImage: `url(${pcimg})` }}
      >
        <div className="xl:mt-20 xl:ml-10">
          <h1 className="text-white text-4xl lg:text-[40px] font-bold leading-[50px] text-center mb-9">
            Get Started
          </h1>
          {error && (
            <p style={{ color: "red", paddingBottom: "10px" }}>{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 mb-10">
              <input
                type="text"
                id="floating_standard_name"
                className="block py-2.5 px-0 w-[600px] lg:w-[489px] md:w-[420px] md:ml-5 text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_standard_name"
                className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 mb-10">
              <input
                type="text"
                id="floating_standard_company"
                className="block py-2.5 px-0 lg:w-[489px] md:w-[420px] md:ml-5 text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                name="companyName"
                value={values.companyName}
                onChange={handleChange}
              />
              <label
                htmlFor="floating_standard_company"
                className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company Name
              </label>
            </div>
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

            <div className="relative z-0 mb-10">
              <select
                defaultValue="default"
                required
                name="question"
                className="block py-2.5 px-0 lg:w-[489px] md:w-[420px] md:ml-5 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={values.question}
                onChange={handleChange}
              >
                <option className="text-black" value="default" disabled>
                  Choose a Security Questions
                </option>
                <option
                  className="text-black"
                  value="When is your date of birth?"
                >
                  When is your date of birth?
                </option>
                <option
                  className="text-black"
                  value="In what city were you born?"
                >
                  In what city were you born?
                </option>
                <option
                  className="text-black"
                  value="What is your mother's maiden name?"
                >
                  What is your mother's maiden name?
                </option>
                <option
                  className="text-black"
                  value="What was the name of your elementary school?"
                >
                  What was the name of your elementary school?
                </option>
                <option
                  className="text-black"
                  value="What was your favorite food as a child?"
                >
                  What was your favorite food as a child?
                </option>
              </select>
              {open && (
                <label className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Choose a Security Questions
                </label>
              )}
            </div>
            {open && (
              <div className="relative z-0 mb-10">
                <input
                  type="text"
                  id="floating_standard_answer"
                  className="block py-2.5 px-0 lg:w-[489px] md:w-[420px] md:ml-5 text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  name="answer"
                  value={values.answer}
                  onChange={handleChange}
                />
                <label
                  htmlFor="floating_standard_answer"
                  className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Security Answer
                </label>
              </div>
            )}

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
                className="absolute text-sm text-white duration-300 md:ml-5 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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

            <button
              type="submit"
              className="text-white text-lg flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-400 w-[200px]  h-[65px] mx-auto rounded-full mt-12"
            >
              <h3 className="px-4 py-1">Sign up </h3>
            </button>
          </form>
          <div className="flex w-full justify-around items-center my-10">
            <h2 className="text-gray-300">
              {" "}
              Already have an account?{" "}
              <Link to="/login" className="pl-2 text-white font-semibold">
                Sign in
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

export default Register;
