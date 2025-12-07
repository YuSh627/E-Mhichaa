import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Login from "./pages/Auth/Login.tsx";
import Register from "./pages/Auth/Register.tsx";
import ProtectedRoutes from "./pages/Auth/ProtectedRoutes.tsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme.ts";
import ElectricBill from "./pages/Features/ElectricBill.tsx";
import SendMoney from "./pages/Features/SendMoney.tsx";
import TransactionHistory from "./pages/Features/TransactionHistory.tsx";
import Main from "./pages/Main.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<ProtectedRoutes />}>
        <Route index={true} path="/" element={<Home />} />
        <Route index={true} path="/electricBill" element={<ElectricBill />} />
        <Route index={true} path="/sendMoney" element={<SendMoney />} />
        <Route
          index={true}
          path="/transactionHistory"
          element={<TransactionHistory />}
        />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ThemeProvider>
);
