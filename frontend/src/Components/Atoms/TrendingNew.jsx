import React from "react";
import MyImage from "./MyImage";
import MyButton from "./MyButton";

const TrendingNews = () => {
  //   const newsData = [
  //     {
  //       title: "Navigating the Passport Stamps: A Traveler's Guide",
  //       author: "Tanveer Singh",
  //       date: "Nov, 13",
  //     //   image: "./news1.jpg",
  //     },
  //     {
  //       title: "Navigating the Passport Stamps: A Traveler's Guide",
  //       author: "Tanveer Singh",
  //       date: "Nov, 13",
  //     //   image: "./news2.png",
  //     },
  //     {
  //       title: "Navigating the Passport Stamps: A Traveler's Guide",
  //       author: "Tanveer Singh",
  //       date: "Nov, 13",
  //     //   image: "./news3.png",
  //     },
  //     {
  //       title: "Navigating the Passport Stamps: A Traveler's Guide",
  //       author: "Tanveer Singh",
  //       date: "Nov, 13",
  //     //   image: "./news4.png",
  //     },
  //     {
  //       title: "Navigating the Passport Stamps: A Traveler's Guide",
  //       author: "Tanveer Singh",
  //       date: "Nov, 13",
  //     //   image: "./news5.png",
  //     },
  //     {
  //       title: "Navigating the Passport Stamps: A Traveler's Guide",
  //       author: "Tanveer Singh",
  //       date: "Nov, 13",
  //     //   image: "./news6.png",
  //     },
  //   ];

  return (
    <div className="Newsbg">
      {/* heading */}
      <div
        
        className="NewsHead"
      >
        <div
          style={{
            display: "flex",
            width: "70%",
            gap: "1rem",
            // padding: "1rem",

          }}
        >
          <h1>Trending News</h1>
          <MyImage src={"./NewsIcon.png"} alt={"newsIcon"} className={"newsIcon"} />
        </div>
        <button className="latestAction">See All</button>
      </div>

      {/* News content */}
      <div className="NewsCont">
        {/* News1 */}
        <div className="News1 news">
          <div className="Newsdetail">
            <p>Navigating the Passport Stamps:</p>
            <p>A Traveler's Guide</p>
            <p>Tanveer singh Nov,13</p>
          </div>
          <MyButton className={"newsButton"} name={"Read More"} />
        </div>

        <div className="News2 news">
          <div className="Newsdetail">
            <p>Navigating the Passport Stamps:</p>
            <p>A Traveler's Guide</p>
            <p>Tanveer singh Nov,13</p>
          </div>
          <MyButton className={"newsButton"} name={"Read More"} />
        </div>
        <div className="News3 news">
          <div className="Newsdetail">
            <p>Navigating the Passport Stamps:</p>
            <p>A Traveler's Guide</p>
            <p>Tanveer singh Nov,13</p>
          </div>
          <MyButton className={"newsButton"} name={"Read More"} />
        </div>
        <div className="News4 news">
          <div className="Newsdetail">
            <p>Navigating the Passport Stamps:</p>
            <p>A Traveler's Guide</p>
            <p>Tanveer singh Nov,13</p>
          </div>
          <MyButton className={"newsButton"} name={"Read More"} />
        </div>
        <div className="News5 news">
          <div className="Newsdetail">
            <p>Navigating the Passport Stamps:</p>
            <p>A Traveler's Guide</p>
            <p>Tanveer singh Nov,13</p>
          </div>
          <MyButton className={"newsButton"} name={"Read More"} />
        </div>
        <div className="News6 news">
          <div className="Newsdetail">
            <p>Navigating the Passport Stamps:</p>
            <p>A Traveler's Guide</p>
            <p>Tanveer singh Nov,13</p>
          </div>
          <MyButton className={"newsButton"} name={"Read More"} />
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
