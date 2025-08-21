
import MyImage from "../atoms/MyImage";
import MyButton from "../atoms/MyButton";
import { Link } from "react-router-dom";
import useThemeStore from "../../store/themeStore";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import MyInput from "../atoms/MyInput";
import { useState } from "react";


const Navbar = () => {
  const darkMode = useThemeStore((state) => state.darkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navHead">
      {/* left side: logo + hamburger */}
      <div className="nav-left">
        <div className="nav-logo">
          <MyImage src="./StartUp&I.png" alt="startUpImage" />
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* middle + right side */}
      <div className="navActions">
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/tech-partner">Tech Partner</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>

          </ul>
        </nav>

        <div className="nav-actions">

          <button onClick={toggleTheme} className="themeToggle">
            {darkMode ? <BsMoon /> : <BsSun />}
          </button>

          <div className="nav-search">
            <IoSearchOutline />
            <MyInput placeholder="Search…" />

          </div>

          <MyButton className="searchBtn" name="Search" />
        </div>
      </div>
    </header>



  );
};



export default Navbar;





