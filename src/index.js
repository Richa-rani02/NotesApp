import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {AuthProvider} from "./context/auth-context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <Router>
    <App />
    </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
