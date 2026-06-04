// This is the main App file.
// It sets up routes, the layout, and the toast message system.

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

function AppShell() {
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("gaming-users")) {
      localStorage.setItem(
        "gaming-users",
        JSON.stringify([
          {
            name: "Demo User",
            email: "demo@example.com",
            password: "Demo123!",
          },
        ]),
      );
    }

    const onToast = (event) => {
      setToast(event.detail);
      setTimeout(() => setToast(""), 2200);
    };

    window.addEventListener("showToast", onToast);
    return () => window.removeEventListener("showToast", onToast);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      {toast ? (
        <div className="fixed bottom-4 right-4 rounded-full border border-cyan-400/30 bg-cyan-100/90 px-4 py-2 text-cyan-800 shadow-2xl dark:bg-cyan-500/10 dark:text-cyan-100">
          {toast}
        </div>
      ) : null}
    </BrowserRouter>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppShell />
    </Provider>
  );
}

export default App;
