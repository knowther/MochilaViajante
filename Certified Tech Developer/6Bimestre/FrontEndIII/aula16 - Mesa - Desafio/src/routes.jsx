import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/home";

import FormPage from "./pages/formulario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/formulario/:studentID",
    element: <FormPage />,
  },
]);

function Routes(){
  return(
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default Routes;
