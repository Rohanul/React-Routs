// DOMs
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// mains
import App from "./App.jsx";
import "./index.css";

// routes
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import NotFound from "./Pages/NotFound.jsx";
import NavBar from "./layout/NavBar.jsx";
import SignIn from "./Pages/SignIn.jsx";

import ProtectRouts from "./routs/ProtectRouts.jsx";
import AdminProfile from "./admin/AdminProfile.jsx";
import AdminProduct from "./admin/AdminProducts.jsx";
import AdminManageUsers from "./admin/AdminManageUsers.jsx";
import AdminRouts from "./routs/AdminRouts.jsx";
import Product from "./Pages/Product.jsx";
import ProductsDetail from "./ProductsrRout/ProductsDetails.jsx";
import Profile from "./Pages/profile.jsx";
import UserProfile from "./user/UserProfile.jsx";
import UserOrder from "./user/UserOrder.jsx";
import AdminCategories from "./admin/AdminChategories.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Product />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product/:id",
        element: <ProductsDetail />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignIn />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/user",
        element: <ProtectRouts />, // Protected route for users
        children: [
          {
            path: "profile",
            element: <UserProfile />,
          },
          {
            path: "order",
            element: <UserOrder />,
          },
        ],
      },
      {
        path: "/dashboard/admin",
        element: <AdminRouts />, // Protected route for admins
        children: [
          {
            path: "profile",
            element: <AdminProfile />,
          },
          {
            path: "product",
            element: <AdminProduct />,
          },
          {
            path: "manageUser",
            element: <AdminManageUsers />,
          },
          {
            path: "category",
            element: <AdminCategories />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
