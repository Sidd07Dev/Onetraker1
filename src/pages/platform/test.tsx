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
    category: "Order & Dispatch Management",
    description:
      "Centralize order intake, automate smart dispatching, and optimize pickup and delivery operations with real-time visibility.",
    image: "/RouteOptimization.png",
    items: [
      {
        icon: Package,
        title: "Order Management",
        description:
          "Manage multi-pickup orders, COD tracking, and delivery workflows from one dashboard.",
      },
      {
        icon: Route,
        title: "Smart Route Optimization",
        description:
          "Automatically optimize routes based on traffic, delivery windows, and driver capacity.",
      },
      {
        icon: MapPin,
        title: "Auto Dispatch Engine",
        description:
          "Assign drivers dynamically using proximity and workload logic.",
      },
    ],
  },
  {
    step: "02",
    category: "Real-Time Delivery Tracking",
    description:
      "Monitor fleets live, track delivery progress, and provide real-time customer visibility with geo-fencing and OTP validation.",
    image: "/LT2.png",
    items: [
      {
        icon: Clock,
        title: "Live GPS Tracking",
        description:
          "Track vehicles with real-time map updates and geofence alerts.",
      },
      {
        icon: Users,
        title: "Driver Timesheets",
        description:
          "Monitor attendance, trip duration, and productivity.",
      },
      {
        icon: Shield,
        title: "Secure Proof of Delivery",
        description:
          "Capture digital signatures and photo-based POD verification.",
      },
    ],
  },
  {
    step: "03",
    category: "Financial & COD Management",
    description:
      "Streamline cash-on-delivery reconciliation, expense tracking, and settlement processes with full transparency.",
    image: "/driverexpense.png",
    items: [
      {
        icon: CreditCard,
        title: "Multi-Payment Support",
        description:
          "Support UPI, cards, wallets, net banking, and COD.",
      },
      {
        icon: Wallet,
        title: "COD Settlement",
        description:
          "Track collected cash and automate reconciliation workflows.",
      },
      {
        icon: FileText,
        title: "NDR Management",
        description:
          "Automate non-delivery reporting and reattempt logic.",
      },
    ],
  },
  {
    step: "04",
    category: "Analytics & Performance Monitoring",
    description:
      "Transform operational delivery data into actionable insights with KPI dashboards and fleet performance metrics.",
    image: "/driverbehavior.png",
    items: [
      {
        icon: BarChart3,
        title: "SLA Dashboard",
        description:
          "Monitor on-time delivery rate and compliance performance.",
      },
      {
        icon: Truck,
        title: "Fleet Performance Metrics",
        description:
          "Track fuel usage, trip efficiency, and driver behavior.",
      },
      {
        icon: Shield,
        title: "Compliance & Audit Logs",
        description:
          "Maintain detailed audit trails for enterprise governance.",
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

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

        {/* ================= HERO  ================= */}
         <section className="relative py-24 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                        <div className="section-container relative z-10"> <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                                    <Truck className="w-4 h-4 text-secondary" />
                                    <span className="text-sm font-medium text-secondary">Platform</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> Complete{' '} <span className="text-gradient-primary">Delivery Management</span> {' '}Platform </h1>
                                <p className="text-xl text-muted-foreground mb-8"> Orchestrate your entire delivery operation from a single platform. From order intake to proof of delivery, manage every step with precision and efficiency. </p>
                                <div className="flex flex-wrap gap-4"> <Button size="lg" onClick={() => setDemoOpen(true)}> Book a Demo <ArrowRight className="ml-2 w-5 h-5" /> </Button> <Link to="/features"> <Button size="lg" variant="outline"> Explore Features </Button> </Link> </div> </motion.div> <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative" > <div className="glass-card p-2 rounded-2xl overflow-hidden"> <OptimizedImage src="/delevery-management.jpg" alt="Delivery management dashboard" aspectRatio="video" className="rounded-xl" /> </div> {/* Floating stats */} <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="absolute -bottom-6 -left-6 glass-card p-4" > <div className="flex items-center gap-3"> <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center"> <Package className="w-5 h-5 text-secondary" /> </div> <div> <p className="text-sm font-semibold text-foreground">12,847</p> <p className="text-xs text-muted-foreground">Live Deliveries</p> </div> </div> </motion.div> </motion.div> </div> </div> </section>
        
       
        {/* ================= CINEMATIC DELIVERY FEATURES ================= */}
        <section
          ref={containerRef}
          className="relative"
          style={{ height: dynamicHeight }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

            {/* Animated Background */}
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
                  {/* LEFT CONTENT */}
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

                  {/* RIGHT VISUAL */}
                  <ProductMockup
                    src={section.image}
                    alt={section.category}
                  />
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-24 text-center bg-gradient-to-r from-primary/10 to-background">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Delivery Operations?
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