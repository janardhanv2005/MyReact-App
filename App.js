import {React, Suspense, lazy} from 'react';
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
import { lazy } from 'react';


const Grocery = lazy(() => import('./src/components/Grocery'));

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
        path: "/grocery",
        element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense>
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


