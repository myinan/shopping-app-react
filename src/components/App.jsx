import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/Home/Home";
import Error from "./Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
      errorElement: <Error />,
    },
    {
      path: "test/:name",
      element: <h1>Test</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
