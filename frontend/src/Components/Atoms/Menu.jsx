import React from "react";
import MyImage from "./MyImage";
import { BsSpeedometer2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaTag } from "react-icons/fa6";
import { FaCube } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { LuNewspaper } from "react-icons/lu";
import { BsNewspaper } from "react-icons/bs";
import { FaAd } from "react-icons/fa";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";

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
      {/* menu logo*/}
      <div > 
        <Link to={"/"} className="menuLink menuHead">
          <MyImage
            src={"./thunderLogo.png"}
            alt={"thunderLogo"}
            className={"menulogo"}
          />

          <p style={{fontSize:'larger',color:'black'}}>News App</p>
        </Link>
      </div>

      <div>
        <p className="LinkHead">General</p>
        <Link className="menuLink roboto-regular">
          <BsSpeedometer2 />
          <p>Dashboard</p>
        </Link>
      </div>

      <div>
        <p >News Management</p>

        {menuData.map((data, idx) => (
          <Link className="menuLink roboto-regular" to={data.to} key={idx}>
            {/* <MyImage src={data.icon} alt={"cubeImage"} className={""} /> */}
            {data.icon}
            <p> {data.label}</p>
          </Link>
        ))}
      </div>

      <div>
        <p>HOME SCREEN MANAGEMENT</p>

        <Link className="menuLink roboto-regular">
          {/* <MyImage src={"./cube.png"} alt={"cubeImage"} className={""} /> */}
          <MdOutlineFeaturedPlayList />
          <p>Featured Section</p>
        </Link>

        <Link className="menuLink roboto-regular">
          {/* <MyImage src={"./cube.png"} alt={"cubeImage"} className={""} /> */}
          <FaAd />

          <p>Ad Spaces</p>
        </Link>
      </div>

      <div>
        <p>USER MANAGEMENT</p>
        <Link className="menuLink roboto-regular">
          {/* <MyImage src={"./cube.png"} alt={"cubeImage"} className={""} /> */}
          <FaUser />

          <p>User</p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
