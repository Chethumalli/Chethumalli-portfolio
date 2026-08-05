"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* Base */}

      <div className="fixed inset-0 -z-30 bg-white" />

      {/* Grid */}

      <div
        className="
        fixed
        inset-0
        -z-20
        opacity-20
        bg-[linear-gradient(rgba(37,99,235,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,.18)_1px,transparent_1px)]
        bg-[size:50px_50px]
        animate-grid
        "
      />

      {/* Glow */}

      <div
        className="
        fixed
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_center,rgba(37,99,235,.08),transparent_70%)]
        "
      />
    </>
  );
}