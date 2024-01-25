import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import "./18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </React.StrictMode>
);
