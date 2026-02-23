import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center hero-bg px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold text-foreground">
              One<span className="text-primary">traker</span>
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your account to continue</p>
        </div>

        <div className="glass-card p-8">
          <form className="space-y-6">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Email</label>
              <Input type="email" placeholder="you@company.com" className="bg-muted border-border" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-muted-foreground">Password</label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
              </div>
              <Input type="password" placeholder="••••••••" className="bg-muted border-border" />
            </div>
            <Button type="submit" size="lg" className="w-full group">
              Sign In
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:underline">
                Start free trial
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Lock className="w-3 h-3" />
          <span>Secured with 256-bit encryption</span>
        </div>
      </motion.div>
    </div>
  );
}
