import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Truck, 
  Smartphone, 
  Route, 
  Package, 
  BarChart3, 
  MapPin, 
  Bike, 
  Plane, 
  ShoppingCart, 
  Warehouse, 
  Store,
  Navigation,
  Radio,
  PieChart,
  FileCheck,
  BookOpen,
  Newspaper,
  FolderOpen,
  Code,
  Building,
  Users,
  Mail,
  Shield
} from 'lucide-react';
import { BookDemoModal } from '@/components/BookDemoModal';

const platformItems = [
  { 
    label: 'Delivery Management', 
    href: '/platform/delivery-management',
    icon: Truck,
    description: 'End-to-end delivery orchestration'
  },
  { 
    label: 'Mobile App', 
    href: '/platform/mobile-app',
    icon: Smartphone,
    description: 'Driver & customer mobile solutions'
  },
  { 
    label: 'Optimizer', 
    href: '/platform/optimizer',
    icon: Route,
    description: 'Smart route optimization'
  },
  { 
    label: 'Multicarrier Shipping', 
    href: '/platform/multicarrier',
    icon: Package,
    description: 'Unified carrier management'
  },
  { 
    label: 'Product Insights', 
    href: '/platform/insights',
    icon: BarChart3,
    description: 'Analytics & business intelligence'
  },
];

const industryItems = [
  { 
    label: 'Last Mile Delivery', 
    href: '/industries/last-mile',
    icon: MapPin,
    description: 'Final-mile delivery excellence'
  },
  { 
    label: 'Couriers', 
    href: '/industries/couriers',
    icon: Bike,
    description: 'Courier fleet management'
  },
  { 
    label: 'Express & Parcel', 
    href: '/industries/express-parcel',
    icon: Plane,
    description: 'High-speed delivery networks'
  },
  { 
    label: 'Retail & Ecommerce', 
    href: '/industries/retail-ecommerce',
    icon: ShoppingCart,
    description: 'Omnichannel fulfillment'
  },
  { 
    label: 'Logistics & 3PL', 
    href: '/industries/logistics-3pl',
    icon: Warehouse,
    description: 'Third-party logistics solutions'
  },
  { 
    label: 'Hyperlocal Commerce', 
    href: '/industries/hyperlocal',
    icon: Store,
    description: 'On-demand local delivery'
  },
];



const resourcesItems = [
  { 
    label: 'Documentation', 
    href: '/resources/docs',
    icon: BookOpen,
    description: 'Guides and tutorials'
  },
  { 
    label: 'Blog', 
    href: '/blog',
    icon: Newspaper,
    description: 'Industry insights'
  },
  { 
    label: 'API Reference', 
    href: '/resources/api',
    icon: Code,
    description: 'Developer documentation'
  },
];

const companyItems = [
  { 
    label: 'About Us', 
    href: '/about',
    icon: Building,
    description: 'Our mission and story'
  },
  { 
    label: 'Careers', 
    href: '/careers',
    icon: Users,
    description: 'Join our team'
  },
  { 
    label: 'Contact', 
    href: '/contact',
    icon: Mail,
    description: 'Get in touch'
  },
  { 
    label: 'Trust & Security', 
    href: '/trust',
    icon: Shield,
    description: 'Compliance & certifications'
  },
];

const navLinks = [
  { 
    label: 'Platform', 
    href: '/platform',
    submenu: platformItems,
    isMega: true
  },
  { 
    label: 'Industries', 
    href: '/industries',
    submenu: industryItems,
    isMega: true
  },
  
  { 
    label: 'Resources', 
    href: '/resources',
    submenu: resourcesItems,
    isMega: true
  },
  { 
    label: 'Company', 
    href: '/about',
    submenu: companyItems,
    isMega: true
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setExpandedMobileSection(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
         <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Onetracker" className="h-6 w-auto" />
            </Link>

             

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
               <Link
                    to="/"
                    className="nav-link px-4 py-2 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Home
                  
                  </Link>
                   <Link
                    to="/features"
                    className="nav-link px-4 py-2 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  
                  </Link>
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  
                  <Link
                    to={link.href}
                    className="nav-link px-4 py-2 flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="w-3 h-3" />}
                  </Link>
                  
                  {/* Mega Dropdown for all menus with icons */}
                  <AnimatePresence>
                    {link.submenu && link.isMega && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      >
                        <div className="glass-card p-4 min-w-[400px] bg-popover/95 backdrop-blur-xl border border-border shadow-xl">
                          <div className="grid grid-cols-1 gap-1">
                            {link.submenu.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-muted transition-colors group"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Icon className="w-5 h-5 text-primary" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-foreground">{item.label}</div>
                                    <div className="text-xs text-muted-foreground">{item.description}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <Link to="https://app.onetracker.ai">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Button size="sm" onClick={() => setDemoModalOpen(true)}>
                Book a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                className="p-2 text-foreground"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border max-h-[80vh] overflow-y-auto"
            >
             
              <div className="section-container py-4 space-y-2">
                 <Link
                    to="/"
                    className="w-full flex items-center justify-between py-2 text-foreground font-medium"
                  >
                    Home
                  
                  </Link>
                   <Link
                    to="/features"
                    className="w-full flex items-center justify-between py-2 text-foreground font-medium"
                  >
                    Features
                  
                  </Link>
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <button
                      onClick={() => {
                        if (link.submenu) {
                          setExpandedMobileSection(
                            expandedMobileSection === link.label ? null : link.label
                          );
                        }
                      }}
                      className="w-full flex items-center justify-between py-2 text-foreground font-medium"
                    >
                      <Link to={link.href} onClick={(e) => link.submenu && e.preventDefault()}>
                        {link.label}
                      </Link>
                      {link.submenu && (
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            expandedMobileSection === link.label ? 'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {link.submenu && expandedMobileSection === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {link.submenu.map((item) => {
                              const Icon = item.icon;
                              return (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                                >
                                  <Icon className="w-4 h-4 text-primary" />
                                  <span>{item.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-4 border-t border-border space-y-3">
                  <Link to="/login" className="block">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Button className="w-full" onClick={() => setDemoModalOpen(true)}>
                    Book a Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <BookDemoModal open={demoModalOpen} onOpenChange={setDemoModalOpen} />
    </>
  );
}
