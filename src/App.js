/** @format */

import React from "react";
import Header from "./routes/header/Header";
import Nav from "./routes/nav/Nav";
import About from "./routes/about/About";
import Projects from "./routes/projects/Projects";
import Skills from "./routes/skills/Skills";
import Contact from "./routes/contact/Contact";
import Footer from "./routes/footer/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}
export default App;
