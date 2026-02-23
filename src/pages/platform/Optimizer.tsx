import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { Link } from "react-router-dom"
import {
  Route, Brain, Clock, Fuel, TrendingUp, Zap,
  MapPin, ArrowRight, Target, Layers, Truck, Package
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const optimizations = [
  {
    icon: Clock,
    title: 'Time Windows',
    description: 'Respect customer time preferences and SLAs while maximizing efficiency.'
  },
  {
    icon: Fuel,
    title: 'Fuel Optimization',
    description: 'Reduce fuel costs with distance-optimized routes that consider traffic patterns.'
  },
  {
    icon: Layers,
    title: 'Multi-stop Planning',
    description: 'Optimize hundreds of stops across multiple vehicles simultaneously.'
  },
  {
    icon: Target,
    title: 'Dynamic Reoptimization',
    description: 'Automatically adjust routes when new orders come in or conditions change.'
  },
];

const stats = [
  { value: '30%', label: 'Route Distance Reduction' },
  { value: '25%', label: 'Fuel Cost Savings' },
  { value: '40%', label: 'More Deliveries Per Day' },
  { value: '<1s', label: 'Optimization Time' },
];

export default function Optimizer() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="section-container relative z-10"> <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Route className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Route Optimizer</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> Intelligent{' '} <span className="text-gradient-primary"> Route Optimizer</span> {' '}Platform </h1>
            <p className="text-xl text-muted-foreground mb-8">  Our AI engine calculates the most efficient routes in milliseconds, reducing costs and increasing delivery capacity. </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setDemoOpen(true)}> Book a Demo <ArrowRight className="ml-2 w-5 h-5" /> </Button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative" >
            <div className="glass-card p-2 rounded-2xl overflow-hidden">
              <OptimizedImage src="/route-opti1.jpg" alt="Delivery management dashboard" aspectRatio="video" className="rounded-xl" /> </div> {/* Floating stats */}
            
          </motion.div>
        </div>
        </div>
      </section>





      {/* Stats */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Optimization Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade algorithms that handle complex real-world constraints.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
  
  {/* LEFT: Feature cards */}
  <div className="grid md:grid-cols-2 gap-6">
    {optimizations.map((feature, index) => (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="glass-card p-6  hover:border-primary/30 transition-colors"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
          <feature.icon className="w-6 h-6 text-primary" />
        </div>

        <div>
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>

  {/* RIGHT: Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative"
  >
    <img
      src="https://onetracker.ai/wp-content/uploads/2024/09/Route-Optimization1-29Sept.png" // replace with your image
      alt="Route Optimization Dashboard"
      className="rounded-2xl shadow-xl w-full object-cover"
    />

    {/* Optional glow / accent */}
    <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20 pointer-events-none" />
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
