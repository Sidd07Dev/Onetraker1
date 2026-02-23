import { motion } from 'framer-motion';
import { Shield, Lock, FileCheck, Server, Eye, AlertTriangle, Check } from 'lucide-react';

const certifications = [
  { name: 'SOC 2 Type II', description: 'Annual audit of security controls' },
  { name: 'ISO 27001', description: 'Information security management' },
  { name: 'GDPR Compliant', description: 'EU data protection standards' },
  { name: 'CCPA Compliant', description: 'California privacy law' },
  { name: 'HIPAA Ready', description: 'Healthcare data protection' },
  { name: 'PCI DSS', description: 'Payment card security' },
];

const practices = [
  {
    icon: Lock,
    title: 'Encryption Everywhere',
    description: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We use end-to-end encryption for sensitive data.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Hosted on enterprise-grade cloud infrastructure with multi-region redundancy and automatic failover.',
  },
  {
    icon: Eye,
    title: 'Access Controls',
    description: 'Role-based access control (RBAC), multi-factor authentication, and detailed audit logging for all actions.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description: '24/7 security monitoring with automated threat detection and a dedicated incident response team.',
  },
  {
    icon: FileCheck,
    title: 'Regular Audits',
    description: 'Annual third-party penetration testing and continuous vulnerability scanning.',
  },
  {
    icon: Shield,
    title: 'Data Privacy',
    description: 'Privacy-by-design architecture with data minimization, retention policies, and user consent management.',
  },
];

export default function Trust() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-bg">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="data-tag mb-4 inline-flex">
              <Shield className="w-3 h-3" />
              Enterprise Security
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Trust &{' '}
              <span className="text-gradient-secondary">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your data security is our top priority. Learn about our comprehensive security practices and certifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Certifications & Compliance
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{cert.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-4"
          >
            Security Practices
          </motion.h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            We implement industry-leading security practices to protect your data at every level.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  <practice.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Security?</h2>
          <p className="text-muted-foreground mb-6">
            Our security team is happy to discuss your specific requirements and provide detailed documentation.
          </p>
          <a href="mailto:security@onetracker.ai" className="text-primary hover:underline">
            security@onetracker.ai
          </a>
        </div>
      </section>
    </div>
  );
}
