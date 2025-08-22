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
import SignUpPage from "../pages/SignUpPage";

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
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "user-form",
        element: <UserForm />,
        element: <UserForm />,
      },
      {
        path: "payment",
        element: <Payment />,
        element: <Payment />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <ContactUs />,
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
    element: <SignUpPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "tech-partner",
    element: <TechPartner />,
  },
];

export default Routes;
