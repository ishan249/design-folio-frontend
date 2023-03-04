import { React, useState } from "react";
import FormData from "form-data";
import Details from "../Details/Details";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Imageupload from "../Image/Imageupload";
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Portfolio() {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({});
  const [skills, setSkills] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [userImage, setUserImage] = useState({});
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleCreate = (e) => {
    e.preventDefault();
    const projectsToSend = projectData.map((item) => ({
      projectName: item.projectName,
      projectDescription: item.projectDescription,
      projectLink: item.projectLink,
    }));

    const formData = {
      name: personalInfo.firstName,
      email: personalInfo.email,
      role: personalInfo.role,
      linkedinlink: personalInfo.linkedin,
      githublink: personalInfo.github,
      behancelink: personalInfo.behance || "",
      description: personalInfo.userDescription,
      skill: skills,
      projects: projectsToSend,
      myFile: userImage,
    };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_PORTFOLIO}/user/create`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => {
        navigate("/usercreated", { state: { myProp: personalInfo.email } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePersonalInfo = (data) => {
    setPersonalInfo(data);
    setCurrentComponent(currentComponent + 1);
  };

  const handleUserSkills = (data) => {
    setSkills(data);
    setCurrentComponent(currentComponent + 1);
  };
  const handleProjectData = (data) => {
    setProjectData(data);
    setCurrentComponent(currentComponent + 1);
  };
  const handleUserImage = (data) => {
    setUserImage(data);
    setCurrentComponent(currentComponent + 1);
  };
  return (
    <div>
      {currentComponent === 1 && <Details onSubmit={handlePersonalInfo} />}
      {currentComponent === 2 && <Skills onSubmit={handleUserSkills} />}
      {currentComponent === 3 && <Projects onSubmit={handleProjectData} />}
      {currentComponent === 4 && <Imageupload onSubmit={handleUserImage} />}
      {currentComponent === 5 && (
        <div className="final-box">
          <div className="flex justify-center">
            <div className="final-box-input">
              <p className="text-white text-lg font-poppins">
                I hope you had filled all the information correct. To generate
                your portfolio link click the button below 👇.
              </p>
              <div className=" mt-2 text-center">
                <button
                  className="generate-btn font-poppins"
                  onClick={handleCreate}
                >
                  Create Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
