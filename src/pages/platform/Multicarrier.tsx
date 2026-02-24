import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useState, useRef } from "react"
import {
  Globe,
  Zap,
  BarChart3,
  Settings,
  Package,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { ProductMockup } from "@/components/ProductMockup"
import { BookDemoModal } from "@/components/BookDemoModal"
import { Button } from "@/components/ui/button"

/* -------------------------------------------------------------------------- */
/*                          MULTICARRIER FEATURES                             */
/* -------------------------------------------------------------------------- */

const multicarrierFeatures = [
  {
    step: "01",
    category: "Unified Multi-Carrier API Integration",
    description:
      "Integrate with 100+ domestic and international carriers through a single enterprise-grade API. Eliminate complex integrations and streamline shipping operations globally.",
    image: "/multi-carrier.jpg",
    items: [
      {
        icon: Globe,
        title: "Single Unified API",
        description:
          "One integration to access FedEx, UPS, DHL, Blue Dart, Delhivery and 100+ carriers worldwide.",
      },
      {
        icon: Settings,
        title: "Centralized Label Generation",
        description:
          "Automatically generate shipping labels for any connected carrier from one dashboard.",
      },
      {
        icon: Package,
        title: "Bulk Shipment Processing",
        description:
          "Create, print, and manage thousands of shipments in seconds.",
      },
    ],
  },
  {
    step: "02",
    category: "Smart Carrier Selection Engine",
    description:
      "Automatically select the most cost-effective and reliable carrier using AI-based decision rules, delivery SLAs, and real-time rate comparison.",
    image: "/Carrier-Prioritization.png",
    items: [
      {
        icon: Zap,
        title: "AI-Based Carrier Allocation",
        description:
          "Choose carriers dynamically based on cost, performance, and delivery speed.",
      },
      {
        icon: BarChart3,
        title: "Real-Time Rate Comparison",
        description:
          "Compare live shipping rates across all integrated carriers instantly.",
      },
      {
        icon: Truck,
        title: "Automated Shipping Rules",
        description:
          "Set intelligent rules for weight, zone, COD, and delivery timelines.",
      },
    ],
  },
  {
    step: "03",
    category: "Centralized Tracking & Visibility",
    description:
      "Track shipments across all carriers from a single dashboard with unified tracking IDs and real-time delivery updates.",
    image: "/multi-carrier.jpg",
    items: [
      {
        icon: Package,
        title: "Unified Tracking Dashboard",
        description:
          "Monitor all shipments across carriers in one place.",
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        description:
          "Analyze carrier SLA performance and delivery efficiency.",
      },
      {
        icon: CheckCircle2,
        title: "Delivery Success Monitoring",
        description:
          "Track RTO rates, delays, and failed deliveries in real-time.",
      },
    ],
  },
]

export default function Multicarrier() {
  const [demoOpen, setDemoOpen] = useState(false)
  const containerRef = useRef(null)

  const totalSteps = multicarrierFeatures.length
  const dynamicHeight = `${totalSteps * 100}vh`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <div >

        {/* ================= HERO ================= */}
        <section className="relative  overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="section-container relative z-10">

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                  <Package className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">
                    Multi-Carrier Shipping Platform
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                  Enterprise{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Multicarrier Shipping Software
                  </span>{' '}
                  for Global Logistics
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Connect, compare, automate, and track shipments across
                  100+ carriers through a single intelligent shipping platform.
                </p>

                <Button size="lg" onClick={() => setDemoOpen(true)}>
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              <div>
                <div className="glass-card p-2 rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src="/multi-carrier.jpg"
                    alt="Enterprise multicarrier shipping dashboard"
                    aspectRatio="video"
                    className="rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SEO CONTENT BLOCK ================= */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Centralized Multi-Carrier Shipping & Logistics Automation Platform
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Designed for eCommerce brands, 3PL providers, marketplaces,
            and enterprise supply chains, our multicarrier platform enables
            cost optimization, smart carrier routing, automated label
            generation, and real-time shipment visibility — all from a
            single operational command center.
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

            {multicarrierFeatures.map((section, index) => {
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
          <h2 className="text-3xl font-bold mb-6">
            Reduce Shipping Costs & Increase Delivery Speed with AI
          </h2>

          <Button size="lg" onClick={() => setDemoOpen(true)}>
            Schedule Enterprise Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </section>

      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}