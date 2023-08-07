import React from "react";
import Button from "../reusable/Button";

function EditNewPopUp({ showAddNewPopup, closePopup, value }) {
  ;
  return (
    <div>
      {" "}
      <div>
        {showAddNewPopup && (
          <div className="popup-overlay">
            <div className="addnew-popup">
              <h2>Share this link</h2>
              <input
                id="linkInput"
                type="text"
                value={value}
                placeholder=""
                // value=""
                // readOnly
              />
              <div className="button-group">
                <Button type='submit' >Save</Button>
                <Button onClick={closePopup}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditNewPopUp;
