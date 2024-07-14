import React from 'react'
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Page1 from './pages/sub-pages/Page1';
import Page2 from './pages/sub-pages/Page2';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import DetailPage from './pages/DetailPage';
import NotFound from './components/NotFound';

const App = () => {

    const router = createBrowserRouter([
      {
        path:'/',
        element:<RootLayout />,
        children:[
          {
            path:'home',
            element:<Home />
          },
          {
            path:'details/id:',
            element:<DetailPage/>
          },
          {
            path:'page-1',
            element:<Page1 />
          },
          {
            path:'page-2',
            element:<Page2 />
          },
          {
            path:'contact-page',
            element:<Contact />
          },
          {
            path:'about-page',
            element:<About />
          },
          {
            path:'*',
            element:<NotFound />
          }
          
        ]
      },
      
    ]);

    return <RouterProvider router={router} />

}

export default App;