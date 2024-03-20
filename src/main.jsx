import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Provider } from "react-redux";
import store from "./services/store/store.js";
import { Home } from "./components/Home.jsx";
import Routes from "./Routes.jsx";
import Category from "./components/Category.jsx";
import CartDetails from "./components/CartDetails.jsx";
import { ProductDetails } from "./components/ProductDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Routes />,
    children: [{ path: "home", element: <Home /> }],
  },
  {
    path: "/categories",
    exact: true,
    element: <Category />,
  },
  {
    path: "/product",
    exact: true,
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    exact: true,
    element: <CartDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
