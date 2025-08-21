import React from "react";
import MyImage from "./MyImage";

const HomeTop = () => {
  return (
    <div className="top-bgImg ">
      <div className="home-top ">
        <h1 className="roboto-bold" style={{fontSize:'2.4rem'}}>
          <span style={{ fontSize: "4rem", color: "#D43939" }}>F</span>ueling
          the Future
        </h1>
        {/* <br /> */}
        <h1 className="roboto-bold ">
          with Stories
          <MyImage
            src={"./bookImg.png"}
            alt={"bookImg"}
            className={"bookImg"}
          />
          
        </h1>
        <br />
        <p className="roboto-regular">
          Interviews, ideas, and insights from the heart of
        </p>
        {/* <br /> */}
        <p className="roboto-regular">the startup world</p>
      </div>
    </div>
  );
};

export default HomeTop;
