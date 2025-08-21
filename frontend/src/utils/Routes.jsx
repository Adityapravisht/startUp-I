import { element } from "prop-types";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
// import PhoneSignup from "../Pages/PhoneSignup";

const Routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignupPage/>,
  },
 
];

export default Routes;