import React from "react";
import { createRoot } from "react-dom/client";
import BrowserRouter from "react-router-dom/BrowserRouter";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<BrowserRouter basename={process.env.PUBLIC_URL}>
<App />
</BrowserRouter>);
