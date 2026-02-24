import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Package, TrendingUp, Clock, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { BookDemoModal } from "@/components/BookDemoModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { HeroSkeleton } from "./HeroSkeleton";
import { HeroLottieVisual } from "./HeroLottieVisual";
import { FloatingStats } from "./FloatingStats";

const stats = [
  { icon: Package, value: "2M+", label: "Deliveries/day" },
  { icon: TrendingUp, value: "99.8%", label: "Uptime SLA" },
  { icon: Clock, value: "<200ms", label: "API Response" },
  { icon: Zap, value: "40%", label: "Cost Savings" },
];

export function HeroSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => setIsReady(true));
    } else {
      setTimeout(() => setIsReady(true), 400);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isReady ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroSkeleton />
          </motion.div>
        ) : (
          <motion.section
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[100vh] xl:min-h-screen overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 hero-bg" />

            {/* Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />

            {/* Main Container */}
            <div className="relative z-20 mx-auto w-full max-w-[1440px] px-6 xl:px-8 flex flex-col lg:flex-row items-center min-h-[90vh] xl:min-h-screen gap-12 xl:gap-20 pt-24 lg:pt-0">

              {/* LEFT SIDE */}
              <div className="flex-1 min-w-0 max-w-[680px] flex flex-col items-center lg:items-start text-center lg:text-left">

               <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  className="
    text-center lg:text-left
    text-4xl sm:text-5xl lg:text-6xl xl:text-[72px] 2xl:text-[80px]
    font-bold
    leading-tight
    mb-6
  "
>
  The{" "}
  <span className="text-gradient-primary">
    Intelligent
  </span>{" "}
  Fulfillment Core{" "}
  <span className="text-gradient-secondary">
    for Modern Logistics
  </span>
</motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
                >
                  Orchestrate deliveries from warehouse to doorstep with
                  AI-powered route optimization, real-time tracking,
                  and predictive analytics.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="group text-base px-8 h-12 shadow-lg shadow-primary/20"
                    onClick={() => setDemoOpen(true)}
                  >
                    Book a Demo
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="group text-base px-8 h-12"
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Watch Demo
                  </Button>
                </motion.div>

                {/* Bottom Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 w-full"
                >
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center lg:items-start gap-1"
                    >
                      <div className="flex items-center gap-2">
                        <stat.icon className="w-4 h-4 text-primary" />
                        <span className="text-xl font-bold text-foreground">
                          {stat.value}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT SIDE */}
              <div className="flex-1 relative flex items-center justify-center lg:justify-end w-full">
                <div className="relative w-full max-w-[480px] xl:max-w-[600px] 2xl:max-w-[650px]">
                  <HeroLottieVisual />
                  <FloatingStats />
                </div>
              </div>

            </div>

            {/* Scroll Indicator */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
              >
                <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-primary"
                  />
                </div>
              </motion.div>
            )}
          </motion.section>
        )}
      </AnimatePresence>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}