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


function App() {
  const darkMode = useThemeStore((state) => state.darkMode);
  
  const router = createBrowserRouter(Routes);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </ThemeProvider>
  );
}

export default App;

// const App = () => {
//   const playerRef = useRef(null);

//     const videoJsOptions = {
//     autoplay: true,
//     controls: true,
//     responsive: true,
//     fluid: true,
//     sources: [{
//       src: "https://ik.imagekit.io/dq2gfoxqk/sample-video.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080",
//       type: "application/x-mpegURL",
//     },],
//     // sources:[{
//     //   src:"https://ik.imagekit.io/dq2gfoxqk/sample-video.mp4",
//     //   type:"video/mp4",
//     // }]
//   };

//   const handlePlayerReady = (player) => {
//     playerRef.current = player;

//     // You can handle player events here, for example:
//     player.on("waiting", () => {
//       console.log("player is waiting");
//     });

//     player.on("dispose", () => {
//       console.log("player will dispose");
//     });
//   };

//   return (
//     <div style={{width:'800px'}}>
//       <Myvideo options={videoJsOptions} onReady={handlePlayerReady} />
//     </div>
//   );
// };

// export default App;
