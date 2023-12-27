import React, { useEffect, useState } from "react";
// import axiosInstance from "../../axios/axiosInterceptors/axiosInstance";

const Asidebar = (props) => {
  const { data } = props;
  // const [data, setData] = useState({});
  // async function getProjectSize() {
  //   try {
  //     const res = await axiosInstance.get("/getProjectSize");
  //     if (res.data.success) {
  //       setData(res.data.resData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getProjectSize();
  // }, []);

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-[#131313]   sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-[#131313] da">
          <ul className="space-y-2 font-medium">
            <div>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5  transition duration-75 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <div className="pt-20">
                <div className="w-full bg-[#1f2741] rounded-full p-0.5">
                  <div
                    className="bg-gradient-to-r from-[#181D9A] to-[#2265D5] text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                    style={{ width: `${data.percentage}%` }}
                  >
                    {Math.round(data.percentage)}%
                  </div>
                </div>
                <h1 className="text-gray-400 text-[12px] pt-2">
                  {data.quantity - data.used} Out of {data.quantity} files used
                </h1>
              </div>
            </div>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Asidebar;
