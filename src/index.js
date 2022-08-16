import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import { AppProvider } from "./app/context";
import "./stylesheets/index.css";

function AppWrapper() {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
}

render(<AppWrapper />, document.querySelector("#root"));
