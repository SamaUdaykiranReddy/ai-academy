const tracks = [
  {
    num: "01",
    title: "AI Foundations",
    desc: "What AI is and how it thinks",
    color: "#7F77DD",
    free: true,
  },
  {
    num: "02",
    title: "Math for AI",
    desc: "Vectors, gradients, probability",
    color: "#0F6E56",
    free: false,
  },
  {
    num: "03",
    title: "Classical ML",
    desc: "Models, training, evaluation",
    color: "#854F0B",
    free: false,
  },
  {
    num: "04",
    title: "Deep Learning",
    desc: "Neural nets, PyTorch, CNNs",
    color: "#993556",
    free: false,
  },
  {
    num: "05",
    title: "Large LLMs",
    desc: "Transformers, RAG, fine-tuning",
    color: "#185FA5",
    free: false,
  },
  {
    num: "06",
    title: "Generative AI",
    desc: "Diffusion, GANs, vision",
    color: "#3B6D11",
    free: false,
  },
  {
    num: "07",
    title: "RL & Agents",
    desc: "DQN, PPO, multi-agent",
    color: "#993C1D",
    free: false,
  },
  {
    num: "08",
    title: "AI Ethics",
    desc: "Bias, safety, the future",
    color: "#5F5E5A",
    free: false,
  },
];

export default function TracksPreview() {
  return (
    <section className="px-8 py-16 border-t border-white/10 max-w-6xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-8 text-center">The learning path</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tracks.map((track) => (
          <div
            key={track.num}
            className="relative bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition"
          >
            {track.free && (
              <span className="absolute top-3 right-3 text-xs bg-[#7F77DD] text-white px-2 py-0.5 rounded-full">
                Free
              </span>
            )}
            <div className="text-xs font-mono text-gray-500 mb-2">
              {track.num}
            </div>
            <div
              className="text-sm font-bold mb-1"
              style={{ color: track.color }}
            >
              {track.title}
            </div>
            <div className="text-xs text-gray-400">{track.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
