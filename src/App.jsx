
import './App.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <div className='bg-red-50 h-screen'>Home</div>,

        },
        {
          path: '/signUp',
          element: <SignUp />,

        },
        ,
        {
          path: '/signIn',
          element: <SignIn />,

        },
      ]
    },
  ]);

  return <RouterProvider router={routes} />
}

export default App
