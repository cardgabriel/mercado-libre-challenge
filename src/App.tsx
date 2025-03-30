import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "@navbar/components/Navbar/Navbar";
import Home from "@/modules/home/pages/Home";
import ItemsList from "@items-list/pages/ItemsList";
import ItemDetail from "@item-detail/pages/ItemDetail";
import NotFound from "@not-found/pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Navbar />,
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
