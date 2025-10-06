import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.less";
import { App } from "./App.tsx";

const el = document.getElementById("root");
if (!el) {
  throw new Error("Failed to find the root element");
}
createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
