import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/BookDemoModal"
import {
  Smartphone,
  Camera,
  Navigation,
  Bell,
  QrCode,
  MessageSquare,
  Wifi,
  Battery,
  ArrowRight,
  Download,
} from "lucide-react"

/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const DRIVER_FEATURES = [
  {
    icon: Navigation,
    title: "Turn-by-Turn Navigation",
    description: "Integrated GPS with optimized routes",
    image: "/images/driver-nav.png",
  },
  {
    icon: QrCode,
    title: "Barcode Scanning",
    description: "Quick package verification",
    image: "/images/driver-scan.png",
  },
  {
    icon: Camera,
    title: "Photo Capture",
    description: "POD photos and signatures",
    image: "/images/driver-pod.png",
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Works without internet connection",
    image: "/images/driver-offline.png",
  },
]

const CUSTOMER_FEATURES = [
  {
    icon: Bell,
    title: "Live Notifications",
    description: "Real-time delivery updates",
    image: "/images/customer-alerts.png",
  },
  {
    icon: Navigation,
    title: "Live Tracking",
    description: "Watch driver on the map",
    image: "/images/customer-tracking.png",
  },
  {
    icon: MessageSquare,
    title: "In-App Chat",
    description: "Direct driver communication",
    image: "/images/customer-chat.png",
  },
  {
    icon: Battery,
    title: "ETA Updates",
    description: "Accurate arrival predictions",
    image: "/images/customer-eta.png",
  },
]

/* -------------------------------------------------------------------------- */
/*                                  HELPERS                                   */
/* -------------------------------------------------------------------------- */

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  )

/* -------------------------------------------------------------------------- */
/*                            FEATURE IMAGE CAROUSEL                           */
/* -------------------------------------------------------------------------- */

const FeatureCarousel = ({ images }) => {
  const [index, setIndex] = useState(0)

  return (
    <div className="relative w-full max-w-[420px] h-[360px] mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 0.96 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={images[index]}
            alt="Feature preview"
            className="w-full h-full object-cover"
          />
        </motion.div>
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
      <h3 className="font-semibold mb-2">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
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
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function MobileApp() {
  const [demoOpen, setDemoOpen] = useState(false)

  return (
    <div className="min-h-screen pt-20">

      {/* ================= HERO (UNCHANGED) ================= */}
            <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Smartphone className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Mobile Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Powerful{' '}
                <span className="text-gradient-primary">Mobile Apps</span>
                {' '}for Everyone
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Purpose-built mobile applications for drivers and customers. 
                Native performance, offline capabilities, and intuitive design.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setDemoOpen(true)}>
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="mr-2 w-5 h-5" />
                  Download Apps
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-64 h-[500px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-card to-muted rounded-[3rem] border-4 border-border shadow-2xl">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-background rounded-full" />
                  <div className="absolute inset-4 top-12 bg-background/50 rounded-2xl overflow-hidden">
                    <div className="p-4 space-y-3">
                      <div className="h-8 bg-primary/20 rounded-lg animate-pulse" />
                      <div className="h-32 bg-secondary/10 rounded-lg" />
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded" />
                        <div className="h-4 bg-muted rounded w-3/4" />
                      </div>
                      <div className="h-12 bg-primary rounded-lg" />
                    </div>
                  </div>
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-8 top-20 glass-card p-3"
                >
                  <Navigation className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -left-8 bottom-32 glass-card p-3"
                >
                  <Bell className="w-6 h-6 text-secondary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* ================= DRIVER APP ================= */}
      <section className="py-24 bg-card/50">
        <div className="section-container space-y-32">
          {chunkArray(DRIVER_FEATURES, 4).map((group, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              <div className="hidden lg:block">
                <FeatureCarousel images={group.map((f) => f.image)} />
              </div>
              <FeatureGrid items={group} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= CUSTOMER APP ================= */}
      <section className="py-24">
        <div className="section-container space-y-32">
          {chunkArray(CUSTOMER_FEATURES, 4).map((group, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
             
              <div className={`${index % 2 ? "lg:order-1" : ""}`}>
                <FeatureGrid items={group} />
              </div>
               <div className={`${index % 2 ? "lg:order-2" : ""}`}>
                <FeatureCarousel images={group.map((f) => f.image)} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24">
        <div className="section-container">
          <div className="glass-card relative max-w-4xl mx-auto overflow-hidden rounded-2xl">
            <img
              src="/cta.jpg"
              alt="Delivery Operations"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
            <div className="relative z-10 text-center px-8 py-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Delivery Operations?
              </h2>
              <Button size="lg" onClick={() => setDemoOpen(true)}>
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
