import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import App from "@/App";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
