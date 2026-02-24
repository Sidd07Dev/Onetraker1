import { motion } from 'framer-motion';


export function MobileHeroVisual() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Animated Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="hsl(var(--secondary))"
              strokeWidth="0.5"
              strokeOpacity="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      
    
      
      {/* Ambient Glow */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/10 blur-3xl rounded-full" />
      <div className="absolute top-1/4 right-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full" />
    </div>
  );
}
