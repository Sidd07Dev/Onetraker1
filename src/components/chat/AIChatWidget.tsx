import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Lazy-loaded chat content
const ChatContent = lazy(() => import('./ChatContent'));

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Lazy load chatbot after 5s or on first interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setShouldLoad(true);
    setIsOpen(true);
    setShowTooltip(false);
  };

  // Show tooltip after widget loads
  useEffect(() => {
    if (shouldLoad && !isOpen) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 1000);

      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 6000);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [shouldLoad, isOpen]);

  if (!shouldLoad) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-56 p-3 glass-card text-sm text-foreground mb-2"
          >
            <p className="font-medium mb-1">Need help?</p>
            <p className="text-muted-foreground text-xs">
              Ask about tracking, pricing, or book a demo
            </p>
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-3 h-3 bg-card border-r border-b border-border" />
          </motion.div>
        )}

        {/* Chat Window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 h-[450px] glass-card overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Onetracker AI</h3>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Chat Content - Lazy Loaded */}
            <Suspense
              fallback={
                <div className="flex-1 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
                </div>
              }
            >
              <ChatContent />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpen}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          isOpen
            ? 'bg-muted text-muted-foreground'
            : 'bg-primary text-primary-foreground'
        }`}
        style={{
          boxShadow: isOpen ? undefined : '0 0 20px hsl(var(--primary) / 0.4)',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
