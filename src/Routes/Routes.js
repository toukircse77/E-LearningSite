import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../ErrorElement/ErrorElement";
import Main from "../Lauout/Main";
import Blog from "../Pages/Blog/Blog";
import Catagories from "../Pages/Courses/Catagories/Catagories";
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
                path:'/catagories',
                element:<Catagories></Catagories>,
            },
            {
                path:'/courseDetails/:id',
                element:<CourseDetails></CourseDetails>,
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