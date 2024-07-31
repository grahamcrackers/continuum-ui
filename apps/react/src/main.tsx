import React from "react";
import { ThemeProvider } from "@continuum-ui/spectrum/contexts";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "@continuum-ui/utils/styles.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);
