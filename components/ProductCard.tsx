import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-char">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 border border-bone/30 bg-ink/70 px-2 py-1 text-[10px] uppercase tracking-widest2 text-bone">
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-sm font-medium text-bone">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-fog">{product.category}</p>
        </div>
        <p className="whitespace-nowrap text-sm text-bone">
          R{product.price}
        </p>
      </div>
    </article>
  );
}
