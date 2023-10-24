import React from "react";
import ReactDOM from "react-dom/client";
import Menu from "./Menu.tsx";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Admin from "./Admin.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
          </nav>

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <ErrorBoundary fallback={<p>Bad URL :(</p>}>
                    <Menu />
                  </ErrorBoundary>
                }
              />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
        </BrowserRouter>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
