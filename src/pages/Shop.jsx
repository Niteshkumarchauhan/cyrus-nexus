// This page shows every product in the store.
// It also adds basic search and category filter features.

import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((item) => item.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchCategory = category === "All" || item.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <section className="space-y-6">
      <div className="theme-card rounded-3xl p-5">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Shop All Games & Gear</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Use the search box and filters to quickly find products.
        </p>
        <div className="mt-4 flex flex-col gap-3 md:flex-row">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product"
            className="theme-input w-full rounded-2xl px-4 py-3 outline-none ring-0"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="theme-input rounded-2xl px-4 py-3"
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
