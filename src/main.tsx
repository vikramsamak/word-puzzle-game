import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/Store";
import { routes } from "./routes";
import "./index.css";
import NotificationWrapper from "./components/NotificationWrapper";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <NotificationWrapper>
        <RouterProvider router={routes} />
      </NotificationWrapper>
    </Provider>
  </StrictMode>
);
