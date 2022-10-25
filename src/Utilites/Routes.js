import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import Course from "../Component/Courses/Course";
import CourseDetails from "../Component/Courses/CourseDetails";
import CourseLanding from "../Component/Courses/CourseLanding";
import Courses from "../Component/Courses/Courses";
import FQA from "../Component/FAQ/FQA";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import ErrorPage from "./ErrorPage";

import Main from "./Main";


const router = createBrowserRouter(
    [{
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }, {
                path: 'courses',
                loader: () => fetch('https://e-academy-server.vercel.app/category'),
                element: <Courses></Courses>
                ,
                children: [
                    {
                        path: '',
                        element: <CourseLanding></CourseLanding>
                    },
                    {
                        path: '/courses/:name',
                        loader: ({ params }) => fetch(`https://e-academy-server.vercel.app/category/${params.name}`),
                        element: <Course></Course>
                    },
                    {
                        path: '/courses/SingleItem/:id',
                        loader: ({ params }) => fetch(`https://e-academy-server.vercel.app/category/SingleItem/${params.id}`),
                        element: <CourseDetails></CourseDetails>
                    },

                ]
            }, {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'faq',
                element: <FQA></FQA>
            }
        ]
    }]
)
export default router;