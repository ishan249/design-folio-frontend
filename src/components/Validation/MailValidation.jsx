import { React, useState } from "react";
import Validation from "./Validation";
import Validate from "./Validate";
function MailValidation() {
  // Parent component of mail validation process  
  
  const [currentComponent, setCurrentComponent] = useState(1);
  const [givenOtp, setGivenOtp] = useState(0);

  const handleOtp = (data) => {
    setGivenOtp(data);
    if (data === 0) {
      setCurrentComponent(currentComponent);
    } else {
      setCurrentComponent(currentComponent + 1);
    }
  };
  return (
    <div>
      {currentComponent === 1 && <Validation onSubmit={handleOtp} />}
      {currentComponent === 2 && <Validate otp={givenOtp} />}
    </div>
  );
}

export default MailValidation;
