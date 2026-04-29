import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 96, 96]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.6}
          emissive="#093a5b"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#7dd3fc" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#0ea5e9" />
        <AnimatedSphere />
        <Stars radius={50} depth={40} count={1500} factor={3} saturation={0} fade speed={0.5} />
      </Suspense>
    </Canvas>
  );
}
