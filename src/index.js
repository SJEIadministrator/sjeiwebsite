import React from "react";
import ReactDOM from "react-dom";

import "./style/take-action.css";
import "./style/donation.css";
import "./style/pressRelease.css";

import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/whawedo.css";
import "./style/react-tabs.css";
import "./style/index.css";

export { default as Tabs } from "./components/Tabs";
export { default as TabList } from "./components/TabList";
export { default as Tab } from "./components/Tab";
export { default as TabPanel } from "./components/TabPanel";
export { reset as resetIdCounter } from "./helpers/uuid";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
