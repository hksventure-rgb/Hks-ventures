/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  TrendingUp, 
  PieChart, 
  Coins, 
  Globe, 
  Mail, 
  Phone, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Users,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Equity Markets",
    description: "Expert guidance on stock selection, portfolio management, and long-term wealth creation strategies.",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Mutual Funds",
    description: "Tailored mutual fund investment plans designed to meet your specific financial goals and risk appetite.",
    icon: PieChart,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
  {
    title: "Commodity",
    description: "Strategic consulting for commodity trading including gold, silver, and energy markets.",
    icon: Coins,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  {
    title: "Currency",
    description: "Insights and advisory for forex markets, helping you navigate global currency fluctuations.",
    icon: Globe,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Active Clients", value: "500+" },
  { label: "Assets Managed", value: "₹50Cr+" },
  { label: "Success Rate", value: "98%" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">HKS Venture</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-slate-600 hover:text-brand-accent transition-colors">About</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 bg-brand-primary text-white rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left text-lg font-medium text-slate-900">Home</button>
                <button onClick={() => scrollToSection('services')} className="block w-full text-left text-lg font-medium text-slate-900">Services</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-lg font-medium text-slate-900">About</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-center py-3 bg-brand-primary text-white rounded-xl font-semibold">Contact Us</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <ShieldCheck size={14} />
                  Trusted Financial Advisory
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                  Navigate the Markets with <span className="text-brand-accent">Precision.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  HKS Venture Pvt Ltd provides expert consultancy in Equity, Mutual Funds, Commodities, and Currency markets. We turn market insights into your financial success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                  >
                    Get Expert Advice <ArrowRight size={20} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition-all"
                  >
                    Explore Services
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="glass-card rounded-3xl p-8 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-lg">Market Performance</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                      <div className="w-2 h-2 rounded-full bg-brand-accent"></div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { name: 'Equity Growth', val: '85%', color: 'bg-blue-500' },
                      { name: 'Mutual Fund Stability', val: '92%', color: 'bg-emerald-500' },
                      { name: 'Commodity Returns', val: '78%', color: 'bg-amber-500' }
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{item.name}</span>
                          <span>{item.val}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: item.val }}
                            transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                            className={`h-full ${item.color}`}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-xs text-slate-500 mb-1">Total Assets</div>
                      <div className="text-xl font-bold">₹50.4 Cr</div>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-xs text-slate-500 mb-1">Annual Yield</div>
                      <div className="text-xl font-bold text-emerald-600">+14.2%</div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full -z-10"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-brand-primary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Financial Solutions</h3>
              <p className="text-lg text-slate-600">We offer a wide range of consultancy services to help you build a diversified and resilient investment portfolio.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                >
                  <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center gap-2 text-sm font-bold text-brand-accent hover:gap-3 transition-all">
                    Learn More <ChevronRight size={16} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://picsum.photos/seed/finance/800/800" 
                    alt="Financial Planning" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-3xl max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <BarChart3 size={24} />
                    </div>
                    <div className="font-bold">Data-Driven Insights</div>
                  </div>
                  <p className="text-sm text-slate-600">Our recommendations are backed by rigorous market analysis and real-time data processing.</p>
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.2em] mb-4">About HKS Venture</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">Your Partner in Financial Growth</h3>
                <div className="space-y-6 text-lg text-slate-600">
                  <p>
                    HKS Venture Pvt Ltd was founded with a single mission: to empower investors with the knowledge and strategies needed to excel in the complex world of stock markets.
                  </p>
                  <p>
                    With over a decade of experience, our team of seasoned analysts and consultants work tirelessly to identify opportunities across equity, commodities, and currency markets.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-brand-accent"><ShieldCheck size={20} /></div>
                      <div>
                        <div className="font-bold text-slate-900">Integrity First</div>
                        <div className="text-sm">Transparent and ethical advisory at every step.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-brand-accent"><Users size={20} /></div>
                      <div>
                        <div className="font-bold text-slate-900">Client Centric</div>
                        <div className="text-sm">Your goals are our top priority.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-primary rounded-[3rem] overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/10 -skew-x-12 translate-x-1/4"></div>
              
              <div className="relative z-10 grid lg:grid-cols-2">
                <div className="p-12 lg:p-20">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to grow your wealth?</h2>
                  <p className="text-slate-300 text-lg mb-12 max-w-md">
                    Get in touch with our experts today for a personalized consultation and take the first step towards financial freedom.
                  </p>
                  
                  <div className="space-y-8">
                    <a href="mailto:hksventure@gmail.com" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Email Us</div>
                        <div className="text-white text-xl font-bold">hksventure@gmail.com</div>
                      </div>
                    </a>
                    
                    <a href="tel:7498596354" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-accent transition-colors">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">Call Us</div>
                        <div className="text-white text-xl font-bold">7498596354</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="p-12 lg:p-20 bg-white/5 backdrop-blur-sm border-l border-white/10">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Full Name</label>
                        <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Phone Number</label>
                        <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="+91 00000 00000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Interested In</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors appearance-none">
                        <option className="bg-slate-900">Equity Markets</option>
                        <option className="bg-slate-900">Mutual Funds</option>
                        <option className="bg-slate-900">Commodity</option>
                        <option className="bg-slate-900">Currency</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Message</label>
                      <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors" placeholder="How can we help you?"></textarea>
                    </div>
                    <button className="w-full py-4 bg-brand-accent text-white rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white font-bold">H</div>
                <span className="text-xl font-bold tracking-tight text-slate-900">HKS Venture</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Professional stock market consultancy firm providing expert guidance across multiple financial instruments. Registered office in Mumbai, India.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-slate-900 mb-6">Quick Links</h5>
              <ul className="space-y-4 text-slate-500">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-brand-accent transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-accent transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-brand-accent transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-brand-accent transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-slate-900 mb-6">Legal</h5>
              <ul className="space-y-4 text-slate-500">
                <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-400">
            <div>© 2026 HKS Venture Pvt Ltd. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Twitter</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
