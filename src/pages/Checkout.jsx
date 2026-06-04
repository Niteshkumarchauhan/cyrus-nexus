// This page completes the order process.
// It uses cart data and the logged-in user to place an order.

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";
import { placeOrder } from "../store/ordersSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth.user);
  const [address, setAddress] = useState("");

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleOrder = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const order = {
      id: Date.now(),
      user: user.email,
      address,
      total,
      items,
      createdAt: new Date().toLocaleString(),
    };

    dispatch(placeOrder(order));
    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Checkout
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Enter your delivery details and place the order.
        </p>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="theme-input mt-4 w-full rounded-2xl p-4"
          rows="4"
          placeholder="Enter address"
        />
        <button
          onClick={handleOrder}
          className="theme-button-primary mt-5 rounded-full px-5 py-3 font-semibold"
        >
          Place Order
        </button>
      </div>

      <aside className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
          Order Summary
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              {item.name} x {item.quantity}
              <strong>$ {item.price * item.quantity}</strong>
            </li>
          ))}
        </ul>
        <div className="mt-4 border-t border-(--border) pt-4 text-lg font-semibold text-cyan-700 dark:text-cyan-100">
          Total: $ {total}
        </div>
      </aside>
    </section>
  );
}

export default Checkout;
