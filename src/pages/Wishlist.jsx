// This page shows saved products from the wishlist.
// It helps users keep track of products they like.

import { useSelector } from "react-redux";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const items = products.filter((item) => wishlistItems.includes(item.id));

  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Wishlist</h1>
      {items.length === 0 ? (
        <p className="rounded-3xl bg-white p-6 text-slate-700 dark:bg-slate-900 dark:text-slate-200">
          No saved products yet. Tap the heart on any product.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;
