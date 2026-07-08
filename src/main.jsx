import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import Parent from "./latihan/Parent.jsx";
//import { CounterContextProvider } from "./context/counterContext.jsx";
import Form from "./latihan/Form.jsx";
import { ThemeContextProvider } from "./context/themeContext.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";
import { DarkModeContextProvider } from "./context/darkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ThemeContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);