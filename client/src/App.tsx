import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "@navbar/components/Navbar/Navbar";
import ProductListPage from "@/modules/product-list/pages/ProductListPage";
import NotFound from "@/modules/common/components/NotFound/NotFound";
import ProductDetailPage from "@/modules/product-detail/pages/ProductDetailPage";

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Bienvenido a Mercado Libre</h1>
            <p>Encuentra los mejores productos al mejor precio</p>
          </div>
        ),
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
