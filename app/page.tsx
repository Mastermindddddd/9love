import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <main className="w-full overflow-x-hidden bg-ink text-bone">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-line/70 lg:min-h-[min(860px,100svh)]">
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[min(700px,90vw)] w-[min(700px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bone/[0.03] blur-3xl"
        />

        {/* Logo artwork watermark (now visible on phones too) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[35%] top-[58%] -z-10 w-[110vw] -translate-y-1/2 opacity-[0.07] sm:-right-[18%] sm:top-1/2 sm:w-[min(58vw,720px)] sm:opacity-[0.13]"
        >
          <Image
            src="/logo-mark.jpg"
            alt=""
            width={700}
            height={700}
            priority
            className="h-auto w-full mix-blend-screen"
          />
        </div>

        {/* Top label row */}
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-[clamp(1.25rem,4vw,4rem)] pt-[clamp(1.25rem,4vw,2.5rem)]">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:text-xs">
            09 / 09
          </span>

          <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-fog sm:text-xs">
            <span className="h-px w-6 bg-line sm:w-10" />
            Est. 2026
          </span>
        </div>

        {/* Main hero content */}
        <div className="mx-auto flex w-full max-w-[1400px] flex-1 items-center px-[clamp(1.25rem,4vw,4rem)] py-[clamp(3rem,8vw,7rem)]">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)] lg:gap-16">
            {/* Main copy */}
            <div className="flex max-w-4xl flex-col items-start">
              <p className="font-serif text-[clamp(1.1rem,4.5vw,1.75rem)] italic leading-tight text-fog">
                two nines, held together.
              </p>

              <h1 className="mt-5 pb-[0.06em] font-display text-[clamp(4.25rem,22vw,10rem)] font-black leading-[0.85] tracking-[-0.06em] sm:mt-6">
                9LOVE
              </h1>

              <p className="mt-6 max-w-[34ch] text-[clamp(0.95rem,3.8vw,1.1rem)] leading-[1.7] text-fog sm:mt-8 sm:max-w-xl">
                A dark streetwear label built around one mark. Heavyweight
                hoodies and graphic tees, cut for people who wear their
                softness like armor.
              </p>

              {/* CTA */}
              <div className="mt-8 grid w-full grid-cols-1 gap-3 min-[480px]:flex min-[480px]:w-auto min-[480px]:gap-4 sm:mt-10">
                <Link
                  href="/shop"
                  className="group inline-flex min-h-[3.25rem] items-center justify-center bg-bone px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-fog"
                >
                  <span>Shop the drop</span>
                  <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/#story"
                  className="inline-flex min-h-[3.25rem] items-center justify-center border border-fog/40 px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-bone transition-colors duration-300 hover:border-bone hover:bg-bone/[0.04]"
                >
                  Our story
                </Link>
              </div>

              {/* Compact "mark" card for phones and tablets */}
              <div className="mt-10 flex w-full max-w-md items-center gap-4 border-t border-line/80 pt-6 lg:hidden">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-line/80 p-1">
                  <Image
                    src="/logo-mark.jpg"
                    alt="9LOVE heartmark"
                    width={64}
                    height={64}
                    className="h-full w-full rounded-full object-cover opacity-80 grayscale"
                  />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog">
                    The mark
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-fog">
                    Two nines. One heart. Love that does not need to be soft
                    to be real.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero side information (desktop) */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="w-full max-w-[300px] border-l border-line/80 pl-8">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                  The mark
                </p>

                <div className="mt-6 overflow-hidden">
                  <Image
                    src="/logo-mark.jpg"
                    alt="9LOVE heartmark"
                    width={300}
                    height={300}
                    className="h-auto w-full opacity-80 grayscale transition duration-700 hover:scale-105 hover:opacity-100"
                  />
                </div>

                <p className="mt-5 text-xs leading-relaxed text-fog">
                  Two nines. One heart. A symbol for love that does not need
                  to be soft to be real.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="flex items-center justify-center gap-3 pb-6">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog">
            Scroll
          </span>
          <span className="h-px w-10 bg-line" />
        </div>
      </section>

      {/* =========================================================
          MARQUEE
      ========================================================= */}
      <Marquee />

      {/* =========================================================
          FEATURED DROP
      ========================================================= */}
      <section className="mx-auto w-full max-w-[1400px] px-[clamp(1.25rem,4vw,4rem)] py-[clamp(4rem,8vw,7rem)]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.28em] text-fog sm:text-[10px]">
              01 — Collection
            </p>

            <h2 className="font-display text-[clamp(1.75rem,6vw,3rem)] font-bold leading-none tracking-tight">
              The current drop
            </h2>
          </div>

          <Link
            href="/shop"
            className="group inline-flex shrink-0 items-center gap-2 border-b border-fog/30 pb-1 text-[11px] uppercase tracking-[0.15em] text-fog transition hover:border-bone hover:text-bone sm:text-xs"
          >
            View all
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-7">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* =========================================================
          LOOKBOOK
      ========================================================= */}
      <section id="lookbook" className="border-y border-line/80 bg-char">
        <div className="mx-auto grid w-full max-w-[1400px] lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-auto lg:min-h-[700px]">
            <Image
              src="/lookbook/lookbook-1.jpg"
              alt="Two friends wearing 9LOVE heartmark hoodies"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />

            <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[0.25em] text-bone/80 sm:bottom-7 sm:left-7">
              9LOVE / LOOKBOOK 01
            </span>
          </div>

          {/* Text */}
          <div className="flex items-center px-[clamp(1.25rem,6vw,6rem)] py-[clamp(3.5rem,8vw,7rem)]">
            <div className="max-w-xl">
              <p className="font-serif text-[clamp(1.25rem,5vw,2.2rem)] italic leading-tight text-fog">
                worn by the ones who started it.
              </p>

              <h2 className="mt-5 font-display text-[clamp(1.9rem,8vw,3.8rem)] font-bold leading-[0.98] tracking-tight">
                Not made for a rack.
                <br />
                Made for a room full of people you love.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-[1.8] text-fog sm:mt-7 sm:text-base">
                Every 9LOVE piece is tested the same way — on real friends,
                at real gatherings, in the middle of an ordinary night that
                turns out to matter.
              </p>

              <Link
                href="/shop"
                className="group mt-8 inline-flex items-center gap-3 border-b border-bone/30 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-bone transition hover:border-bone"
              >
                Explore the collection
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BRAND STATEMENT
      ========================================================= */}
      <section className="border-b border-line/80">
        <div className="mx-auto grid w-full max-w-[1400px] lg:grid-cols-[0.35fr_1fr]">
          {/* Label: top bar on phones, side column on desktop */}
          <div className="border-b border-line/80 px-[clamp(1.25rem,6vw,6rem)] py-5 lg:border-b-0 lg:border-r lg:p-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog">
              02 — Philosophy
            </span>
          </div>

          <div className="px-[clamp(1.25rem,6vw,6rem)] py-[clamp(4rem,10vw,9rem)]">
            <p className="max-w-4xl font-display text-[clamp(1.9rem,8.5vw,4.5rem)] font-bold leading-[1] tracking-tight">
              Love doesn't always have to look soft.
              <span className="text-fog"> Sometimes it looks like armor.</span>
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          STORY
      ========================================================= */}
      <section
        id="story"
        className="mx-auto w-full max-w-[1100px] px-[clamp(1.25rem,4vw,3rem)] py-[clamp(4.5rem,10vw,9rem)] text-center"
      >
        <p className="font-serif text-[clamp(1.35rem,5vw,2.25rem)] italic text-fog">
          the mark
        </p>

        <h2 className="mt-4 font-display text-[clamp(2rem,9vw,3.8rem)] font-bold leading-none tracking-tight">
          Two nines. One heart.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-[1.85] text-fog sm:text-base">
          9LOVE started with a single symbol — two nines curled into each
          other until they formed a heart. It became a shorthand for
          something hard to say out loud: that love can look sharp, dark,
          even a little dangerous, and still be love.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.85] text-fog sm:text-base">
          Every hoodie, tee and drop carries that same mark, in a different
          shape.
        </p>

        <div className="mx-auto mt-12 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-line/80 p-2 sm:mt-16 sm:h-24 sm:w-24">
          <Image
            src="/logo-mark.jpg"
            alt="9LOVE heartmark"
            width={96}
            height={96}
            className="h-full w-full rounded-full object-cover opacity-80 transition duration-500 hover:rotate-6 hover:scale-110 hover:opacity-100"
          />
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-line/80 bg-char">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-start justify-between gap-8 px-[clamp(1.25rem,4vw,4rem)] py-[clamp(4rem,8vw,7rem)] sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog">
              09LOVE
            </p>

            <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.75rem,13vw,6rem)] font-black leading-[0.88] tracking-[-0.05em]">
              Wear what
              <br />
              you feel.
            </h2>
          </div>

          <Link
            href="/shop"
            className="group inline-flex min-h-[3.25rem] w-full items-center justify-center bg-bone px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-fog sm:w-auto sm:px-10"
          >
            Enter the shop
            <span className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}