import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "@navbar/components/Navbar/Navbar";
import NotResults from "./common/components/NotResults/NotResults";
import Loading from "./common/components/Loading/Loading";

// Implementando lazy loading para los componentes principales
const ProductListPage = lazy(
  () =>
    import("@/modules/product-list/components/ProductListPage/ProductListPage")
);
const ProductDetailPage = lazy(
  () =>
    import(
      "@/modules/product-detail/components/ProductDetailPage/ProductDetailPage"
    )
);
const NotFound = lazy(() => import("@/common/components/NotFound/NotFound"));

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
        element: (
          <Suspense fallback={<Loading />}>
            <ProductListPage />
          </Suspense>
        ),
      },
      {
        path: "items/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
