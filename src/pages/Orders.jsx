// This page shows all placed orders.
// It helps the user review order history.

import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.orders.list);

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Orders</h1>
      {orders.length === 0 ? (
        <p className="theme-card rounded-3xl p-6 text-slate-700 dark:text-slate-200">
          No orders yet. Place one from the checkout page.
        </p>
      ) : (
        orders.map((order) => (
          <article
            key={order.id}
            className="rounded-3xl bg-white p-5 dark:bg-slate-900"
          >
            <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>{order.createdAt}</span>
              <strong className="text-cyan-700 dark:text-cyan-100">$ {order.total}</strong>
            </div>
            <p className="mt-2 text-slate-900 dark:text-white">Buyer: {order.user}</p>
            <p className="text-slate-600 dark:text-slate-300">
              Address: {order.address || "No address given"}
            </p>
            <ul className="mt-3 text-sm text-slate-700 dark:text-slate-200">
              {order.items.map((item) => (
                <li key={item.id}>
                  • {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          </article>
        ))
      )}
    </section>
  );
}

export default Orders;
