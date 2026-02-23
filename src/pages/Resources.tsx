import { motion } from 'framer-motion';
import { Book, FileText, Code, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    icon: Book,
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials to get you started quickly.',
    href: '/resources/docs',
    items: ['Getting Started', 'API Reference', 'SDK Libraries', 'Webhooks'],
  },
 
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation with examples and code snippets.',
    href: 'https://api-docs.onetraker.com/',
    items: ['REST API', 'GraphQL', 'Webhooks', 'SDKs'],
  },
 
];

export default function Resources() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Resources &{' '}
              <span className="text-gradient-secondary">Documentation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to integrate, optimize, and scale with Onetracker.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={resource.href} className="block glass-card-hover p-8 h-full group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {resource.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {resource.items.map((item) => (
                          <span key={item} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
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
