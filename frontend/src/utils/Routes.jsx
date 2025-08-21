import { element } from "prop-types";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

// import PhoneSignup from "../Pages/PhoneSignup";

const Routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
 
];

export default Routes;