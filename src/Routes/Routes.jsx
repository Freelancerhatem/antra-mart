import {
    createBrowserRouter,
    
} from "react-router-dom";
import Home from "../Layouts/HomeLayout/Home";
import AddCart from "../Layouts/AddCartLayout/AddCart";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import PurchaseLayout from "../Layouts/PurchaseLayout/PurchaseLayout";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products/:id',
                element:<AddCart></AddCart>
            },
            {
                path:'/product_cart',
                element:<PurchaseLayout></PurchaseLayout>
            },
        ]
    },
    
]);