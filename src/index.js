import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Views */
import App from "./App";
import Home from "./views/Home";
import About from "./views/About";
import How from "./views/How";

/* Styling */
import "./index.css";

/* Router */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Home />
      </App>
    ),
  },
  {
    path: "/how",
    element: (
      <App>
        <How />
      </App>
    ),
  },
  {
    path: "/about",
    element: (
      <App>
        <About />
      </App>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
