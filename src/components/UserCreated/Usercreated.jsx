import React from "react";
import "./user.css";
import { useLocation } from "react-router-dom";
function Usercreated() {
  const location = useLocation();
  const email = location.state.myProp;
  const username = email.split("@")[0];

  return (
    <div className="user-main-div">
      <div className="flex justify-center">
        <div className="user-div text-center font-poppins">
          <p className="px-4 py-2 text-lg font-bold">✅ Successfully Created</p>
          <p className="px-4 py-2 text-md">
            Your personal portfolio is ready. Here is link, check it out{" "}
          </p>
          <div className="text-center user-link">localhost:3000/{username}</div>
        </div>
      </div>
    </div>
  );
}

export default Usercreated;
