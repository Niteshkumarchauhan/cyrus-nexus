// This page shows the logged-in user's profile information.
// It is protected so only signed-in users can open it.

import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const orderCount = useSelector((state) => state.orders.list.length);
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Profile
      </h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        You are logged in as a beginner-friendly demo user.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <article className="theme-panel rounded-3xl p-4 text-slate-800 dark:text-slate-100">
          Name: {user?.name || "Guest"}
        </article>
        <article className="theme-panel rounded-3xl p-4 text-slate-800 dark:text-slate-100">
          Email: {user?.email}
        </article>
        <article className="theme-panel rounded-3xl p-4 text-slate-800 dark:text-slate-100">
          Orders placed: {orderCount}
        </article>
        <article className="theme-panel rounded-3xl p-4 text-slate-800 dark:text-slate-100">
          Items in cart: {cartCount}
        </article>
      </div>
    </section>
  );
}

export default Profile;
