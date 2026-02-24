import {
  motion,
  useScroll,
  useTransform,
  useSpring, // added for smoother values
} from "framer-motion";
import { useState, useRef, useMemo } from "react";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Download,
  ArrowRight,
  MapPin,
  DollarSign,
  MessageSquare,
  Target,
} from "lucide-react";

import { ProductMockup } from "@/components/ProductMockup";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { BookDemoModal } from "@/components/BookDemoModal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // assuming you have a cn utility (class-variance-authority or similar)

/* -------------------------------------------------------------------------- */
/*                         ANALYTICS FEATURE SECTIONS                         */
/* -------------------------------------------------------------------------- */

const analyticsFeatures = [
  {
    id: "shipping",
    step: "01",
    category: "Shipping Performance Intelligence",
    description:
      "Monitor delivery SLAs, success rates, delays, and real-time metrics across regions and carriers — unified in one engine.",
    image: "/route-opti1.jpg",
    items: [
      { icon: TrendingUp, title: "On-Time Delivery Tracking", desc: "SLA compliance + predictive delay insights." },
      { icon: Target, title: "Performance Benchmarking", desc: "Compare zones, drivers, hubs with history." },
      { icon: BarChart3, title: "Real-Time KPI Dashboard", desc: "Live ops command center." },
    ],
  },
  {
    id: "location",
    step: "02",
    category: "Location & Demand Intelligence",
    description:
      "See geographic performance, demand clusters, and delivery density through heatmaps and zone-level insights.",
    image: "/Location-Insights.png",
    items: [
      { icon: MapPin, title: "Geo-Based Performance", desc: "Efficiency across cities, zones, territories." },
      { icon: Activity, title: "Demand Heatmaps", desc: "Visualize clusters → optimize allocation." },
      { icon: TrendingUp, title: "Zone Profitability", desc: "Spot high-margin vs loss-making regions instantly." },
    ],
  },
  {
    id: "profitability",
    step: "03",
    category: "Profitability & Financial Analytics",
    description:
      "Shipment-level margin visibility, granular cost breakdowns, revenue trends — full financial clarity.",
    image: "/Revenue-Dashboard.png",
    items: [
      { icon: DollarSign, title: "Cost Per Delivery Analysis", desc: "Track & optimize every rupee spent." },
      { icon: PieChart, title: "Margin & Revenue Dashboard", desc: "Trends by client, region, time." },
      { icon: Download, title: "Enterprise Reporting Exports", desc: "Audit-ready, stakeholder-ready exports." },
    ],
  },
  {
    id: "driver-cx",
    step: "04",
    category: "Driver & Customer Experience Analytics",
    description:
      "Behavioral analytics + feedback intelligence → better efficiency and service quality.",
    image: "/driverbehavior.png",
    items: [
      { icon: Activity, title: "Driver Behavior Analysis", desc: "Idle time, route adherence, efficiency scores." },
      { icon: MessageSquare, title: "Customer Feedback Insights", desc: "Ratings, complaints, quality trends." },
      { icon: Target, title: "Service Optimization Intelligence", desc: "AI recommendations to lift outcomes." },
    ],
  },
];

export default function ProductInsights() {
  const [demoOpen, setDemoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSteps = analyticsFeatures.length;
  // Slightly reduced multiplier → feels snappier on long scrolls (common 2025 pattern)
  const sectionHeightVh = 90; // was 100 → tighter feel
  const dynamicHeight = `${totalSteps * sectionHeightVh}vh`;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring smoothing for less jitter (especially mobile)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className=" min-h-screen">

        {/* ================= HERO ================= */}
        <section className="relative   overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
          <div className="section-container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6 text-sm font-medium">
                  <BarChart3 className="w-4 h-4" />
                  Logistics Analytics Platform
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-primary">
                  Enterprise{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Delivery Analytics
                  </span>{" "}
                  & Insights
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                  Turn logistics chaos into clear, actionable intelligence — real-time dashboards, profitability tracking, ecosystem-wide performance.
                </p>

                <Button size="lg" onClick={() => setDemoOpen(true)} className="group">
                  Book Enterprise Demo
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="glass-card p-3 rounded-2xl shadow-2xl border border-border/50"
              >
                <OptimizedImage
                  src="/route-opti1.jpg"
                  alt="Modern logistics analytics dashboard showing maps, KPIs and trends"
                  aspectRatio="video"
                  className="rounded-xl shadow-inner"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= SEO / Intro Block ================= */}
        <section className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Logistics Intelligence Command Center
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Designed for 3PLs, enterprise carriers and eCommerce supply chains — centralizing KPIs, driver behavior, financials and CX feedback in one powerful view.
          </p>
        </section>

        {/* ================= CINEMATIC STICKY SECTIONS ================= */}
        <section
          ref={containerRef}
          className="relative"
          style={{ height: dynamicHeight }}
        >
          <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
            {/* Subtle background progression */}
            <motion.div
              className="absolute inset-0 -z-10 pointer-events-none"
              style={{
                background: useTransform(
                  smoothProgress,
                  [0, 0.33, 0.66, 1],
                  [
                    "radial-gradient(circle at 30% 70%, hsl(var(--secondary)/0.08), transparent 60%)",
                    "radial-gradient(circle at 70% 30%, hsl(var(--primary)/0.08), transparent 60%)",
                    "radial-gradient(circle at 40% 60%, hsl(var(--accent)/0.08), transparent 60%)",
                    "radial-gradient(circle at 60% 40%, hsl(var(--primary)/0.1), transparent 60%)",
                  ]
                ),
              }}
            />

            {analyticsFeatures.map((feature, index) => {
              const progressStart = index / totalSteps;
              const progressEnd = (index + 1) / totalSteps;

              // Softer fade curve – starts earlier, ends later → less popping
              const opacity = useTransform(
                smoothProgress,
                [progressStart - 0.08, progressStart, progressEnd - 0.12, progressEnd],
                [0, 1, 1, 0]
              );

              const y = useTransform(
                smoothProgress,
                [progressStart, progressEnd],
                [40, 0] // reduced movement → feels more premium & controlled
              );

              const scale = useTransform(
                smoothProgress,
                [progressStart, progressEnd],
                [0.98, 1]
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{ opacity, y, scale }}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-20",
                    "w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 xl:gap-20"
                  )}
                >
                  <div className="space-y-8 md:space-y-10">
                    <div className="space-y-4">
                      <span className="text-sm font-mono text-muted-foreground/70 text-secondary">
                        Feature {feature.step}
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        {feature.category}
                      </h2>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                      {feature.items.map((item, i) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                          className="flex gap-5 items-start group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-muted-foreground">{item.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <ProductMockup
                      src={feature.image}
                      alt={`${feature.category} screenshot`}
                      className="rounded-2xl shadow-2xl border border-border/40"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-24 md:py-32 text-center bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Logistics Data?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Book a personalized demo and see how OneTracker delivers real ROI for 3PLs and enterprise carriers.
            </p>
            <Button size="lg" onClick={() => setDemoOpen(true)} className="group text-lg px-10">
              Schedule Your Demo
              <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
            </Button>
          </div>
        </section>
      </div>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}