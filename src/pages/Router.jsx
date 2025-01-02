import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import InputPost from "./InputPost/InputPost";
import OutputPost from "./OutputPost/OutputPost";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/inputpost",
      element: <InputPost />,
    },
    {
      path: "/outputpost",
      element: <OutputPost />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
