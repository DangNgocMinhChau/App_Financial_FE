import React, { useId } from "react"; // nạp thư viện react
import ReactDOM from "react-dom"; // nạp thư viện react-dom
import "./public/css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { ConfigProvider } from "antd";
import { applyMiddleware, compose, createStore } from "redux";
import appReducers from "./reducers/index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import thunk from "redux-thunk";
const store = createStore(
  appReducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancer(applyMiddleware(thunk))
);
// Render component App vào #root element
ReactDOM.render(
  <ConfigProvider>
    <App store={store} />
  </ConfigProvider>,
  document.getElementById("root")
);
