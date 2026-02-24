import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useState, useRef } from "react"
import {
  Package,
  Route,
  MapPin,
  Clock,
  CreditCard,
  FileText,
  Wallet,
  Users,
  BarChart3,
  Shield,
  Truck,
  ArrowRight,
} from "lucide-react"

import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { Link } from "react-router-dom"
import { BookDemoModal } from "@/components/BookDemoModal"
import { Button } from "@/components/ui/button"
import { ProductMockup } from "@/components/ProductMockup"

/* -------------------------------------------------------------------------- */
/*                              DELIVERY FEATURES                             */
/* -------------------------------------------------------------------------- */

const deliveryFeatures = [
  {
    step: "01",
    category: "Order & Dispatch Management Software",
    description:
      "Centralize order intake, automate dispatch workflows, and optimize pickup and delivery operations with intelligent route planning and real-time fleet visibility.",
    image: "/RouteOptimization.png",
    items: [
      {
        icon: Package,
        title: "Order Management System",
        description:
          "Manage multi-pickup deliveries, COD tracking, and workflow automation from one centralized dashboard.",
      },
      {
        icon: Route,
        title: "Route Optimization Software",
        description:
          "Automatically calculate optimal delivery routes using traffic, delivery windows, and vehicle capacity constraints.",
      },
      {
        icon: MapPin,
        title: "Smart Dispatch Engine",
        description:
          "Dynamically assign drivers based on location, workload, and fleet capacity.",
      },
    ],
  },
  {
    step: "02",
    category: "Real-Time Fleet Tracking System",
    description:
      "Monitor vehicles live, improve last-mile transparency, and enhance customer experience with geo-fencing, OTP validation, and delivery tracking portals.",
    image: "/LT2.png",
    items: [
      {
        icon: Clock,
        title: "Live GPS Fleet Tracking",
        description:
          "Track vehicles in real-time with route monitoring and geofence alerts.",
      },
      {
        icon: Users,
        title: "Driver Performance Monitoring",
        description:
          "Analyze trip duration, attendance, idle time, and productivity metrics.",
      },
      {
        icon: Shield,
        title: "Digital Proof of Delivery",
        description:
          "Capture electronic signatures and photo-based verification for secure delivery confirmation.",
      },
    ],
  },
  {
    step: "03",
    category: "COD & Financial Management",
    description:
      "Streamline cash-on-delivery reconciliation, automate settlements, and maintain complete financial transparency across delivery operations.",
    image: "/driverexpense.png",
    items: [
      {
        icon: CreditCard,
        title: "Multi-Payment Processing",
        description:
          "Support UPI, wallets, cards, net banking, and COD collection.",
      },
      {
        icon: Wallet,
        title: "COD Settlement Automation",
        description:
          "Track driver cash collection and automate reconciliation workflows.",
      },
      {
        icon: FileText,
        title: "NDR Management System",
        description:
          "Automate non-delivery reporting and reattempt scheduling.",
      },
    ],
  },
  {
    step: "04",
    category: "Delivery Analytics & KPI Dashboard",
    description:
      "Transform operational data into actionable insights using SLA dashboards, delivery success metrics, and fleet efficiency analytics.",
    image: "/driverbehavior.png",
    items: [
      {
        icon: BarChart3,
        title: "SLA & On-Time Delivery Tracking",
        description:
          "Monitor compliance performance and delivery accuracy.",
      },
      {
        icon: Truck,
        title: "Fleet Performance Analytics",
        description:
          "Track fuel efficiency, driver behavior, and operational costs.",
      },
      {
        icon: Shield,
        title: "Enterprise Audit Logs",
        description:
          "Maintain detailed compliance and governance records.",
      },
    ],
  },
]

export default function DeliveryManagement() {
  const [demoOpen, setDemoOpen] = useState(false)
  const containerRef = useRef(null)

  const totalSteps = deliveryFeatures.length
  const dynamicHeight = `${totalSteps * 100}vh`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <div className="pt-20">

        {/* ================= HERO ================= */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="section-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                  <Truck className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-medium text-secondary">
                    Delivery Management Software
                  </span>
                </div>

                {/* SEO Optimized H1 */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Enterprise{' '}
                  <span className="text-gradient-primary">
                    Delivery Management Software
                  </span>{' '}
                  for Modern Logistics
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Optimize last-mile delivery operations with route optimization,
                  real-time fleet tracking, proof of delivery, and COD management —
                  all from a unified logistics management platform.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => setDemoOpen(true)}>
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>

                  <Link to="/features">
                    <Button size="lg" variant="outline">
                      Explore Platform Features
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <div className="glass-card p-2 rounded-2xl overflow-hidden">
                  <OptimizedImage
                    src="/delevery-management.jpg"
                    alt="Enterprise delivery management software dashboard"
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
            Complete Last-Mile Delivery & Logistics Management Platform
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Designed for 3PL providers, eCommerce companies, distribution
            centers, and enterprise supply chains, our delivery management
            system centralizes dispatch automation, route planning, fleet
            tracking, proof of delivery, and financial reconciliation into a
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

            {deliveryFeatures.map((section, index) => {
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
            Scale Your Logistics Operations with AI-Powered Delivery Software
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