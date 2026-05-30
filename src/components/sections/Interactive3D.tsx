import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import styles from './Interactive3D.module.css';

// Placeholder for a Bean
function Bean({ position, scale, rotationSpeed }: any) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += rotationSpeed.x;
      mesh.current.rotation.y += rotationSpeed.y;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} scale={scale} ref={mesh}>
        <capsuleGeometry args={[0.3, 0.4, 16, 16]} />
        <meshStandardMaterial color="#3E2723" roughness={0.4} />
      </mesh>
    </Float>
  );
}

// Placeholder for a Donut
function Donut({ position, scale }: any) {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position} scale={scale} ref={mesh}>
        <torusGeometry args={[0.8, 0.4, 16, 32]} />
        <meshStandardMaterial color="#D4A017" roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function Interactive3D() {
  return (
    <section className={styles.interactiveSection}>
      <div className={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="studio" />
          
          {/* Floating items */}
          <Bean position={[-4, 2, 0]} scale={1.5} rotationSpeed={{ x: 0.01, y: 0.02 }} />
          <Bean position={[3, -2, -2]} scale={1.2} rotationSpeed={{ x: -0.02, y: 0.01 }} />
          <Bean position={[-2, -3, 1]} scale={2} rotationSpeed={{ x: 0.015, y: -0.01 }} />
          <Donut position={[4, 1, 0]} scale={1.5} />
          <Donut position={[-5, -1, -3]} scale={1} />
        </Canvas>
      </div>

      <div className={styles.content}>
        <h2>Experience the Magic</h2>
        <p className="subheading">Every ingredient tells a story of perfection</p>
      </div>
    </section>
  );
}
