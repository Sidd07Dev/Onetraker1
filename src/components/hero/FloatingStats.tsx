import { motion } from "framer-motion";
import {
  Package,
  TrendingUp,
  Clock,
  Shield,
  MapPin,
} from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  color?: "yellow" | "blue";
  delay?: number;
}

function StatCard({
  icon,
  label,
  value,
  trend,
  color = "blue",
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.04 }}
      className="glass-card p-4 w-[200px] transform-gpu"
    >
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${
          color === "yellow"
            ? "bg-primary/20 text-primary"
            : "bg-secondary/20 text-secondary"
        }`}
      >
        {icon}
      </div>

      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-xl font-semibold text-foreground">{value}</p>

      {trend && (
        <p
          className={`text-xs mt-1 flex items-center gap-1 ${
            trend.trim().startsWith("+")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          <TrendingUp className="w-3 h-3" />
          {trend}
        </p>
      )}
    </motion.div>
  );
}

export function FloatingStats() {
  return (
    <>
      <div className="absolute -top-10 -left-10 hidden xl:block">
        <StatCard
          icon={<Package className="w-4 h-4" />}
          label="Live Orders"
          value="12,847"
          trend="+18% today"
          color="yellow"
          delay={0.2}
        />
      </div>

      <div className="absolute -top-8 -right-8 hidden xl:block">
        <StatCard
          icon={<Clock className="w-4 h-4" />}
          label="Avg ETA Accuracy"
          value="99.2%"
          trend="+0.5% this week"
          delay={0.3}
        />
      </div>

      <div className="absolute -bottom-10 -left-12 hidden xl:block">
        <StatCard
          icon={<Shield className="w-4 h-4" />}
          label="Proof of Delivery"
          value="100%"
          delay={0.4}
        />
      </div>

      <div className="absolute -bottom-12 -right-10 hidden xl:block">
        <StatCard
          icon={<MapPin className="w-4 h-4" />}
          label="Delivery Health"
          value="99.8%"
          trend="+0.2% SLA"
          color="yellow"
          delay={0.5}
        />
      </div>
    </>
  );
}