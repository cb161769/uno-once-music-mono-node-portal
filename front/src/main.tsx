import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import EditorContextProvider from "./components/EditorContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EditorContextProvider>
      <App />
    </EditorContextProvider>
  </React.StrictMode>
);
