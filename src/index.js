import React from "react";
import ReactDOM from "react-dom/client";
import Users from "./components/users";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Users />
  </React.StrictMode>
);
