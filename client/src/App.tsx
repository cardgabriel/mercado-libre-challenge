import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "@navbar/components/Navbar/Navbar";
import ItemsList from "@/modules/product-list/pages/ItemsList";
import ItemDetail from "@/modules/product-detail/pages/ItemDetail";
import NotFound from "@not-found/pages/NotFound";

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
        element: <ItemsList />,
      },
      {
        path: "items/:id",
        element: <ItemDetail />,
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
