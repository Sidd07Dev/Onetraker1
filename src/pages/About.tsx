import { motion } from 'framer-motion';
import { Target, Eye, Heart, Clock, Users, Globe, Rocket, Award } from 'lucide-react';
import { OptimizedImage } from '@/components/ui/OptimizedImage';

const timeline = [
  { year: '2019', title: 'Founded', description: 'Started with a vision to transform last-mile delivery.' },
  { year: '2020', title: 'First Million', description: 'Processed our first million deliveries.' },
  { year: '2021', title: 'Series A', description: 'Raised $25M to expand AI capabilities.' },
  { year: '2022', title: 'Global Expansion', description: 'Launched in 20+ countries.' },
  { year: '2023', title: '500+ Enterprise Clients', description: 'Trusted by industry leaders worldwide.' },
  { year: '2024', title: '10M Daily Deliveries', description: 'Powering logistics at scale.' },
];

const values = [
  { icon: Target, title: 'Customer First', description: 'Every decision starts with how it helps our customers succeed.' },
  { icon: Eye, title: 'Transparency', description: 'Clear communication, honest pricing, open about our roadmap.' },
  { icon: Heart, title: 'Care', description: 'We care deeply about our team, customers, and the communities we serve.' },
  { icon: Clock, title: 'Speed', description: 'Move fast, iterate quickly, deliver value continuously.' },
];

const team = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: 'Former VP at Amazon Logistics'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO & Co-founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face',
    bio: 'Ex-Google, AI/ML Expert'
  },
  {
    name: 'Marcus Johnson',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Built logistics systems at FedEx'
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Product',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face',
    bio: 'Product leader from Uber Freight'
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=600&fit=crop"
            alt="Logistics background"
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
              <Rocket className="w-3 h-3" />
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Building the Future of{' '}
              <span className="text-gradient-secondary">Logistics</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make every delivery faster, smarter, and more sustainable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <Target className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower businesses of all sizes with intelligent logistics technology that 
                reduces costs, improves efficiency, and delights customers with faster, 
                more reliable deliveries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <Eye className="w-10 h-10 text-secondary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                A world where every package reaches its destination through the most 
                efficient, sustainable route possible—powered by AI that continuously 
                learns and improves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="data-tag mb-4 inline-flex">
              <Users className="w-3 h-3" />
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all">
                  <OptimizedImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-xs text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="data-tag mb-4 inline-flex">
              <Award className="w-3 h-3" />
              Milestones
            </span>
            <h2 className="text-3xl font-bold">Our Journey</h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-lg font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-0.5 h-16 bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="glass-card p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">200+</p>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            <div>
              <Globe className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">45+</p>
              <p className="text-muted-foreground">Countries</p>
            </div>
            <div>
              <Target className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">$50M+</p>
              <p className="text-muted-foreground">Funding Raised</p>
            </div>
            <div>
              <Heart className="w-8 h-8 text-secondary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground">500+</p>
              <p className="text-muted-foreground">Enterprise Clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
