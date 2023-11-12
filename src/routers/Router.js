import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './../layout/MainLayout';
import Home from './../pages/home/Home';
import Contact from './../pages/contact/Contact';
import About from './../pages/about/About';
import Currency from './../pages/currency/Currency';
import ErrorPage from './../components/common/ErrorPage';

const Router = () => {
 const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayout/>,
     errorElement: <ErrorPage />,

     children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/currency",
        element:<Currency/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/about',
        element:<About/>
      }
    ]
  },
 ])

 return (
  <RouterProvider router={router}/>
 )
}

export default Router
