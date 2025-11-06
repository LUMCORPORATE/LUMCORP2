import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Image as DreiImage } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Import images
import orbitVin from "@/assets/orbit-vin.png";
import orbitBeatfestival from "@/assets/orbit-beatfestival.png";
import orbitModel from "@/assets/orbit-model.png";
import orbitNike from "@/assets/orbit-nike.png";

const images = [orbitVin, orbitBeatfestival, orbitModel, orbitNike];

function ImageCard({
  url,
  position,
  rotation,
  delay,
}: {
  url: string;
  position: [number, number, number];
  rotation: [number, number, number];
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [progress, setProgress] = useState(0);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Animation d'entrée
      if (progress < 1) {
        const newProgress = Math.min(1, progress + 0.02);
        setProgress(newProgress);

        // Easing function pour une animation smooth
        const eased = 1 - Math.pow(1 - newProgress, 3);

        // Interpoler de (0,0,0) vers la position finale
        meshRef.current.position.x = position[0] * eased;
        meshRef.current.position.y = position[1] * eased;
        meshRef.current.position.z = position[2] * eased;

        // Interpoler la rotation
        meshRef.current.rotation.x = rotation[0] * eased;
        meshRef.current.rotation.y = rotation[1] * eased;
        meshRef.current.rotation.z = rotation[2] * eased;

        // Scale effect
        const scale = 0.3 + eased * 0.7;
        meshRef.current.scale.set(scale, scale, scale);
      } else {
        // Animation de rotation subtile une fois en position
        meshRef.current.rotation.y = rotation[1] + Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={rotation}>
      <DreiImage url={url} scale={2.5} transparent opacity={0.9} />
    </mesh>
  );
}

function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      starsRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  const starPositions = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    const i3 = i * 3;
    starPositions[i3] = (Math.random() - 0.5) * 50;
    starPositions[i3 + 1] = (Math.random() - 0.5) * 50;
    starPositions[i3 + 2] = (Math.random() - 0.5) * 50;
  }

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={1000} array={starPositions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.8} />
    </points>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 4;

  return (
    <>
      <Stars />
      <group ref={groupRef}>
        {images.map((image, index) => {
          const angle = (index / images.length) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = 0; // Tous à la même hauteur pour un cercle parfait

          return (
            <ImageCard
              key={index}
              url={image}
              position={[x, y, z]}
              rotation={[0, -angle + Math.PI / 2, 0]} // Tourné vers le centre
              delay={index * 0.2}
            />
          );
        })}

        {/* Cercle de guidage visuel avec effet dashed */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
          <meshBasicMaterial color="#00ff88" opacity={0.3} transparent />
        </mesh>

        {/* Cercle extérieur lumineux */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
          <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
          <meshBasicMaterial color="#00ffff" opacity={0.6} transparent />
        </mesh>

        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 0]} intensity={1.2} color="#00ffff" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#ff00ff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00ff88" />
      </group>
    </>
  );
}

const OrbitView3D = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">L'orbite </span>
            <span className="font-display text-gradient-blue">LUM.CORP</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explorez notre univers en 3D. Cliquez et faites glisser pour faire tourner la vue.
          </p>
        </div>

        {/* 3D Canvas */}
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] backdrop-blur-sm border border-purple-500/20 shadow-[0_0_50px_rgba(138,43,226,0.3)]">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            style={{ background: "radial-gradient(ellipse at center, rgba(20,20,60,1) 0%, rgba(5,5,15,1) 100%)" }}
          >
            <Scene />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate={true} 
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm sm:text-base text-muted-foreground">🖱️ Cliquez et faites glisser pour faire pivoter</p>
        </div>
      </div>
    </section>
  );
};

export default OrbitView3D;
