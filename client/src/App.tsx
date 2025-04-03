import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "@navbar/components/Navbar/Navbar";
import ProductListPage from "@/modules/product-list/components/ProductListPage/ProductListPage";
import NotFound from "@/common/components/NotFound/NotFound";
import ProductDetailPage from "@/modules/product-detail/components/ProductDetailPage/ProductDetailPage";
import NotResults from "./common/components/NotResults/NotResults";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <NotResults />,
      },
      {
        path: "items",
        element: <ProductListPage />,
      },
      {
        path: "items/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
