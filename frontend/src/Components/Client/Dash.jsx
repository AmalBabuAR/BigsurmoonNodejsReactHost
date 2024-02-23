import React, { useEffect, useState } from "react";
import NewClientNavbar from "./NewClientNavbar";
import Asidebar from "./Asidebar";
import Navbar from "./ClientNavbar";
import pcimg1 from "../../assets/backgrounds/client.png";
//import pcimg2 from "../../assets/backgrounds/client2.png";
import axiosInstance from "../../axios/axiosInterceptors/axiosInstance";
import { URL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import EmbedModal from "./EmbedModal";
import DeleteModal from "./DeleteModal";

const Dash = () => {
  const [list, setList] = useState([]);
  const [sizeData, setSizeData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [err, setErr] = useState("");
  const [screen, setSceen] = useState(false);
  const [embedID, setEmbedId] = useState(null);
  const [embedModel, setEmbedModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  const [deleteId, setDeleteID] = useState(null);

  const navigate = useNavigate();

  //list the project in the table
  async function getProject() {
    try {
      const res = await axiosInstance.get("/getProjects");
      // console.log(res.data);
      if (res.data.success) {
        setList(res.data.data);
      }
      if (res.data.data.length === 0) {
        setList(0);
      }
      if (res.data.data.length > 10) {
        // console.log("coming");
        setSceen(true);
      } else {
        setSceen(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Size of the project list
  async function getProjectSize() {
    try {
      const res = await axiosInstance.get("/getProjectSize");
      // console.log(res.data);
      if (res.data.success) {
        setSizeData(res.data.resData);
        // console.log(data);
      } else {
        setSizeData({
          percentage: 0,
          quantity: 0,
          used: 0,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  //view click
  function handleViewClick(id) {
    // viewer link
    const link = `${URL}/configurator/?id=${id}`;
    window.open(link, "_blank");
  }

  //to view the existing project
  const handleButtonClick = (ids) => {
    const win = window.open("about:blank", "_blank");
    // console.log(ids);
    const newFile = false;
    const link = `${URL}/editor/?id=${ids}&new=${newFile}`;
    win.location.href = link;
  };

  //to delete
  const handleDeleteButtonClick = async (id) => {
    setDeleteModel(!deleteModel);
    setDeleteID(id);
  };

  //post method to create newFile
  const handleProjectNameSubmit = async (nameValue) => {
    // console.log("req");
    try {
      const res = await axiosInstance.post("/postProject", { nameValue });
      // console.log(res.data);
      if (res.data.status) {
        const win = window.open("about:blank", "_blank");
        // console.log("req coming in if");
        const id = res.data.newProject._id;
        const newFile = true;
        // editor link
        const link = `${URL}/editor/?id=${id}&new=${newFile}`;
        setTimeout(() => {
          win.location.href = link;
        }, 1000);
        setIsModalOpen(false);
        getProject();
        getProjectSize();
      } else {
        if (res.data.noSub) {
          alert(res.data.message);
          navigate("/plan");
        } else {
          // console.log("req coming in else");
          setErr(res.data.message);
          // console.log(res.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // input handler of newFile model
  const handleNameChange = (e) => {
    setProjectName(e.target.value);
    setErr("");
  };
  //open and close of newFile model
  const openModal = () => {
    setIsModalOpen(true);
    setErr("");
    setProjectName("");
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmbedClick = (id) => {
    setEmbedModel(!embedModel);
    setEmbedId(id);
  };

  const handleDeleteDataReceeived = (data) => {
    setDeleteModel(data.model);
    if (data.callFun) {
      getProject();
      getProjectSize();
    }
  };

  const handleDataReceived = (data) => {
    setEmbedModel(data);
  };
  //===============================
  //GET THE PROJECT LIST
  useEffect(() => {
    getProject();
    getProjectSize();
  }, []);

  //ADDED EventListener
  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    const handleEnterKeyPress = (event) => {
      if (event.key === "Enter") {
        handleProjectNameSubmit(projectName);
      }
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscapeKeyPress);
    }
    const projectNameInput = document.getElementById("projectNameInput");
    if (isModalOpen && projectNameInput) {
      projectNameInput.addEventListener("keydown", handleEnterKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      if (projectNameInput) {
        projectNameInput.removeEventListener("keydown", handleEnterKeyPress);
      }
    };
  }, [isModalOpen, closeModal, handleProjectNameSubmit]);

  return (
    <>
      <div className="">
        <div className="hidden md:block">
          <NewClientNavbar />
        </div>
        <div className=" md:hidden">
          <Navbar />
        </div>
        <Asidebar data={sizeData} />
        <div className="p-10 pt-20 lg:p-20 sm:ml-64 bg-[#262626] h-full">
          <div className=" md:p-4 lg:p-0 rounded-lg  mt-5">
            <div className="md:flex  flex justify-start">
              <div
                className="w-[300px] mx-auto lg:mx-0 xl:w-[448px]  flex justify-between items-center gap-4 h-[60px] md:h-[87px] lg:h-[87px] text-white border-2 border-[#2D2D2D] rounded-lg cursor-pointer"
                onClick={openModal}
              >
                <div className="flex gap-5">
                  <img
                    src={pcimg1}
                    alt="Popup Trigger"
                    className="w-[42px] ml-3 h-[42px]"
                  />

                  <div>
                    <h3 className="lg:text-[19px] text-[15px] md:text-[19px]">
                      New file
                    </h3>
                    <h3 className="lg:text-[16px] md:text-[16px] text-[12px] opacity-50">
                      Design and prototype
                    </h3>
                  </div>
                </div>
                <h3 className="mr-4 lg:text-4xl md:text-4xl text-3xl text-gray-400">
                  +
                </h3>
              </div>
              {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
                  <div className="bg-[#232234] text-gray-400 p-6 w-[300px]  xl:w-[500px] xl:h-auto rounded-lg">
                    <h3 className="xl:my-4 text-center text-xl  text-white font-bold">
                      Create A New Project
                    </h3>
                    {err && (
                      <p className="text-red-700 text-center text-sm">{err}</p>
                    )}
                    <input
                      type="text"
                      value={projectName}
                      onChange={handleNameChange}
                      className="bg-transparent w-full border-b outline-none xl:mt-4"
                      placeholder="Enter The Project Name"
                      id="projectNameInput"
                      autoFocus
                    />
                    <div className=" flex justify-end gap-4 pt-5">
                      <button
                        onClick={closeModal}
                        className=" bg-[#383748] text-white px-4 py-2 rounded"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => handleProjectNameSubmit(projectName)}
                        className=" bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>{" "}
          </div>

          {list ? (
            <div className="">
              <h3 className="text-white mt-[72px] mb-3">Projects</h3>
              <div className={`${screen ? "h-full" : "h-screen"}`}>
                <div></div>
                <div className="text-white border-gray-500 rounded-lg mx-auto h-full">
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-[19px] text-left text-white">
                      <tbody>
                        <tr>
                          <td className="px-6 py-4 font-outfit text-[16px] text-[#797979] font-normal">
                            Name
                          </td>
                          <td></td>
                          <td></td>
                          <td className="px-6 py-4 font-outfit text-[16px] text-[#797979] font-normal">
                            Created
                          </td>
                        </tr>
                        {list &&
                          list.map((item, ind) => (
                            <tr
                              key={ind.toString()}
                              className=" border-b border-[#343434] border-solid hover:bg-[#262626] hover:opacity-70"
                            >
                              {/* <td className="px-6 py-4">{ind + 1}</td> */}
                              <td className="px-6 py-4 font-roboto">
                                {item.name}
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => handleViewClick(item._id)}
                                  className="w-[65px] h-[27px] bg-white text-blue-400 flex items-center justify-center rounded-full"
                                >
                                  View
                                </button>
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => handleButtonClick(item._id)}
                                  className="w-[65px] h-[27px] bg-white text-blue-400 flex items-center justify-center rounded-full"
                                >
                                  Edit
                                </button>
                              </td>
                              <td className="px-6 py-4  font-outfit text-[#C7C7C7]">
                                {item.formattedTime}
                              </td>
                              <td className="px-6 py-4">
                                <button
                                  onClick={() => handleEmbedClick(item._id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="18"
                                    viewBox="0 0 20 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M10.2832 17.1826C10.7666 17.1826 11.1445 16.998 11.6104 16.5586L18.5713 10.0283C18.9141 9.70312 19.0459 9.3252 19.0459 9C19.0459 8.66602 18.9141 8.29688 18.5713 7.97168L11.6104 1.48535C11.1006 1.01074 10.7666 0.817383 10.3008 0.817383C9.59766 0.817383 9.09668 1.3623 9.09668 2.04785V5.17676H8.87695C2.8125 5.17676 0 9.07031 0 15.4512C0 16.5674 0.474609 17.1475 1.08984 17.1475C1.55566 17.1475 1.98633 16.998 2.3291 16.3564C3.70898 13.79 5.66895 12.8496 8.87695 12.8496H9.09668V15.9961C9.09668 16.6816 9.59766 17.1826 10.2832 17.1826Z"
                                      fill="white"
                                    />
                                  </svg>
                                </button>
                              </td>
                              <td className="px-6 py-4 text-right">
                                <button
                                  onClick={() =>
                                    handleDeleteButtonClick(item._id)
                                  }
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="20"
                                    viewBox="0 0 18 20"
                                    fill="none"
                                  >
                                    <path
                                      d="M4.57227 19.8306H12.8955C14.0996 19.8306 14.8027 19.189 14.8555 17.9937L15.4092 5.29346H16.6221C17.0703 5.29346 17.4131 4.94189 17.4131 4.50244C17.4131 4.06299 17.0615 3.729 16.6221 3.729H12.8076V2.41064C12.8076 1.00439 11.9023 0.169434 10.3906 0.169434H7.05078C5.53906 0.169434 4.63379 1.00439 4.63379 2.41064V3.729H0.836914C0.397461 3.729 0.0458984 4.07178 0.0458984 4.50244C0.0458984 4.95068 0.397461 5.29346 0.836914 5.29346H2.05859L2.62109 17.9937C2.66504 19.189 3.36816 19.8306 4.57227 19.8306ZM6.46191 2.48975C6.46191 2.09424 6.73438 1.83936 7.17383 1.83936H10.2764C10.7158 1.83936 10.9883 2.09424 10.9883 2.48975V3.729H6.46191V2.48975ZM5.9082 17.1323C5.55664 17.1323 5.31055 16.9038 5.30176 16.5522L5.03809 7.21826C5.0293 6.8667 5.27539 6.62939 5.64453 6.62939C5.99609 6.62939 6.24219 6.85791 6.25098 7.20947L6.51465 16.5435C6.53223 16.895 6.28613 17.1323 5.9082 17.1323ZM8.72949 17.1323C8.36035 17.1323 8.11426 16.9038 8.11426 16.5522V7.20947C8.11426 6.8667 8.36035 6.62939 8.72949 6.62939C9.09863 6.62939 9.35352 6.8667 9.35352 7.20947V16.5522C9.35352 16.9038 9.09863 17.1323 8.72949 17.1323ZM11.5508 17.1411C11.1729 17.1411 10.9268 16.895 10.9443 16.5522L11.208 7.20947C11.2168 6.85791 11.4629 6.62939 11.8145 6.62939C12.1836 6.62939 12.4297 6.8667 12.4209 7.21826L12.1572 16.5522C12.1484 16.9038 11.9023 17.1411 11.5508 17.1411Z"
                                      fill="white"
                                    />
                                  </svg>
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-screen flex justify-center items-center">
              <h3 className="h-[50vh] text-gray-500 text-lg">
                Your Recent Project will Appear here
              </h3>
            </div>
          )}
        </div>
      </div>
      {embedModel && (
        <EmbedModal
          onDataReceived={handleDataReceived}
          embedID={embedID}
          embedModel={embedModel}
        />
      )}
      {deleteModel && (
        <DeleteModal
          onDeleteDataReceived={handleDeleteDataReceeived}
          deleteId={deleteId}
          deleteModel={deleteModel}
        />
      )}
    </>
  );
};

export default Dash;
