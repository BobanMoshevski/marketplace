import { createBrowserRouter } from "react-router-dom";
import {
  productsLoader,
  productsLoader as productLoader,
  tokenLoader,
  checkAuthLoader,
} from "../http/loader/loader";
import {
  authenticateUserAction,
  deleteProductOrAddCommentAction,
  logoutAction,
  manipulateProductAction,
} from "../http/action/action";
import RootLayout from "../../pages/rootLayout/Root";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import HomePage from "../../pages/homePage/HomePage";
import ProductsRootLayout from "../../pages/productsRootLayout/ProductsRoot";
import ProductsPage from "../../pages/productsPage/ProductsPage";
import ProductDetailPage from "../../pages/productDetailPage/ProductDetailPage";
import EditProductPage from "../../pages/editProductPage/EditProductPage";
import NewProductPage from "../../pages/newProductPage/NewProductPage";
import AuthenticationPage from "../../pages/authenticationPage/AuthenticationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: productsLoader,
      },
      {
        path: "products",
        element: <ProductsRootLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
            id: "products",
            loader: productsLoader,
          },
          {
            path: ":productId",
            id: "product-detail",
            loader: productLoader,
            children: [
              {
                index: true,
                element: <ProductDetailPage />,
                action: deleteProductOrAddCommentAction,
              },
              {
                path: "edit",
                element: <EditProductPage />,
                loader: checkAuthLoader,
                action: manipulateProductAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewProductPage />,
            loader: checkAuthLoader,
            action: manipulateProductAction,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authenticateUserAction,
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);
