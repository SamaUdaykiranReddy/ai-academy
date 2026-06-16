import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TracksPreview from "@/components/home/TracksPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0E1A] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <TracksPreview />
      <Footer />
    </main>
  );
}
