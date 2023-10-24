import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu.tsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
