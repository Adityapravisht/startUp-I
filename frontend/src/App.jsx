import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { darkTheme, lightTheme } from "./theme/custTheme";
import { GlobalStyle } from "./theme/GlobalStyle";
import useThemeStore from "./store/themeStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import Routes from "./utils/Routes";

import {  useState } from "react";



function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  const router = createBrowserRouter(Routes);
    const [user, setUser] = useState(null);


  

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <ToastContainer position="top-center"/>
    </ThemeProvider>

    // <Mycard/>
  );
}

export default App;
