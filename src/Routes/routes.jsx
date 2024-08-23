import {createBrowserRouter} from "react-router-dom";
import { Home } from "../components/Home.jsx";
import {Signin} from "../components/Signin.jsx";

export const router = createBrowserRouter([
    {
      path:  "/",
      element: <Home/>,
    },
    {
      path:  "signin",
      element: <Signin/>,
    },
    {
      path:  "*",
      element: <div>404 Not Found</div>,
    }
]);