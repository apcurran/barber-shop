import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { store } from "./store/index";
import { verifyAuth } from "./store/actions/auth-actions";

// Check for token and update app state if required
const token = localStorage.getItem("token");

if (token) {
    store.dispatch(verifyAuth());
}

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
