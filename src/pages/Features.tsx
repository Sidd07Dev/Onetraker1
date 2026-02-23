import { motion } from 'framer-motion';
import { 
  Route, 
  Clock, 
  BarChart3, 
  Shield, 
  Smartphone,
  Bell,
  Camera,
  MapPin,
  Zap,
  Users,
  Package,
  Truck
} from 'lucide-react';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const features = [
  {
    name :'optimization',
    category: 'AI & Optimization',
    items: [
      {
        icon: Route,
        title: 'Smart Route Optimization',
        description: 'ML algorithms analyze traffic, weather, delivery windows, and driver preferences to calculate the most efficient routes in real-time.',
      },
      {
        icon: Clock,
        title: 'Predictive ETA',
        description: 'Accurate delivery time predictions using historical data, current conditions, and machine learning models.',
      },
      {
        icon: Users,
        title: 'Auto-Assignment',
        description: 'Automatically assign orders to the best available driver based on location, capacity, skills, and workload.',
      }
    ],
    image :'/faetures1.jpg'
  },
  {
    name :'tracking',
    category: 'Tracking & Visibility',
    items: [
      {
        icon: MapPin,
        title: 'Real-time GPS Tracking',
        description: 'Live location updates for all vehicles with accurate positions refreshed every few seconds.',
      },
      {
        icon: Bell,
        title: 'Proactive Notifications',
        description: 'Automated SMS, email, and push notifications for order updates, delays, and delivery completion.',
      },
      {
        icon: Smartphone,
        title: 'Customer Portal',
        description: 'White-labeled tracking pages for customers to view live delivery status and communicate with drivers.',
      },
    ],
     image :'/features2.jpg'
  },
  {
    name :'pod',
    category: 'Proof & Compliance',
    items: [
      {
        icon: Camera,
        title: 'Photo Proof of Delivery',
        description: 'Capture photos at delivery with automatic timestamp, GPS coordinates, and cloud storage.',
      },
      {
        icon: Shield,
        title: 'Digital Signatures',
        description: 'Collect electronic signatures with device fingerprinting and tamper-proof verification.',
      },
      {
        icon: Package,
        title: 'Delivery Verification',
        description: 'Multiple verification methods including OTP, barcode scanning, and biometric authentication.',
      },
    ],
    image : '/features3.jpg'
  },
  {
    name :'analytics',
    category: 'Analytics & Insights',
    items: [
      {
        icon: BarChart3,
        title: 'Performance Dashboards',
        description: 'Real-time KPI tracking with customizable dashboards for operations, finance, and executive teams.',
      },
      {
        icon: Zap,
        title: 'Delivery Heatmaps',
        description: 'Visualize delivery density, timing patterns, and success rates across geographic regions.',
      },
      {
        icon: Truck,
        title: 'Fleet Analytics',
        description: 'Monitor vehicle utilization, maintenance schedules, fuel consumption, and driver performance.',
      },
    ],
    image : '/features4.jpg'
  },
];

export default function Features() {
  return (
    <div className="pt-20">
      {/* Hero */}
 

<section className="py-24 hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/features-head.jpg"
            alt="Office culture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
          
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Every Feature You Need for{' '}
              <span className="text-gradient-primary">World-Class Delivery</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Comprehensive logistics tools built for scale, reliability, and continuous improvement.
            </p>
            <Button size="lg" asChild>
              <a href="#openings">Book a Demo</a>
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Features by Category */}
      {features.map((section, sectionIndex) => {
  const isEven = sectionIndex % 2 === 0

  return (
    <section
      id={section.name}
      key={section.category}
      className={`py-20 ${isEven ? "bg-card" : "bg-background"}`}
    >
      <div className="section-container">
        {/* Category Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-16 text-center"
        >
          {section.category}
        </motion.h2>

        {/* Main Content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center`}
        >
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={` h-fit hidden lg:block ${
              isEven ? "order-1" : "order-2"
            }`}
          >
            <img
              src={section.image}
              alt={section.category}
              className="grid glass-cardw-full max-w-[520px] mx-auto rounded-2xl shadow-xl opacity-90"
            />
          </motion.div>

          {/* FEATURE CARDS */}
          <div
            className={`grid md:grid-cols-2 gap-6 ${
              isEven ? "order-2" : "order-1"
            }`}
          >
            {section.items.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})}

    </div>
  );
}
