import { createBrowserRouter } from "react-router";
import Root from "../shared/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/shop";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },

            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])