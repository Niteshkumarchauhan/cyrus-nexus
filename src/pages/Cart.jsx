// This page shows items inside the cart.
// Users can increase or decrease quantity and remove items.

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Your Cart
      </h1>
      {items.length === 0 ? (
        <p className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
          Your cart is empty. Add products from the shop page.
        </p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 md:flex-row md:items-center md:justify-between dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.name}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      $ {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(1, item.quantity - 1),
                        }),
                      )
                    }
                    className="theme-pill rounded-full px-3 py-1 text-slate-700 dark:text-white"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-slate-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        }),
                      )
                    }
                    className="theme-pill rounded-full px-3 py-1 text-slate-700 dark:text-white"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="rounded-full border border-pink-400/30 bg-pink-100 px-3 py-1 text-pink-700 dark:bg-pink-400/10 dark:text-pink-100"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="theme-panel rounded-3xl p-5">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              Summary
            </h2>
            <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex justify-between">
                Subtotal <strong>$ {total}</strong>
              </div>
              <div className="flex justify-between">
                Shipping <strong>Free</strong>
              </div>
            </div>
            <Link
              to="/checkout"
              className="theme-button-primary mt-5 block rounded-full px-4 py-3 text-center font-semibold"
            >
              Proceed to Checkout
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
