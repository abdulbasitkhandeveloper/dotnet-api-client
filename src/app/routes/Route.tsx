import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../pages/home/Home";
import Catalog from "../features/catalog/Catalog";
import Contact from "../pages/contact/Contact";
import React from "react";
import About from "../pages/about/About";
import ProductDetails from "../features/catalog/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home />},
            { path: "/catalog", element: <Catalog /> },
            { path: "/catalog/:id", element: <ProductDetails /> },
            { path: "/about", element: <About />},
            { path: "/contact", element: <Contact />},
        ]
    }
]);