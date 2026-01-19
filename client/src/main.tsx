import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <img
      src="./src/assets/bg.jpg"
      alt="Travel Background"
      className="absolute inset-0 w-full h-screen object-cover z-0"
    />
    <App />
  </BrowserRouter>
);
