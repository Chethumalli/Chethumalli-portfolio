"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* Base */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-white via-slate-50 to-blue-50" />

      {/* Grid */}
      <div className="fixed inset-0 -z-20 opacity-10 bg-[linear-gradient(rgba(59,130,246,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,.3)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid" />

      {/* Left Glow */}
      <div className="fixed -top-40 -left-32 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[160px]" />

      {/* Right Glow */}
      <div className="fixed bottom-0 -right-32 h-[500px] w-[500px] rounded-full bg-violet-400/20 blur-[160px]" />

      {/* Center Glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_70%)]" />
    </>
  );
}