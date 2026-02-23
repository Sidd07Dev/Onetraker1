import { Link } from 'react-router-dom';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Youtube,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

const footerLinks = {
  platform: [
    { label: 'Overview', href: '/platform' },
    { label: 'AI Engine', href: '/platform/ai' },
    { label: 'Integrations', href: '/platform/integrations' },
    { label: 'API Reference', href: '/resources/api' },
  ],
  features: [
    { label: 'Route Optimization', href: '/features/routing' },
    { label: 'Real-time Tracking', href: '/features/tracking' },
    { label: 'Analytics Dashboard', href: '/features/analytics' },
    { label: 'Proof of Delivery', href: '/features/pod' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/resources/docs' },
    { label: 'Case Studies', href: '/resources/cases' },
    { label: 'Help Center', href: '/resources/help' },
    { label: 'Status', href: '/status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Trust & Security', href: '/trust' },
    { label: 'GDPR', href: '/gdpr' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/onetracker', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com/company/onetracker', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/onetracker', label: 'GitHub' },
  { icon: Youtube, href: 'https://youtube.com/@onetracker', label: 'YouTube' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
            
              <img src="/logo.png" alt="Onetracker" className="h-6 w-auto" />
           
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              The intelligent fulfillment platform for modern logistics operations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Features</h4>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="border-t border-border">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="mailto:hello@onetracker.ai" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@onetracker.ai
              </a>
              <a href="tel:+1-800-ONE-TRAK" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                1-800-ONE-TRAK
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                San Francisco, CA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border bg-background">
        <div className="section-container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Onetracker. All rights reserved.</p>
            <p>SOC 2 Type II Certified • GDPR Compliant • ISO 27001</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
