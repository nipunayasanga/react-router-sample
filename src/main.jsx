import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogPage from './components/pages/BlogPage.jsx';
import AboutUs from './components/pages/AboutUs.jsx';
import ContactUs from './components/pages/ContactUs.jsx';
import Products from './components/pages/Products.jsx';
import UserLogin from './components/pages/UserLogin.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/product",
    element: <Products />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
