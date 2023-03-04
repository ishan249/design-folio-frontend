import { React, useState } from "react";
import Image from "./Image";
import "./Image.css";
function Imageupload(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(file!=null){
      props.onSubmit(file);
    }
    else{
      setError("Please upload file to proceed");
    }
  }
  return (
    <div className="image-div">
      <header className="text-center heading font-poppins py-2 px-4">Upload Image</header>
      <p className='px-4 text-white text-center font-poppins'>Upload a good photo of yours which will be shown in your portfolio</p>

      <div className="flex justify-center my-2 p-4">
        <div className="image-input">
        <Image onFileSelect={handleFileSelect} />
        <br />
        <p className="font-poppins text-white">Selected file: {file && file.name}</p>
        <button className="image-btn" onClick={handleSubmit} type="submit">Next</button>
        <br />
        {error!==""? <div className="px-2 font-poppins text-white"> <span>❗</span> {error}</div> :null}
        </div>
      </div>
    </div>
  );
}

export default Imageupload;
