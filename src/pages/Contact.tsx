import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
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
              Get in{' '}
              <span className="text-gradient-secondary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">First Name</label>
                    <Input placeholder="John" className="bg-muted border-border" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-muted border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Company</label>
                  <Input placeholder="Company Name" className="bg-muted border-border" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your logistics needs..." 
                    className="bg-muted border-border min-h-[120px]" 
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:hello@onetracker.ai" className="text-muted-foreground hover:text-primary transition-colors">
                        hello@onetracker.ai
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a href="tel:+1-800-ONE-TRAK" className="text-muted-foreground hover:text-secondary transition-colors">
                        1-800-ONE-TRAK
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Headquarters</p>
                      <p className="text-muted-foreground">
                        123 Innovation Way<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Live Chat</p>
                      <p className="text-muted-foreground">
                        Available Mon-Fri, 9am-6pm PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-card p-6">
                <h3 className="font-semibold text-foreground mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
