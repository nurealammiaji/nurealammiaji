import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";

const PublicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <div><h1>About</h1></div>
            },
            {
                path: "/projects",
                element: <div><h1>Projects</h1></div>
            },
            {
                path: "/contact",
                element: <div><h1>Contact</h1></div>
            },
        ]
    }
])

export default PublicRoutes;