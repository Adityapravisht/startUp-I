import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { darkTheme, lightTheme } from "./theme/custTheme";
import { GlobalStyle } from "./theme/GlobalStyle";
import useThemeStore from "./store/themeStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import Routes from "./utils/Routes";
import { useRef } from "react";
import Myvideo from "./media/Myvideo";
import Upload from "./Components/Atoms/Upload";

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  const router = createBrowserRouter(Routes);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ToastContainer position="top-center"/>
    </ThemeProvider>
  );
}

export default App;

////////////////////////////////////////

// const App = () => {
//   const playerRef = useRef(null);

//   const videoJsOptions = {
//     controls: true,
//     responsive: true,
//     playbackRates: [0.25, 0.5, 1, 1.5, 2],
//     fluid: true,
//     muted: true,
//     sources: [
//       {
//         src: "https://ik.imagekit.io/dzf6n12qm/sample-video.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
//         type: "application/x-mpegURL",
//       },
//     ],
//     poster:
//       "https://ik.imagekit.io/dq2gfoxqk/sample-video.mp4/ik-thumbnail.jpg?tr=so-4",
    
//   };

//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     player.on("waiting", () => {
//       console.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       console.log("player will dispose");
//     });
//   };

//   return (
//     <div style={{padding:'1rem'}}>
//       <Myvideo options={videoJsOptions} onReady={handlePlayerReady} />
//         {/* <AudioPlayer audioFile="song1.mp3" /> */}
//     </div>
//   );
// };

// export default App;


///////////////////////////////////////////////

// import React from 'react'
// import Upload from "./Components/Atoms/Upload";

// const App = () => {
//   return (
//     <div><Upload/></div>
//   )
// }

// export default App