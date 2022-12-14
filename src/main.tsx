import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-alice-carousel/lib/alice-carousel.css";

import CreateContext from "./utils/CreateContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CreateContext>
        <App />
      </CreateContext>
    </BrowserRouter>
  </React.StrictMode>
);
