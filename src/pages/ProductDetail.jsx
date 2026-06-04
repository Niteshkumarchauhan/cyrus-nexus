// This page shows one product with more details.
// It uses the product id from the URL to find the item.

import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { products } from "../data/products";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <p className="theme-panel rounded-3xl p-6 text-pink-700 dark:text-pink-100">
        Product not found.
      </p>
    );
  }

  return (
    <section className="theme-card grid gap-8 rounded-3xl p-6 lg:grid-cols-[1fr_1fr]">
      <img
        src={product.image}
        alt={product.name}
        className="h-105 w-full rounded-3xl object-cover"
      />
      <div>
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-700 dark:text-cyan-300">
          {product.category}
        </p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">{product.name}</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{product.description}</p>
        <div className="mt-6 flex items-center gap-4 text-sm text-slate-700 dark:text-slate-200">
          <span>⭐ {product.rating}</span>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">
            $ {product.price}
          </span>
        </div>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="theme-button-primary mt-6 rounded-full px-5 py-3 font-semibold shadow-[0_0_24px_rgba(56,189,248,0.16)]"
        >
          Add to Cart
        </button>
        <Link to="/shop" className="mt-3 block text-cyan-700 dark:text-cyan-200">
          ← Back to Shop
        </Link>
      </div>
    </section>
  );
}

export default ProductDetail;
