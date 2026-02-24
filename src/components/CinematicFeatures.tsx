import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ProductMockup } from "@/components/ProductMockup";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  image: string;
}

export function CinematicFeatures({
  features,
  onDemoClick,
}: {
  features: Feature[];
  onDemoClick: () => void;
}) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Animation */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: useTransform(
              scrollYProgress,
              [0, 1],
              [
                "radial-gradient(circle at center, hsl(var(--secondary)/0.2), transparent 70%)",
                "radial-gradient(circle at center, hsl(var(--primary)/0.2), transparent 70%)",
              ]
            ),
          }}
        />

        {features.map((feature, index) => {
          const start = index / features.length;
          const end = (index + 1) / features.length;

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [start, end],
            [0.95, 1]
          );

          return (
            <motion.div
              key={feature.title}
              style={{ opacity, scale }}
              className="absolute max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center px-8"
            >
              {/* Text */}
              <div>
                <h2 className="text-5xl font-bold mb-6">
                  {feature.title}
                </h2>

                <p className="text-lg text-muted-foreground mb-10">
                  {feature.description}
                </p>

                <Button onClick={onDemoClick}>
                  Experience This
                </Button>
              </div>

              {/* Mockup */}
              <ProductMockup
                src={feature.image}
                alt={feature.title}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}