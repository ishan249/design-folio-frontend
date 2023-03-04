import { React, useState } from "react";

import "./Image.css";
function Image({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFileSelect(selectedFile);
  };

  return (
    <div className="">
      <form className="text-white font-poppins" onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileInput} />
        <br />
        <button className="upload-btn mt-2" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
}

export default Image;
