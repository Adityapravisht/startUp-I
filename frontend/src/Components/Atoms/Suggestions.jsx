import React from "react";
import MyImage from "./MyImage";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { IoPlay } from "react-icons/io5";
import { RxTrackNext } from "react-icons/rx";
import { IoVolumeHighOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { GoScreenFull } from "react-icons/go";
import MyButton from "./MyButton";

const Suggestions = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap:'1rem',
        justifyContent:'space-evenly',
        height:'fit-content',
        padding:'1rem',
        
      }}
    >
      <div className="podcastBg">
        {/* head */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBlock: "1rem",
          }}
        >
          <h1>Podcast 🎤</h1>
          <button className="latestAction">See All</button>
        </div>

        <div
          style={{
            display: "flex ",
            paddingInline: "10px",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <MyImage
            src={"./podcastImg.jpg"}
            alt={"pdimg"}
            className={"podcastImg roboto-regular"}
          />
          <div>
            <p className="roboto-regular" style={{ fontSize: "13px" }}>
              Podcast by Dr. Natasha
            </p>
            <h1
              style={{ fontSize: "larger", marginBlock: "7px" }}
              className="roboto-bold"
            >
              How Startup Work
            </h1>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                gap: "7px",
                fontSize: "13px",
              }}
            >
              <p>
                <FaHeart style={{ color: "#F44336" }} />
                12.5K
              </p>
              <p>
                <FaEye style={{ color: "yellow" }} /> 60.4
              </p>
              <p>
                <BiCommentDetail /> 534
              </p>
            </div>
          </div>
        </div>
        <MyImage
          src={"./soundWave.png"}
          alt={"soundwave"}
          className={"soundwave"}
        />

        {/* sound track */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "20px",
            gap: "3px",
            alignItems: "center",
          }}
        >
          <IoPlay
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "3px",
              borderRadius: "1rem",
              fontSize: "25px",
            }}
          />
          <p style={{ fontSize: "small" }}>
            0:51
            <span>
              <MyImage
                src={"./soundTrack.png"}
                alt={"soundTrack"}
                className="soundtrack"
              />
            </span>
            2:31
          </p>
          <RxTrackNext />
          <IoVolumeHighOutline />
          <MdOutlineSettings />
          <GoScreenFull />
        </div>
      </div>

      <div className="ads1"></div>
      <div className="ads2">
        <MyImage src={"./ads2bg.png"} alt={"ads2"} className={"ads2Img"} />

        {/* content */}
        <div
          className="ads2Cont"
          style={{ textAlign: "center", backgroundColor: "black",paddingBlock:'1rem' }}
        >
          <h1
            style={{ textAlign: "", color: "#CD4631" }}
            className="roboto-bold"
          >
            Got a Story to Tell?
          </h1>
          <p
            style={{ textAlign: "", padding: "2rem", color: "yellow" }}
            className="roboto-regular"
          >
            Share your article with us — and get featured in our next edition.
            Your voice deserves the spotlight.
          </p>

          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <MyButton
              type={"button"}
              className={"searchBtn"}
              name={"Share Your Story"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
