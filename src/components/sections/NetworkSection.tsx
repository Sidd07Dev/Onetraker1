import { motion } from 'framer-motion';
import { 
  Bike, 
  Car, 
  Truck, 
  Plane,
  Building2,
  MapPin
} from 'lucide-react';

const deliveryTypes = [
  {
    icon: Bike,
    title: 'Hyperlocal',
    description: 'Same-hour delivery within city zones',
    color: 'primary',
    range: '< 5 km',
  },
  {
    icon: Car,
    title: 'Urban',
    description: 'Same-day metro area coverage',
    color: 'secondary',
    range: '5-25 km',
  },
  {
    icon: Truck,
    title: 'Intercity',
    description: 'Next-day regional distribution',
    color: 'primary',
    range: '25-500 km',
  },
  {
    icon: Plane,
    title: 'Long Haul',
    description: 'Cross-country and international',
    color: 'secondary',
    range: '500+ km',
  },
];

export function NetworkSection() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Route Lines SVG */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M0 ${150 + i * 80} Q${300 + i * 50} ${100 + i * 60}, ${600 + i * 100} ${200 + i * 40} T1200 ${150 + i * 70}`}
              fill="none"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </div>
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="data-tag mb-4 inline-flex">
            <MapPin className="w-3 h-3" />
            Multi-Zone Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            One Platform,{' '}
            <span className="text-gradient-primary">Every Distance</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From bikes to trucks to drones—orchestrate your entire delivery network through a single intelligent platform.
          </p>
        </motion.div>

        {/* Delivery Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliveryTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover p-6 text-center group"
            >
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                type.color === 'primary'
                  ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                  : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'
              }`}>
                <type.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {type.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {type.description}
              </p>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                type.color === 'primary' 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-secondary/10 text-secondary'
              }`}>
                {type.range}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Warehouse Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass-card p-8 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Building2 className="w-10 h-10 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Warehouse Integration
            </h3>
            <p className="text-muted-foreground">
              Connect your existing warehouse management systems. Real-time inventory sync, 
              automated order fulfillment, and seamless dispatch coordination.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            {['WMS', 'ERP', 'OMS', 'TMS'].map((system) => (
              <span key={system} className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium">
                {system}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
