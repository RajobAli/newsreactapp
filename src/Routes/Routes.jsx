
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Roots from "../Layout/Roots";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Roots></Roots>,
        children :[
            {
                path: '/',
                element:<Home></Home>
            }
        ]
    }
]);
export default router;