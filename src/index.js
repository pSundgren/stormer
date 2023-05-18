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
import FadeIn from "react-fade-in/lib/FadeIn";
import Generate from "./views/Generate";

/* Router */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <FadeIn>
          <Home />
        </FadeIn>
      </App>
    ),
  },
  {
    path: "/generate",
    element: (
      <App>
        <FadeIn>
          <Generate />
        </FadeIn>
      </App>
    ),
  },
  {
    path: "/how",
    element: (
      <App>
        <FadeIn>
          <How />
        </FadeIn>
      </App>
    ),
  },
  {
    path: "/about",
    element: (
      <App>
        <FadeIn>
          <About />
        </FadeIn>
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
