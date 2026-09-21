import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Root from "../shared/Root";
import Home from "../pages/Home";
import About from "../pages/About";

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
                path: ''
            }
        ]
    }
])