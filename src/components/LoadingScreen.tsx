import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('complete');
          setTimeout(onLoadingComplete, 600);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {phase !== 'complete' && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--primary) / 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--primary) / 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Animated Delivery Routes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  width: '200%',
                  left: '-50%',
                }}
                animate={{
                  x: ['-25%', '25%'],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Floating Packages */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-sm bg-primary/20 border border-primary/30"
                style={{
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${20 + Math.floor(i / 4) * 50}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container with Pulse Effect */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Pulse Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border-2 border-primary/20"
                  style={{
                    margin: -20 - i * 20,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: 'easeOut',
                  }}
                />
              ))}
              
              {/* Logo */}
              <motion.div
                className="relative z-10 bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
                animate={{
                  boxShadow: [
                    '0 0 30px hsl(var(--primary) / 0.2)',
                    '0 0 60px hsl(var(--primary) / 0.3)',
                    '0 0 30px hsl(var(--primary) / 0.2)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img 
                  src="/logo.png" 
                  alt="Onetracker" 
                  className="h-12 w-auto"
                />
              </motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="text-center mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Initializing Platform
              </h2>
              <p className="text-sm text-muted-foreground">
                Preparing your logistics intelligence...
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-64 h-1.5 bg-muted rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.15 }}
              />
            </motion.div>

            {/* Progress Percentage */}
            <motion.span
              className="mt-3 text-sm font-mono text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>

            {/* Loading Steps */}
            <motion.div
              className="mt-8 flex items-center gap-4 text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {['Routes', 'Analytics', 'Fleet', 'Ready'].map((step, i) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-1.5"
                  animate={{
                    opacity: progress > i * 25 ? 1 : 0.3,
                  }}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full ${
                      progress > i * 25 ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                    animate={progress > i * 25 ? {
                      scale: [1, 1.2, 1],
                    } : {}}
                    transition={{ duration: 0.3 }}
                  />
                  <span>{step}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/20 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/20 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
