import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const posts = [
  {
    slug: 'ai-route-optimization-2026',
    title: 'AI Route Optimization in 2026: The Engine Behind Intelligent Last-Mile Logistics',
    excerpt: 'Explore how AI-powered route orchestration helps logistics enterprises reduce delivery times by up to 30% while cutting fuel and operational costs.',
    category: 'AI & Logistics Technology',
    date: 'Feb 10, 2026',
    readTime: '9 min read',
    featured: true,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop',
  },
  {
    slug: 'sustainable-logistics-2026',
    title: 'Sustainable Logistics at Scale: Reducing Carbon Without Reducing Efficiency',
    excerpt: 'Learn how intelligent routing and fleet optimization reduce emissions while maintaining SLA performance.',
    category: 'Sustainability',
    date: 'Feb 05, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=250&fit=crop',
  },
  {
    slug: 'warehouse-intelligence',
    title: 'From Warehouse Automation to Warehouse Intelligence',
    excerpt: 'Why predictive orchestration is replacing traditional automation in modern fulfillment centers.',
    category: 'Operations',
    date: 'Jan 30, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=250&fit=crop',
  },
  {
    slug: 'real-time-visibility',
    title: 'Real-Time Logistics Visibility: The New Enterprise Standard',
    excerpt: 'Discover how unified dashboards and live delivery tracking transform operational decision-making.',
    category: 'Customer Experience',
    date: 'Jan 25, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=400&h=250&fit=crop',
  },
  {
    slug: 'scaling-logistics-operations',
    title: 'Scaling Logistics Operations: From 1,000 to 100,000 Deliveries per Day',
    excerpt: 'Lessons from high-growth logistics networks on building scalable, API-first infrastructure.',
    category: 'Growth & Strategy',
    date: 'Jan 20, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
  },
  {
    slug: 'predictive-eta-modeling',
    title: 'Predictive ETA Modeling: Delivering Accuracy at Scale',
    excerpt: 'How machine learning improves ETA reliability and protects enterprise SLAs.',
    category: 'Data & Analytics',
    date: 'Jan 15, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
  },
  {
    slug: 'delivery-health-scoring',
    title: 'Delivery Health Scoring: A New KPI for Logistics Leaders',
    excerpt: 'Why enterprise logistics teams are adopting delivery health metrics for proactive SLA management.',
    category: 'Performance Metrics',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=400&h=250&fit=crop',
  },
  {
    slug: 'api-first-logistics',
    title: 'Why API-First Logistics Platforms Win in 2026',
    excerpt: 'Modern supply chains demand integration, flexibility, and low-latency synchronization.',
    category: 'Technology',
    date: 'Jan 05, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&h=250&fit=crop',
  }
];

export default function Blog() {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-bg dark:hero-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Insights &{' '}
              <span className="text-gradient-primary">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert insights on logistics, AI, and the future of delivery operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-card">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${featuredPost.slug}`} className="block glass-card-hover overflow-hidden group">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-auto">
                    <OptimizedImage
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="data-tag">
                        <Tag className="w-3 h-3" />
                        Featured
                      </span>
                      <span className="text-sm text-muted-foreground">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="block glass-card-hover overflow-hidden h-full group">
                  <div className="aspect-video">
                    <OptimizedImage
                      src={post.image}
                      alt={post.title}
                      aspectRatio="video"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-primary font-medium">{post.category}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
