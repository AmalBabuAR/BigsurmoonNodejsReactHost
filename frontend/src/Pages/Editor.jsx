
import React from "react";

import { useParams } from "react-router-dom";
import { URL } from "../components/common/utils/constants";


const Editor = () => {

   const { url,file } = useParams();
   const id = url
   const parseFile = JSON.parse(file)
   console.log('req in editor params',url,file,typeof(s));
   const newFile = parseFile

  const iframeUrl = `${URL}/?id=${id}&new=${newFile}`;
  return (
    <div style={{ backgroundColor: "white" }}>
      <iframe
        src={iframeUrl} // Use the same protocol (HTTP) here
        title="Embedded Content"
        id="myId"
        frameBorder="0"
        style={{
          width: "99.5vw", // Set width to 100% of the viewport width
          height: "99.5vh", // Set height to 100% of the viewport height
          overflow: "hidden",
          border: "none", // Remove iframe border
        }}
      />
    </div>
  );
};

export default Editor;
