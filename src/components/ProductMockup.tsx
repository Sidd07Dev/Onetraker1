import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

interface ProductMockupProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3";
}

export function ProductMockup({
  src,
  alt,
  aspectRatio = "16/9",
}: ProductMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative w-full"
    >
      {/* Subtle background glow */}
      <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.15),transparent_70%)] blur-3xl pointer-events-none" />

      {/* Image Container */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio }}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background/40 to-transparent pointer-events-none" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

        {/* Soft Edge Blur */}
        <div className="absolute inset-0 ring-1 ring-border/30 rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  );
}