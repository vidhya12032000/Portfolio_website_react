import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [togglemanu, setTogglemenu] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-10 py-5 text-white bg-primary">

      <h1 className="text-3xl font-bold">
        Vidhya M
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <div className="flex gap-8">
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>

          <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
            Skills
          </NavLink>

          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </div>
      </nav>


      {/* Mobile Menu */}
      {togglemanu && (
        <nav className="absolute top-full right-0 w-full bg-primary md:hidden">
          <div className="flex flex-col gap-6 p-6">

            <NavLink to="/" onClick={() => setTogglemenu(false)}>
              Home
            </NavLink>

            <NavLink to="/about" onClick={() => setTogglemenu(false)}>
              About
            </NavLink>

            <NavLink to="/skills" onClick={() => setTogglemenu(false)}>
              Skills
            </NavLink>

            <NavLink to="/projects" onClick={() => setTogglemenu(false)}>
              Projects
            </NavLink>

            <NavLink to="/contact" onClick={() => setTogglemenu(false)}>
              Contact
            </NavLink>

          </div>
        </nav>
      )}


      {/* Toggle Button */}
      <button
        onClick={() => setTogglemenu(!togglemanu)}
        className="block md:hidden text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

    </header>
  );
};

export default Header;