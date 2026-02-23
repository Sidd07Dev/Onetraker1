import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, Package, Store, Truck, Clock, BarChart3, 
  ArrowRight, CheckCircle2, Zap, Globe
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const features = [
  {
    icon: Store,
    title: 'Omnichannel Fulfillment',
    description: 'Ship from stores, warehouses, or dark stores with unified inventory visibility.'
  },
  {
    icon: Clock,
    title: 'Same-Day Delivery',
    description: 'Offer same-day and next-day delivery options to boost conversion.'
  },
  {
    icon: Package,
    title: 'Returns Management',
    description: 'Seamless returns processing with automated pickup scheduling.'
  },
  {
    icon: BarChart3,
    title: 'Delivery Analytics',
    description: 'Track delivery performance impact on customer satisfaction and repeat purchases.'
  },
];

const integrations = [
  'Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 
  'Salesforce Commerce', 'SAP', 'Custom APIs'
];

export default function RetailEcommerce() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <ShoppingCart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Retail & Ecommerce</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Delivery That{' '}
                <span className="text-gradient-primary">Drives Sales</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                Turn delivery into a competitive advantage. Faster, more reliable 
                delivery means higher conversions and happier customers.
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
              className="glass-card p-8"
            >
              <h3 className="font-semibold mb-4">Platform Integrations</h3>
              <div className="flex flex-wrap gap-2">
                {integrations.map((platform, i) => (
                  <motion.span
                    key={platform}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="px-3 py-1.5 bg-background rounded-lg text-sm border border-border"
                  >
                    {platform}
                  </motion.span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Integration time</div>
                <div className="text-2xl font-bold text-primary">Under 24 hours</div>
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
              { value: '23%', label: 'Conversion Lift' },
              { value: '40%', label: 'Fewer Cart Abandons' },
              { value: '95%', label: 'CSAT Score' },
              { value: '3x', label: 'Repeat Purchase Rate' },
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
              Built for Retail Success
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to improve your customers' post-purchase experience.
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

      {/* Customer Journey */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Customer Experience
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Order Placed', icon: ShoppingCart },
              { step: '02', title: 'Dispatched', icon: Package },
              { step: '03', title: 'Live Tracking', icon: Truck },
              { step: '04', title: 'Delivered', icon: CheckCircle2 },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary/30 mb-2">{item.step}</div>
                <div className="font-medium">{item.title}</div>
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
            <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Elevate Your Ecommerce Delivery
            </h2>
            <p className="text-muted-foreground mb-8">
              See how leading retailers are winning with better delivery.
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
