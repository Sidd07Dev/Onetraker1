import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import { useState, useRef } from "react"
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
   Download
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookDemoModal } from "@/components/BookDemoModal"
import { ProductMockup } from "@/components/ProductMockup"

/* -------------------------------------------------------------------------- */
/*                              MOBILE FEATURES                               */
/* -------------------------------------------------------------------------- */

const mobileFeatures = [
  {
    step: "01",
    category: "Driver App Experience",
    description:
      "Empower drivers with optimized navigation, offline capabilities, and real-time task management built for high-performance field operations.",
    image: "/images/driver-nav.png",
    items: [
      {
        icon: Navigation,
        title: "Turn-by-Turn Navigation",
        description: "Integrated GPS with optimized routes.",
      },
      {
        icon: QrCode,
        title: "Barcode Scanning",
        description: "Instant package verification and validation.",
      },
      {
        icon: Camera,
        title: "Photo & Signature POD",
        description: "Capture proof of delivery with secure uploads.",
      },
      {
        icon: Wifi,
        title: "Offline Mode",
        description: "Continue operations even without internet.",
      },
    ],
  },
  {
    step: "02",
    category: "Customer App Experience",
    description:
      "Deliver a seamless customer journey with live tracking, proactive notifications, and direct communication channels.",
    image: "/images/customer-tracking.png",
    items: [
      {
        icon: Bell,
        title: "Live Notifications",
        description: "Real-time dispatch and delivery alerts.",
      },
      {
        icon: Navigation,
        title: "Live Tracking",
        description: "Watch deliveries move in real-time.",
      },
      {
        icon: MessageSquare,
        title: "In-App Chat",
        description: "Direct communication with drivers.",
      },
      {
        icon: Battery,
        title: "Accurate ETA",
        description: "Predictive arrival time updates.",
      },
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function MobileApp() {
  const [demoOpen, setDemoOpen] = useState(false)
  const containerRef = useRef(null)

  const totalSteps = mobileFeatures.length
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
                Powerful{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mobile Apps</span>
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
      

        {/* ================= CINEMATIC MOBILE FEATURES ================= */}
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

            {mobileFeatures.map((section, index) => {
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

                    <div className="grid sm:grid-cols-2 gap-6">
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
        <section className="py-24 text-center bg-gradient-to-r from-secondary/10 to-background">
          <h2 className="text-3xl font-bold mb-6">
            Empower Drivers & Delight Customers with Mobile Excellence
          </h2>

          <Button size="lg" onClick={() => setDemoOpen(true)}>
            Schedule Mobile App Demo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </section>

      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  )
}