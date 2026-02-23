import { motion } from 'framer-motion';
import { Package, TrendingUp, Clock, Activity, Shield, MapPin } from 'lucide-react';
import { useRef } from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  color?: 'yellow' | 'blue';
}

function MobileStatCard({ icon, label, value, trend, color = 'blue' }: StatCardProps) {
  return (
    <div className="glass-card p-4 min-w-[150px] flex-shrink-0 snap-start">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
        color === 'yellow' 
          ? 'bg-primary/20 text-primary' 
          : 'bg-secondary/20 text-secondary'
      }`}>
        {icon}
      </div>
      <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
      <p className="text-lg font-semibold text-foreground">{value}</p>
      {trend && (
        <p className={`text-xs mt-0.5 flex items-center gap-1 ${
          trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
        }`}>
          <TrendingUp className="w-3 h-3" />
          {trend}
        </p>
      )}
    </div>
  );
}

const stats: StatCardProps[] = [
  {
    icon: <Package className="w-4 h-4" />,
    label: "Live Orders",
    value: "12,847",
    trend: "+18%",
    color: "yellow",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    label: "AI Optimization",
    value: "98.7%",
    trend: "+2.3%",
    color: "blue",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    label: "ETA Accuracy",
    value: "99.2%",
    trend: "+0.5%",
    color: "blue",
  },
  {
    icon: <Activity className="w-4 h-4" />,
    label: "Throughput",
    value: "847/hr",
    trend: "+12%",
    color: "yellow",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    label: "POD Rate",
    value: "100%",
    color: "blue",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Delivery Health",
    value: "99.8%",
    trend: "+0.2%",
    color: "yellow",
  },
];

export function MobileStatsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full"
    >
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          >
            <MobileStatCard {...stat} />
          </motion.div>
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="flex justify-center gap-1 mt-2">
        <span className="text-xs text-muted-foreground">Swipe for more</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-muted-foreground"
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
}
