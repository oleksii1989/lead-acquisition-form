import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import LeadForm from "./pages/LeadForm";
import ThankYou from "./pages/ThankYou";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<LeadForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
