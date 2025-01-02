import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Router = () => {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Main />,
    // },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
