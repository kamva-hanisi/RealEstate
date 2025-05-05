import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Properties from "./pages/Properties/Properties";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";

import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="properties" element={<Properties />} />
      <Route path="service" element={<Service />} />
      <Route path="contact" element={<Contact />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default App;
