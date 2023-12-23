import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AppGlobalProvider from "./globalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppGlobalProvider>
      <App />
    </AppGlobalProvider>
  </React.StrictMode>
);
