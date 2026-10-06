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
      <section className="relative min-h-[100svh] overflow-hidden border-b border-line/70">

        {/* Mobile background mark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[34%] top-[15%] w-[100vw] opacity-[0.10] sm:hidden"
        >
          <Image
            src="/logo-mark.jpg"
            alt=""
            width={700}
            height={700}
            className="h-auto w-full mix-blend-screen"
          />
        </div>

        {/* Desktop background mark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[18%] top-1/2 hidden w-[min(58vw,720px)] -translate-y-1/2 opacity-[0.13] sm:block"
        >
          <Image
            src="/logo-mark.jpg"
            alt=""
            width={700}
            height={700}
            className="h-auto w-full mix-blend-screen"
          />
        </div>

        {/* Top metadata */}
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 pt-5 sm:px-8 sm:pt-8 lg:px-16">

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog sm:text-xs">
            09 / 09
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-fog sm:text-xs">
            Est. 2026
          </span>

        </div>

        {/* MOBILE HERO */}
        <div className="relative mx-auto flex min-h-[calc(100svh-60px)] max-w-[1400px] flex-col justify-between px-5 pb-7 pt-[clamp(4rem,15vh,7rem)] sm:hidden">

          <div>

            <p className="font-serif text-[clamp(1.1rem,5vw,1.4rem)] italic text-fog">
              two nines, held together.
            </p>

            <h1 className="mt-4 font-display text-[clamp(4.2rem,20vw,7rem)] font-black leading-[0.75] tracking-[-0.08em]">
              9LOVE
            </h1>

            <div className="mt-7 max-w-[340px]">
              <p className="text-[13px] leading-[1.75] text-fog">
                Dark streetwear for people who wear their softness like armor.
              </p>
            </div>

          </div>

          {/* Mobile mark */}
          <div className="relative mx-auto my-8 w-[min(58vw,240px)]">

            <div className="absolute inset-0 rounded-full border border-fog/10" />

            <Image
              src="/logo-mark.jpg"
              alt="9LOVE heartmark"
              width={300}
              height={300}
              className="relative rounded-full opacity-90 mix-blend-screen"
            />

            <span className="absolute -right-8 top-1/2 -translate-y-1/2 font-mono text-[8px] uppercase tracking-[0.3em] text-fog [writing-mode:vertical-rl]">
              TWO NINES / ONE HEART
            </span>

          </div>

          {/* Mobile CTA */}
          <div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-fog/50" />

              <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-fog">
                The first drop
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">

              <Link
                href="/shop"
                className="flex min-h-[52px] items-center justify-center bg-bone px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition active:scale-[0.98]"
              >
                Shop drop
              </Link>

              <Link
                href="/#story"
                className="flex min-h-[52px] items-center justify-center border border-fog/40 px-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-bone transition active:scale-[0.98]"
              >
                Our story
              </Link>

            </div>

            <div className="mt-6 flex items-center justify-between">

              <span className="font-mono text-[8px] uppercase tracking-[0.25em] text-fog">
                Scroll to explore
              </span>

              <span className="text-sm text-fog">↓</span>

            </div>

          </div>

        </div>

        {/* DESKTOP HERO */}
        <div className="mx-auto hidden min-h-[calc(min(820px,100svh)-80px)] max-w-[1400px] items-center px-8 py-24 sm:flex lg:px-16">

          <div className="grid w-full items-center gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)]">

            <div className="max-w-4xl">

              <p className="font-serif text-[clamp(1.2rem,2.2vw,1.75rem)] italic text-fog">
                two nines, held together.
              </p>

              <h1 className="mt-4 font-display text-[clamp(5rem,14vw,10rem)] font-black leading-[0.78] tracking-[-0.07em]">
                9LOVE
              </h1>

              <p className="mt-8 max-w-xl text-[clamp(.9rem,1.4vw,1.05rem)] leading-[1.75] text-fog">
                A dark streetwear label built around one mark. Heavyweight
                hoodies and graphic tees, cut for people who wear their
                softness like armor.
              </p>

              <div className="mt-10 flex gap-4">

                <Link
                  href="/shop"
                  className="group inline-flex min-h-12 items-center justify-center bg-bone px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-fog"
                >
                  Shop the drop
                  <span className="ml-3 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/#story"
                  className="inline-flex min-h-12 items-center justify-center border border-fog/40 px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-bone transition hover:border-bone"
                >
                  Our story
                </Link>

              </div>

            </div>

            <div className="hidden border-l border-line/80 pl-8 lg:block">

              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
                The mark
              </p>

              <div className="mt-6 overflow-hidden">
                <Image
                  src="/logo-mark.jpg"
                  alt="9LOVE heartmark"
                  width={300}
                  height={300}
                  className="w-full opacity-80 transition duration-700 hover:scale-105 hover:opacity-100"
                />
              </div>

              <p className="mt-5 text-xs leading-relaxed text-fog">
                Two nines. One heart. A symbol for love that does not need
                to be soft to be real.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          MARQUEE
      ========================================================= */}
      <Marquee />

      {/* =========================================================
          FEATURED
      ========================================================= */}
      <section className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-28">

        <div className="flex items-end justify-between">

          <div>
            <p className="mb-2 font-mono text-[8px] uppercase tracking-[0.28em] text-fog sm:text-[10px]">
              01 — Collection
            </p>

            <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold leading-none">
              The current drop
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-[9px] uppercase tracking-[0.2em] text-fog transition hover:text-bone sm:text-xs"
          >
            View all →
          </Link>

        </div>

        {/* Mobile products */}
        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-10 sm:mt-12 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-4 lg:gap-7">

          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}

        </div>

      </section>

      {/* =========================================================
          LOOKBOOK
      ========================================================= */}
      <section
        id="lookbook"
        className="border-y border-line/80 bg-char"
      >

        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">

          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/5] lg:aspect-auto lg:min-h-[700px]">

            <Image
              src="/lookbook/lookbook-1.jpg"
              alt="Two friends wearing 9LOVE heartmark hoodies"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute bottom-5 left-5 font-mono text-[8px] uppercase tracking-[0.25em] text-bone/80 sm:bottom-7 sm:left-7">
              9LOVE / LOOKBOOK 01
            </div>

          </div>

          <div className="flex items-center px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

            <div>

              <p className="font-serif text-[clamp(1.4rem,5vw,2.2rem)] italic text-fog">
                worn by the ones who started it.
              </p>

              <h2 className="mt-4 font-display text-[clamp(2rem,7vw,3.8rem)] font-bold leading-[0.95]">
                Not made for a rack.
                <br />
                Made for a room full of people you love.
              </h2>

              <p className="mt-6 max-w-md text-[13px] leading-[1.8] text-fog sm:text-base">
                Every 9LOVE piece is tested the same way — on real friends,
                at real gatherings, in the middle of an ordinary night that
                turns out to matter.
              </p>

              <Link
                href="/shop"
                className="mt-7 inline-flex text-[9px] font-semibold uppercase tracking-[0.2em] text-bone sm:text-[10px]"
              >
                Explore the collection →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="border-b border-line/80">

        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-32">

          <p className="mb-7 font-mono text-[8px] uppercase tracking-[0.28em] text-fog sm:text-[10px]">
            02 — Philosophy
          </p>

          <h2 className="max-w-5xl font-display text-[clamp(2.4rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.04em]">
            Love doesn't always have to look soft.
            <span className="text-fog">
              {" "}Sometimes it looks like armor.
            </span>
          </h2>

        </div>

      </section>

      {/* =========================================================
          STORY
      ========================================================= */}
      <section
        id="story"
        className="mx-auto max-w-[1000px] px-5 py-20 text-center sm:px-8 sm:py-28 lg:py-36"
      >

        <p className="font-serif text-[clamp(1.5rem,5vw,2.25rem)] italic text-fog">
          the mark
        </p>

        <h2 className="mt-4 font-display text-[clamp(2rem,7vw,3.8rem)] font-bold leading-none">
          Two nines. One heart.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-[13px] leading-[1.85] text-fog sm:text-base">
          9LOVE started with a single symbol — two nines curled into each
          other until they formed a heart. It became a shorthand for
          something hard to say out loud: that love can look sharp, dark,
          even a little dangerous, and still be love.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-[1.85] text-fog sm:text-base">
          Every hoodie, tee and drop carries that same mark, in a different
          shape.
        </p>

        <div className="mx-auto mt-12 h-20 w-20 overflow-hidden rounded-full border border-line/80 p-2 sm:mt-16 sm:h-24 sm:w-24">

          <Image
            src="/logo-mark.jpg"
            alt="9LOVE heartmark"
            width={96}
            height={96}
            className="h-full w-full rounded-full object-cover opacity-80 transition duration-500 hover:scale-110"
          />

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="border-t border-line/80 bg-char">

        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-16 sm:px-8 sm:py-24 lg:flex-row lg:items-end lg:justify-between lg:px-16 lg:py-28">

          <div>

            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-fog">
              09LOVE
            </p>

            <h2 className="mt-3 font-display text-[clamp(3rem,12vw,6rem)] font-black leading-[0.8] tracking-[-0.06em]">
              Wear what
              <br />
              you feel.
            </h2>

          </div>

          <Link
            href="/shop"
            className="flex min-h-12 items-center justify-center bg-bone px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition hover:bg-fog sm:w-fit"
          >
            Enter the shop
            <span className="ml-4">→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}