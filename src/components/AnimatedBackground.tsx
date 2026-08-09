"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* =====================================================
          BASE DARK BACKGROUND
      ===================================================== */}

      <div className="fixed inset-0 -z-30 bg-black" />

      {/* =====================================================
          SUBTLE BLUE GRID
      ===================================================== */}

      <div
        className="
          fixed
          inset-0
          -z-20
          opacity-[0.14]
          bg-[linear-gradient(rgba(37,99,235,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.22)_1px,transparent_1px)]
          bg-[size:50px_50px]
          animate-grid
          pointer-events-none
        "
      />

      {/* =====================================================
          CENTER BLUE GLOW
      ===================================================== */}

      <div
        className="
          fixed
          inset-0
          -z-10
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.13),transparent_55%)]
        "
      />

      {/* =====================================================
          TOP BLUE GLOW
      ===================================================== */}

      <div
        className="
          fixed
          top-[-250px]
          left-1/2
          -translate-x-1/2
          -z-10
          w-[600px]
          h-[500px]
          rounded-full
          bg-blue-600/[0.07]
          blur-[140px]
          pointer-events-none
        "
      />

      {/* =====================================================
          BOTTOM BLUE GLOW
      ===================================================== */}

      <div
        className="
          fixed
          bottom-[-300px]
          right-[-150px]
          -z-10
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-600/[0.06]
          blur-[140px]
          pointer-events-none
        "
      />
    </>
  );
}