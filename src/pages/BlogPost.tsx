import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, Linkedin, Twitter, Facebook, BookOpen } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string; avatar: string };
  image: string;
  content: string[];
}> = {

  'ai-route-optimization-2026': {
    title: 'AI Route Optimization in 2026: The Engine Behind Intelligent Last-Mile Logistics',
    excerpt: 'Explore how AI-powered route orchestration helps logistics enterprises reduce delivery times by up to 30% while cutting fuel and operational costs.',
    category: 'AI & Logistics Technology',
    date: 'Feb 10, 2026',
    readTime: '9 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop',
    content: [
      `Artificial intelligence is no longer experimental in logistics. In 2026, AI-driven route optimization has become the operational backbone of high-performing last-mile networks. What was once considered a premium enhancement is now a baseline requirement for enterprises managing complex delivery ecosystems.`,

      `## The Complexity of Modern Last-Mile Delivery`,
      `Last-mile delivery is the most dynamic and unpredictable segment of the logistics chain. Unlike line-haul transport, last-mile operations operate in urban environments where variability is constant. Traffic congestion, weather disruptions, driver availability, customer time windows, vehicle capacity constraints, and regulatory restrictions all interact in real time.`,

      `Traditional routing systems rely on static algorithms and pre-defined routes. While these systems may work at low scale, they fail dramatically when delivery volumes increase or when unexpected disruptions occur. Enterprises handling thousands of deliveries per day cannot rely on outdated planning logic.`,

      `## Why Static Routing Fails at Scale`,
      `Static route planning assumes stable conditions. But in reality:`,
      `- Traffic patterns shift minute by minute  
- Customers reschedule deliveries  
- Drivers face unexpected delays  
- Urban regulations change dynamically  

Without adaptive intelligence, operations teams are forced into reactive decision-making, increasing costs and reducing SLA performance.`,

      `## How OneTracker’s AI Engine Works`,
      `OneTracker uses multi-layered machine learning models combined with real-time telemetry to continuously optimize delivery routes.`,

      `### 1. Predictive Traffic Modeling`,
      `By analyzing historical delivery data, seasonal patterns, and real-time traffic feeds, the system predicts congestion before it impacts routes.`,

      `### 2. Multi-Constraint Optimization`,
      `The engine simultaneously evaluates:`,
      `- Driver shift limits  
- Vehicle capacity  
- Delivery priority  
- Fuel efficiency  
- Customer time windows  
- Geographic clustering`,

      `Instead of optimizing for distance alone, OneTracker optimizes for total operational efficiency.`,

      `### 3. Continuous Recalculation`,
      `Unlike legacy systems that compute routes once per shift, OneTracker recalculates in real time. If a disruption occurs, the system automatically reassigns deliveries or adjusts routes without manual intervention.`,

      `## Quantifiable Enterprise Impact`,
      `Companies adopting AI route optimization report measurable improvements:`,
      `- Up to 30% reduction in delivery time  
- 25% reduction in fuel consumption  
- 40% improvement in on-time delivery rates  
- 20% increase in deliveries per driver per day`,

      `Beyond cost savings, AI optimization also reduces driver fatigue, improves compliance, and enhances customer satisfaction.`,

      `## Competitive Advantage Through Intelligence`,
      `Logistics is no longer a commodity service. It is a data-driven performance function. Organizations that deploy intelligent routing systems outperform competitors in both cost and reliability.`,

      `AI route optimization is not simply about finding shorter routes — it is about orchestrating an entire logistics network dynamically.`,

      `## The Road Ahead`,
      `As autonomous vehicles, drone delivery, and micro-fulfillment centers become mainstream, route optimization engines will integrate even deeper into the logistics stack. The enterprises that invest in intelligent orchestration today will define industry standards tomorrow.`,

      `AI-powered routing is no longer optional. It is the operational engine of modern logistics.`
    ]
  },

  'sustainable-logistics-2026': {
    title: 'Sustainable Logistics at Scale: Reducing Carbon Without Reducing Efficiency',
    excerpt: 'Learn how logistics enterprises are using intelligent routing and fleet optimization to reduce emissions while maintaining performance.',
    category: 'Sustainability',
    date: 'Feb 05, 2026',
    readTime: '7 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1200&h=600&fit=crop',
    content: [
      `Sustainability has evolved from a marketing narrative to a board-level mandate. In logistics, environmental impact is directly tied to operational efficiency. Enterprises that fail to optimize their logistics footprint face regulatory risks, rising fuel costs, and declining investor confidence.`,

      `## The Environmental Reality of Logistics`,
      `The global logistics sector contributes significantly to carbon emissions. Urban last-mile deliveries alone represent a major portion of transport-related pollution. As cities implement stricter emission standards, companies must rethink their operational strategies.`,

      `## The Hidden Cost of Inefficiency`,
      `Inefficient routing, idle time, partial loads, and failed deliveries all increase emissions unnecessarily. Each additional mile driven multiplies both fuel costs and carbon output.`,

      `Sustainability in logistics is not merely about switching to electric vehicles — it is about systemic optimization.`,

      `## Intelligent Routing as a Sustainability Tool`,
      `AI-powered route optimization reduces total miles driven, minimizes idle time, and ensures optimal load balancing.`,

      `By dynamically clustering deliveries and eliminating unnecessary detours, platforms like OneTracker reduce emissions while maintaining high SLA performance.`,

      `## Fleet Utilization and Emission Reduction`,
      `Smart orchestration enables:`,
      `- Higher vehicle utilization rates  
- Reduced empty return trips  
- Consolidated deliveries  
- Smarter warehouse dispatch timing`,

      `These improvements directly reduce environmental impact without sacrificing speed or reliability.`,

      `## ESG and Investor Expectations`,
      `Environmental, Social, and Governance (ESG) reporting is becoming mandatory in many regions. Logistics performance now influences access to capital, investor trust, and corporate reputation.`,

      `Organizations using intelligent logistics systems gain measurable sustainability metrics that can be reported transparently.`,

      `## Sustainable Logistics as Competitive Strategy`,
      `Companies that integrate sustainability into their operational design benefit from:`,
      `- Reduced operational costs  
- Stronger brand perception  
- Regulatory compliance  
- Future-ready infrastructure`,

      `Sustainable logistics is not about slowing down operations — it is about optimizing intelligently.`,

      `## The Future of Responsible Logistics`,
      `As regulations tighten and consumers demand greener supply chains, intelligent orchestration platforms will play a critical role in reducing environmental impact at scale.`,

      `Sustainability and performance are no longer opposing forces. With AI-driven logistics, they reinforce each other.`,

      `Enterprises that adopt intelligent routing today will lead the transition toward responsible logistics tomorrow.`
    ]
  },

  'warehouse-intelligence': {
    title: 'From Warehouse Automation to Warehouse Intelligence',
    excerpt: 'Why modern fulfillment centers require predictive orchestration — not just robotics.',
    category: 'Operations',
    date: 'Jan 30, 2026',
    readTime: '10 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&h=600&fit=crop',
    content: [
      `Warehouse automation was once considered revolutionary. Conveyor belts, robotic arms, and barcode scanners dramatically improved efficiency over manual systems. But in 2026, automation alone is no longer enough. The next evolution is warehouse intelligence — the ability to predict, adapt, and optimize operations dynamically.`,

      `## From Mechanization to Intelligence`,
      `Early warehouse systems focused on reducing manual labor. Modern systems must optimize decision-making itself. Intelligence means analyzing throughput patterns, predicting bottlenecks, and dynamically reallocating resources before problems occur.`,

      `Automation performs tasks. Intelligence decides how tasks should be performed.`,

      `## The Throughput Challenge`,
      `High-volume warehouses process thousands of SKUs across varying demand cycles. Peak seasons, flash sales, and regional demand shifts create volatility. Without predictive insight, warehouses either overstaff (increasing costs) or understaff (reducing performance).`,

      `## Predictive Throughput Modeling`,
      `OneTracker integrates warehouse data with downstream delivery analytics. By analyzing outbound volume forecasts and route schedules, the system predicts required picking velocity and staging capacity in advance.`,

      `This allows:`,
      `- Proactive labor allocation  
- Dynamic pick-path optimization  
- Reduced staging congestion  
- Improved dock scheduling`,

      `## Integrated Warehouse-to-Delivery Orchestration`,
      `Traditional systems treat warehouse and delivery as separate functions. Intelligent orchestration connects both layers. When route optimization adjusts dispatch timing, warehouse picking sequences update automatically.`,

      `This eliminates:`,
      `- Idle delivery vehicles  
- Delayed departures  
- Dock overcrowding  
- Manual coordination overhead`,

      `## Measurable Benefits`,
      `Enterprises deploying intelligent warehouse orchestration report:`,
      `- 15–25% throughput improvement  
- Reduced picking errors  
- Lower overtime costs  
- Higher on-time dispatch rates`,

      `## The Future of Fulfillment`,
      `The future warehouse will not simply move faster — it will think faster. Intelligence, not just automation, will define competitive advantage.`,

      `Warehouse intelligence ensures speed, scalability, and precision without unnecessary expansion.`
    ]
  },

  'real-time-visibility': {
    title: 'Real-Time Logistics Visibility: The New Enterprise Standard',
    excerpt: 'Discover how unified dashboards and live tracking transform decision-making across logistics networks.',
    category: 'Customer Experience',
    date: 'Jan 25, 2026',
    readTime: '6 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&h=600&fit=crop',
    content: [
      `In modern logistics operations, visibility equals control. Enterprises managing distributed warehouses, fleets, and last-mile networks cannot rely on delayed reporting or fragmented dashboards.`,

      `## The Cost of Operational Blind Spots`,
      `Without real-time insight, minor disruptions escalate into major failures. A delayed dispatch may cascade into missed SLAs. A single traffic incident may impact hundreds of deliveries.`,

      `Reactive operations increase costs and erode customer trust.`,

      `## What Real-Time Visibility Means`,
      `Real-time logistics visibility includes:`,
      `- Live order status tracking  
- Fleet location monitoring  
- Warehouse throughput dashboards  
- Delivery health indicators  
- SLA compliance alerts`,

      `When these insights exist in isolated systems, decision-making slows. Unified visibility transforms operations.`,

      `## OneTracker’s Unified Command Center`,
      `OneTracker consolidates operational data into a centralized dashboard. Instead of switching between warehouse software, fleet trackers, and customer systems, teams access a single real-time orchestration layer.`,

      `## Proactive Decision-Making`,
      `With live data streams, operations teams can:`,
      `- Reroute deliveries instantly  
- Reallocate vehicles dynamically  
- Prevent SLA breaches before they occur  
- Notify customers proactively`,

      `## Customer Impact`,
      `Real-time transparency reduces support inquiries and improves satisfaction. Customers trust brands that provide accurate, timely updates.`,

      `## The Strategic Advantage`,
      `Visibility is not just operational — it is strategic. Organizations that see clearly respond faster and outperform competitors.`,

      `In 2026, unified real-time visibility is the new enterprise standard.`
    ]
  },

  'scaling-logistics-operations': {
    title: 'Scaling Logistics Operations: From 1,000 to 100,000 Deliveries per Day',
    excerpt: 'Lessons from high-growth logistics networks on building scalable infrastructure.',
    category: 'Growth & Strategy',
    date: 'Jan 20, 2026',
    readTime: '8 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    content: [
      `Scaling logistics operations from 1,000 to 100,000 deliveries per day is not linear growth — it is exponential complexity.`,

      `## The Inflection Points of Growth`,
      `Operational thresholds create pressure points:`,
      `- At 1,000 deliveries/day, manual coordination becomes inefficient.  
- At 10,000 deliveries/day, fragmented systems collapse.  
- At 100,000 deliveries/day, only enterprise-grade orchestration survives.`,

      `## Infrastructure vs Intelligence`,
      `Scaling is not just about adding vehicles or warehouses. It requires intelligent infrastructure capable of adapting dynamically to volume spikes.`,

      `## API-First Architecture`,
      `OneTracker’s API-first design allows seamless integration with ERP systems, CRM platforms, warehouse management systems, and third-party carriers.`,

      `Low-latency synchronization ensures real-time alignment across the entire logistics stack.`,

      `## Data-Driven Scaling`,
      `At scale, intuition fails. Data must drive every decision — from driver allocation to warehouse dispatch sequencing.`,

      `## Risk Mitigation at Scale`,
      `Large-scale operations face higher exposure to disruptions. Intelligent orchestration mitigates risk by distributing load dynamically.`,

      `## Sustainable Growth`,
      `True scalability balances performance, cost, and resilience.`,

      `Scaling logistics is not about expanding faster — it is about expanding smarter.`
    ]
  },

  'predictive-eta-modeling': {
    title: 'Predictive ETA Modeling: Delivering Accuracy at Scale',
    excerpt: 'How machine learning improves ETA reliability and strengthens customer trust.',
    category: 'Data & Analytics',
    date: 'Jan 15, 2026',
    readTime: '7 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
    content: [
      `Estimated Time of Arrival (ETA) accuracy has become one of the most critical performance indicators in logistics.`,

      `## Why ETA Accuracy Matters`,
      `Inaccurate ETAs lead to missed deliveries, increased support calls, and declining customer trust.`,

      `## Beyond Simple Time Calculations`,
      `Basic ETA systems rely on static averages. Predictive ETA modeling incorporates:`,
      `- Real-time traffic feeds  
- Historical driver performance  
- Weather forecasts  
- Geographic constraints  
- Delivery density`,

      `## Continuous Model Learning`,
      `Machine learning algorithms improve accuracy over time by analyzing deviations between predicted and actual outcomes.`,

      `## SLA Protection Through Intelligence`,
      `OneTracker recalibrates ETAs dynamically. When disruptions occur, customers receive updated delivery windows instantly.`,

      `## Measurable Business Benefits`,
      `Enterprises see:`,
      `- Higher first-attempt delivery rates  
- Reduced support inquiries  
- Improved NPS scores  
- Stronger brand trust`,

      `Accurate ETAs are not convenience features — they are trust infrastructure.`,

      `Predictive modeling transforms ETA from guesswork into precision forecasting.`
    ]
  },

  'delivery-health-scoring': {
    title: 'Delivery Health Scoring: A New KPI for Logistics Leaders',
    excerpt: 'Why enterprise logistics teams are adopting delivery health metrics to maintain SLA excellence.',
    category: 'Performance Metrics',
    date: 'Jan 10, 2026',
    readTime: '6 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?w=1200&h=600&fit=crop',
    content: [
      `Delivery health scoring introduces a new layer of operational intelligence to logistics networks.`,

      `## Beyond On-Time Metrics`,
      `Traditional KPIs focus solely on on-time performance. Delivery health scoring evaluates broader dimensions:`,
      `- Route adherence  
- Failed delivery frequency  
- SLA variance  
- Customer feedback trends  
- Driver performance patterns`,

      `## Holistic Performance Monitoring`,
      `OneTracker aggregates these variables into a unified health index that updates in real time.`,

      `## Early Warning System`,
      `Instead of identifying failures after they occur, health scoring predicts performance degradation early.`,

      `## Strategic Impact`,
      `Operations leaders gain actionable insight, enabling proactive adjustments before customer impact occurs.`,

      `## Competitive Differentiation`,
      `Organizations that continuously monitor delivery health outperform reactive competitors.`,

      `Delivery health scoring transforms logistics from reactive reporting to predictive performance management.`
    ]
  },

  'api-first-logistics': {
    title: 'Why API-First Logistics Platforms Win in 2026',
    excerpt: 'Modern supply chains demand integration, flexibility, and real-time synchronization.',
    category: 'Technology',
    date: 'Jan 05, 2026',
    readTime: '8 min read',
    author: { name: 'Ankit Yadav', role: 'Admin, OneTracker', avatar: 'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80' },
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&h=600&fit=crop',
    content: [
      `Disconnected logistics systems create operational friction. In 2026, API-first architecture has become the foundation of scalable supply chains.`,

      `## The Integration Challenge`,
      `Enterprises operate across multiple platforms — ERP, CRM, WMS, fleet tracking, and e-commerce systems. Without seamless integration, data silos form.`,

      `## What API-First Means`,
      `API-first platforms are built for interoperability from the ground up. Every function — routing, tracking, analytics — is accessible programmatically.`,

      `## Low-Latency Synchronization`,
      `OneTracker’s API engine delivers sub-200ms response times, enabling real-time orchestration across systems.`,

      `## Accelerated Deployment`,
      `API-driven systems integrate faster with third-party providers, reducing implementation time.`,

      `## Future-Proofing Logistics`,
      `As new technologies emerge, API-first platforms adapt without full system replacement.`,

      `Integration is no longer optional. It is the structural backbone of intelligent logistics.`,

      `API-first architecture ensures resilience, flexibility, and long-term scalability.`
    ]
  }

};


export default function BlogPost() {

  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = Object.entries(blogPosts)
    .filter(([key]) => key !== slug)
    .slice(0, 3);
  // Share Logic
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

  const openShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          url: currentUrl,
        });
      } catch {
        console.log("Share cancelled");
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-12 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="data-tag">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-4xl">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
          >
            <OptimizedImage
              src={post.image}
              alt={post.title}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-8"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                    const [title, ...rest] = paragraph.split('**:');
                    return (
                      <p key={index} className="text-muted-foreground mb-4">
                        <strong className="text-foreground">{title.replace(/\*\*/g, '')}:</strong>
                        {rest.join('**:')}
                      </p>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(Boolean);
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 mb-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-muted-foreground">
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap items-center gap-4">

                  <button
                    onClick={handleNativeShare}
                    className="text-sm text-muted-foreground flex items-center gap-2 hover:text-primary transition"
                  >
                    <Share2 className="w-4 h-4" />
                    Share this article:
                  </button>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => openShare(twitterUrl)}
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => openShare(linkedinUrl)}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => openShare(facebookUrl)}
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    About the Author
                  </h3>
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-foreground">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">{post.author.role}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Related Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map(([key, relatedPost]) => (
                      <Link
                        key={key}
                        to={`/blog/${key}`}
                        className="block group"
                      >
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {relatedPost.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
