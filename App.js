import React from "react";
import "./index.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
