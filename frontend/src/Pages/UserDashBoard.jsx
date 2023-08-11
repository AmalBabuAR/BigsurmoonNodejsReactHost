import React, { useEffect, useState } from "react";
import PrivateHeader from "../components/common/Header/PrivateHeader";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/reusable/Button";
import Delete from "../assets/icons/Delete.js";
import Download from "../assets/icons/Download";
import Share from "../assets/icons/Share";
import Progressbar from "../components/common/reusable/ProgressBar";
import addnew from "../assets/dashboard/addnew.svg";
import upload from "../assets/dashboard/upload.svg";
import axiosInstance from "../axios/axiosInterceptors/axiosInstance";
import ShareButton from "../components/common/Header/ShareButton";
import AddNewPopUp from "../components/common/Header/AddNewPopUp";
import SideNav from "../components/common/Header/SideNav";
import Edit from "../assets/icons/Edit";
import TableMenu from "../components/common/reusable/TableMenu";
import EditNewPopUp from "../components/common/Header/EditNewPopUp";
import { URL } from "../components/common/utils/constants.js";

function UserDashBoard() {
  const [list, setList] = useState("");
  const hiddenFileInput = React.useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showAddNewPopup, setShowAddNewPopup] = useState(false);
  const [showAddEditPopup, setShowAddEditPopup] = useState(false);
  const [value, setValue] = useState("");
  const [errorMess, setErrorMess] = useState([]);
  const [embId, setEmbId] = useState("");

  const navigate = useNavigate();

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  //list the project in the table
  async function getProject() {
    try {
      const res = await axiosInstance.get("/getProjects");
      if (res.data.success) {
        setList(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //to view the existing project
  const handleButtonClick = (ids) => {
    const win = window.open('about:blank', '_blank');
    console.log(ids);
    const newFile = false;
    const link = `${URL}/editor/?id=${ids}&new=${newFile}`;
    win.location.href = link
    // const newTab = safari.self.browserWindow.openTab();
    // newTab.url = link;
    //navigate(`/editor/${ids}/${newFile}`);
  };
  //to delete
  const handleDeleteButtonClick = async (id) => {
    alert("Do you want to delete this project ?");
    console.log(id);
    try {
      const res = await axiosInstance.delete(`/deleteProject/${id}`);
      console.log("res in delete", res.data, res);
      getProject();
    } catch (error) {
      console.log(error);
    }
  };

  const openEditNew = (props) => {
    setShowAddEditPopup(true);
    setValue(props);
  };

  //for new project
  const openAddNew = () => {
    setShowAddNewPopup(true);
  };
  //response of the newfile inpute
  const handleSave = async (nameValue) => {
    try {
      const win = window.open('about:blank', '_blank');
      const res = await axiosInstance.post("/postProject", { nameValue });
      console.log(res.data);
      if (res.data.status) {
        closePopup();
        const id = res.data.newProject._id;
        const newFile = true;
        const link = `${URL}/editor/?id=${id}&new=${newFile}`;
        win.location.href = link
        // const newTab = safari.self.browserWindow.openTab();
        // newTab.url = link;
        // window.open(link, "_blank");
        //const newTab = window.open("", "_blank");
        // navigate(`/editor/${id}/${newFile}`);
        getProject();
      } else {
        setErrorMess(res.data);
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //view click
  function handleViewClick(id) {
    const link = `${URL}/editor/ModelViewer/?id=${id}`;
    window.open(link, "_blank");
  }

  const closePopup = () => {
    setShowPopup(false);
    setShowAddNewPopup(false);
  };

  const openSharePopup = (id) => {
    setEmbId(id);
    setShowPopup(true);
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <>
        <PrivateHeader />
        <div>
          <SideNav />
          <div className="dashboard">
            <main className="dashboard-data">
              <div className="upload-buttons">
                <div className="button-container">
                  <div className="name-container">
                    <img src={addnew} alt="" />
                    <div>
                      <h4>New File</h4>
                      <p>Design and Prototype</p>
                    </div>
                  </div>
                  <button
                    className="uploadbutton"
                    onClick={() => openAddNew()}
                    // onClick={() => handleNewFileClick()}
                    // onClick={() => navigate("/editor")}
                  >
                    +
                  </button>
                  {/* <input
                  type="file"
                  ref={hiddenFileInput}
                  style={{ display: "none" }}
                /> */}
                </div>

                <div className="button-container">
                  <div className="name-container">
                    <img src={upload} alt="" />
                    <div>
                      <h4>Import File</h4>
                      <p>import 3D file</p>
                    </div>
                  </div>
                  <button className="uploadbutton" onClick={handleClick}>
                    +
                  </button>
                  <input
                    type="file"
                    ref={hiddenFileInput}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div>
                <span className="project">Projects</span>

                <div className="table-data">
                  <div>
                    <table>
                      <tbody>
                        {list &&
                          list.map((item, ind) => (
                            <tr key={ind.toString()}>
                              <td>{ind + 1}</td>
                              <td>{item.name}</td>
                              <td>
                                <button
                                  onClick={() => handleViewClick(item._id)}
                                  className="custom-button"
                                >
                                  View
                                </button>
                              </td>

                              <td>
                                <button
                                  className="custom-button"
                                  onClick={() => handleButtonClick(item._id)}
                                >
                                  Edit
                                </button>
                              </td>

                              <td>{`http://embed.${item._id}:html`}</td>
                              <td>
                                <button
                                  onClick={() => openSharePopup(item._id)}
                                >
                                  <Share />
                                </button>
                              </td>
                              <td>
                                <button onClick={() => openEditNew("name")}>
                                  <Edit />
                                </button>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    handleDeleteButtonClick(item._id)
                                  }
                                >
                                  <Delete />
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="small-table-data">
                  <table>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td className="name">name</td>

                        <td>
                          <div className="action">
                            <TableMenu />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>
                          <div className="action">
                            <TableMenu />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>
                          <div className="action">
                            <TableMenu />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>{" "}
      <ShareButton
        closePopup={closePopup}
        showPopup={showPopup}
        embId={embId}
      />
      {/* input filed */}
      <AddNewPopUp
        closePopup={closePopup}
        showAddNewPopup={showAddNewPopup}
        onSave={handleSave}
        errorMess={errorMess}
      />
      <EditNewPopUp
        closePopup={closePopup}
        showAddEditPopup={showAddEditPopup}
        value={value}
      />
    </>
  );
}

export default UserDashBoard;
