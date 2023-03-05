import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Portfolio from "./components/Portfolio/Portfolio";

import Usercreated from "./components/UserCreated/Usercreated";
import UserProfile from "./components/UserProfile/Userprofile";
import MailValidation from "./components/Validation/MailValidation";
import Validate from "./components/Validation/Validate";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/getstarted" element={<MailValidation />} />
          <Route path="/details" element={<Portfolio />} />
          <Route path="/validate" element={<Validate />} />
          <Route path="/usercreated" element={<Usercreated />} />
          <Route path="/:urlMail" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
