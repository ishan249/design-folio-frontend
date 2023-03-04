import React from "react";
import "./Loadingspinner.css";
function Loadingspinner() {
  return (
    <>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Loadingspinner;
