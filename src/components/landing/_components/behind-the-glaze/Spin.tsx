"use client";

import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { ComponentRef, Suspense, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AccentReveal } from "@/components/landing/_components/AccentReveal";

// Two knobs decide how the donut sits in the stage:
//   • CAMERA_DISTANCE — the framing / "padding" knob. Smaller = camera closer
//     = donut reaches nearer the canvas edges. Tweak THIS to cut the padding
//     (go lower for tighter; too low and it clips while spinning). fov on the
//     <Canvas> is a second zoom lever (smaller fov = tighter).
//   • DONUT_SCALE — the model's world size. The GLB is authored tiny so we
//     scale it up; once it's a sane size, CAMERA_DISTANCE does the framing.
const DONUT_SCALE = 40;
const CAMERA_DISTANCE = 6.5;

// Loads the GLB donut. <Center> recenters the model
// on the turntable so it grows/shrinks — and auto-spins/drags — about its own
// middle instead of the GLB's baked-in pivot.
function DonutModel() {
  const { scene } = useGLTF("/models/donut.glb");
  return (
    <Center>
      <primitive object={scene} scale={DONUT_SCALE} />
    </Center>
  );
}

export default function Spin() {
  const [spinning, setSpinning] = useState(true);
  const controlsRef = useRef<ComponentRef<typeof OrbitControls>>(null);

  return (
    <section
      id="spin"
      className="relative isolate scroll-mt-24 overflow-hidden bg-foreground px-6 py-20 text-background md:py-30"
    >
      {/* Magenta radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--primary) 32%, transparent) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr]">
        {/* Copy + controls */}
        <div>
          <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-label text-secondary uppercase">
            <span className="h-0.5 w-7 bg-secondary" />
            <span>(04) Behind the glaze</span>
          </div>

          <h2 className="font-display text-[clamp(3.5rem,7vw,6.875rem)] leading-display tracking-display text-background">
            Spin it. <br />
            Sniff it.
            <br />
            <AccentReveal className="font-accent text-secondary italic">
              Send it.
            </AccentReveal>
          </h2>

          <p className="mt-7 max-w-[460px] text-lg leading-relaxed text-background/70">
            We modeled every donut in Blender before we baked one. Drag it. Look
            at it from every angle. The 3D model is real. The donut is realer.
          </p>

          <div className="mt-8 flex w-full flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSpinning((s) => !s)}
              className={cn(
                "w-full min-w-44 rounded-full border-2 border-primary px-6 py-3 font-display text-sm transition-colors duration-150 sm:w-fit",
                spinning
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-background hover:bg-primary/20"
              )}
            >
              {spinning ? "■ pause spin" : "▶ resume spin"}
            </button>
            <button
              type="button"
              onClick={() => controlsRef.current?.reset()}
              className="w-full rounded-full border-2 border-background/30 px-6 py-3 font-display text-sm text-background transition-colors duration-150 hover:border-background/70 sm:w-fit"
            >
              ↺ reset
            </button>
          </div>

          <div className="mt-8 font-mono text-2xs tracking-label text-background/50 uppercase">
            ▸ click + drag to orbit · auto-spins on its own
          </div>
        </div>

        {/* 3D donut stage */}
        <div className="relative aspect-square w-full">
          {/* Halo ring (animate-spin-slow already opts out under reduced-motion) */}
          {/* <div
            aria-hidden
            className="absolute inset-[7.5%] rounded-full border border-dashed border-secondary/40 animate-spin-slow"
          /> */}
          {/* Pedestal glow */}
          <div
            aria-hidden
            className="absolute bottom-[12%] left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-[50%] blur-lg"
            style={{
              background:
                "radial-gradient(ellipse, color-mix(in srgb, var(--primary) 48%, transparent) 0%, transparent 70%)",
            }}
          />
          {/* GLB donut on a transparent canvas, layered over the decorations */}
          <Canvas
            className="absolute inset-0 z-10 cursor-grab active:cursor-grabbing"
            camera={{ position: [0, 0, CAMERA_DISTANCE], fov: 50 }}
          >
            <Environment preset="studio" environmentIntensity={0.5} />
            {/* Key light — fixed in world space (the camera orbits, not the light).
                position = [x, y, z], donut at the origin: +x right · +y up · +z toward
                camera → [3, 4, 4] is upper-right & in front (a key-light angle).
                decay defaults to 2 (inverse-square), so what renders isn't `intensity`
                but ≈ intensity / d², d = √(x²+y²+z²) (√41 ≈ 6.4 → ~0.24 at the center).
                For a target brightness B at the center: intensity ≈ B · (x²+y²+z²). */}
            <pointLight position={[3, 4, 4]} intensity={20} color="white" />
            <Suspense fallback={null}>
              <DonutModel />
            </Suspense>
            <OrbitControls
              ref={controlsRef}
              enableZoom={false}
              enablePan={false}
              autoRotate={spinning}
              autoRotateSpeed={2}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
