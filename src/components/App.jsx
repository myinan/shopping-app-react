import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/Home/Home";
import CollectionPage from "../pages/Collection/Collection";
import SportsPage from "../pages/Sports/Sports";
import BootsPage from "../pages/Boots/Boots";
import AboutUsPage from "../pages/AboutUs/AboutUs";
import ProductDetailsPage from "./ProductDetails/ProductDetails";
import CartPage from "../pages/Cart/Cart";
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

        {
          path: "collection",
          element: <CollectionPage />,
        },

        {
          path: "sports",
          element: <SportsPage />,
        },

        {
          path: "boots",
          element: <BootsPage />,
        },

        {
          path: "about",
          element: <AboutUsPage />,
        },

        {
          path: "cart",
          element: <CartPage />,
        },

        {
          path: "collection/:productId",
          element: <ProductDetailsPage />,
        },

        {
          path: "*", // Match any other path within Layout
          element: <Error />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
