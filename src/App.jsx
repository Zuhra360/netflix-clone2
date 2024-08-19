import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path:  "sign-in",
    element: <Signin/>
  },
  {
    path:  "*",
    element: <div>404 Not Found</div>,
  }
]);
export const App = () => {
  
  return <RouterProvider router={router} />;
};