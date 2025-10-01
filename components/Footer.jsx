import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Track Order', href: '/track-order' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'FAQ', href: '/faq' },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: '#' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, href: '#' },
    { name: 'YouTube', icon: <FaYoutube className="w-5 h-5" />, href: '#' },
    { name: 'TikTok', icon: <SiTiktok className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="border-t border-border/30 bg-gradient-to-b from-background/80 via-background/90 to-background backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <Image 
                  className="w-8 h-8" 
                  src={assets.logo} 
                  alt="QuickCart Logo" 
                  width={32} 
                  height={32}
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                QuickCart
              </span>
            </div>
            <p className="text-muted-foreground/90 text-sm leading-relaxed font-medium">
              Your premier online shopping destination. We bring you the latest products with fast delivery and exceptional service.
            </p>
            
            {/* Newsletter */}
            <div className="pt-2">
              <h3 className="font-semibold text-foreground/90 mb-3 text-base">Join our newsletter</h3>
              <form className="space-y-2">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 text-foreground placeholder:text-muted-foreground/50 text-sm transition-all shadow-sm"
                    required
                  />
                  <button 
                    type="submit" 
                    className="px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:opacity-90 transition-all text-sm whitespace-nowrap shadow-md hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground/60">We'll never share your email. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground/90 mb-5 uppercase tracking-wider flex items-center after:ml-3 after:flex-1 after:border-t after:border-border/30">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Shop</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    href={link.href}
                    className="text-muted-foreground/90 hover:text-foreground text-sm font-medium transition-all flex items-center group-hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground/90 mb-5 uppercase tracking-wider flex items-center after:ml-3 after:flex-1 after:border-t after:border-border/30">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-pink-500">Company</span>
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    href={link.href}
                    className="text-muted-foreground/90 hover:text-foreground text-sm font-medium transition-all flex items-center group-hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-secondary to-pink-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground/90 mb-5 uppercase tracking-wider flex items-center after:ml-3 after:flex-1 after:border-t after:border-border/30">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Support</span>
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name} className="group">
                  <Link 
                    href={link.href}
                    className="text-muted-foreground/90 hover:text-foreground text-sm font-medium transition-all flex items-center group-hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-border/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground/70 text-xs md:text-sm font-medium">
            &copy; {currentYear} QuickCart. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href} 
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-background border border-border/30 text-muted-foreground/70 hover:text-foreground hover:bg-primary/5 hover:border-primary/20 transition-all hover:scale-105 shadow-sm"
                aria-label={link.name}
              >
                {React.cloneElement(link.icon, { className: 'w-4 h-4' })}
              </a>
            ))}
          </div>
          
          <div className="flex items-center flex-wrap justify-center gap-4 text-xs md:text-sm">
            <Link href="/privacy" className="text-muted-foreground/70 hover:text-foreground transition-colors font-medium hover:underline hover:decoration-primary/50 hover:underline-offset-4">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/30">•</span>
            <Link href="/terms" className="text-muted-foreground/70 hover:text-foreground transition-colors font-medium hover:underline hover:decoration-primary/50 hover:underline-offset-4">
              Terms of Service
            </Link>
            <span className="text-muted-foreground/30">•</span>
            <Link href="/cookies" className="text-muted-foreground/70 hover:text-foreground transition-colors font-medium hover:underline hover:decoration-primary/50 hover:underline-offset-4">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;