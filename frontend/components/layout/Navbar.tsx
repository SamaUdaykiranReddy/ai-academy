import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
      <span className="text-xl font-bold text-[#7F77DD]">AI Academy</span>
      <div className="flex items-center gap-4">
        <Link
          href="/tracks"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          Tracks
        </Link>
        <Link
          href="/leaderboard"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          Leaderboard
        </Link>
        <Link
          href="/login"
          className="text-sm bg-[#7F77DD] hover:bg-[#6B63C9] text-white px-4 py-2 rounded-lg transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
