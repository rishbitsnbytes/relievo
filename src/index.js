import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CombinedProvider } from "./providers/CombinedProvider";
import { AppThemeProvider } from "./providers/RelievoThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AppThemeProvider>
        <CombinedProvider>
          <App />
        </CombinedProvider>
      </AppThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
