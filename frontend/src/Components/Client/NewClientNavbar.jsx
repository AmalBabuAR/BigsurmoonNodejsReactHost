import React from "react";
import logo from "../../assets/Logos/logo.gif";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios/axiosInterceptors/axiosInstance";

const NewClientNavbar = () => {
  const [name, setName] = useState("");
  const userName = async () => {
    try {
      const res = await axiosInstance.get("/getUserName");
      console.log(res);
      if (res.data.success) {
        setName(res.data.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userName();
  }, []);
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full   bg-black">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between mx-[2vw]">
            <div className="flex items-center justify-start">
              <Link to="/">
                <div className="flex">
                  <img src={logo} alt="logo" className="h-10" />
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex ml-3">
                <div className="text-white flex  gap-3 items-center justify-center">
                  <h1>{name}</h1>
                  <h1 className="w-[32px] h-[32px] bg-[#F53B00] flex items-center justify-center rounded-full ">
                    {name.slice(0, 1)}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NewClientNavbar;
