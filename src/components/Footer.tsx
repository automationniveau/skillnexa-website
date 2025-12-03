import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { scrollToTop } from '@/utils/scrollToTop';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/skillnexalogo.png" alt="SKILLneXa" className="h-16" />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Fuel Your Future with SkillNexa</h3>
              <p className="text-muted-foreground">
                From learning to leading—SkillNexa is your launchpad to success.
                Unlock the skills that matter in today's world. Learn trending technologies, sharpen your mindset, and get ahead—while you're still in college.
              </p>
              <Button className="w-full sm:w-auto">
                Start Learning Today
              </Button>
            </div>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" asChild className="p-2 hover:bg-primary/10">
                <a href="https://www.facebook.com/skillnexa09/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="p-2 hover:bg-primary/10">
                <a href="https://x.com/skillnexa09" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="p-2 hover:bg-primary/10">
                <a href="https://www.instagram.com/skillnexa.in/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild className="p-2 hover:bg-primary/10">
                <a href="http://www.youtube.com/@Skillnexa-l4i" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/instructor" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Become an Instructor
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses?category=AI%2FML" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  AI/ML
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Cybersecurity" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Prompt%20Engineering" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Prompt Engineering
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Data%20Science" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Self%20Employment" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Self Employment
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Self%20Employment%20with%20AI" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Self Employment with AI
                </Link>
              </li>
              <li>
                <Link to="/courses?category=Digital%20Marketing%20with%20AI" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  Digital Marketing with AI
                </Link>
              </li>
              <li>
                <Link to="/courses?category=GenAI%20%26%20Multi-Agent%20Systems" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
                  GenAI & Multi-Agent Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">support@skillnexa.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91 9100250060</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  Hyderabad, India
                </span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="space-y-2 pt-4">
              <h4 className="font-medium">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 SkillNexa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-colors" onClick={scrollToTop}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}