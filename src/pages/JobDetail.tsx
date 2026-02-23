import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Briefcase, DollarSign, Calendar, Users, CheckCircle, Send } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const jobOpenings: Record<string, {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  teamSize: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}> = {
  'senior-frontend-engineer': {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$150,000 - $200,000',
    experience: '5+ years',
    teamSize: '8 engineers',
    postedDate: 'Feb 1, 2024',
    description: 'We are looking for a Senior Frontend Engineer to join our Platform team. You will be responsible for building and maintaining our customer-facing applications, working closely with design and product teams to deliver exceptional user experiences.',
    responsibilities: [
      'Lead the development of new features and improvements to our web platform',
      'Mentor junior engineers and conduct code reviews',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Optimize application performance and ensure accessibility',
      'Contribute to architectural decisions and technical roadmap',
      'Write clean, maintainable, and well-tested code'
    ],
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong understanding of modern frontend architecture patterns',
      'Experience with state management solutions (Redux, Zustand, etc.)',
      'Proficiency in CSS/Tailwind and responsive design',
      'Experience with testing frameworks (Jest, Cypress, Playwright)',
      'Excellent communication and collaboration skills'
    ],
    niceToHave: [
      'Experience with Three.js or WebGL',
      'Knowledge of logistics or supply chain domain',
      'Experience with GraphQL and real-time applications',
      'Contributions to open-source projects'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Remote-first culture with flexible hours',
      'Comprehensive health, dental, and vision insurance',
      'Unlimited PTO policy',
      '$3,000 annual learning & development budget',
      'Home office setup allowance'
    ]
  },
  'ml-engineer-route-optimization': {
    title: 'ML Engineer - Route Optimization',
    department: 'AI/ML',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$180,000 - $250,000',
    experience: '4+ years',
    teamSize: '5 engineers',
    postedDate: 'Jan 28, 2024',
    description: 'Join our AI/ML team to build the next generation of route optimization algorithms. You will work on complex optimization problems that directly impact millions of deliveries worldwide.',
    responsibilities: [
      'Design and implement ML models for route optimization',
      'Work with large-scale geospatial and time-series data',
      'Collaborate with engineering teams to deploy models to production',
      'Research and prototype new optimization techniques',
      'Analyze model performance and iterate on improvements',
      'Contribute to our ML infrastructure and best practices'
    ],
    requirements: [
      'MS/PhD in Computer Science, Operations Research, or related field',
      '4+ years of experience in machine learning',
      'Strong background in optimization algorithms (OR, RL, etc.)',
      'Proficiency in Python and ML frameworks (PyTorch, TensorFlow)',
      'Experience with production ML systems',
      'Strong mathematical and analytical skills'
    ],
    niceToHave: [
      'Experience with vehicle routing problems (VRP)',
      'Knowledge of graph neural networks',
      'Experience with real-time optimization systems',
      'Publications in relevant conferences (NeurIPS, ICML, etc.)'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Hybrid work model (3 days in office)',
      'Comprehensive health benefits',
      'Conference attendance and paper publication support',
      'Cutting-edge ML infrastructure',
      'Visa sponsorship available'
    ]
  },
  'product-manager-platform': {
    title: 'Product Manager - Platform',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140,000 - $180,000',
    experience: '5+ years',
    teamSize: '12 members',
    postedDate: 'Jan 25, 2024',
    description: 'We are seeking a Product Manager to own our core platform products. You will define the product roadmap, work with engineering to build features, and ensure we are solving real customer problems.',
    responsibilities: [
      'Define and own the product roadmap for platform features',
      'Conduct customer research and translate insights into requirements',
      'Work closely with engineering, design, and sales teams',
      'Define success metrics and track product performance',
      'Prioritize features based on business impact and customer value',
      'Communicate product strategy to stakeholders'
    ],
    requirements: [
      '5+ years of product management experience',
      'Experience with B2B SaaS products',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication',
      'Technical background or ability to work closely with engineers',
      'Experience with agile development methodologies'
    ],
    niceToHave: [
      'Experience in logistics or supply chain industry',
      'Background in data products or analytics',
      'MBA or relevant advanced degree',
      'Experience with API products'
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first with optional office access',
      'Comprehensive benefits package',
      'Quarterly team offsites',
      'Professional development opportunities',
      'Parental leave'
    ]
  },
  'enterprise-account-executive': {
    title: 'Enterprise Account Executive',
    department: 'Sales',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$130,000 - $160,000 + Commission',
    experience: '6+ years',
    teamSize: '15 sales reps',
    postedDate: 'Jan 20, 2024',
    description: 'We are looking for an Enterprise Account Executive to drive revenue growth with Fortune 500 companies. You will manage complex sales cycles and build relationships with C-level executives.',
    responsibilities: [
      'Own the full sales cycle for enterprise accounts',
      'Build relationships with C-level and VP-level executives',
      'Develop account strategies and territory plans',
      'Collaborate with solution engineers on technical demos',
      'Negotiate complex enterprise contracts',
      'Achieve and exceed quarterly revenue targets'
    ],
    requirements: [
      '6+ years of enterprise software sales experience',
      'Track record of exceeding quota',
      'Experience selling to logistics or supply chain companies',
      'Strong presentation and negotiation skills',
      'Ability to navigate complex organizations',
      'CRM proficiency (Salesforce preferred)'
    ],
    niceToHave: [
      'Existing relationships in logistics industry',
      'Experience with land-and-expand sales motions',
      'Technical background or certifications',
      'Multi-language capabilities'
    ],
    benefits: [
      'Competitive base + uncapped commission',
      'President\'s Club recognition',
      'Comprehensive health benefits',
      'Expense account',
      'Sales enablement training',
      'Career advancement opportunities'
    ]
  },
  'customer-success-manager': {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    salary: '$90,000 - $120,000',
    experience: '3+ years',
    teamSize: '10 CSMs',
    postedDate: 'Jan 18, 2024',
    description: 'Join our Customer Success team to ensure our customers achieve their goals with our platform. You will be the trusted advisor for a portfolio of enterprise accounts.',
    responsibilities: [
      'Manage a portfolio of enterprise customer accounts',
      'Drive product adoption and customer satisfaction',
      'Conduct business reviews and success planning',
      'Identify expansion opportunities and reduce churn',
      'Advocate for customers internally',
      'Create customer success playbooks and best practices'
    ],
    requirements: [
      '3+ years in customer success or account management',
      'Experience with enterprise B2B SaaS',
      'Strong relationship-building skills',
      'Data-driven approach to customer health',
      'Excellent presentation skills',
      'Technical aptitude'
    ],
    niceToHave: [
      'Experience in logistics or operations',
      'Knowledge of customer success platforms (Gainsight, etc.)',
      'Project management certification',
      'Multi-language capabilities'
    ],
    benefits: [
      'Competitive salary + bonus',
      'Remote work flexibility',
      'Comprehensive health benefits',
      'Professional development budget',
      'Wellness programs',
      'Team events'
    ]
  },
  'devops-engineer': {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    salary: '$140,000 - $180,000',
    experience: '4+ years',
    teamSize: '6 engineers',
    postedDate: 'Jan 15, 2024',
    description: 'We are looking for a DevOps Engineer to help us scale our infrastructure and improve developer productivity. You will work on our cloud infrastructure, CI/CD pipelines, and observability stack.',
    responsibilities: [
      'Design and maintain cloud infrastructure (AWS/GCP)',
      'Build and improve CI/CD pipelines',
      'Implement infrastructure as code (Terraform, Pulumi)',
      'Manage Kubernetes clusters and container orchestration',
      'Improve system reliability and observability',
      'Support development teams with tooling and automation'
    ],
    requirements: [
      '4+ years of DevOps/SRE experience',
      'Strong experience with AWS or GCP',
      'Proficiency with Kubernetes and Docker',
      'Experience with IaC tools (Terraform preferred)',
      'Scripting skills (Python, Bash)',
      'Understanding of security best practices'
    ],
    niceToHave: [
      'Experience with service mesh (Istio, Linkerd)',
      'Knowledge of GitOps practices',
      'Experience with high-scale systems',
      'Relevant certifications (AWS, CKA, etc.)'
    ],
    benefits: [
      'Competitive salary and equity',
      'Remote-first culture',
      'Comprehensive health benefits',
      'Conference and certification budget',
      'Flexible hours',
      'Home office setup allowance'
    ]
  }
};

export default function JobDetail() {
  const { jobId } = useParams<{ jobId: string }>();
  const job = jobId ? jobOpenings[jobId] : null;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. Our team will review your application and get back to you soon.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-12 bg-card border-b border-border">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/careers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Careers
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                {job.department}
              </span>
              <span className="text-sm text-muted-foreground">Posted {job.postedDate}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {job.experience}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {job.teamSize}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-10"
            >
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About the Role</h2>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to Have */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Nice to Have</h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Benefits & Perks</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 glass-card p-4">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 glass-card p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Apply for this Role</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio / Website</Label>
                    <Input id="portfolio" type="url" placeholder="https://..." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume / CV *</Label>
                    <Input id="resume" type="file" accept=".pdf,.doc,.docx" required className="cursor-pointer" />
                    <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cover">Cover Letter</Label>
                    <Textarea 
                      id="cover" 
                      placeholder="Tell us why you're interested in this role..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Application
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
