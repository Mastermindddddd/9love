import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mark.jpg"
            alt="9LOVE heartmark"
            width={34}
            height={34}
            className="rounded-full opacity-90"
          />
          <span className="font-display text-lg font-bold tracking-wide">
            9LOVE
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-fog sm:flex">
          <Link href="/shop" className="transition hover:text-bone">
            Shop
          </Link>
          <Link href="/#story" className="transition hover:text-bone">
            Story
          </Link>
          <Link href="/#lookbook" className="transition hover:text-bone">
            Lookbook
          </Link>
        </nav>

        <Link
          href="/shop"
          className="border border-fog/40 px-4 py-2 text-xs uppercase tracking-widest2 text-bone transition hover:border-bone"
        >
          Shop now
        </Link>
      </div>
    </header>
  );
}
