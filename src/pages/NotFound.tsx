import { motion } from 'framer-motion';
import { MapPin, Home, ArrowLeft, Search, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Animated delivery path */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,400 Q200,300 400,350 T800,300 T1200,350 T1600,300"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="10 5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Animated 404 with package icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-[150px] sm:text-[200px] font-bold text-primary/10 leading-none select-none"
            >
              404
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="glass-card p-6 rounded-2xl">
                <img src="/short-logo.png" alt="onetracker_logo" className='h-8 w-full'/>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Package Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Looks like this delivery got lost in transit.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-8">
            <MapPin className="w-4 h-4 inline mr-1" />
            Attempted route: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <p className="text-sm text-muted-foreground mb-4">Popular destinations:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'Platform', href: '/platform' },
              { label: 'Features', href: '/features' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
