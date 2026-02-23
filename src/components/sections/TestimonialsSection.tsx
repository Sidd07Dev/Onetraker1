import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useMemo } from "react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";

const testimonials = [
  {
    quote:
      "Onetracker reduced our delivery costs by 35% while improving on-time rates to 99.4%. The AI route optimization is genuinely transformative.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "FastMart",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote:
      "The real-time visibility and predictive ETAs have eliminated customer complaints about delivery timing. Our NPS jumped 40 points.",
    author: "Michael Torres",
    role: "Director of Logistics",
    company: "UrbanEats",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote:
      "We went from managing 3 separate delivery systems to one unified platform. The operational simplicity alone paid for itself in months.",
    author: "Priya Sharma",
    role: "CTO",
    company: "QuickCommerce",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const companyLogos = [
  {
    name: "M3Logistics",
    logo: "https://m3logistics.com/wp-content/uploads/2019/01/M3-Logo.jpg.webp",
  },
  {
    name: "GlobalMart",
    logo:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=80&fit=crop",
  },
  {
    name: "SwiftShip",
    logo:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=80&fit=crop",
  },
  {
    name: "MegaRetail",
    logo:
      "https://images.unsplash.com/photo-1581092919535-7146ff1fdf03?w=200&h=80&fit=crop",
  },
  {
    name: "FreshDirect",
    logo:
      "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=200&h=80&fit=crop",
  },
  {
    name: "CloudLogistics",
    logo:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=80&fit=crop",
  },
];

export function TestimonialsSection() {
  const duplicatedLogos = useMemo(
    () => [...companyLogos, ...companyLogos],
    []
  );

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="section-container max-w-8xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="text-gradient-secondary">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how enterprises are transforming their logistics operations with
            Onetracker.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <Quote className="w-8 h-8 text-primary/40 mb-4" />

              <p className="text-foreground flex-1 mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <OptimizedImage
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                    showSkeleton={false}
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dual Row Infinite Logos */}
        <div className="relative mt-24 overflow-hidden">

          <p className="text-sm text-muted-foreground mb-10 text-center">
            Powering logistics for leading companies worldwide
          </p>

          {/* Gradient edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="space-y-10">

            {/* TOP ROW → LEFT */}
            <motion.div
              className="flex gap-20 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 32,
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((company, index) => (
                <LogoItem
                  key={`top-${company.name}-${index}`}
                  company={company}
                />
              ))}
            </motion.div>

            {/* BOTTOM ROW → RIGHT */}
            <motion.div
              className="flex gap-20 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 24,
                repeat: Infinity,
              }}
            >
              {duplicatedLogos.map((company, index) => (
                <LogoItem
                  key={`bottom-${company.name}-${index}`}
                  company={company}
                />
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

function LogoItem({ company }: { company: { name: string; logo: string } }) {
  return (
    <div className="flex items-center justify-center h-16 opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110">
      <OptimizedImage
        src={company.logo}
        alt={company.name}
        className="h-12 w-auto object-contain"
        showSkeleton={false}
      />
    </div>
  );
}
