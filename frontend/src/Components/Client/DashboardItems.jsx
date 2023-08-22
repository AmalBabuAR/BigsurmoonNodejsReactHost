import React, { useState } from "react";
import pcimg1 from '../../assets/backgrounds/client.png'
import pcimg2 from '../../assets/backgrounds/client2.png'


const DashboardItems = () => {
  const[open,SetOpen]=useState(false)
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <>
    
    <div className="lg:flex pt-20 hidden  bg-[#262626]">
      <div>

      </div>
      {!open&&<div onClick={()=>SetOpen(!open)}  className="mt-10 flex xl:hidden justify-center">
  
  <h1 className=" text-white h-full text-4xl"> &rarr; </h1>
  </div>}
      
<div className="xl:hidden">

        {open&&(

       
      <div className="h-full  w-[289px] fixed pt-10 hidden text-white lg:block  bg-[#131313]">
        <div onClick={()=>SetOpen(!open)}>
        <h1 className="text-end text-3xl pr-4">&larr;</h1>
          <h2 className="text-end pr-3">close</h2>
        </div>
        <div className="  w-[235px] flex flex-col justify-between h-[626px] mx-auto ">
          <div>
            <h2 className="text-[19px] pt-5 ">Dashboard</h2>
            <h3 className="text-[19px] pt-2">Profile</h3>
            <div className="pt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="235"
                height="22"
                viewBox="0 0 235 22"
                fill="none"
              >
                <g opacity="0.2" filter="url(#filter0_b_34_97)">
                  <path
                    d="M0 10.8002C0 16.765 4.83542 21.6005 10.8002 21.6005H224.2C230.165 21.6005 235 16.765 235 10.8002C235 4.83546 230.165 3.43323e-05 224.2 3.43323e-05H10.8002C4.83542 3.43323e-05 0 4.83546 0 10.8002Z"
                    fill="url(#paint0_linear_34_97)"
                  />
                </g>
                <path
                  d="M2.35791 10.8003C2.35791 15.5721 6.22625 19.4404 10.9981 19.4404H171.343C176.115 19.4404 179.983 15.5721 179.983 10.8003C179.983 6.02843 176.115 2.16009 171.343 2.16009H10.9981C6.22625 2.16009 2.35791 6.02843 2.35791 10.8003Z"
                  fill="url(#paint1_linear_34_97)"
                />
                <defs>
                  <filter
                    id="filter0_b_34_97"
                    x="-1355.42"
                    y="-1355.42"
                    width="2945.84"
                    height="2732.44"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="677.711"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_34_97"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_34_97"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_34_97"
                    x1="151.313"
                    y1="3.69464e-05"
                    x2="150.609"
                    y2="21.6051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4E90F3" />
                    <stop offset="1" stop-color="#5451FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_34_97"
                    x1="175.204"
                    y1="2.16011"
                    x2="8.07369"
                    y2="-2.67884"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2265D5" />
                    <stop offset="1" stop-color="#181D9A" />
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-[12px] pt-2">40 Out of 50 files used </h1>
            </div>
            <div className="w-[234px] h-[124px] bg-[#202020] flex mt-10 flex-col justify-center items-center rounded-2xl">
              <h1 className="text-[10px] w-[182px]">
                Ready to go beyond current plan? Upgrade to give your ideas and
                designs room to grow without limits.
              </h1>
              <h1 className="w-[127px] h-[26px] text-[10px] mt-4 bg-[#2898FF] rounded-full flex items-center justify-center">
                View plans
              </h1>
            </div>
          </div>
          <div>
            Logout
          </div>
        </div>
      </div>
       )}
       </div>

       <div className="h-full  xl:block   w-[289px] fixed pt-10  text-white lg:hidden  bg-[#131313]">
        
        <div className="  w-[235px] flex flex-col justify-between h-[626px] mx-auto ">
          <div>
            <h2 className="text-[19px] pt-5 ">Dashboard</h2>
            <h3 className="text-[19px] pt-2">Profile</h3>
            <div className="pt-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="235"
                height="22"
                viewBox="0 0 235 22"
                fill="none"
              >
                <g opacity="0.2" filter="url(#filter0_b_34_97)">
                  <path
                    d="M0 10.8002C0 16.765 4.83542 21.6005 10.8002 21.6005H224.2C230.165 21.6005 235 16.765 235 10.8002C235 4.83546 230.165 3.43323e-05 224.2 3.43323e-05H10.8002C4.83542 3.43323e-05 0 4.83546 0 10.8002Z"
                    fill="url(#paint0_linear_34_97)"
                  />
                </g>
                <path
                  d="M2.35791 10.8003C2.35791 15.5721 6.22625 19.4404 10.9981 19.4404H171.343C176.115 19.4404 179.983 15.5721 179.983 10.8003C179.983 6.02843 176.115 2.16009 171.343 2.16009H10.9981C6.22625 2.16009 2.35791 6.02843 2.35791 10.8003Z"
                  fill="url(#paint1_linear_34_97)"
                />
                <defs>
                  <filter
                    id="filter0_b_34_97"
                    x="-1355.42"
                    y="-1355.42"
                    width="2945.84"
                    height="2732.44"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="677.711"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_34_97"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_34_97"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_34_97"
                    x1="151.313"
                    y1="3.69464e-05"
                    x2="150.609"
                    y2="21.6051"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#4E90F3" />
                    <stop offset="1" stop-color="#5451FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_34_97"
                    x1="175.204"
                    y1="2.16011"
                    x2="8.07369"
                    y2="-2.67884"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2265D5" />
                    <stop offset="1" stop-color="#181D9A" />
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-[12px] pt-2">40 Out of 50 files used </h1>
            </div>
            <div className="w-[234px] h-[124px] bg-[#202020] flex mt-10 flex-col justify-center items-center rounded-2xl">
              <h1 className="text-[10px] w-[182px]">
                Ready to go beyond current plan? Upgrade to give your ideas and
                designs room to grow without limits.
              </h1>
              <h1 className="w-[127px] h-[26px] text-[10px] mt-4 bg-[#2898FF] rounded-full flex items-center justify-center">
                View plans
              </h1>
            </div>
          </div>
          <div>
            Logout
          </div>
        </div>
      </div>

      <div className="xl:ml-80 mt-28 bg-[#262626] h-screen">
        <div className="flex gap-4">
        <div>
      <div onClick={openPopup} className="xl:flex justify-center items-center">
        <div className="w-[448px] flex justify-left items-center gap-4 h-[87px] text-white border border-gray-700 rounded-2xl">
          <img src={pcimg1} className="w-[42px] ml-3 h-[42px]" alt="Icon" />
          <div>
            <h1>New file</h1>
            <h1>Design and prototype</h1>
          </div>
        </div>
        <div className="">
          <h1
            className="ml-[-40px] text-white cursor-pointer"
            
          >
            +
          </h1>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#232234] text-white  w-[400px] h-[205px] p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4 ">Add Project</h2>
            <input type="text" className=" border-b outline-none bg-transparent  mt-6 w-full" />
            <br />
            <div className=" flex gap-3 justify-end mt-10">
            <button
              className="px-4 py-2 bg-[#383748] text-white rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Save
            </button>
            </div>
          </div>
        </div>
      )}
    </div>

        
        <div className="flex justify-center items-center ">

<div className="w-[448px] flex justify-left items-center gap-4 h-[87px] text-white border border-gray-700  rounded-2xl">
  <img src={pcimg2} className="w-[42px] ml-3 h-[42px]"  />
  <div>
    <h1>Import File </h1>
    <h1>Import 3d file</h1>

  </div>
  </div>
  <div className="text-white">
    <h1 className="ml-[-40px]">+</h1>
  </div>

</div>

        </div>
<div>
  <h1 className="text-[20px] text-gray-400 mt-20 mb-4">Projects</h1>
  <div className="h-full border border-gray-700 p-3 w-full text-white flex flex-col gap-4 rounded-2xl">
    <div className="flex justify-between px-4 items-center">
    <h1>01</h1>
    <h1>img</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">View</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">Edit</h1>
    <h1>siframe sr= http://embed.ted.xyzqwertyuiopmbed:html</h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M10.2832 17.1826C10.7666 17.1826 11.1445 16.998 11.6104 16.5586L18.5713 10.0283C18.9141 9.70312 19.0459 9.3252 19.0459 9C19.0459 8.66602 18.9141 8.29688 18.5713 7.97168L11.6104 1.48535C11.1006 1.01074 10.7666 0.817383 10.3008 0.817383C9.59766 0.817383 9.09668 1.3623 9.09668 2.04785V5.17676H8.87695C2.8125 5.17676 0 9.07031 0 15.4512C0 16.5674 0.474609 17.1475 1.08984 17.1475C1.55566 17.1475 1.98633 16.998 2.3291 16.3564C3.70898 13.79 5.66895 12.8496 8.87695 12.8496H9.09668V15.9961C9.09668 16.6816 9.59766 17.1826 10.2832 17.1826Z" fill="white"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
  <path d="M10.1059 0H8.11475H5.97705C5.42477 0 4.97705 0.447716 4.97705 1V7.82609H1.27689C0.413387 7.82609 -0.0441725 8.84689 0.530408 9.49149L7.36253 17.1561C7.76223 17.6045 8.46425 17.6019 8.86053 17.1504L15.5889 9.4858C16.1562 8.83956 15.6973 7.82609 14.8374 7.82609H11.0459L11.1059 1.0088C11.1108 0.453095 10.6616 0 10.1059 0Z" fill="#D9D9D9"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M4.57227 19.8306H12.8955C14.0996 19.8306 14.8027 19.189 14.8555 17.9937L15.4092 5.29346H16.6221C17.0703 5.29346 17.4131 4.94189 17.4131 4.50244C17.4131 4.06299 17.0615 3.729 16.6221 3.729H12.8076V2.41064C12.8076 1.00439 11.9023 0.169434 10.3906 0.169434H7.05078C5.53906 0.169434 4.63379 1.00439 4.63379 2.41064V3.729H0.836914C0.397461 3.729 0.0458984 4.07178 0.0458984 4.50244C0.0458984 4.95068 0.397461 5.29346 0.836914 5.29346H2.05859L2.62109 17.9937C2.66504 19.189 3.36816 19.8306 4.57227 19.8306ZM6.46191 2.48975C6.46191 2.09424 6.73438 1.83936 7.17383 1.83936H10.2764C10.7158 1.83936 10.9883 2.09424 10.9883 2.48975V3.729H6.46191V2.48975ZM5.9082 17.1323C5.55664 17.1323 5.31055 16.9038 5.30176 16.5522L5.03809 7.21826C5.0293 6.8667 5.27539 6.62939 5.64453 6.62939C5.99609 6.62939 6.24219 6.85791 6.25098 7.20947L6.51465 16.5435C6.53223 16.895 6.28613 17.1323 5.9082 17.1323ZM8.72949 17.1323C8.36035 17.1323 8.11426 16.9038 8.11426 16.5522V7.20947C8.11426 6.8667 8.36035 6.62939 8.72949 6.62939C9.09863 6.62939 9.35352 6.8667 9.35352 7.20947V16.5522C9.35352 16.9038 9.09863 17.1323 8.72949 17.1323ZM11.5508 17.1411C11.1729 17.1411 10.9268 16.895 10.9443 16.5522L11.208 7.20947C11.2168 6.85791 11.4629 6.62939 11.8145 6.62939C12.1836 6.62939 12.4297 6.8667 12.4209 7.21826L12.1572 16.5522C12.1484 16.9038 11.9023 17.1411 11.5508 17.1411Z" fill="white"/>
</svg></h1>
    </div>
    <div className="flex justify-between px-4 items-center">
    <h1>01</h1>
    <h1>img</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">View</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">Edit</h1>
    <h1>siframe sr= http://embed.ted.xyzqwertyuiopmbed:html</h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M10.2832 17.1826C10.7666 17.1826 11.1445 16.998 11.6104 16.5586L18.5713 10.0283C18.9141 9.70312 19.0459 9.3252 19.0459 9C19.0459 8.66602 18.9141 8.29688 18.5713 7.97168L11.6104 1.48535C11.1006 1.01074 10.7666 0.817383 10.3008 0.817383C9.59766 0.817383 9.09668 1.3623 9.09668 2.04785V5.17676H8.87695C2.8125 5.17676 0 9.07031 0 15.4512C0 16.5674 0.474609 17.1475 1.08984 17.1475C1.55566 17.1475 1.98633 16.998 2.3291 16.3564C3.70898 13.79 5.66895 12.8496 8.87695 12.8496H9.09668V15.9961C9.09668 16.6816 9.59766 17.1826 10.2832 17.1826Z" fill="white"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
  <path d="M10.1059 0H8.11475H5.97705C5.42477 0 4.97705 0.447716 4.97705 1V7.82609H1.27689C0.413387 7.82609 -0.0441725 8.84689 0.530408 9.49149L7.36253 17.1561C7.76223 17.6045 8.46425 17.6019 8.86053 17.1504L15.5889 9.4858C16.1562 8.83956 15.6973 7.82609 14.8374 7.82609H11.0459L11.1059 1.0088C11.1108 0.453095 10.6616 0 10.1059 0Z" fill="#D9D9D9"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M4.57227 19.8306H12.8955C14.0996 19.8306 14.8027 19.189 14.8555 17.9937L15.4092 5.29346H16.6221C17.0703 5.29346 17.4131 4.94189 17.4131 4.50244C17.4131 4.06299 17.0615 3.729 16.6221 3.729H12.8076V2.41064C12.8076 1.00439 11.9023 0.169434 10.3906 0.169434H7.05078C5.53906 0.169434 4.63379 1.00439 4.63379 2.41064V3.729H0.836914C0.397461 3.729 0.0458984 4.07178 0.0458984 4.50244C0.0458984 4.95068 0.397461 5.29346 0.836914 5.29346H2.05859L2.62109 17.9937C2.66504 19.189 3.36816 19.8306 4.57227 19.8306ZM6.46191 2.48975C6.46191 2.09424 6.73438 1.83936 7.17383 1.83936H10.2764C10.7158 1.83936 10.9883 2.09424 10.9883 2.48975V3.729H6.46191V2.48975ZM5.9082 17.1323C5.55664 17.1323 5.31055 16.9038 5.30176 16.5522L5.03809 7.21826C5.0293 6.8667 5.27539 6.62939 5.64453 6.62939C5.99609 6.62939 6.24219 6.85791 6.25098 7.20947L6.51465 16.5435C6.53223 16.895 6.28613 17.1323 5.9082 17.1323ZM8.72949 17.1323C8.36035 17.1323 8.11426 16.9038 8.11426 16.5522V7.20947C8.11426 6.8667 8.36035 6.62939 8.72949 6.62939C9.09863 6.62939 9.35352 6.8667 9.35352 7.20947V16.5522C9.35352 16.9038 9.09863 17.1323 8.72949 17.1323ZM11.5508 17.1411C11.1729 17.1411 10.9268 16.895 10.9443 16.5522L11.208 7.20947C11.2168 6.85791 11.4629 6.62939 11.8145 6.62939C12.1836 6.62939 12.4297 6.8667 12.4209 7.21826L12.1572 16.5522C12.1484 16.9038 11.9023 17.1411 11.5508 17.1411Z" fill="white"/>
</svg></h1>
    </div>
    <div className="flex justify-between px-4 items-center">
    <h1>01</h1>
    <h1>img</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">View</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">Edit</h1>
    <h1>siframe sr= http://embed.ted.xyzqwertyuiopmbed:html</h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M10.2832 17.1826C10.7666 17.1826 11.1445 16.998 11.6104 16.5586L18.5713 10.0283C18.9141 9.70312 19.0459 9.3252 19.0459 9C19.0459 8.66602 18.9141 8.29688 18.5713 7.97168L11.6104 1.48535C11.1006 1.01074 10.7666 0.817383 10.3008 0.817383C9.59766 0.817383 9.09668 1.3623 9.09668 2.04785V5.17676H8.87695C2.8125 5.17676 0 9.07031 0 15.4512C0 16.5674 0.474609 17.1475 1.08984 17.1475C1.55566 17.1475 1.98633 16.998 2.3291 16.3564C3.70898 13.79 5.66895 12.8496 8.87695 12.8496H9.09668V15.9961C9.09668 16.6816 9.59766 17.1826 10.2832 17.1826Z" fill="white"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
  <path d="M10.1059 0H8.11475H5.97705C5.42477 0 4.97705 0.447716 4.97705 1V7.82609H1.27689C0.413387 7.82609 -0.0441725 8.84689 0.530408 9.49149L7.36253 17.1561C7.76223 17.6045 8.46425 17.6019 8.86053 17.1504L15.5889 9.4858C16.1562 8.83956 15.6973 7.82609 14.8374 7.82609H11.0459L11.1059 1.0088C11.1108 0.453095 10.6616 0 10.1059 0Z" fill="#D9D9D9"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M4.57227 19.8306H12.8955C14.0996 19.8306 14.8027 19.189 14.8555 17.9937L15.4092 5.29346H16.6221C17.0703 5.29346 17.4131 4.94189 17.4131 4.50244C17.4131 4.06299 17.0615 3.729 16.6221 3.729H12.8076V2.41064C12.8076 1.00439 11.9023 0.169434 10.3906 0.169434H7.05078C5.53906 0.169434 4.63379 1.00439 4.63379 2.41064V3.729H0.836914C0.397461 3.729 0.0458984 4.07178 0.0458984 4.50244C0.0458984 4.95068 0.397461 5.29346 0.836914 5.29346H2.05859L2.62109 17.9937C2.66504 19.189 3.36816 19.8306 4.57227 19.8306ZM6.46191 2.48975C6.46191 2.09424 6.73438 1.83936 7.17383 1.83936H10.2764C10.7158 1.83936 10.9883 2.09424 10.9883 2.48975V3.729H6.46191V2.48975ZM5.9082 17.1323C5.55664 17.1323 5.31055 16.9038 5.30176 16.5522L5.03809 7.21826C5.0293 6.8667 5.27539 6.62939 5.64453 6.62939C5.99609 6.62939 6.24219 6.85791 6.25098 7.20947L6.51465 16.5435C6.53223 16.895 6.28613 17.1323 5.9082 17.1323ZM8.72949 17.1323C8.36035 17.1323 8.11426 16.9038 8.11426 16.5522V7.20947C8.11426 6.8667 8.36035 6.62939 8.72949 6.62939C9.09863 6.62939 9.35352 6.8667 9.35352 7.20947V16.5522C9.35352 16.9038 9.09863 17.1323 8.72949 17.1323ZM11.5508 17.1411C11.1729 17.1411 10.9268 16.895 10.9443 16.5522L11.208 7.20947C11.2168 6.85791 11.4629 6.62939 11.8145 6.62939C12.1836 6.62939 12.4297 6.8667 12.4209 7.21826L12.1572 16.5522C12.1484 16.9038 11.9023 17.1411 11.5508 17.1411Z" fill="white"/>
</svg></h1>
    </div>
    <div className="flex justify-between px-4 items-center">
    <h1>01</h1>
    <h1>img</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">View</h1>
    <h1 className="w-[65px] h-[27px] bg-white text-blue-500 flex justify-center rounded-full items-center">Edit</h1>
    <h1>siframe sr= http://embed.ted.xyzqwertyuiopmbed:html</h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M10.2832 17.1826C10.7666 17.1826 11.1445 16.998 11.6104 16.5586L18.5713 10.0283C18.9141 9.70312 19.0459 9.3252 19.0459 9C19.0459 8.66602 18.9141 8.29688 18.5713 7.97168L11.6104 1.48535C11.1006 1.01074 10.7666 0.817383 10.3008 0.817383C9.59766 0.817383 9.09668 1.3623 9.09668 2.04785V5.17676H8.87695C2.8125 5.17676 0 9.07031 0 15.4512C0 16.5674 0.474609 17.1475 1.08984 17.1475C1.55566 17.1475 1.98633 16.998 2.3291 16.3564C3.70898 13.79 5.66895 12.8496 8.87695 12.8496H9.09668V15.9961C9.09668 16.6816 9.59766 17.1826 10.2832 17.1826Z" fill="white"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
  <path d="M10.1059 0H8.11475H5.97705C5.42477 0 4.97705 0.447716 4.97705 1V7.82609H1.27689C0.413387 7.82609 -0.0441725 8.84689 0.530408 9.49149L7.36253 17.1561C7.76223 17.6045 8.46425 17.6019 8.86053 17.1504L15.5889 9.4858C16.1562 8.83956 15.6973 7.82609 14.8374 7.82609H11.0459L11.1059 1.0088C11.1108 0.453095 10.6616 0 10.1059 0Z" fill="#D9D9D9"/>
</svg></h1>
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M4.57227 19.8306H12.8955C14.0996 19.8306 14.8027 19.189 14.8555 17.9937L15.4092 5.29346H16.6221C17.0703 5.29346 17.4131 4.94189 17.4131 4.50244C17.4131 4.06299 17.0615 3.729 16.6221 3.729H12.8076V2.41064C12.8076 1.00439 11.9023 0.169434 10.3906 0.169434H7.05078C5.53906 0.169434 4.63379 1.00439 4.63379 2.41064V3.729H0.836914C0.397461 3.729 0.0458984 4.07178 0.0458984 4.50244C0.0458984 4.95068 0.397461 5.29346 0.836914 5.29346H2.05859L2.62109 17.9937C2.66504 19.189 3.36816 19.8306 4.57227 19.8306ZM6.46191 2.48975C6.46191 2.09424 6.73438 1.83936 7.17383 1.83936H10.2764C10.7158 1.83936 10.9883 2.09424 10.9883 2.48975V3.729H6.46191V2.48975ZM5.9082 17.1323C5.55664 17.1323 5.31055 16.9038 5.30176 16.5522L5.03809 7.21826C5.0293 6.8667 5.27539 6.62939 5.64453 6.62939C5.99609 6.62939 6.24219 6.85791 6.25098 7.20947L6.51465 16.5435C6.53223 16.895 6.28613 17.1323 5.9082 17.1323ZM8.72949 17.1323C8.36035 17.1323 8.11426 16.9038 8.11426 16.5522V7.20947C8.11426 6.8667 8.36035 6.62939 8.72949 6.62939C9.09863 6.62939 9.35352 6.8667 9.35352 7.20947V16.5522C9.35352 16.9038 9.09863 17.1323 8.72949 17.1323ZM11.5508 17.1411C11.1729 17.1411 10.9268 16.895 10.9443 16.5522L11.208 7.20947C11.2168 6.85791 11.4629 6.62939 11.8145 6.62939C12.1836 6.62939 12.4297 6.8667 12.4209 7.21826L12.1572 16.5522C12.1484 16.9038 11.9023 17.1411 11.5508 17.1411Z" fill="white"/>
</svg></h1>
    </div>
  </div>
</div>

      </div>
    </div>
    <div className="pt-20 md:hidden bg-[#262626] ">
      <div className="md:flex">

    <div className="w-[300px] mx-auto flex justify-left items-center gap-4 h-[87px] text-white  border border-gray-700 rounded-2xl">
          <img src={pcimg1} className="w-[42px] ml-3 h-[42px]"  />
          <div>
            <h1>New file </h1>
            <h1>Design and prototype </h1>

          </div>
    </div>

          <div className="w-[300px] mt-5 md:mt-0 mx-auto flex justify-left items-center gap-4 h-[87px] text-white  border border-gray-700 rounded-2xl">
          <img src={pcimg1} className="w-[42px] ml-3 h-[42px]"  />
          <div>
            <h1>Import File </h1>
            <h1>Import 3d file </h1>

          </div>
          </div>
          </div>

          <div className="">
            <h1 className="text-gray-500 mt-8 mb-3">Projects</h1>
            <div>
              <div className="w-[300px] md:w-[700px] p-5 border text-white border-gray-700 rounded-2xl mx-auto h-[600px]">
                <div className="flex justify-between items-center">

                    <h1>
                      01
                    </h1>
                    <h1>
                    PROD-4828
                    </h1>
                    <h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="7" viewBox="0 0 24 7" fill="none">
  <circle cx="3" cy="3.5" r="3" fill="#D9D9D9"/>
  <circle cx="12" cy="3.5" r="3" fill="#D9D9D9"/>
  <circle cx="21" cy="3.5" r="3" fill="#D9D9D9"/>
</svg>
                    </h1>
                    </div>

              </div>
            </div>
          </div>

          
    </div>
    </>
  );
};

export default DashboardItems;
