import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import SignIn from "./components/PasswordAuth/SignIn.jsx";
import SignUp from "./components/PasswordAuth/SignUp.jsx";
import Contact from "./components/Contact.jsx";
import TermsaAndConditions from "./components/TermsaAndConditions.jsx";
import ProfileContext from "./Contexts/ProfileContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/termsandconditions",
        element: <TermsaAndConditions></TermsaAndConditions>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileContext>
      <RouterProvider router={router} />
    </ProfileContext>
  </StrictMode>
);
