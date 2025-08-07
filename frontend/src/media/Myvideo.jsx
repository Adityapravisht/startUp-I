import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Myvideo = ({ options, onReady }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered","video-js");

      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });
      console.log(player);
    }
  }, [options,onReady]);

  return (
    
    <div data-vjs-palyer>
     {/* <div style={{ display: "flex", justifyContent: "center" }}>
      <video
        src="https://ik.imagekit.io/dq2gfoxqk/sample-video.mp4"
        height="400"
        width="500"
        controls
        loop
        poster="https://ik.imagekit.io/dq2gfoxqk/sample-video.mp4/ik-thumbnail.jpg?tr=so-4"
      />

       <div data-vjs-player> 
         <div ref={videoRef}/>
       </div>
     </div> */}

      <div ref={videoRef}/>
    </div>
  );
};

export default Myvideo;
