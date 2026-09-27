const words = [
  "HELD CLOSE",
  "9-LOVE",
  "WORN DARK",
  "HEARTMARK",
  "NEW DROP",
  "9-LOVE",
];

export default function Marquee() {
  const line = [...words, ...words];
  return (
    <div className="overflow-hidden border-y border-line/80 bg-char py-3">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...line, ...line].map((word, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-widest2 text-fog"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
