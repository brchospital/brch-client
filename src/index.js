import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/routes";
import "./style/index.css";

//Fonts
import "./fonts/arial/bpg-arial-caps-webfont.ttf";
import "./fonts/noto/NotoSansGeorgian-Medium.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
