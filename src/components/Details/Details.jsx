import axios from "axios";
import React, { useState } from "react";
import "./Details.css";
function Details(props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithubLink] = useState("");
  const [behance, setBehanceLink] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [error, setError] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const username = email.split("@")[0];
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: `http://localhost:8000/find/user?email=${email}`,
    }).then((res) => {
      if (res.data == "User not found") {
        const personalInfo = {
          firstName,
          email,
          role,
          linkedin,
          github,
          behance,
          userDescription
        };
        props.onSubmit(personalInfo);
        setError("");
      } else {
        setError("Looks like you already have a portfolio.");
      }
    });
  };

  function handleDescriptionChange(event) {
    const value = event.target.value;
    const wordCount = value.trim().split(/\s+/).length;
    setWordCount(wordCount);
    setUserDescription(value);
    if (wordCount > 20) {
     document.getElementById("description").style.border = "1px solid red";
      
    } else {
      document.getElementById("description").style.border = "none";
    }
  }

  return (
    <div className="detail-main-div">
      <header className="heading font-poppins py-2 px-4 text-center">
        Details
      </header>
      <div className="detail-inputbox flex justify-center">
        <form
          className="detail-form text-white font-poppins"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="px-4 my-2" htmlFor="firstName">
              Full Name*
            </label>
            <br />
            <input
              className="detail-input my-2 mx-2"
              type="text"
              id="firstName"
              placeholder="John Doe"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="px-4 py-2" htmlFor="email">
              Email*
            </label>
            <br />

            <input
              className="detail-input my-2 mx-2"
              type="email"
              id="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="px-4 py-2" htmlFor="role">
              Role*
            </label>
            <br />
            <input
              className="detail-input my-2 mx-2"
              type="text"
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="e.g App Developer"
              required
            />
          </div>
          <div>
            <div style={{ width: "300px" }} className="flex justify-between">
              <label className="px-4 py-2" htmlFor="description">
                Describe Yourself*
              </label>
              <div className="pt-2 text-[#d7d7d7]">{wordCount}/20</div>
            </div>

            <textarea
              className="description-detail-input my-2 mx-2"
              type="text"
              id="description"
              value={userDescription}
              onChange={handleDescriptionChange}
              placeholder="e.g I am a UK based App developer who can create fast and robust apps"
              required
            />
          </div>
          <div>
            <label className="px-4 py-2" htmlFor="linkedin">
              Linked in*
            </label>
            <br />
            <input
              className="detail-input my-2 mx-2"
              type="url"
              id="linkedinUrl"
              value={linkedin}
              onChange={(event) => setLinkedin(event.target.value)}
              placeholder="https://linkedin.com/in/john-doe"
              required
            />
          </div>
          <div>
            <label className="px-4 py-2" htmlFor="github">
              Github (if available)
            </label>
            <br />
            <input
              className="detail-input my-2 mx-2"
              type="url"
              id="githubUrl"
              value={github}
              onChange={(event) => setGithubLink(event.target.value)}
              placeholder="https://github.com/johndoe"
            />
          </div>
          <div>
            <label className="px-4 py-2" htmlFor="behance">
              Behance (if available)
            </label>
            <br />
            <input
              className="detail-input my-2 mx-2"
              type="url"
              id="behanceUrl"
              value={behance}
              onChange={(event) => setBehanceLink(event.target.value)}
              placeholder="https://behance.net/johndoe"
            />
          </div>
          <button
            style={{ border: "1px black solid" }}
            className="mt-4 detail-start-btn"
            type="submit"
          >
            Next
          </button>
          {error !== "" ? (
            <div className="px-2 font-poppins text-white">
              {error}{" "}
              <a
                target="_blank"
                className="underline"
                rel="noreferrer"
                href={`localhost:8000/${username}`}
              >
                Click here to visit
              </a>{" "}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default Details;
