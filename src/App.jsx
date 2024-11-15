import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import LandingPage from './Pages/Home/LandingPage';

import ProductDetail from './Pages/product/product';
import Cart from './Pages/cart/cart';
import ProfilePage from './Pages/Profile/Profile';
import { injectStore } from '../services/axiosInterceptor';
import store from "./features/store.js";
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react';
import MailVerificationPage from './components/auth/MailVerificationPage.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import Aboutus from './Pages/Aboutus/Aboutus.jsx';
injectStore(store);

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
          path: '/signUp',
          element: <SignUp />,
        },
        {
          path: '/product/:id',
          element: <ProductDetail />,
        },
        {
          path: '/signIn',
          element: <SignIn />,
        },
        {
          path: '/verifyYourMail',
          element: <MailVerificationPage />,
        },
        {
          path: '/cart',
          element: <Cart />,
        }
        ,
        {
          path: '/profile',
          element: <ProfilePage/>,
        },
        {
          path: '/contact-us',
          element: <ContactUs/>,
        },
        {
          path: '/about-us',
          element: <Aboutus/>,
        },

      ]
    },
  ]);

  return <>
   <Toaster position='top-right'/>
  <RouterProvider router={routes} />
  </>
}

export default App;
