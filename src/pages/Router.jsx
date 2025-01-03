import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import InputPost from "./InputPost/InputPost";
import OutputPost from "./OutputPost/OutputPost";

import { useState } from "react";

const Router = () => {
  const [login, setLogin] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main login={login} setLogin={setLogin} />,
    },
    {
      path: "/inputpost",
      element: <InputPost />,
    },
    {
      path: "/outputpost/:id", // ✅ 동적 경로 설정
      element: <OutputPost login={login} setLogin={setLogin} />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
