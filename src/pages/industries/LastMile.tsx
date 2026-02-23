import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Clock, Route, Smartphone, Users, BarChart3, 
  ArrowRight, CheckCircle2, Zap
} from 'lucide-react';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const challenges = [
  'Meeting tight delivery windows',
  'Optimizing multi-drop routes',
  'Managing driver availability',
  'Providing real-time visibility',
  'Reducing failed deliveries',
  'Scaling during peak seasons'
];

const solutions = [
  {
    icon: Route,
    title: 'Dynamic Route Optimization',
    description: 'AI calculates the fastest routes considering traffic, time windows, and vehicle capacity.'
  },
  {
    icon: Smartphone,
    title: 'Driver Mobile App',
    description: 'Purpose-built app with navigation, POD capture, and customer communication tools.'
  },
  {
    icon: Clock,
    title: 'Real-time ETA Updates',
    description: 'Keep customers informed with accurate, live arrival predictions.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track delivery success rates, times, and driver performance metrics.'
  },
];

export default function LastMile() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Last Mile Delivery</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Master the{' '}
                <span className="text-gradient-primary">Last Mile</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8">
                The last mile is where customer experience is won or lost. 
                Our platform helps you deliver faster, more reliably, and at lower cost.
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
              <h3 className="font-semibold mb-4">Last Mile Challenges We Solve</h3>
              <div className="space-y-3">
                {challenges.map((challenge, i) => (
                  <motion.div
                    key={challenge}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{challenge}</span>
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
              { value: '40%', label: 'Cost Reduction' },
              { value: '99%', label: 'On-time Rate' },
              { value: '50%', label: 'More Deliveries' },
              { value: '4.9★', label: 'Customer Rating' },
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

      {/* Solutions */}
      <section className="py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Purpose-Built for Last Mile
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every feature designed to tackle the unique challenges of final-mile delivery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 text-center max-w-3xl mx-auto"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Transform Your Last Mile Operations
            </h2>
            <p className="text-muted-foreground mb-8">
              See how leading delivery companies are achieving 99% on-time rates.
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
