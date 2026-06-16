const stats = [
  { number: "8", label: "Tracks" },
  { number: "165", label: "Concepts" },
  { number: "48", label: "Challenges" },
  { number: "8", label: "Boss battles" },
  { number: "~60h", label: "Of content" },
];

export default function Stats() {
  return (
    <section className="flex flex-wrap justify-center gap-12 px-8 py-16 border-t border-white/10">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold text-[#7F77DD]">{stat.number}</div>
          <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}
