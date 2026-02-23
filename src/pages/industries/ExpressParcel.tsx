import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Plane, Package, Clock, Globe, BarChart3, Shield, 
  ArrowRight, CheckCircle2, Zap, Truck
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const features = [
  {
    icon: Clock,
    title: 'Time-Critical Delivery',
    description: 'Guaranteed same-day and next-day delivery with real-time tracking.'
  },
  {
    icon: Globe,
    title: 'Network Management',
    description: 'Manage hubs, sorting centers, and delivery zones from one platform.'
  },
  {
    icon: Package,
    title: 'Parcel Processing',
    description: 'High-volume scanning, sorting, and dispatch automation.'
  },
  {
    icon: Shield,
    title: 'SLA Management',
    description: 'Track and ensure compliance with service level agreements.'
  },
];

const capabilities = [
  'Hub-to-hub transfers',
  'Last-mile integration',
  'Returns management',
  'COD collection',
  'Locker integration',
  'API connectivity'
];

export default function ExpressParcel() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Plane className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Express & Parcel</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-primary">Express Delivery</span>
              {' '}at Scale
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Power your express and parcel network with enterprise-grade delivery management. 
              From sorting centers to doorstep, manage millions of parcels daily.
            </p>
            
            <Button size="lg" onClick={() => setDemoOpen(true)}>
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10M+', label: 'Parcels/Day' },
              { value: '99.5%', label: 'Delivery Success' },
              { value: '24hr', label: 'Express Delivery' },
              { value: '200+', label: 'Cities Covered' },
            ].map((stat, index) => (
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
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Parcel Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handle high volumes with precision and reliability.
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
                className="glass-card p-6"
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
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Network Capabilities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {capabilities.map((capability, i) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
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
              <div className="flex items-center gap-4 mb-6">
                <Truck className="w-10 h-10 text-primary" />
                <div>
                  <div className="font-semibold">Network Visualization</div>
                  <div className="text-sm text-muted-foreground">Real-time hub activity</div>
                </div>
              </div>
              <div className="space-y-3">
                {['Mumbai Hub', 'Delhi Hub', 'Bangalore Hub'].map((hub) => (
                  <div key={hub} className="flex items-center justify-between p-3 bg-background rounded-lg">
                    <span className="text-sm">{hub}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground">Active</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Scale Your Express Network
            </h2>
            <p className="text-muted-foreground mb-8">
              See how we help express carriers handle millions of parcels.
            </p>
            <Button size="lg" onClick={() => setDemoOpen(true)}>
              Book a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
