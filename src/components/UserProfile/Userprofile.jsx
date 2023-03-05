import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Loadingspinner/Loading";
import "./Userprofile.css";
import mailImg from "../../images/gmail.png";
import linkedinImg from "../../images/linkedin.png";
import githubImg from "../../images/github-sign.png";
import behanceImg from "../../images/behance.png";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
function UserProfile() {
  const [fileData, setFileData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  let { urlMail } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_PORTFOLIO}/user/data?urlMail=${urlMail}@gmail.com`,
    })
      .then((res) => {
      
        setFileData([res.data[0].file]);
        setUserData([res.data[0].user]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [urlMail]);

  return (
    <div style={{ backgroundColor: "white" }} className="flex justify-center">
      {loading ? (
        <Loading />
      ) : (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.5}}
        style={{ width: "920px" }}>
          {/* user image and user description */}

          <div className="firstBox">
            <div className="userImgBox">
              {fileData.map((singleData) => {
                const base64String = btoa(
                  new Uint8Array(singleData.data.data).reduce((data, byte) => {
                    return data + String.fromCharCode(byte);
                  }, "")
                );
                return (
                  <img
                    src={`data:${singleData.contentType};base64,${base64String}`}
                    alt="trying to do it"
                    className="userImg"
                  />
                );
              })}
            </div>
            <div className="userInfo items-center">
              {userData.length !== 0 ? (
                <div>
                  {" "}
                  <div className="font-poppins font-bold userName">
                    {userData[0].name}
                  </div>
                  <div className="font-poppins userRole">
                    {userData[0].role}
                  </div>
                  <div className="userDescription font-poppins">
                    {userData[0].description}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          {/* user skills */}
          <div>
            <p className="font-poppins text-center pt-4 font-bold text-2xl">
              Skills
            </p>
            {userData.length !== 0 ? (
              <div className="flex flex-wrap justify-center mt-2">
                {userData[0].skill.map((skills, index) => (
                  <div className="font-poppins skillsData" key={index}>
                    {skills}
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* user projects */}
          <div>
            <p className="font-poppins text-center projectHeading font-bold text-2xl">
              Projects
            </p>
            {userData.length !== 0 ? (
              <div className="flex flex-wrap justify-center mt-4">
                {userData[0].projects.map((project, index) => (
                  <div className="projectCard" key={index}>
                    <p className="projectTitle text-lg p-2 font-bold font-poppins">
                      {project.projectName}
                    </p>
                    <p className="projectDescription text-sm p-2 font-poppins">
                      {project.projectDescription}
                    </p>
                    <div className="projectBtn link-btn flex">
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                      <div className="linkSvg">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.24563 3.73352V5.73298H2.23476V16.7301H13.2587V11.7314H15.263V17.7298C15.263 17.9949 15.1574 18.2492 14.9695 18.4367C14.7815 18.6242 14.5266 18.7295 14.2608 18.7295H1.23258C0.966789 18.7295 0.711882 18.6242 0.523938 18.4367C0.335994 18.2492 0.230408 17.9949 0.230408 17.7298V4.73325C0.230408 4.4681 0.335994 4.21382 0.523938 4.02633C0.711882 3.83885 0.966789 3.73352 1.23258 3.73352H7.24563ZM18.2695 0.734314V8.73219H16.2652V4.14641L8.45525 11.9383L7.03818 10.5247L14.8471 2.73378H10.2521V0.734314H18.2695Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          {/* User Contact  */}
          <p className="font-poppins text-center projectHeading font-bold text-2xl">
            Socials
          </p>
          {userData.length !== 0 ? (
            <div className="flex justify-center contactDiv">
              <a
                className="mx-4"
                href={`mailto:${userData[0].email}`}
                rel="noreferrer"
                target="_blank"
              >
                <img className="contactImg" src={mailImg} alt="mailId" />
              </a>
              <a
                className="mx-4"
                href={userData[0].linkedinlink}
                rel="noreferrer"
                target="_blank"
              >
                <img className="contactImg" src={linkedinImg} alt="linkedin" />
              </a>
              {userData[0].githublink!==""?<a
                className="mx-4"
                href={userData[0].githublink}
                rel="noreferrer"
                target="_blank"
              >
                <img className="contactImg" src={githubImg} alt="github" />
              </a>:null}
              {userData[0].behancelink!==""?<a
                className="mx-4"
                href={userData[0].behancelink}
                rel="noreferrer"
                target="_blank"
              >
                <img className="contactImg" src={behanceImg} alt="github" />
              </a>:null}
              
            </div>
          ) : null}
        </motion.div>
      )}
    </div>
  );
}

export default UserProfile;
