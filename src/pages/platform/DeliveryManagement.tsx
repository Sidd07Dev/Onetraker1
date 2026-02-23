import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/BookDemoModal"
import { OptimizedImage } from "@/components/ui/OptimizedImage"

import {
  Truck,
  Package,
  MapPin,
  Clock,
  BarChart3,
  Shield,
  ArrowRight,
  Users,
  Globe,
  Route,
  Calendar,
  CreditCard,
  AlertTriangle,
  FileText,
  Wallet,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const FEATURES = [
  {
    icon: Package,
    title: "Order Management",
    description:
      "Centralize orders with multi-pickup, COD tracking, and non-delivery reporting.",
    image: "https://onetracker.ai/wp-content/uploads/2024/09/LT3-1.png",
  },
  {
    icon: Route,
    title: "Pickup & Delivery Optimization",
    description:
      "Optimize routes to reduce distance, fuel cost, and delivery time.",
    image: "https://onetracker.ai/wp-content/uploads/2024/09/LT2-1.png",
  },
  {
    icon: Calendar,
    title: "Schedule Planning",
    description:
      "Plan deliveries with time windows and driver availability.",
    image: "/images/schedule.png",
  },
  {
    icon: MapPin,
    title: "Smart Dispatch",
    description:
      "Auto-assign deliveries using real-time location and capacity.",
    image: "/images/dispatch.png",
  },
  {
    icon: Clock,
    title: "Real-time Tracking",
    description:
      "Live GPS tracking with OTP, geo-fencing, and photo proof.",
    image: "/images/tracking.png",
  },
  {
    icon: CreditCard,
    title: "Multiple Payments",
    description:
      "UPI, cards, wallets, net banking, and COD reconciliation.",
    image: "/images/payments.png",
  },
  {
    icon: FileText,
    title: "NDR Management",
    description:
      "Automated non-delivery reports with reattempt workflows.",
    image: "https://onetracker.ai/wp-content/uploads/2024/09/NDR-4.png",
  },
  {
    icon: AlertTriangle,
    title: "Alerts & Notifications",
    description:
      "Instant alerts via SMS, WhatsApp, and email.",
    image: "https://onetracker.ai/wp-content/uploads/2021/04/Comprehensive-Branding.png",
  },
  {
    icon: Wallet,
    title: "COD Settlement",
    description:
      "Track driver expenses and COD cash settlement.",
    image: "https://onetracker.ai/wp-content/uploads/2021/04/delivery-and-feedback1.png",
  },
  {
    icon: Users,
    title: "Driver Timesheets",
    description:
      "Monitor attendance, trips, and idle time.",
    image: "https://onetracker.ai/wp-content/uploads/2024/08/image-16.png",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Analyze delivery success rate and SLA compliance.",
    image: "https://onetracker.ai/wp-content/uploads/2024/08/image-10.png",
  },
  {
    icon: Shield,
    title: "Proof of Delivery",
    description:
      "Secure digital POD with photos and signatures.",
    image: "/images/pod.png",
  },
]

const BENEFITS = [
  { value: "40%", label: "Faster Dispatch" },
  { value: "25%", label: "Cost Reduction" },
  { value: "99%", label: "On-time Delivery" },
  { value: "60%", label: "Fewer Support Calls" },
]

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

const FEATURE_GROUPS = chunkArray(FEATURES, 4)

/* -------------------------------------------------------------------------- */
/*                            FEATURE IMAGE CAROUSEL                           */
/* -------------------------------------------------------------------------- */

const FeatureCarousel = ({ images }) => {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative w-full max-w-[480px] h-[360px] mx-auto">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.96 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl"
        />
      </AnimatePresence>

      <button
        onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 glass-card px-3 py-2"
      >
        ←
      </button>

      <button
        onClick={() => setIndex((i) => (i + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 glass-card px-3 py-2"
      >
        →
      </button>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                               FEATURE CARDS                                */
/* -------------------------------------------------------------------------- */

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-6 hover:border-primary/30 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.description}</p>
    </motion.div>
  )
}

const FeatureGrid = ({ items }) => (
  <div className="grid gap-6">
    <FeatureCard feature={items[0]} />
    <div className="grid sm:grid-cols-2 gap-6">
      <FeatureCard feature={items[1]} />
      <FeatureCard feature={items[2]} />
    </div>
    {items[3] && <FeatureCard feature={items[3]} />}
  </div>
)

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function DeliveryManagement() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="min-h-screen pt-10">
      {/* HERO */}
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

      {/* STATS */}
      <section className="py-16 bg-card/50">
        <div className="section-container grid grid-cols-2 md:grid-cols-4 gap-8">
          {BENEFITS.map((b) => (
            <div key={b.label} className="text-center">
              <div className="text-4xl font-bold text-primary">{b.value}</div>
              <p className="text-muted-foreground">{b.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24">
        <div className="section-container space-y-32">
          {FEATURE_GROUPS.map((group, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className={`hidden lg:block ${isEven ? "" : "lg:order-2"}`}>
                  <FeatureCarousel images={group.map((f) => f.image)} />
                </div>

                <div className={`${isEven ? "" : "lg:order-1"}`}>
                  <FeatureGrid items={group} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
     <section className="py-24">
  <div className="section-container">
    <div className="glass-card relative max-w-4xl mx-auto overflow-hidden rounded-2xl">

      {/* Background Image */}
      <img
        src="/cta.jpg"
        alt="Delivery Operations"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Delivery Operations?
        </h2>

        <Button
          size="lg"
          onClick={() => setDemoOpen(true)}
          className="px-8"
        >
          Book a Demo
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

    </div>
  </div>
</section>



      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  )
}
