import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "styled-components";
import LightTheme from "./config/theme.ts";
import { ThemedGlobalStyle } from "./config/global_style.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
