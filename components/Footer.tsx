export default function Footer() {
  return (
    <footer className="border-t border-line/80 bg-char">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">9LOVE</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fog">
              Two nines, held together. Made for the ones who wear their
              softness like armor.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-fog">Shop</p>
            <ul className="mt-4 space-y-2 text-sm text-bone/80">
              <li>
                <a href="/shop" className="hover:text-bone">
                  Hoodies
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-bone">
                  Tees
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-bone">
                  All drops
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-fog">
              Stay close
            </p>
            <p className="mt-4 text-sm text-fog">
              First look at new drops, before they sell out.
            </p>
            <form className="mt-3 flex border border-line/80">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent px-3 py-2 text-sm text-bone placeholder:text-fog/60 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap bg-bone px-4 text-xs font-medium text-ink transition hover:bg-fog"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line/80 pt-6 text-xs text-fog sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} 9LOVE. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-bone">
              Instagram
            </a>
            <a href="#" className="hover:text-bone">
              TikTok
            </a>
            <a href="#" className="hover:text-bone">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
