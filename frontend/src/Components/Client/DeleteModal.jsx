import React, { useState } from "react";
import axiosInstance from "../../axios/axiosInterceptors/axiosInstance";
import { ImSpinner } from "react-icons/im";

const DeleteModal = (props) => {
  console.log(props);
  const { deleteId, deleteModel } = props;

  const [deleting, setDeleteing] = useState(false);

  const handleCloseButton = () => {
    sendDataToParent(!deleteModel);
  };
  const sendDataToParent = (data) => {
    // Call this function when you want to send data back to the parent component
    props.onDeleteDataReceived({ model: data });
  };

  const handleDeleteButtonClick = async () => {
    try {
      setDeleteing(true);
      const res = await axiosInstance.delete(`/deleteProject/${deleteId}`);
      if (res.data.success) {
        setDeleteing(false);
        props.onDeleteDataReceived({ model: !deleteModel, callFun: true });
      } else {
        setDeleteing(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
      <div className="bg-[#232234] text-gray-400 px-[52px] py-[37px] w-[300px]  xl:w-[621px] xl:h-auto rounded-lg font-roboto">
        <div className="flex justify-end">
          <button
            onClick={handleCloseButton}
            className=" w-[44px] h-[44px] rounded-[10px] border border-solid border-[#545454] hover:bg-[#0000008e] bg-black flex items-center justify-center"
          >
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.92188 0.9375L7.02344 7.47656L11.125 0.9375H13.7617L8.37109 9.38672L13.8906 18H11.2305L7.02344 11.332L2.81641 18H0.15625L5.67578 9.38672L0.285156 0.9375H2.92188Z"
                fill="#D9D9D9"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-[24px] font-medium leading-[26px] text-[#F1EEF9]">
          Are you sure you wanna delete this ?
        </h1>
        <h1 className="mt-[18px] text-[14px] font-normal leading-5">
          This Process cannot be undone.
        </h1>

        <div className="flex justify-center gap-5 mt-[40px]">
          <button
            onClick={handleCloseButton}
            className="hover:bg-gray-600 py-[10px] px-[20px] text-center text-[16px] font-semibold rounded-[10px]"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteButtonClick}
            className="bg-[#dc3546] py-[10px] px-[20px] text-center text-[16px] font-semibold text-white rounded-[10px] flex justify-center items-center gap-2"
          >
            {deleting && deleting ? (
              <>
                <ImSpinner className="animate-spin" />
                <p>Deleting</p>
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
