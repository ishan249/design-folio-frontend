import React, { useState } from "react";
import options from "./options.js";
import Select from "react-select";
import "./Skills.css";
function Skills(props) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOptions.length > 0) {
      const userSkills = selectedOptions.map((item) => item.label);
      props.onSubmit(userSkills);
    } else {
      setError("You have to select atleast 1 skill");
    }
  };
  return (
    <div className="skill-main-div">
      <header className="heading text-center font-poppins py-2 px-4 ">
        Skills
      </header>
      <p className="px-4 text-white text-center font-poppins">
        Select skills you have and tech stack you have worked on.
      </p>
      <div className="flex justify-center mt-4">
        <div className="select-form">
          <Select
            className="select-option text-black font-poppins"
            options={options}
            placeholder="Select Skills"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
          {error !== "" ? (
            <div className="px-2 font-poppins text-white">{error}</div>
          ) : null}
          <hr />
          <button
            className="skill-btn font-poppins"
            onClick={handleSubmit}
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skills;
