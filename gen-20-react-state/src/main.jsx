import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import "./index.css";
import Main from "./components/home/Main";
import Footer from "./components/Footer";
import Equipment from "./components/home/Equipment";
import Catalogue from "./components/home/Catalogue";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./not-found";
import Shop from "./pages/shop/Shop";
import ProductDetail from "./pages/detail/ProductDetail";
import ShopSection from "./pages/shop/ShopSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    // children: [
    //   {
    //     path: "/shop",
    //     element: <Shop />,
    //   }
    // ]
  },
  {
    path: "/shop",
    element: <Shop />,
    errorElement: <NotFound />,
    // children: [
    //   {
    //     path: "/shop/speciality_coffee",
    //     element: <ShopSection />,
    //   },
    // ],
  },
  {
    path: "/shop/speciality_coffee",
    element: <ShopSection />,
    errorElement: <NotFound />,
    // children: [
    //   {
    //     path: "/shop/speciality_coffee/product/:id",
    //     element: <ProductDetail />,
    //   },
    // ],
  },
  {
    path: "/productdetail/:id",
    element: <ProductDetail />,
    errorElement: <NotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
