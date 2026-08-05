"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-20"
      options={{
        fullScreen: false,

        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 40,
          },

          color: {
            value: "#2563eb",
          },

          opacity: {
            value: 0.15,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },

          move: {
            enable: true,
            speed: 0.5,
          },

          links: {
            enable: true,
            color: "#93c5fd",
            opacity: 0.15,
            distance: 150,
            width: 1,
          },
        },

        detectRetina: true,
      }}
    />
  );
}