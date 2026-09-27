import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line/80">
        <div className="pointer-events-none absolute -right-24 top-1/2 hidden w-[560px] -translate-y-1/2 opacity-[0.18] sm:block">
          <Image
            src="/logo-mark.jpg"
            alt=""
            width={700}
            height={700}
            className="mix-blend-screen"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="font-serif text-xl italic text-fog sm:text-2xl">
            two nines, held together.
          </p>
          <h1 className="mt-4 font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl">
            9LOVE
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-fog sm:text-base">
            A dark streetwear label built around one mark. Heavyweight
            hoodies and graphic tees, cut for people who wear their softness
            like armor.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="bg-bone px-7 py-3 text-xs font-medium uppercase tracking-widest2 text-ink transition hover:bg-fog"
            >
              Shop the drop
            </Link>
            <Link
              href="/#story"
              className="border border-fog/40 px-7 py-3 text-xs font-medium uppercase tracking-widest2 text-bone transition hover:border-bone"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* FEATURED */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            The current drop
          </h2>
          <Link href="/shop" className="text-sm text-fog hover:text-bone">
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* LOOKBOOK */}
      <section id="lookbook" className="border-y border-line/80 bg-char">
        <div className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-2">
          <div className="relative aspect-[4/5] sm:aspect-auto">
            <Image
              src="/lookbook/lookbook-1.jpg"
              alt="Two friends wearing 9LOVE heartmark hoodies"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-14">
            <p className="font-serif text-2xl italic text-fog">
              worn by the ones who started it.
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Not made for a rack.
              <br />
              Made for a room full of people you love.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-fog">
              Every 9LOVE piece is tested the same way — on real friends, at
              real gatherings, in the middle of an ordinary night that turns
              out to matter.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-serif text-2xl italic text-fog sm:text-3xl">
          the mark
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
          Two nines. One heart.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-fog sm:text-base">
          9LOVE started with a single symbol — two nines curled into each
          other until they formed a heart. It became a shorthand for
          something hard to say out loud: that love can look sharp, dark,
          even a little dangerous, and still be love. Every hoodie, tee and
          drop carries that same mark, in a different shape.
        </p>
        <div className="mx-auto mt-12 h-16 w-16 opacity-80">
          <Image
            src="/logo-mark.jpg"
            alt="9LOVE heartmark"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
      </section>
    </main>
  );
}
