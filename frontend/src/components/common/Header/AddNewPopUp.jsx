import React, { useEffect, useState } from "react";
import Button from "../reusable/Button";

function AddNewPopUp({ showAddNewPopup, closePopup, onSave, errorMess }) {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [showErr, setShowErr] = useState(false);

  const myStyle = {
    color: "red",
    marginTop: "0",
    fontSize: "13px",
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setShowErr(false);
  };

  const handleSaveClick = () => {
    onSave(name);
    setName("");
  };
  const handleCloseClick = () => {
    setShowErr(false);
    setErr("");
    closePopup();
  };

  useEffect(() => {
    if (errorMess.status === false) {
      setShowErr(true);
      setErr(errorMess.message);
    } else {
      setShowErr(false);
    }
  }, [errorMess]);

  return (
    <div>
      <div>
        {showAddNewPopup && (
          <div className="popup-overlay">
            <div className="addnew-popup">
              <h2>Create A New Project</h2>
              <input
                id="linkInput"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter the Project Name"
              />
              {showErr && <p style={myStyle}>{err}</p>}
              <div className="button-group">
                <Button onClick={handleCloseClick}>Close</Button>
                <Button onClick={handleSaveClick}>Create</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddNewPopUp;
