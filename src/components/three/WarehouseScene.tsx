import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

/* ======================= WAREHOUSE SHELL ======================= */

function WarehouseShell() {
  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.75, 0]}>
        <boxGeometry args={[3, 0.05, 2]} />
        <meshStandardMaterial color="#0e1629" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[3, 1.5, 0.05]} />
        <meshStandardMaterial color="#1a2744" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-1.5, 0, 0]}>
        <boxGeometry args={[0.05, 1.5, 2]} />
        <meshStandardMaterial color="#1a2744" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Right Wall */}
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[0.05, 1.5, 2]} />
        <meshStandardMaterial color="#1a2744" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Glass Front */}
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[3, 1.5, 0.05]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.18}
          transmission={0.95}
          roughness={0.05}
          thickness={0.4}
          clearcoat={1}
          color="#12ADD7"
        />
      </mesh>

      {/* Roof Frame (open top) */}
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[3.2, 0.05, 2.2]} />
        <meshStandardMaterial
          color="#12ADD7"
          metalness={0.9}
          roughness={0.15}
          emissive="#12ADD7"
          emissiveIntensity={0.25}
        />
      </mesh>
    </group>
  );
}

/* ======================= CONVEYOR ======================= */

function ConveyorBelt({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.4, 0.05, 1.6]} />
      <meshStandardMaterial color="#7698de" metalness={0.6} roughness={0.4} />
    </mesh>
  );
}

/* ======================= SMART SHELF ======================= */

function SmartShelf({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {[0, 0.2, 0.4].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[0.15, 0.02, 0.4]} />
          <meshStandardMaterial
            color="#12ADD7"
            emissive="#12ADD7"
            emissiveIntensity={0.12}
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>
      ))}

      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[0.02, 0.5, 0.02]} />
        <meshStandardMaterial color="#1a2744" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

/* ======================= PACKAGE ======================= */

function Package({
  position,
  delay,
}: {
  position: [number, number, number];
  delay: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + delay;
    ref.current.position.y = position[1] + Math.sin(t * 2) * 0.02;
    (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
      0.35 + Math.sin(t * 3) * 0.15;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.12, 0.1, 0.12]} />
      <meshStandardMaterial
        color="#FEC007"
        emissive="#FEC007"
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  );
}

/* ======================= WAREHOUSE CORE ======================= */

function WarehouseCore() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      <WarehouseShell />

      {/* Interior light */}
      <pointLight position={[0, 0.2, 0]} intensity={0.6} color="#12ADD7" />

      {/* Conveyors */}
      <ConveyorBelt position={[-0.8, -0.4, 0]} />
      <ConveyorBelt position={[0, -0.4, 0]} />
      <ConveyorBelt position={[0.8, -0.4, 0]} />

      {/* Shelves */}
      <SmartShelf position={[-1.1, 0.2, 0.5]} />
      <SmartShelf position={[1.1, 0.2, 0.5]} />
      <SmartShelf position={[-1.1, 0.2, -0.5]} />
      <SmartShelf position={[1.1, 0.2, -0.5]} />

      {/* Packages */}
      <Package position={[-0.8, -0.1, 0]} delay={0} />
      <Package position={[0, -0.1, 0]} delay={1} />
      <Package position={[0.8, -0.1, 0]} delay={2} />
    </group>
  );
}

/* ======================= DELIVERY ROUTES ======================= */

function RouteLine({
  start,
  end,
  color,
  delay,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
  delay: number;
}) {
  const vehicleRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const mid = start.clone().lerp(end, 0.5);
    mid.y += 0.3;
    return new THREE.QuadraticBezierCurve3(start, mid, end);
  }, [start, end]);

  const line = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(50));
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.4,
    });
    return new THREE.Line(geo, mat);
  }, [curve, color]);

  useFrame((state) => {
    if (!vehicleRef.current) return;
    const t = (state.clock.elapsedTime * 0.15 + delay) % 1;
    vehicleRef.current.position.copy(curve.getPoint(t));
  });

  return (
    <group>
      <primitive object={line} />
      <mesh ref={vehicleRef}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.9}
        />
      </mesh>
    </group>
  );
}

function DeliveryRoutes() {
  const routes = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 2.5 + Math.random() * 1.5;
      return {
        start: new THREE.Vector3(0, 0, 0),
        end: new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 1,
          Math.sin(angle) * radius
        ),
        color: i % 3 === 0 ? '#FEC007' : '#12ADD7',
        delay: i * 0.2,
      };
    });
  }, []);

  return (
    <>
      {routes.map((r, i) => (
        <RouteLine key={i} {...r} />
      ))}
    </>
  );
}

/* ======================= PARTICLES ======================= */

function Particles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(600);
    for (let i = 0; i < 200; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#12ADD7" size={0.02} transparent opacity={0.6} />
    </points>
  );
}

/* ======================= SCENE ======================= */

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#FEC007" />
      <pointLight position={[-5, 3, -5]} intensity={0.5} color="#12ADD7" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <WarehouseCore />
      </Float>

      <DeliveryRoutes />
      <Particles />
      <Environment preset="night" />
    </>
  );
}

/* ======================= EXPORT ======================= */

export function WarehouseHeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [4, 2, 4], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}