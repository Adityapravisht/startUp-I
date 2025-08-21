import React from "react";
import MyImage from "./MyImage";
import { BsSpeedometer2, BsNewspaper } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaTag, FaCube } from "react-icons/fa6";
import { FaCubes, FaUser, FaAd } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import {  } from "react-icons/bs";
import { MdOutlineFeaturedPlayList, MdSubscriptions, MdOutlineLiveTv} from "react-icons/md";

const Menu = () => {
  const menuData = [
    { label: "Category", icon: <FaCube />, to: "/" },
    { label: "Subcategory", icon: <FaCubes />, to: "/" },
    { label: "Tag", icon: <FaTag />, to: "/" },
    { label: "News", icon: <LuNewspaper />, to: "/" },
    { label: "Breaking News", icon: <BsNewspaper />, to: "/" },
    { label: "Live Streaming", icon: <MdOutlineLiveTv />, to: "/" },
    { label: "Subscriptions", icon: <MdSubscriptions />, to: "/" },
  ];

  return (
  <div className="menuCont">
      {/* Logo Section */}
      <Link to="/" className="menuLink menuHead">
        <MyImage src="./thunderLogo.png" alt="thunderLogo" className="menulogo" />
        <span className="appTitle">News App</span>
      </Link>

      {/* Dashboard */}
      <div className="menuSection">
        <p className="linkHead">General</p>
        <Link className="menuLink">
          <BsSpeedometer2 />
          <span>Dashboard</span>
        </Link>
      </div>

      {/* News Management */}
      <div className="menuSection">
        <p className="linkHead">News Management</p>
        {menuData.map((data, idx) => (
          <Link className="menuLink" to={data.to} key={idx}>
            {data.icon}
            <span>{data.label}</span>
          </Link>
        ))}
      </div>

      {/* Home Screen */}
      <div className="menuSection">
        <p className="linkHead">Home Screen Management</p>
        <Link className="menuLink">
          <MdOutlineFeaturedPlayList />
          <span>Featured Section</span>
        </Link>
        <Link className="menuLink">
          <FaAd />
          <span>Ad Spaces</span>
        </Link>
      </div>

      {/* User Management */}
      <div className="menuSection">
        <p className="linkHead">User Management</p>
        <Link className="menuLink">
          <FaUser />
          <span>User</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
