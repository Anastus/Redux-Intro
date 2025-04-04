import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";

import { Provider } from "react-redux";

import store from "./reducers/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React>
        <Provider store={store}>
            <App />
        </Provider>
    </React>
);
