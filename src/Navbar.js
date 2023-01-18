/** @format */

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/header">Header</Link>
      <Link to="/nav">Nav</Link>
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/Contact">Contact Me</Link>
      <Link to="/footer">Footer</Link>
    </div>
  );
};
export default Navbar;
