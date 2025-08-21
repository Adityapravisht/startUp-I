import React from "react";
import MyImage from "./MyImage";

const HomeTop = () => {
  return (
    <div className="top-bgImg ">
      <div className="home-top ">
        <div className="topHeading roboto-bold">
          <h1>
            <span style={{ fontSize: "4rem", color: "#D43939" }}>F</span>ueling
            the Future
          </h1>
          <div className="storyHead">
            <h1>with Stories</h1>
            <MyImage
              src={"./bookImg.png"}
              alt={"bookImg"}
              className={"bookImg"}
            />
          </div>
        </div>
        <p className="roboto-regular storyPara">
          Interviews, ideas, and insights from the heart of
        </p>
        {/* <br /> */}
        <p className="roboto-regular ">the startup world</p>
      </div>
    </div>
  );
};

export default HomeTop;
