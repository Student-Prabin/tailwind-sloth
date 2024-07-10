import React from 'react'
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {

    const router = createBrowserRouter([
      {
        path:'/',
        element:<Home />
      },
      {
        path:'contact-page',
        element:<Contact />
      },{
        path:'about-page',
        element:<About />
      }
    ]);

    return <RouterProvider router={router} />

}

export default App;