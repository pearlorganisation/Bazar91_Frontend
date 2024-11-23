import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import LandingPage from "./Pages/Home/LandingPage";
import ProductDetail from "./Pages/product/product";
import { injectStore } from "../services/axiosInterceptor";
import store from "./features/store.js";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import MailVerificationPage from "./components/auth/MailVerificationPage.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Aboutus from "./Pages/Aboutus/Aboutus.jsx";
injectStore(store);

import Cart from "./Pages/cart/cart";
import ProfilePage from "./components/profilePage/profilePage.jsx";  // Rename this to ProfilePage to avoid confusion
import BrandListing from "./Pages/Brands/BrandListingPage";
import MyOrdersPage from "./Pages/Order/order";
import Wishlist from "./Pages/Wishlist/Wishlist.jsx";
import Profile from "./Pages/Profile/Profile";  // Profile should be the layout component

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/signIn",
          element: <SignIn />,
        },
        {
          path: "/verifyYourMail",
          element: <MailVerificationPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/about-us",
          element: <Aboutus />,
        },
        {
          path: "/profile",
          element: <Profile />,  
          children: [
            {
              index: true,
              element: <ProfilePage />,
            },
            {
              path: "order",
              element: <MyOrdersPage />,
            },
            {
              path: "wishlist",
              element: <Wishlist />,
            },
          ],
        },
        {
          path: "/brandlist",
          element: <BrandListing />,
        },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
