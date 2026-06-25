"use client"

export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-black" />

      <div className="fixed inset-0 -z-10 opacity-20 bg-[linear-gradient(rgba(168,85,247,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,.25)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid" />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),transparent_70%)] animate-pulse" />
    </>
  )
}