import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useRef } from "react";
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
} from "lucide-react";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Button } from "@/components/ui/button";
import { ProductMockup } from "@/components/ProductMockup";

const features = [
  {
    step: "01",
    category: "Route Optimization",
    description:
      "Optimize delivery routes using artificial intelligence, real-time traffic data, vehicle capacity constraints, and delivery time windows. Reduce fuel consumption, minimize delivery delays, and increase operational efficiency across last-mile logistics networks.",
    image: "/RouteOptimization.png",
    items: [
      {
        icon: Route,
        title: "Smart Route Optimization",
        description:
          "Automatically calculate the most efficient delivery routes based on traffic conditions, distance, and business constraints.",
      },
      {
        icon: Clock,
        title: "Predictive ETA",
        description:
          "Provide accurate delivery time predictions using historical data and real-time route analytics.",
      },
      {
        icon: Users,
        title: "Auto Driver Assignment",
        description:
          "Assign drivers dynamically based on proximity, workload, and fleet capacity.",
      },
    ],
  },
  {
    step: "02",
    category: "Real-Time Fleet Tracking",
    description:
      "Gain complete operational visibility with GPS fleet tracking, geofencing, automated dispatching, and centralized control dashboards. Improve delivery accuracy and enhance customer experience with live tracking transparency.",
    image: "/LT1.png",
    items: [
      {
        icon: MapPin,
        title: "Live GPS Tracking",
        description:
          "Monitor vehicle movement in real-time with second-level refresh and geofence alerts.",
      },
      {
        icon: Bell,
        title: "Automated Notifications",
        description:
          "Send SMS, email, and push notifications for dispatch, delay, and delivery confirmation.",
      },
      {
        icon: Smartphone,
        title: "Customer Tracking Portal",
        description:
          "Provide customers with branded live tracking pages and delivery updates.",
      },
    ],
  },
  {
    step: "03",
    category: "Proof of Delivery & Compliance",
    description:
      "Ensure secure and verifiable delivery confirmation with digital signatures, photo capture, OTP verification, and complete audit trails. Maintain compliance and eliminate delivery disputes.",
    image: "/dashboard-proof.png",
    items: [
      {
        icon: Camera,
        title: "Photo Proof of Delivery",
        description:
          "Capture timestamped and GPS-tagged images at the point of delivery.",
      },
      {
        icon: Shield,
        title: "Digital Signatures",
        description:
          "Collect encrypted electronic signatures with tamper-proof records.",
      },
      {
        icon: Package,
        title: "Multi-Level Verification",
        description:
          "Use OTP, barcode scanning, and validation workflows to prevent fraud.",
      },
    ],
  },
  {
    step: "04",
    category: "Advanced Logistics Analytics",
    description:
      "Transform operational delivery data into actionable insights using performance dashboards, heatmaps, and fleet efficiency metrics. Make data-driven decisions to scale logistics operations.",
    image: "/dashboard-analytics.png",
    items: [
      {
        icon: BarChart3,
        title: "Executive KPI Dashboard",
        description:
          "Monitor SLA compliance, on-time rate, and fleet utilization in real-time.",
      },
      {
        icon: Zap,
        title: "Delivery Heatmaps",
        description:
          "Analyze geographic performance patterns and delivery density.",
      },
      {
        icon: Truck,
        title: "Fleet Performance Monitoring",
        description:
          "Track fuel efficiency, driver productivity, and vehicle health.",
      },
    ],
  },
];

export default function Features() {
  const [demoOpen, setDemoOpen] = useState(false);
  const containerRef = useRef(null);

  const totalSteps = features.length;
  const dynamicHeight = `${totalSteps * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className="pt-20">

        {/* HERO */}
      <section className="relative pt-24 pb-16 px-6">

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <div>

      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        Platform Features
      </div>

      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
        Powerful Logistics Features
        <span className="text-gradient-primary"> Built for Scale</span>
      </h1>

      <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
        From AI-powered route optimization and real-time fleet tracking
        to proof of delivery and advanced logistics analytics,
        OneTracker equips enterprises with the tools needed to streamline
        last-mile operations and improve delivery performance.
      </p>

      <div className="flex gap-4">
        <Button size="lg">
          Book Enterprise Demo
        </Button>
        <Button variant="outline" size="lg">
          View Platform Overview
        </Button>
      </div>

    </div>

    {/* RIGHT */}
    <div className="relative">

      <ProductMockup
        src="/RouteOptimization.png"
        alt="AI logistics platform dashboard"
      />

      {/* Floating Feature Tags */}
      <div className="absolute -top-6 right-4 glass-card px-4 py-2 text-sm">
        AI Optimization
      </div>

      <div className="absolute -bottom-6 left-4 glass-card px-4 py-2 text-sm">
        Real-Time Tracking
      </div>

    </div>
  </div>

  {/* FEATURE NAV STRIP */}
  <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-sm text-muted-foreground">

    <div>Route Optimization</div>
    <div>Fleet Tracking</div>
    <div>Proof of Delivery</div>
    <div>Logistics Analytics</div>

  </div>

</section>

        {/* SEO INTRO SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Complete End-to-End Logistics Management Platform
          </h2>

          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Designed for third-party logistics providers (3PL), e-commerce companies,
            distribution centers, and enterprise supply chains, OneTracker centralizes
            route planning, fleet tracking, proof of delivery, and analytics into a single
            operational command center.
          </p>
        </section>

        {/* CINEMATIC FEATURES SECTION */}
        <section ref={containerRef} className="relative" style={{ height: dynamicHeight }}>

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

            {features.map((section, index) => {
              const start = index / totalSteps;
              const end = (index + 1) / totalSteps;

              const opacity = useTransform(
                scrollYProgress,
                [start, start + 0.1, end - 0.1, end],
                [0, 1, 1, 0]
              );

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [60, 0]
              );

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
              );
            })}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 text-center bg-gradient-to-r from-primary/10 to-background">
          <h2 className="text-3xl font-bold mb-6">
            Transform Your Logistics Operations with AI
          </h2>

          <Button size="lg" onClick={() => setDemoOpen(true)}>
            Request a Demo
          </Button>
        </section>

      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}