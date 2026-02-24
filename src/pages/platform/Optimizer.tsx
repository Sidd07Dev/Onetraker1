import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useState, useRef } from "react"
import {
  Route,
  Clock,
  Fuel,
  Target,
  Layers,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { ProductMockup } from "@/components/ProductMockup"
import { BookDemoModal } from "@/components/BookDemoModal"

/* -------------------------------------------------------------------------- */
/*                         ROUTE OPTIMIZATION FEATURES                        */
/* -------------------------------------------------------------------------- */

const optimizationSteps = [
  {
    step: "01",
    category: "Time & SLA Optimization",
    description:
      "Respect delivery time windows, customer preferences, and SLA commitments while maximizing overall fleet productivity.",
    image: "/route-opti1.jpg",
    items: [
      {
        icon: Clock,
        title: "Time Window Constraints",
        description:
          "Automatically schedule deliveries within customer-defined time slots.",
      },
      {
        icon: Target,
        title: "SLA Compliance",
        description:
          "Ensure contractual service levels are consistently met.",
      },
    ],
  },
  {
    step: "02",
    category: "Fuel & Distance Reduction",
    description:
      "Minimize travel distance and fuel consumption using AI-powered traffic-aware route optimization algorithms.",
    image: "/route-opti1.jpg",
    items: [
      {
        icon: Fuel,
        title: "Fuel Cost Optimization",
        description:
          "Reduce fuel expenses through shortest-path and congestion-aware routing.",
      },
      {
        icon: Layers,
        title: "Multi-Stop Planning",
        description:
          "Optimize hundreds of delivery stops across multiple vehicles simultaneously.",
      },
    ],
  },
  {
    step: "03",
    category: "Dynamic Route Re-Optimization",
    description:
      "Automatically re-calculate routes in real time when new orders arrive or unexpected conditions occur.",
    image: "/route-opti1.jpg",
    items: [
      {
        icon: Route,
        title: "Live Route Adjustments",
        description:
          "Adapt routes instantly based on traffic or operational changes.",
      },
      {
        icon: Target,
        title: "Capacity Rebalancing",
        description:
          "Reassign deliveries to maintain optimal vehicle utilization.",
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function Optimizer() {
  const [demoOpen, setDemoOpen] = useState(false)
  const containerRef = useRef(null)

  const totalSteps = optimizationSteps.length
  const dynamicHeight = `${totalSteps * 100}vh`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <div className="min-h-screen ">

        {/* ================= HERO ================= */}
        <section className="relative  overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                  <Route className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">
                     Route Optimization Software
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Intelligent{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Route Optimization Software
                  </span>{" "}
                  for Modern Logistics
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Our engine calculates optimal delivery routes in milliseconds —
                  reducing costs, improving on-time performance, and increasing fleet capacity.
                </p>

                <Button size="lg" onClick={() => setDemoOpen(true)}>
                  Book Enterprise Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div>
                <div className="glass-card p-2 rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src="/route-opti1.jpg"
                    alt="AI route optimization dashboard"
                    aspectRatio="video"
                    className="rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SEO INTRO ================= */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Advanced AI Route Planning & Fleet Optimization Platform
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Designed for enterprise logistics operations, our route optimization
            system handles complex constraints including time windows, vehicle
            capacity, traffic conditions, and multi-stop planning — ensuring
            maximum efficiency across last-mile delivery networks.
          </p>
        </section>

        {/* ================= CINEMATIC FEATURES ================= */}
        <section
          ref={containerRef}
          className="relative"
          style={{ height: dynamicHeight }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

            <motion.div
              className="absolute inset-0 -z-10"
              style={{
                background: useTransform(
                  scrollYProgress,
                  [0, 1],
                  [
                    "radial-gradient(circle at center, hsl(var(--secondary)/0.12), transparent 70%)",
                    "radial-gradient(circle at center, hsl(var(--primary)/0.12), transparent 70%)",
                  ]
                ),
              }}
            />

            {optimizationSteps.map((section, index) => {
              const start = index / totalSteps
              const end = (index + 1) / totalSteps

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0]
              )

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [60, 0]
              )

              return (
                <motion.div
                  key={section.category}
                  style={{ opacity, y }}
                  className="absolute w-full max-w-7xl px-8 grid lg:grid-cols-2 gap-20 items-center"
                >
                  <div>
                    <div className="text-sm text-primary font-semibold mb-4">
                      Step {section.step}
                    </div>

                    <h2 className="text-4xl font-bold mb-6">
                      {section.category}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-10">
                      {section.description}
                    </p>

                    <div className="space-y-6">
                      {section.items.map((feature) => (
                        <div key={feature.title} className="flex gap-4">
                          <div className="w-10 h-10 bg-primary/10 text-primary flex items-center justify-center rounded-lg">
                            <feature.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <ProductMockup
                    src={section.image}
                    alt={section.category}
                  />
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-24 text-center bg-gradient-to-r from-primary/10 to-background">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Reduce Costs & Increase Delivery Capacity with AI Route Optimization
          </h2>

          <Button size="lg" onClick={() => setDemoOpen(true)}>
            Schedule Route Optimization Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </section>

      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}