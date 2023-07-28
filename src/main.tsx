import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/index.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
