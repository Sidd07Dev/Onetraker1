import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useState, useRef } from "react"
import {
  Route,
  Clock,
  BarChart3,
  Shield,
  Smartphone,
  Bell,
  Camera,
  MapPin,
  Zap,
  Users,
  Package,
  Truck,
  ArrowRight,
} from "lucide-react"

import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { Link } from "react-router-dom"
import { BookDemoModal } from "@/components/BookDemoModal"
import { Button } from "@/components/ui/button"
import { ProductMockup } from "@/components/ProductMockup"

/* -------------------------------------------------------------------------- */
/*                          ENTERPRISE LOGISTICS FEATURES                     */
/* -------------------------------------------------------------------------- */

const platformFeatures = [
  {
    step: "01",
    category: "AI Route Optimization Software",
    description:
      "Optimize delivery routes using artificial intelligence, real-time traffic intelligence, vehicle capacity constraints, and SLA-based delivery time windows to reduce operational costs and improve last-mile efficiency.",
    image: "/RouteOptimization.png",
    items: [
      {
        icon: Route,
        title: "Smart Route Optimization",
        description:
          "Automatically calculate optimal delivery routes based on traffic conditions, constraints, and dynamic delivery windows.",
      },
      {
        icon: Clock,
        title: "Predictive ETA Engine",
        description:
          "Generate highly accurate delivery time predictions using historical data and real-time routing analytics.",
      },
      {
        icon: Users,
        title: "Automated Driver Assignment",
        description:
          "Assign drivers dynamically based on workload, proximity, and fleet availability.",
      },
    ],
  },
  {
    step: "02",
    category: "Real-Time Fleet Tracking System",
    description:
      "Gain complete fleet visibility with live GPS tracking, geo-fencing alerts, automated dispatch workflows, and centralized operational dashboards.",
    image: "/LT1.png",
    items: [
      {
        icon: MapPin,
        title: "Live GPS Tracking",
        description:
          "Monitor vehicle movement in real-time with second-level refresh and route deviation alerts.",
      },
      {
        icon: Bell,
        title: "Automated Delivery Notifications",
        description:
          "Send real-time SMS, email, and push notifications for dispatch, delay, and delivery confirmation.",
      },
      {
        icon: Smartphone,
        title: "Branded Customer Tracking Portal",
        description:
          "Provide customers with white-labeled live tracking pages and delivery transparency.",
      },
    ],
  },
  {
    step: "03",
    category: "Digital Proof of Delivery & Compliance",
    description:
      "Secure delivery confirmation with encrypted digital signatures, OTP verification, GPS-tagged photos, and full audit logs to eliminate disputes.",
    image: "/dashboard-proof.png",
    items: [
      {
        icon: Camera,
        title: "Photo-Based Proof of Delivery",
        description:
          "Capture timestamped and geo-tagged images at the point of delivery.",
      },
      {
        icon: Shield,
        title: "Tamper-Proof Digital Signatures",
        description:
          "Collect encrypted electronic signatures with immutable audit trails.",
      },
      {
        icon: Package,
        title: "Multi-Level Delivery Verification",
        description:
          "Enable OTP validation, barcode scanning, and fraud prevention workflows.",
      },
    ],
  },
  {
    step: "04",
    category: "Advanced Logistics Analytics Dashboard",
    description:
      "Turn delivery operations into data-driven decisions with executive dashboards, fleet performance analytics, SLA monitoring, and delivery heatmaps.",
    image: "/dashboard-analytics.png",
    items: [
      {
        icon: BarChart3,
        title: "Executive KPI Dashboard",
        description:
          "Track SLA compliance, on-time delivery rate, and fleet utilization metrics.",
      },
      {
        icon: Zap,
        title: "Geographic Delivery Heatmaps",
        description:
          "Visualize delivery density and operational performance by region.",
      },
      {
        icon: Truck,
        title: "Fleet Performance Monitoring",
        description:
          "Monitor fuel efficiency, driver productivity, and operational cost metrics.",
      },
    ],
  },
]

export default function LogisticsFeatures() {
  const [demoOpen, setDemoOpen] = useState(false)
  const containerRef = useRef(null)

  const totalSteps = platformFeatures.length
  const dynamicHeight = `${totalSteps * 100}vh`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <div>

        {/* ================= HERO ================= */}
        <section className="relative  overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Enterprise Logistics Platform
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-secondary">
                  Powerful{' '}
                  <span className="text-gradient-primary">
                    Logistics Management Software
                  </span>{' '}
                  Built for Scale
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  From AI-powered route optimization and real-time fleet tracking
                  to proof of delivery and advanced logistics analytics,
                  OneTracker equips enterprises with the tools needed to
                  streamline and scale last-mile delivery operations.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => setDemoOpen(true)}>
                    Book Enterprise Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Link to="/delivery-management">
                    <Button size="lg" variant="outline">
                      Explore Delivery Software
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <div className="glass-card p-2 rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src="/RouteOptimization.png"
                    alt="Enterprise logistics management software dashboard"
                    aspectRatio="video"
                    className="rounded-xl"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SEO BLOCK ================= */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">
            End-to-End Last-Mile Delivery & Fleet Management System
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Designed for 3PL providers, eCommerce platforms, distribution
            centers, and enterprise supply chains, our logistics platform
            centralizes route planning, fleet visibility, digital proof of
            delivery, and operational analytics into a unified command center.
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

            {platformFeatures.map((section, index) => {
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
            Transform Your Logistics Operations with AI
          </h2>

          <Button size="lg" onClick={() => setDemoOpen(true)}>
            Request Enterprise Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </section>

      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}