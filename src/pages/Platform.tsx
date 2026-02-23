import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Network, 
  Shield, 
  BarChart3, 
  Globe,
  ArrowRight,
  Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Machine learning algorithms that continuously optimize your delivery operations based on real-time data.',
  },
  {
    icon: Network,
    title: 'Unified Platform',
    description: 'Single dashboard for hyperlocal, urban, intercity, and long-haul deliveries across all vehicle types.',
  },
  {
    icon: Zap,
    title: 'Real-time Orchestration',
    description: 'Dynamic dispatching, live tracking, and instant communication between all stakeholders.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption and role-based access controls.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting, predictive insights, and actionable recommendations.',
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Multi-region deployment with 99.9% uptime SLA and localized compliance support.',
  },
];

const benefits = [
  '30% reduction in delivery costs',
  '99.2% on-time delivery rate',
  '45% improvement in driver efficiency',
  '60% faster order fulfillment',
  '40-point NPS improvement',
  'Same-day integration',
];

export default function Platform() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--secondary)/0.1),transparent_50%)]" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="data-tag mb-4 inline-flex">
              <Zap className="w-3 h-3" />
              Enterprise Platform
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              The Operating System for{' '}
              <span className="text-gradient-secondary">Modern Logistics</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Onetracker unifies your entire delivery operation—from warehouse to doorstep—with 
              AI-powered intelligence that scales from startup to enterprise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Platform Capabilities
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to run world-class logistics operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-muted-foreground">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Measurable Results,{' '}
                <span className="text-gradient-primary">Guaranteed</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our customers see transformative improvements within weeks of deployment. 
                Here's what you can expect.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary mb-2">30%</p>
                  <p className="text-muted-foreground">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">99.2%</p>
                  <p className="text-muted-foreground">On-Time Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-primary mb-2">10M+</p>
                  <p className="text-muted-foreground">Daily Deliveries</p>
                </div>
                <div className="text-center">
                  <p className="text-5xl font-bold text-secondary mb-2">500+</p>
                  <p className="text-muted-foreground">Enterprise Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
