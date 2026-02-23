import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Bike, Clock, Smartphone, MapPin, Users, Package, 
  ArrowRight, CheckCircle2, Zap, Navigation
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const features = [
  {
    icon: Smartphone,
    title: 'Rider App',
    description: 'Intuitive mobile app designed for bike and motorcycle couriers with one-hand operation.'
  },
  {
    icon: Navigation,
    title: 'Smart Routing',
    description: 'Optimized routes considering bike lanes, traffic, and pedestrian zones.'
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description: 'Same-hour and scheduled delivery options with precise ETAs.'
  },
  {
    icon: Package,
    title: 'Multi-pickup',
    description: 'Efficient batch pickups from multiple merchants in a single run.'
  },
];

const useCases = [
  'Document delivery',
  'Food & grocery delivery',
  'Pharmacy & healthcare',
  'E-commerce parcels',
  'B2B express shipments',
  'Legal document service'
];

export default function Couriers() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Bike className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Courier Services</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Built for{' '}
              <span className="text-gradient-primary">Courier Fleets</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Whether you run a fleet of bikes, motorcycles, or vans, our platform 
              helps you manage pickups and deliveries with precision and speed.
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
              { value: '2x', label: 'Faster Dispatch' },
              { value: '35%', label: 'More Deliveries' },
              { value: '98%', label: 'SLA Compliance' },
              { value: '20%', label: 'Cost Savings' },
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
              Everything Couriers Need
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built tools for courier operations of any size.
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Delivery Use Cases We Support
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {useCases.map((useCase, i) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 text-center"
            >
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-muted-foreground">Courier companies trust us</div>
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
              Ready to Scale Your Courier Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join hundreds of courier companies using Onetracker to grow.
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
