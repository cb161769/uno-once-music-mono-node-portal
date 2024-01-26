import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import EditorContextProvider from "./components/EditorContext.tsx";
import { AuthContextProvider } from "./store/auth-context/auth.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <EditorContextProvider>
        <App />
      </EditorContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
