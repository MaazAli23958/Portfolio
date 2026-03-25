import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="flex justify-between border-b border-[#234548] py-5 px-18">
      <h2 className="text-xl font-bold">MA</h2>
      <div className="hidden md:flex gap-10 ">
        <NavLink className="nav-link text-lg font-medium" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link text-lg font-medium" to="/skills">
          Skills
        </NavLink>
        <NavLink className="nav-link text-lg font-medium" to="/projects">
          Projects
        </NavLink>
        <NavLink className="nav-link text-lg font-medium" to="/experience">
          Experience
        </NavLink>
        <NavLink className="nav-link text-lg font-medium" to="/contact">
          Contact
        </NavLink>
      </div>
       <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
    </div>
    {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-[#234548]">
          <Link onClick={() => setIsOpen(false)} className="text-lg font-medium" to="/">
          Home
        </Link>
          <Link onClick={() => setIsOpen(false)} className="text-lg font-medium" to="/skills">
          Skills
        </Link>
          <Link onClick={() => setIsOpen(false)} className="text-lg font-medium" to="/projects">
          Projects
        </Link>
          <Link onClick={() => setIsOpen(false)} className="text-lg font-medium" to="/experience">
          Experience
        </Link>
          <Link onClick={() => setIsOpen(false)} className="text-lg font-medium" to="/contact">
          Contact
        </Link>
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
