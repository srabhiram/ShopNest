import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Provider } from "react-redux";
import store from "./services/store/store.js";
import { Home } from "./components/Home.jsx";
import Routes from "./Routes.jsx";
import Category from "./components/Categories/Category.jsx";
import App from "./App.jsx";
import { CategoryLayout } from "./components/Categories/CategoryLayout.jsx";
import { ProductDetails } from "./components/ProductDetails.jsx";
import CartDetails from "./components/CartDetails.jsx";
import { Landingpage } from "./components/Landingpage.jsx";
import { About } from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/kk",
    element: <Landingpage />,
    exact: true,
  },
  {
    path: "/",
    element: <App />,
    exact: true,
  },
  {
    path: "/home",
    element: <Routes />,
    children: [{ path: "", element: <Landingpage/>,children:[{path:"",element:<Home/>}]}],
    exact: true,
  },
  {
    path: "/category",
    element: <Category />,
    children: [
      {
        path: "all",
        element: <Home />,
      },
      {
        path: "men's clothing",
        element: <CategoryLayout />,
      },
      {
        path: "women's clothing",
        element: <CategoryLayout />,
      },
      {
        path: "electronics",
        element: <CategoryLayout />,
      },
      {
        path: "kid's clothing",
        element: <CategoryLayout />,
      },
      {
        path: "home appliances",
        element: <CategoryLayout />,
      }
    ],
    exact: true,
  },
  {
    path: "/product",
    element: <ProductDetails />,
    exact: true,
  },
  {
    path: "/cart",
    element: <CartDetails />,
    exact: true,
  },
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
