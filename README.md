# 9LOVE

A dark, streetwear-styled Next.js storefront for the 9LOVE clothing brand, built around the "two nines forming a heart" mark.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's inside

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- `app/page.tsx` — homepage: hero, scrolling ticker, featured drop, lookbook, brand story
- `app/shop/page.tsx` — shop page with category filtering (Hoodies / Tees / Outerwear)
- `components/` — Navbar, Footer, ProductCard, Marquee
- `lib/products.ts` — product catalog. Add or edit products here (name, price, category, image, blurb).
- `public/products/` — product photos (your uploaded hoodie/tee shots)
- `public/lookbook/` — lifestyle/campaign photos
- `public/logo-mark.jpg` — the 9LOVE heartmark used in the nav, hero and footer

## Design

- Palette: near-black (`ink`), charcoal (`char`), bone white, muted grey (`fog`) and a deep blood red accent — all defined in `tailwind.config.ts`.
- Type: **Unbounded** (bold display/wordmark), **Instrument Serif Italic** (soft taglines), **Inter** (body).

## Next steps you might want

- Wire up real checkout (Stripe, Shopify, etc.) — right now "Shop now" links to a static catalog with no cart.
- Add individual product pages (`app/shop/[slug]/page.tsx`) using the data already in `lib/products.ts`.
- Swap the placeholder social links and newsletter form in `components/Footer.tsx` for real ones.
- Replace `public/grain.svg` overlay opacity in `app/layout.tsx` if you want the film-grain texture lighter or heavier.
