import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import { Provider } from "react-redux";
import store from "./components/containers/redux/reducers/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
