import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import ErrorElement from '../ErrorElement/ErrorElement'
import Home from "../Components/Home"
import AllCourse from "../Pages/Courses/AllCourses/AllCourse";
import Course_Details from "../Pages/Courses/Course_Datails/Course_Details";
import Block from "../Components/Block";
import Login from '../Login-Register/Login';
import Register from '../Login-Register/Register';
import CheckOut from '../Pages/Courses/CheckOut/CheckOut';

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<AllCourse></AllCourse>
            },
            {
                path:'/catagory/:id',
                element:<Course_Details></Course_Details>,
                loader: ({params}) => fetch(`http://localhost:5000/catagory/${params.id}`)
            },
            {
                path:'/block',
                element:<Block></Block>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Register></Register>
            },
            {
                path:'/course_details',
                element:<Course_Details></Course_Details>
            },
            {
                path:'/checkOut',
                element:<CheckOut></CheckOut>
            }

        ]
    }
])