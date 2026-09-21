import { createBrowserRouter } from "react-router";
import Root from "../shared/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Registration from "../pages/authentication/Registration";
import SignIn from "../pages/authentication/SignIn";


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
                path: '/about',
                element: <About></About>
            },

            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/shop/:id',
                element: <ProductDetails></ProductDetails>
            },
            {
                path: '/register',
                element: <Registration></Registration>
                
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            }
        ]
    }
])