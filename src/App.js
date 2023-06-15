import React from "react";

import SideBar from "./components/SideBar";
import Api from "./components/apiPratice/Api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<SideBar />} />
          <Route exact path="/api" element={<Api />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
