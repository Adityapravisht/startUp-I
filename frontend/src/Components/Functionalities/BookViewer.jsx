import React, { useRef, useCallback, useState, useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const BookViewer = () => {
  const originalPages = [
    "./magazine1.png",
    "./magazine2.png",
    "./magazine3.png",
    "./startups_book_2.jpg",
    "./magazine1.png",
    "./magazine2.png",
    "./magazine3.png",
    "./startups_book_2.jpg",
    "./magazine1.png",
    "./magazine2.png",
    "./magazine3.png",
    "./magazine2.png",
  ];

  // if odd number of pages, add a blank page so total becomes even
  const pages = useMemo(() => {
    const arr = [...originalPages];
    if (arr.length % 2 !== 0) arr.push(null); // if it is null render blank page
    return arr;
  }, [originalPages]);

  const bookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(pages.length);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback((e) => {
    setCurrentPage(e.data);
    // sync actual page count from the PageFlip instance (safer)
    try {
      const pf = bookRef.current?.pageFlip();
      if (pf) setPageCount(pf.getPageCount());
     
    } catch (err) {
      console.warn("pageFlip init warning:", err);
    }
  }, []);

  const turnNextPage = () => {
    const pf = bookRef.current?.pageFlip();
    if (pf) pf.flipNext();
  };

  const turnPrevPage = () => {
    const pf = bookRef.current?.pageFlip();
    if (pf) pf.flipPrev();
  };

  const atStart = currentPage === 0;
  const atEnd = currentPage === pageCount - 1;

  return (
    <div
      style={{
        display: "flex",    
        alignItems: "center",
        justifyContent: "space-evenly",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <button
        onClick={turnPrevPage}
        disabled={atStart}
        style={{
          padding: "0.5rem",
          fontSize: "1.5em",
          borderRadius: "2rem",
          border: "1px solid #ccc",
          cursor: atStart ? "not-allowed" : "pointer",
          opacity: atStart ? 0.5 : 1,
        }}
      >
        <GrCaretPrevious />
      </button>

      <HTMLFlipBook
        width={360} // total book width or single page width depending on behavior you want
        height={500}
        minWidth={300}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1333}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        ref={bookRef}
        onFlip={onFlip}
        onInit={onInit}
        flippingTime={800}
        drawShadow={true}
        useMouseEvents={true}
        style={{ borderRadius: "5px" }}
      >
        {pages.map((pageImage, index) => (
          <div
            key={index}
            data-density={index === 0 || index === pages.length - 1 ? "hard" : "soft"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {pageImage ? (
              <img
                src={pageImage}
                alt={`Page ${index + 1}`}
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              // blank page
              <div style={{ width: "100%", height: "100%", background: "#f7f7f7" }} />
            )}
          </div>
        ))}
      </HTMLFlipBook>

      <button
        onClick={turnNextPage}
        disabled={atEnd}
        style={{
          padding: "0.5rem",
          fontSize: "1.5em",
          borderRadius: "2rem",
          border: "1px solid #ccc",
          cursor: atEnd ? "not-allowed" : "pointer",
          opacity: atEnd ? 0.5 : 1,
        }}
      >
        <GrCaretNext />
      </button>
    </div>
  );
};

export default BookViewer;

/////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

// const BookViewer = () => {
//     const pages = [
//         './magazine1.png',
//         './magazine2.png',
//         './magazine3.png',
//         './startups_book_2.jpg'
//     ];

//     const [currentPage, setCurrentPage] = useState(0);
//     const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

//     // A MotionValue to track the progress of the animation (0 to 1)
//     const animationProgress = useMotionValue(0);

//     const navigatePage = (newDirection) => {
//         setDirection(newDirection);
//         setCurrentPage((prevPage) => {
//             const newPage = prevPage + newDirection;
//             if (newPage >= 0 && newPage < pages.length) {
//                 return newPage;
//             }
//             return prevPage;
//         });
//     };

//     // Example of using useTransform for a slight bend effect
//     const rotateX = useTransform(animationProgress, [0, 0.5, 1], [0, 5, 0]); // Slight rotation on X-axis at midpoint
//     const rotateY = useTransform(animationProgress, [0, 1], direction > 0 ? [0, 180] : [0, -180]);
//     const x = useTransform(animationProgress, [0, 1], direction > 0 ? ['0%', '-100%'] : ['0%', '100%']); // Full turn/slide
//     const opacity = useTransform(animationProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0]); // Fade out slightly as it turns

//     return (
//         <div className="book-viewer-container" style={{ perspective: '1500px' }}>
//             <div className="page-wrapper" style={{
//                 position: 'relative',
//                 width: '600px',
//                 height: '800px',
//                 margin: 'auto',
//                 boxShadow: '0 0 20px rgba(0,0,0,0.3)',
//                 borderRadius: '5px',
//                 overflow: 'hidden'
//             }}>
//                 <AnimatePresence initial={false} custom={direction}>
//                     <motion.img
//                         key={currentPage}
//                         src={pages[currentPage]}
//                         alt={`Page ${currentPage + 1}`}
//                         initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%', rotateY: direction > 0 ? 90 : -90 }}
//                         animate={{ opacity: 1, x: 0, rotateY: 0 }}
//                         exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%', rotateY: direction > 0 ? -90 : 90 }}
//                         transition={{ duration: 0.8, ease: "easeInOut" }}
//                         style={{
//                             position: 'absolute',
//                             width: '100%',
//                             height: '100%',
//                             objectFit: 'cover',
//                             backfaceVisibility: 'hidden',
//                             transformStyle: 'preserve-3d',
//                             // The following styles could be driven by useTransform for more control
//                             // x, rotateY, rotateX (for the bend)
//                         }}
//                     />
//                 </AnimatePresence>
//             </div>

//             <div className="navigation-buttons" style={{ marginTop: '20px', textAlign: 'center' }}>
//                 <button
//                     onClick={() => navigatePage(-1)}
//                     disabled={currentPage === 0}
//                     style={{ padding: '10px 20px', margin: '0 10px' }}
//                 >
//                     Previous Page
//                 </button>
//                 <button
//                     onClick={() => navigatePage(1)}
//                     disabled={currentPage === pages.length - 1}
//                     style={{ padding: '10px 20px', margin: '0 10px' }}
//                 >
//                     Next Page
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default BookViewer;
