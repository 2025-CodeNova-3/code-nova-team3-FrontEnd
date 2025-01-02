import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
