"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import type { Group } from "three";

function DonutModel({
  targetRotation,
}: {
  targetRotation: React.RefObject<number>;
}) {
  const { scene } = useGLTF("/models/donut.glb");
  const width = useThree((state) => state.size.width);
  const scale = width < 640 ? 24 : 40;
  const ref = useRef<Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    const target = targetRotation.current;
    ref.current.rotation.y += (target - ref.current.rotation.y) * 0.1;
  });

  return <primitive ref={ref} object={scene} scale={scale} />;
}

export default function DonutSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const targetRotation = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      targetRotation.current = progress * Math.PI * 2;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[200dvh]">
      <section className="sticky top-0 h-dvh w-full bg-secondary bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7),transparent_60%)]">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Environment preset="studio" environmentIntensity={0.8} />
          <pointLight position={[0, 0, -3]} intensity={50} color="white" />
          <Suspense fallback={null}>
            <DonutModel targetRotation={targetRotation} />
          </Suspense>
        </Canvas>
      </section>
    </div>
  );
}
