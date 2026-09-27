export type Product = {
  slug: string;
  name: string;
  price: number;
  category: "Hoodies" | "Tees" | "Outerwear";
  image: string;
  tag?: string;
  blurb: string;
};

export const products: Product[] = [
  {
    slug: "heartmark-hoodie-noir",
    name: "Heartmark Hoodie — Noir",
    price: 899,
    category: "Hoodies",
    image: "/products/heartmark-hoodie-noir.jpg",
    tag: "Signature",
    blurb:
      "The mark that started it all, screen-printed in tonal grey across heavyweight fleece. No text, no noise — just the two nines curled into a heart.",
  },
  {
    slug: "heartmark-hoodie-9love",
    name: "Heartmark Hoodie — Script",
    price: 949,
    category: "Hoodies",
    image: "/products/heartmark-hoodie-9love.jpg",
    tag: "Signature",
    blurb:
      "Same silhouette, spelled out. '9-Love' sits inside each curl of the mark, a quiet signature for the ones who look twice.",
  },
  {
    slug: "spider-hoodie",
    name: "Widow Hoodie",
    price: 999,
    category: "Hoodies",
    image: "/products/spider-hoodie.jpg",
    tag: "New",
    blurb:
      "A nine spun into a web across the back, faded like it's been worn a hundred nights. Matching cuff and chest hits front and back.",
  },
  {
    slug: "cat-hoodie",
    name: "Nightcat Hoodie",
    price: 999,
    category: "Hoodies",
    image: "/products/cat-hoodie.jpg",
    tag: "Limited",
    blurb:
      "A black cat holds the heartmark between its claws, torn streaks running down the pocket. Drops in small batches — once it's gone, it's gone.",
  },
  {
    slug: "graphic-tee",
    name: "Fear Nothing Tee",
    price: 549,
    category: "Tees",
    image: "/products/graphic-tee.webp",
    tag: "New",
    blurb:
      "Acid-washed cotton with a full-front graphic — half portrait, half static. Heavyweight boxy fit, oversized on purpose.",
  },
];

export const categories = ["All", "Hoodies", "Tees", "Outerwear"] as const;
