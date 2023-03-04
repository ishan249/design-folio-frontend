import { React, useState } from "react";
import "./Projects.css";
import validator from "validator";
function Projects(props) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectArray, setProjectArray] = useState([]);
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0); 
  const [emptyArrayError, setArrayError] = useState("");

  const validate = (value) => {
    if (validator.isURL(value)) {
      setProjectLink(value);
      document.getElementById("projectLink").style.border = "1px green solid";
    } else {
      setProjectLink(value);

      document.getElementById("projectLink").style.border = "1px red solid";
    }
  };

  function handleProjectDescriptionChange(event) {
    const value = event.target.value;
    const wordCount = value.trim().split(/\s+/).length;
    setWordCount(wordCount);
    setProjectDescription(value);
  
    if (wordCount > 30) {
     document.getElementById("projectDescription").style.border = "1px solid red";;
      
    } else {
      document.getElementById("projectDescription").style.border = "none";

    }
  }
  

  const handleAddOption = (event) => {
    event.preventDefault();
    if (projectName !== "" && projectDescription !== "" && projectLink !== "") {
      const newProject = { projectName, projectDescription, projectLink };
      if (newProject) {
        setProjectArray([...projectArray, newProject]);
        setProjectName("");
        setProjectDescription("");
        setProjectLink("");
        setError("")
        setArrayError("")
        document.getElementById("projectLink").style.border = "1px grey solid";
      }
    }
    else{
      setError("Please add all fields to add project")
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(projectArray.length >0){
      const userProjects = projectArray;
      props.onSubmit(userProjects);
    }
    else{
      setArrayError("Add atleast 1 project to proceed.")
    }
  };
  return (
    <div className="project-main-div">
      <header className="heading font-poppins text-center py-2 px-4 ">
        Projects
      </header>
      <p className="px-4 text-white text-center font-poppins">
        Add your best projects. Try to add not more than 4 projects and make
        sure you add links of the project correctly
      </p>

      <div className="flex justify-center">
        <form
          className="project-input-box text-white font-poppins"
          onSubmit={handleSubmit}
        >
          <label className="px-4 my-2" htmlFor="projectname">
            Name:
          </label>
          <br />
          <input
            className="project-input my-2 mx-2"
            type="text"
            value={projectName}
            onChange={(event) => setProjectName(event.target.value)}
           
          />
          <div style={{width:"300px"}} className="flex justify-between">
          <label className="px-4 my-2" htmlFor="projectdescription">
            Short Description:
          </label>
          <div className="pt-2 text-[#d7d7d7]">{wordCount}/30</div>
          </div>
          <textarea
            className="project-description-input my-2 mx-2"
            id="projectDescription"
            type="text"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
          />
          <br />
          <label className="px-4 my-2" htmlFor="projectlink">
            Link:
          </label>
          <br />
          <input
            id="projectLink"
            className="project-input my-2 mx-2"
            type="url"
            style={{ border: "1px grey solid" }}
            value={projectLink}
            onChange={(event) => validate(event.target.value)}
        
          />
          <br />
          <button className="project-add-btn" onClick={handleAddOption}>
            add
          </button>
          <br />
          {error!==""? <div className="p-2 font-poppins text-white"> <span>❗</span> {error}</div> :null}
          <hr />
          <p className="px-2 mt-2 text-white font-poppins">Project List</p>
          <div className="flex flex-wrap">
            {projectArray.map((option) => (
              <div
                style={{
                  backgroundColor: "#f1f0f0",
                  padding: "8px",
                  margin: "8px",
                  borderRadius: "8px",
                }}
                className="text-black font-poppins"
              >
                <p className="font-bold text-lg"> {option.projectName}</p>
              </div>
            ))}
            {emptyArrayError!==""? <div className="px-2 font-poppins text-white">{emptyArrayError}</div> :null}
          </div>
          <br />
          <button className="start-btn" type="submit">
            Save projects
          </button>
        </form>
      </div>
    </div>
  );
}

export default Projects;
