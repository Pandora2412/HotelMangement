import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import quanly_app from "./quanly_app.js";
import reportWebVitals from "./reportWebVitals";
  
const quanly_form = ReactDOM.createRoot(document.getElementById("quanly_form"));
quanly_form.render(<quanly_app />)