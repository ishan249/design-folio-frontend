import { React, useState } from "react";
import FormData from "form-data";
import Details from "../Details/Details";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Imageupload from "../Image/Imageupload";
import "./Portfolio.css";
import Loadingspinner from "../Loadingspinner/Loadingspinner";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateManager } from "react-select";
function Portfolio() {

  // This is the parent component of all the four forms (details, skills, projects, imageupload)
  // Data from states of all four components gets submitted here after we save them.


  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({});
  const [skills, setSkills] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const [userImage, setUserImage] = useState({});
  const [currentComponent, setCurrentComponent] = useState(1);
  const [isloading, setLoading] = useState(false);

  // This is the most important api call which is create user api which will collect all information into one variable (formData) and send to backend

  const handleCreate = (e) => {
    setLoading(true);
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
    console.log(formData);
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
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // These four function capture the data from child components and store into state of this parent component.

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
    // this shows that all the four form components are getting rendered on single route and at last (component 5) is shown to create user's portfolio 
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
                  {isloading ? <Loadingspinner /> : <span>Create Portfolio</span>}

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
