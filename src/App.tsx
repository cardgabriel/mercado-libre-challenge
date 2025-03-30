import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Home from "./pages/Home";
import ItemsList from "./pages/ItemsList";
import { NotFound } from "./pages/NotFound";
import ItemDetail from "./pages/ItemDetail";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
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
