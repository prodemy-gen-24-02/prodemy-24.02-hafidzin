import React from "react";
import ReactDOM from "react-dom/client";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import "./index.css";
// import Main from "./components/home/Main";
// import Footer from "./components/Footer";
// import Equipment from "./components/home/Equipment";
// import Catalogue from "./components/home/Catalogue";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
// import NotFound from "./not-found";
// import Shop from "./pages/shop/Shop";
// import ProductDetail from "./pages/detail/ProductDetail";
// import ShopSection from "./pages/shop/ShopSection";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
