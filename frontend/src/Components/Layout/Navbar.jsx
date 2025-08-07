// src/Components/Layout/Navbar.js
import React from "react";
import MyImage from "../Atoms/MyImage";
import MyInputs from "../Atoms/MyInput";
import MyButton from "../Atoms/MyButton";
import { Link } from "react-router-dom";
import useThemeStore from "../../store/themeStore";
import { IoSearchOutline } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <header className="navHead">
      <div className="nav-logo">
        <MyImage src="./StartUp&I.png" alt="startUpImage" />
      </div>

      <div className="navActions">
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/login">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Tech Partner</Link>
            </li>
            <li>
              <Link to="/">Subscribe</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
           
            className="themeToggle"
          >
            {darkMode ? (
             <BsMoon />
            ) : (
             <BsSun />

            )}
          </button>

          <div className="nav-search" >
            <IoSearchOutline />

            <MyInputs placeholder="Search…" />
          </div>

          <MyButton className="searchBtn" name="Search" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
