import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "AI Route Optimization",
    description:
      "ML-powered algorithms analyze traffic, weather patterns, and delivery windows to dynamically compute the fastest and most cost-efficient routes in real-time across large-scale logistics networks.",
    image: "/features4.jpg",
  },
  {
    title: "Predictive ETA Intelligence",
    description:
      "Using historical delivery data and real-time environmental conditions, our system predicts arrival times with enterprise-grade accuracy and adaptive recalibration.",
    image: "/features2.jpg",
  },
  {
    title: "Dynamic Dispatch Automation",
    description:
      "Smart driver allocation and auto-batching ensure maximum fleet utilization while minimizing idle time and operational costs.",
    image: "/features3.jpg",
  },
  {
    title: "Fleet Intelligence",
    description:
      "Real-time monitoring and adaptive logistics control for enterprise operations.",
    image: "/features4.jpg",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const circleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Calculate marker positions dynamically
  const markerPositions = features.map(
    (_, i) => `${(i / (features.length - 1)) * 100}%`
  );

  return (
    <section
      ref={ref}
      className="relative bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 py-32"
    >
      <div className="max-w-8xl mx-auto px-6 relative">

        <div className="relative">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-6 lg:left-1/2
              top-0 bottom-0
              w-[2px]
              bg-yellow-200 dark:bg-blue-300
              transition-colors
              z-10
            "
          />

          {/* Small Marker Dots */}
          {markerPositions.map((pos, i) => (
            <div
              key={i}
              style={{ top: pos }}
              className="
                absolute
                left-6 lg:left-1/2
                -translate-x-1/2
                w-3 h-3
                rounded-full
                bg-yellow-200
                 dark:bg-blue-300
                z-20
              "
            />
          ))}

          {/* Moving Logo Circle */}
          <motion.div
            style={{ top: circleY }}
            className="
              absolute
              left-6 lg:left-1/2
              -translate-x-1/2
              w-14 h-14
              bg-white
              rounded-full
              flex items-center justify-center
              shadow-md
              z-30
            "
          >
            {/* Blue outward ripple */}
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-100"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{
                duration: 2,
                ease: "easeOut",
                repeat: Infinity,
              }}
            />

            <img
              src="/short-logo.png"
              alt="logo"
              className="w-full h-full object-contain rounded-full relative z-10"
            />
          </motion.div>

          {/* ================= FEATURES ================= */}
          <div className="space-y-40">

            {features.map((feature, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="grid lg:grid-cols-2 gap-16 items-center relative"
                >
                  {/* TEXT */}
                  <div
                    className={`
                      ${isEven ? "lg:order-1" : "lg:order-2"}
                      pl-20 lg:pl-0
                    `}
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                      {feature.description}
                    </p>
                  </div>

                  {/* IMAGE */}
                  <div
                    className={`${isEven ? "lg:order-2" : "lg:order-1"}
                    pl-20 lg:pl-0
                    `}
                  >
                    <img
                      src={feature.image}
                      alt="feature"
                      className="rounded-3xl shadow-2xl w-full object-cover"
                    />
                  </div>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}
