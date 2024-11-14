import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import LandingPage from './Pages/Home/LandingPage';

import ProductDetail from './Pages/product/product';
import Cart from './Pages/cart/cart';
import ProfilePage from './Pages/Profile/Profile';

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
          path: '/cart',
          element: <Cart />,
        }
        ,
        {
          path: '/profile',
          element: <ProfilePage/>,
        }
        
      ]
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
