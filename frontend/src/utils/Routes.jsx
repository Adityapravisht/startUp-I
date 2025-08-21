import Home from "../pages/Home";
import { About } from "../pages/About";
import { TechPartner } from "../pages/TechPartner";
import { Subscribe } from "../pages/Subscribe";
import { Blog } from "../pages/Blog";
import { Layout } from "../components/layout/Layout";
import Login from "../pages/Login";
import { ContactUs } from "../pages/ContactUs";
import { UserForm } from "../pages/UserForm";
import { Payment } from "../pages/Payment";
import { UsersTable } from "../pages/UsersTable";
import Signup from "../pages/SignUp";

// import PhoneSignup from "../Pages/PhoneSignup";
const Routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "tech-partner",
        element: <TechPartner />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "user-form",
        element: <UserForm />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "user-table",
        element: <UsersTable />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "about",
    element: <About />,
  },
];

export default Routes;
