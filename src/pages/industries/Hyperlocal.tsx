import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Store, Clock, MapPin, Smartphone, Zap, Package, 
  ArrowRight, CheckCircle2, Bike, ShoppingBag
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const features = [
  {
    icon: Clock,
    title: '30-Minute Delivery',
    description: 'Enable ultra-fast delivery from local stores to customers nearby.'
  },
  {
    icon: MapPin,
    title: 'Hyperlocal Routing',
    description: 'AI optimizes routes for dense urban areas with walking and biking options.'
  },
  {
    icon: Smartphone,
    title: 'Real-time Updates',
    description: 'Customers track their order from store pickup to doorstep.'
  },
  {
    icon: Store,
    title: 'Store Management',
    description: 'Manage multiple store locations and their delivery zones.'
  },
];

const useCases = [
  'Grocery delivery',
  'Restaurant & food delivery',
  'Pharmacy & medicines',
  'Pet supplies',
  'Convenience stores',
  'Local retail',
  'Dark store operations',
  'Quick commerce'
];

export default function Hyperlocal() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen ">
      {/* Hero */}
      <section className="relative  overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Store className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Hyperlocal Commerce</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient-primary">Hyperlocal</span>
                {' '}Delivery Done Right
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Power your quick commerce operations with sub-30-minute delivery. 
                From dark stores to customer doorsteps in minutes.
              </p>
              
              <Button size="lg" onClick={() => setDemoOpen(true)}>
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Delivery Radius Visualization */}
              <div className="relative w-80 h-80 mx-auto">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full border-2 border-primary/20"
                    style={{ 
                      inset: `${(ring - 1) * 30}px`,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: ring * 0.2 }}
                  />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-card p-6 text-center">
                    <Store className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">10 min</div>
                    <div className="text-xs text-muted-foreground">delivery radius</div>
                  </div>
                </div>
                {/* Delivery Points */}
                {[[60, 30], [280, 80], [40, 200], [260, 240]].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center"
                    style={{ left: pos[0], top: pos[1] }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <Package className="w-4 h-4 text-secondary" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-card/50">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '<20min', label: 'Avg Delivery Time' },
              { value: '99%', label: 'On-time Rate' },
              { value: '5km', label: 'Delivery Radius' },
              { value: '2x', label: 'Order Capacity' },
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
              Built for Speed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every feature optimized for ultra-fast local delivery.
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
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hyperlocal Use Cases
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {useCases.map((useCase, i) => (
              <motion.div
                key={useCase}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4 text-center"
              >
                <ShoppingBag className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm">{useCase}</span>
              </motion.div>
            ))}
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
              Launch Your Quick Commerce
            </h2>
            <p className="text-muted-foreground mb-8">
              See how we power the fastest hyperlocal delivery operations.
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
