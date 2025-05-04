import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Footer from './src/components/Footer';
import About from './src/components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import { Outlet } from 'react-router-dom';
import RestaurentMenu from './src/components/RestaurentMenu';

const AppLayout = () => {

  return (
    <div className="app">
    <Header />
    <Outlet />
    {/* <Footer /> */}
    </div>
  )
};
const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },{
        path: "/contact",
        element: <Contact />
      },{
        path: "/restaurent/:restId",
        element: <RestaurentMenu />
      },
    ],
    errorElement: <Error />
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);


