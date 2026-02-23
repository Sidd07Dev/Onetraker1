import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Coffee, Zap, Globe, Users, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const benefits = [
  { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health, dental, and vision coverage for you and your family.' },
  { icon: Coffee, title: 'Flexible Work', description: 'Remote-first culture with flexible hours and work-from-anywhere policy.' },
  { icon: Zap, title: 'Growth & Learning', description: 'Annual learning budget, conference attendance, and career development programs.' },
  { icon: Globe, title: 'Global Team', description: 'Work with talented people from 20+ countries building the future of logistics.' },
];

const openings = [
  { id: 'senior-frontend-engineer', title: 'Senior Frontend Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
  { id: 'ml-engineer-route-optimization', title: 'ML Engineer - Route Optimization', department: 'AI/ML', location: 'San Francisco, CA', type: 'Full-time' },
  { id: 'product-manager-platform', title: 'Product Manager - Platform', department: 'Product', location: 'Remote', type: 'Full-time' },
  { id: 'enterprise-account-executive', title: 'Enterprise Account Executive', department: 'Sales', location: 'New York, NY', type: 'Full-time' },
  { id: 'customer-success-manager', title: 'Customer Success Manager', department: 'Customer Success', location: 'Remote', type: 'Full-time' },
  { id: 'devops-engineer', title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
];

const cultureImages = [
  'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerv8zF3YLsuHNqj2Sm5V_6O-35g1r7MPnimmCJIGLPwTtykjx3nD0HFQLrp1lY7SYPdn0htkBbzO_ypo9mPzuKRfYD-JSGGp0UlRZGSo8o1WKNxuR_A7HIxfCwjovsfskn5o1ZH=s1360-w1360-h1020-rw',
 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerv8zF3YLsuHNqj2Sm5V_6O-35g1r7MPnimmCJIGLPwTtykjx3nD0HFQLrp1lY7SYPdn0htkBbzO_ypo9mPzuKRfYD-JSGGp0UlRZGSo8o1WKNxuR_A7HIxfCwjovsfskn5o1ZH=s1360-w1360-h1020-rw',
 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerv8zF3YLsuHNqj2Sm5V_6O-35g1r7MPnimmCJIGLPwTtykjx3nD0HFQLrp1lY7SYPdn0htkBbzO_ypo9mPzuKRfYD-JSGGp0UlRZGSo8o1WKNxuR_A7HIxfCwjovsfskn5o1ZH=s1360-w1360-h1020-rw',
 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerv8zF3YLsuHNqj2Sm5V_6O-35g1r7MPnimmCJIGLPwTtykjx3nD0HFQLrp1lY7SYPdn0htkBbzO_ypo9mPzuKRfYD-JSGGp0UlRZGSo8o1WKNxuR_A7HIxfCwjovsfskn5o1ZH=s1360-w1360-h1020-rw'
];

export default function Careers() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&h=600&fit=crop"
            alt="Office culture"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="data-tag mb-4 inline-flex">
              <Briefcase className="w-3 h-3" />
              We're Hiring
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Build the Future of{' '}
              <span className="text-gradient-secondary">Logistics</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join a team of passionate builders transforming how the world moves goods.
            </p>
            <Button size="lg" asChild>
              <a href="#openings">View Open Roles</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Culture Images */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cultureImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg overflow-hidden aspect-video"
              >
                <OptimizedImage
                  src={image}
                  alt={`Team culture ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="data-tag mb-4 inline-flex">
              <Rocket className="w-3 h-3" />
              Benefits
            </span>
            <h2 className="text-3xl font-bold">Why Join Onetracker?</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="section-container">
          <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">200+</p>
              <p className="text-muted-foreground text-sm">Team Members</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">20+</p>
              <p className="text-muted-foreground text-sm">Countries</p>
            </div>
            <div>
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">4.8/5</p>
              <p className="text-muted-foreground text-sm">Glassdoor Rating</p>
            </div>
            <div>
              <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">95%</p>
              <p className="text-muted-foreground text-sm">Employee Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="openings" className="py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="data-tag mb-4 inline-flex">
              <Briefcase className="w-3 h-3" />
              Open Roles
            </span>
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/careers/${job.id}`}
                  className="block glass-card-hover p-6 group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs">{job.department}</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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
