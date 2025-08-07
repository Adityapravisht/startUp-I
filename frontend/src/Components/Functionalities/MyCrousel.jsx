// src/Components/Carousel/CustomCarousel.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MyCarousel = () => {
  const crouselValue = [
    "Business",
    "LifeStyle",
    "Newspaper",
    "Fashion",
    "Automotive",
    "Entertainment",
    "Sports",
    "Technology",
    "Health",
    "Education"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  
  // Number of visible cards at once
  const visibleCards = 6;
  
  // Calculate how many slides we have
  const totalSlides = Math.ceil(crouselValue.length / visibleCards);
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % totalSlides);
      }, 6000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, totalSlides]);
  
  // Handle next button click
  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalSlides);
  };
  
  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  };
  

  return (
    <div className="carousel-container ">
      <h1 className="carousel-title roboto-medium">Popular Category</h1>
      
      <div className="carousel-wrapper">
        <button 
          className="carousel-button prev" 
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        
        <div className="carousel-viewport" ref={containerRef}>
          <motion.div 
            className="carousel-track"
            initial={false}
            animate={{ 
              x: -currentIndex * 100 + '%'
            }}
            transition={{ duration: 2}}
          >
            {Array(totalSlides).fill().map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className="carousel-slide"
              >
                {crouselValue
                  .slice(slideIndex * visibleCards, slideIndex * visibleCards + visibleCards)
                  .map((value, cardIndex) => (
                    <div 
                      key={cardIndex} 
                      className="carousel-card"
                    >
                      {value}
                    </div>
                  ))
                }
              </div>
            ))}
          </motion.div>
        </div>
        
        <button 
          className="carousel-button next" 
          onClick={handleNext}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </div>
      
     
    </div>
  );
};

export default MyCarousel;