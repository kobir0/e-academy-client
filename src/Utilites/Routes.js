import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import Courses from "../Component/Courses/Courses";
import FQA from "../Component/FAQ/FQA";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import Main from "./Main";


const router = createBrowserRouter(
    [{
        path: '/',
        element: <Main></Main>,
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
                element: <Courses></Courses>
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