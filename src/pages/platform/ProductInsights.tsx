import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, TrendingUp, PieChart, Activity, Download, 
  ArrowRight, Eye, Target, Lightbulb
} from 'lucide-react';
import {
  MapPin,
  DollarSign,
  MessageSquare,
} from 'lucide-react';
import { OptimizedImage } from "@/components/ui/OptimizedImage"
import { useState } from 'react';
import { BookDemoModal } from '@/components/BookDemoModal';

const metrics = [
  { label: 'Delivery Success Rate', value: '99.2%', change: '+2.4%' },
  { label: 'Average Delivery Time', value: '32 min', change: '-18%' },
  { label: 'Cost per Delivery', value: '$4.20', change: '-12%' },
  { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.3' },
];

const features = [
  {
    icon: TrendingUp,
    title: 'Shipping Performance',
    description: 'Monitor on-time delivery rates, delays, and SLA adherence.',
    image: 'https://onetracker.ai/wp-content/uploads/2024/09/difot.png',
  },
  {
    icon: MapPin,
    title: 'Location Insights',
    description: 'Geo-based delivery performance and demand heatmaps.',
    image: 'https://onetracker.ai/wp-content/uploads/2024/10/Location-Insights-1-1.png',
  },
  {
    icon: DollarSign,
    title: 'Profitability Analytics',
    description: 'Track margins, costs, and profitability per shipment.',
    image: 'https://onetracker.ai/wp-content/uploads/2024/09/Revenue-Dashboard-Client-Analysis.png',
  },
  {
    icon: Activity,
    title: 'Driver Behaviour Analysis',
    description: 'Analyze driving patterns, idle time, and efficiency.',
    image: 'https://onetracker.ai/wp-content/uploads/2024/09/image-20.png',
  },
  {
    icon: MessageSquare,
    title: 'Consumer Feedback',
    description: 'Customer ratings, feedback trends, and service quality.',
    image: 'https://onetracker.ai/wp-content/uploads/2024/10/experience-satisfaction-percentage-2024-10-07T06-12-48.335Z.png',
  },
];


export default function ProductInsights() {
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
              <BarChart3 className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Analytics</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"> Powerful{' '} <span className="text-gradient-primary"> Product </span> {' '}Insights </h1>
            <p className="text-xl text-muted-foreground mb-8"> Transform your delivery data into actionable intelligence. Make data-driven decisions that improve performance and reduce costs. </p>
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


      {/* Dashboard Preview */}
      <section className="py-16 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="glass-card p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-background rounded-lg p-4"
                  >
                    <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold">{metric.value}</div>
                      <div className={`text-sm ${metric.change.startsWith('+') || metric.change.startsWith('-') && !metric.change.includes('$') ? 'text-green-500' : 'text-green-500'}`}>
                        {metric.change}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-background rounded-lg p-6 h-64 flex items-center justify-center">
                <div className="flex items-end gap-2 h-40">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.5 }}
                      className="w-6 md:w-10 bg-gradient-to-t from-primary to-secondary rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
              Analytics That Drive Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive analytics tools designed for logistics operations.
            </p>
          </motion.div>

         <section className="py-24">
  <div className="section-container space-y-24">

    {features.map((feature, index) => {
      const reverse = index % 2 !== 0;

      return (
        <div
          key={feature.title}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* FEATURE CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`glass-card p-8 flex gap-4 ${
              reverse ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-6 h-6 text-secondary" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`relative ${
              reverse ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {/* Soft glow */}
            <div className="absolute -inset-8 bg-secondary/10 blur-3xl rounded-3xl -z-10" />

            <img
              src={feature.image}
              alt={feature.title}
              className="w-full rounded-2xl shadow-xl object-cover"
              loading="lazy"
            />
          </motion.div>

        </div>
      );
    })}

  </div>
</section>

        </div>
      </section>

      {/* Report Types */}
      <section className="py-24 bg-card/50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Reporting
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Activity, title: 'Operational Reports', desc: 'Daily, weekly, monthly operations summary' },
              { icon: PieChart, title: 'Cost Analysis', desc: 'Detailed cost breakdowns and optimization' },
              { icon: Download, title: 'Custom Exports', desc: 'Export data in any format you need' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
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
