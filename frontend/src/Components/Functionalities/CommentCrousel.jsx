import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import MyImage from "../atoms/MyImage";
import Mycard from "../Atoms/Mycard";


const CommentCarousel = () => {
  const allComments = [
    {
      commmentDescription:
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua",
      userName: "Luna lovegood",
      userAvatar: "./avatar.png",
    },
    {
      commmentDescription:
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua",
      userName: "Luna lovegood",
      userAvatar: "./avatar.png",
    },
    {
      commmentDescription:
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua",
      userName: "Luna lovegood",
      userAvatar: "./avatar.png",
    },
    {
      commmentDescription:
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua",
      userName: "Luna lovegood",
      userAvatar: "./avatar.png",
    },
    {
      commmentDescription:
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua",
      userName: "Luna lovegood",
      userAvatar: "./avatar.png",
    },
    {
      commmentDescription:
        "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua",
      userName: "Luna lovegood",
      userAvatar: "./avatar.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [commentsPerView, setCommentsPerView] = useState(3);
  const timerRef = useRef(null);

  // Determining number of comments to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCommentsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCommentsPerView(2);
      } else {
        setCommentsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.ceil(allComments.length / commentsPerView)
      );
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [commentsPerView, allComments.length]);

  // Handle next button click
  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % Math.ceil(allComments.length / commentsPerView)
    );

    // Reset auto-play timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setCurrentIndex(
          (prev) => (prev + 1) % Math.ceil(allComments.length / commentsPerView)
        );
      }, 5000);
    }
  };

  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.ceil(allComments.length / commentsPerView)) %
        Math.ceil(allComments.length / commentsPerView)
    );
  };

  return (
    <div className="commentCrouselCont">
      <div style={{ paddingLeft: "15px" }}>
        <div className="bgSunImage">
          <h1 className="Comment_heading">
            Readers Say <MyImage src={"./shoutIcon.png"} alt={"shoutImage"} />
          </h1>
        </div>
      </div>

      <div className="comment-carousel-wrapper">
        <div className="comment-viewport">
          <motion.div
            className="comment-track"
            animate={{ x: -currentIndex * 100 + "%" }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
          >
            {Array(Math.ceil(allComments.length / commentsPerView))
              .fill()
              .map((_, slideIndex) => (
                <div key={slideIndex} className="comment-slide">
                  {allComments
                    .slice(
                      slideIndex * commentsPerView,
                      slideIndex * commentsPerView + commentsPerView
                    )
                    .map((comment, cardIndex) => (
                      <motion.div key={cardIndex} className="comment-card">
                        <Mycard
                          description={comment.commmentDescription}
                          avatar={comment.userAvatar}
                          userName={comment.userName}
                        />
                      </motion.div>
                    ))}
                </div>
              ))}
          </motion.div>
        </div>

        {/* action buttons */}

        <div
          style={{
            marginTop: "12px",
          }}
          className=" flex-center"
        >
          <button
            className="carousel-button prev"
            onClick={handlePrev}
            aria-label="Previous comments"
          >
            &lt;
          </button>
          <button
            className="carousel-button next"
            onClick={handleNext}
            aria-label="Next comments"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentCarousel;
