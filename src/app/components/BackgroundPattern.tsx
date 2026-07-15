const particles = [
  { left: "8%", size: 4, color: "rgba(52,211,153,0.5)", duration: 22, delay: 0 },
  { left: "18%", size: 3, color: "rgba(34,211,238,0.4)", duration: 28, delay: 4 },
  { left: "31%", size: 5, color: "rgba(52,211,153,0.35)", duration: 25, delay: 9 },
  { left: "44%", size: 3, color: "rgba(34,211,238,0.5)", duration: 30, delay: 2 },
  { left: "57%", size: 4, color: "rgba(52,211,153,0.4)", duration: 24, delay: 12 },
  { left: "69%", size: 3, color: "rgba(34,211,238,0.35)", duration: 27, delay: 6 },
  { left: "81%", size: 5, color: "rgba(52,211,153,0.45)", duration: 23, delay: 15 },
  { left: "92%", size: 3, color: "rgba(34,211,238,0.45)", duration: 29, delay: 8 },
];

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-up {
          0% { transform: translateY(105vh) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          92% { opacity: 1; }
          100% { transform: translateY(-5vh) rotate(180deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .bg-particle { display: none; }
        }
      `}</style>

      {particles.map((p, i) => (
        <span
          key={i}
          className="bg-particle absolute rounded-sm"
          style={{
            left: p.left,
            top: 0,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #1e293b 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          opacity: 0.07,
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 30px,rgba(255,255,255,1) 30px,rgba(255,255,255,1) 31px),repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(255,255,255,1) 30px,rgba(255,255,255,1) 31px)",
        }}
      />

      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      <div className="absolute top-8 right-8 w-3 h-3 bg-green-400 rounded-sm opacity-40" />
      <div className="absolute bottom-8 left-8 w-3 h-3 bg-blue-400 rounded-sm opacity-40" />
      <div className="absolute top-8 left-8 w-2 h-2 bg-green-400 rounded-sm opacity-25" />
      <div className="absolute bottom-8 right-8 w-2 h-2 bg-blue-400 rounded-sm opacity-25" />
    </div>
  );
}