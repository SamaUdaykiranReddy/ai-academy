import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-32">
      <div className="text-xs font-semibold tracking-widest text-[#7F77DD] uppercase mb-4">
        The AI learning game
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        From zero to <span className="text-[#7F77DD]">AI Architect</span>
        <br />
        through code & battle
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        Beat 8 boss battles. Build 12 real AI projects. Learn with an AI tutor
        that knows exactly where you are stuck.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/login"
          className="bg-[#7F77DD] hover:bg-[#6B63C9] text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
        >
          Start for free →
        </Link>
        <Link
          href="/tracks"
          className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
        >
          View curriculum
        </Link>
      </div>
    </section>
  );
}
