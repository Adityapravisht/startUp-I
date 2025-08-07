import { useState } from "react";
import { motion } from "framer-motion";
import MyImage from "../Atoms/MyImage";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";


const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % positions.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 6) % positions.length
      );

      return updatedIndexes;
    });
  };

  const images = [
    "./magazine1.png",
    "./magazine2.png",
    "./magazine3.png",
    "./magazine1.png",
    "./magazine2.png",
    "./magazine3.png",
    "./magazine2.png",
  ];

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "right3",
    "right2",
    "right1",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1.2, zIndex: 5 },
    left1: { x: "-100%", scale: 1, zIndex: 4 },
    left2: { x: "-190%", scale: 1, zIndex: 3 },
    left3: { x: "-280%", scale: 1, zIndex: 2 },
    right3: { x: "283%", scale: 1, zIndex: 1 },
    right2: { x: "193%", scale: 1, zIndex: 3 },
    right1: { x: "103%", scale: 1, zIndex: 4 },
  };
  return (
    <div className="imageSliderBImage">
      <div className="latest_head">
        <div>
          <MyImage src={"./latestImage.png"} alt={"startUpImage"} />
        </div>
        <div>
          <button className="latestAction">See All</button>
        </div>
      </div>

      <div className="latest_cont">
        {/* previous button */}
        <div className="latestBtnHead">
          <button className="latestActionBtn" onClick={handleBack}>
            <GrLinkPrevious />
          </button>
        </div>

        {/* images List*/}
        <div className="imageListCont">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={image}
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
              className="imageList"
            />
          ))}
        </div>

        {/* Next button */}
        <div className="latestRightBtnHead">
          <button className="latestActionBtn" onClick={handleNext}>
           <GrLinkNext />

          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
