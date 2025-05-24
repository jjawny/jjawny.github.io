import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "./features/info/styles.css";
import "./features/r3f/styles.css";
import "./features/tailwind/styles.css";
import "./styles.css";

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
