export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
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