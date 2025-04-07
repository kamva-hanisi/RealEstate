import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
};

export default App;
