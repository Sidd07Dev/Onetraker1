import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

export function CTASection() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <section className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2" />
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your{' '}
              <span className="text-gradient-primary">Logistics Operations</span>?
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join 500+ enterprises who have reduced delivery costs by 30% and improved on-time delivery rates to 99.2% with Onetracker.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="group w-full sm:w-auto" onClick={() => setDemoOpen(true)}>
                Book a Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link to="/contact">
                <Button size="xl" variant="outline" className="w-full sm:w-auto">
                  Talk to Sales
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              No commitment required • See it in action • Get personalized demo
            </p>
          </motion.div>
        </div>
      </section>

      <BookDemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </>
  );
}
