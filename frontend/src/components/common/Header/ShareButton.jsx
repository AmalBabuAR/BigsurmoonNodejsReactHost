import React, { useState } from "react";
import Button from "../reusable/Button";
import { URL } from "../utils/constants.js";

function ShareButton({ showPopup, closePopup, embId }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    const copyText = document.getElementById("linkInput");
    copyText.select();
    document.execCommand("copy");
    setCopySuccess(true);
  };

  return (
    <div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Share this link</h2>
            <input
              id="linkInput"
              type="text"
              value={`<iframe src="${URL}/editor/Viewer/?id=${embId}" width="640" height="480"></iframe>`}
              // readOnly
            />
            <div className="button-group">
              <Button onClick={copyToClipboard}>
                {copySuccess ? "Copied!" : "Copy Link"}
              </Button>
              <Button onClick={closePopup}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
