import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../ErrorElement/ErrorElement";
import Main from "../Lauout/Main";
import Blog from "../Pages/Blog/Blog";
import Catagories from "../Pages/Courses/Catagories/Catagories";
import CheckOut from "../Pages/Courses/CheckOut/CheckOut";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/home',
                element:<Home></Home>,
            },
            {
                path:'/catagories',
                element:<Catagories></Catagories>,
            },
            {
                path:'/catagory/:id',
                element:<CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
                
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
        ]
    }
])