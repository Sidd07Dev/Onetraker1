import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Package,Route, Truck, Globe, Zap, BarChart3, Settings, 
  ArrowRight, CheckCircle2, Building
} from 'lucide-react';
import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { Link } from "react-router-dom"
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const carriers = [
  'FedEx', 'UPS', 'DHL', 'USPS', 'Blue Dart', 'Delhivery', 
  'Ecom Express', 'Shadowfax', 'Dunzo', 'Porter'
];




const features = [
  {
    icon: Globe,
    title: 'Unified API',
    description: 'Single integration for all carriers. No more managing multiple APIs.'
  },
  {
    icon: Zap,
    title: 'Smart Carrier Selection',
    description: 'AI recommends the best carrier based on cost, speed, and reliability.'
  },
  {
    icon: BarChart3,
    title: 'Rate Comparison',
    description: 'Compare real-time rates across carriers instantly.'
  },
  {
    icon: Settings,
    title: 'Automated Rules',
    description: 'Set up rules for automatic carrier assignment based on your criteria.'
  },
];
const featureSections = [
  {
    image: "https://onetracker.ai/wp-content/uploads/2024/08/multi-carrier-.png",
    features: features.slice(0, 2),
  },
  {
    image: "https://onetracker.ai/wp-content/uploads/2024/09/Carrier-Prioritization.png",
    features: features.slice(2, 4),
  },
];

export default function Multicarrier() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
    
        <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="section-container relative z-10"> <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Package className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Multicarrier</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> {' '} <span className="text-gradient-primary"> Multicarrier Shipping</span> {' '}Platform </h1>
            <p className="text-xl text-muted-foreground mb-8"> Connect to 100+ carriers through a single integration. Compare rates, print labels, and track shipments across all carriers from one dashboard. </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setDemoOpen(true)}> Book a Demo <ArrowRight className="ml-2 w-5 h-5" /> </Button>
             
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative" >
            <div className="glass-card p-2 rounded-2xl overflow-hidden">
              <OptimizedImage src="/multi-carrier.jpg" alt="Delivery management dashboard" aspectRatio="video" className="rounded-xl" /> </div> {/* Floating stats */}
            
          </motion.div>
        </div>
        </div>
      </section>

      {/* Carrier Logos */}
      <section className="py-16 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">Integrated with leading carriers worldwide</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {carriers.map((carrier, index) => (
              <motion.div
                key={carrier}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 bg-background rounded-lg border border-border text-sm font-medium text-muted-foreground"
              >
                {carrier}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="px-6 py-3 bg-primary/10 rounded-lg border border-primary/20 text-sm font-medium text-primary"
            >
              + 90 more
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      {/* <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simplify Your Shipping Operations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              One platform to manage all your shipping needs across multiple carriers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Features */}
<section className="py-24">
  <div className="section-container space-y-28">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Simplify Your Shipping Operations
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        One platform to manage all your shipping needs across multiple carriers.
      </p>
    </motion.div>

    {/* Zig-Zag Sections */}
    {featureSections.map((section, sectionIndex) => {
      const reverse = sectionIndex % 2 !== 0;

      return (
        <div
          key={sectionIndex}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* FEATURES */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
            {section.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 flex gap-4 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            {/* Glow */}
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-3xl -z-10" />

            <OptimizedImage
              src={section.image}
              alt="Multicarrier feature preview"
              aspectRatio="video"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

        </div>
      );
    })}

  </div>
</section>


      {/* Benefits */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Go Multicarrier?
              </h2>
              <div className="space-y-4">
                {[
                  'Reduce shipping costs by up to 25%',
                  'Improve delivery times with smart carrier selection',
                  'Single dashboard for all carrier operations',
                  'Automated label generation and tracking',
                  'Real-time rate comparisons',
                  'No lock-in with any single carrier'
                ].map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">25%</div>
                <div className="text-muted-foreground mb-6">Average Cost Savings</div>
                <div className="h-px bg-border my-6" />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-sm text-muted-foreground">Carriers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm text-muted-foreground">Shipments/Day</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
  );
}
