"use client";

import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-20 pointer-events-none"
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
            value: 45,
            density: {
              enable: true,
            },
          },

          color: {
            value: "#3b82f6",
          },

          opacity: {
            value: {
              min: 0.08,
              max: 0.22,
            },
          },

          size: {
            value: {
              min: 1,
              max: 2.5,
            },
          },

          move: {
            enable: true,
            speed: 0.35,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,
            color: "#2563eb",
            opacity: 0.12,
            distance: 140,
            width: 1,
          },
        },

        interactivity: {
          detectsOn: "window",

          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            resize: {
              enable: true,
            },
          },

          modes: {
            grab: {
              distance: 160,
              links: {
                opacity: 0.25,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}