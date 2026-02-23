import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Warehouse, Package, Truck, Globe, BarChart3, Users, 
  ArrowRight, CheckCircle2, Zap, Settings
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const features = [
  {
    icon: Warehouse,
    title: 'Warehouse Integration',
    description: 'Seamless connection with WMS systems for end-to-end visibility.'
  },
  {
    icon: Users,
    title: 'Multi-tenant Platform',
    description: 'Serve multiple clients from a single platform with complete separation.'
  },
  {
    icon: Globe,
    title: 'Carrier Network',
    description: 'Connect to 100+ carriers and manage all shipments centrally.'
  },
  {
    icon: Settings,
    title: 'White-label Options',
    description: 'Offer branded tracking pages and apps to your clients.'
  },
];

const benefits = [
  'Single platform for all clients',
  'Automated billing and invoicing',
  'Client-specific SLA tracking',
  'Custom reporting per client',
  'API-first architecture',
  'Scalable infrastructure'
];

export default function Logistics3PL() {
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
              <Warehouse className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Logistics & 3PL</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Power Your{' '}
              <span className="text-gradient-primary">3PL Operations</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              A complete platform for third-party logistics providers. 
              Manage multiple clients, carriers, and warehouses from one dashboard.
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
              { value: '100+', label: 'Carrier Partners' },
              { value: '50M', label: 'Shipments/Month' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '30%', label: 'Efficiency Gain' },
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
              Built for 3PL Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to grow your logistics business.
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
                Why 3PLs Choose Onetracker
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, i) => (
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
                <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-muted-foreground mb-6">Client capacity increase</div>
                <div className="h-px bg-border my-6" />
                <p className="text-sm text-muted-foreground">
                  "We've tripled our client capacity without adding operations staff."
                </p>
                <p className="text-sm font-medium mt-2">— Leading 3PL Provider</p>
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
              Ready to Scale Your 3PL Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              See how our platform can transform your operations.
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
