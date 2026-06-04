// This card shows one product on the shop page.
// It is a reusable component to keep the code simple.

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";
import { toggleWish } from "../store/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isWish = wishlistItems.includes(product.id);

  const showToast = (message) => {
    window.dispatchEvent(new CustomEvent("showToast", { detail: message }));
  };

  return (
    <article className="theme-card rounded-3xl bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_56px_rgba(34,211,238,0.12)] dark:bg-slate-900">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full rounded-2xl object-cover"
      />
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200">
            {product.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {product.description}
          </p>
        </div>
        <button
          onClick={() => dispatch(toggleWish(product.id))}
          className={`rounded-full px-3 py-1 text-xs ${isWish ? "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-100" : "bg-slate-100 text-slate-700 dark:bg-white/5 dark:text-slate-200"}`}
        >
          ♥
        </button>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-700 dark:text-slate-200">
        <span>⭐ {product.rating}</span>
        <strong className="text-cyan-700 dark:text-cyan-200">
          $ {product.price}
        </strong>
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => {
            dispatch(addToCart(product));
            showToast("Added to cart");
          }}
          className="theme-button-primary flex-1 rounded-2xl px-4 py-2 text-sm font-semibold shadow-[0_0_22px_rgba(56,189,248,0.16)]"
        >
          Add to Cart
        </button>
        <Link
          to={`/product/${product.id}`}
          className="theme-button-soft rounded-2xl px-4 py-2 text-sm font-semibold"
        >
          View
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
