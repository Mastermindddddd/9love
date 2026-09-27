"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default function ShopPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="border-b border-line/80 pb-8">
        <p className="font-serif text-xl italic text-fog">the full range</p>
        <h1 className="mt-2 font-display text-4xl font-black sm:text-5xl">
          Shop 9LOVE
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`border px-4 py-2 text-xs uppercase tracking-widest2 transition ${
              active === c
                ? "border-bone bg-bone text-ink"
                : "border-fog/40 text-fog hover:border-bone hover:text-bone"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-16 text-sm text-fog">
          Nothing here yet — this category is still coming. Check back for
          the next drop.
        </p>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}
