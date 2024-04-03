import {
    createBrowserRouter,
    
} from "react-router-dom";
import Home from "../Layouts/HomeLayout/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
]);