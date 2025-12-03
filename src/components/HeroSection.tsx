import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-education.jpg';
import { scrollToTop } from '@/utils/scrollToTop';
import { Video, Briefcase, Award, Users } from 'lucide-react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.hero-animate');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-[fadeInScale_1s_ease-out_both]');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  const trustBadges = [
    {
      title: 'Live Classes',
      description: 'Interactive learning sessions',
      icon: Video
    },
    {
      title: 'Internships',
      description: 'Real-world experience',
      icon: Briefcase
    },
    {
      title: 'Certificates',
      description: 'Industry recognized',
      icon: Award
    },
    {
      title: 'Mentors',
      description: 'Expert guidance',
      icon: Users
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      />
      <div ref={sectionRef} className="container px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 hero-animate opacity-0">
            <div className="space-y-4">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight group">
                Where learning meets limitless possibilities.
              </h1>
              
              <div className="text-xl text-muted-foreground max-w-2xl space-y-4">
                <p>
                  At SkillNexa, we believe that the future belongs to those who never stop learning. We are more than an edtech platform—we are a movement to transform knowledge into action, and ambition into achievement.
                </p>
                <p>
                  Because at SkillNexa, it's not just about learning—it's about becoming the best version of yourself.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto hover:scale-110 hover:shadow-xl hover:shadow-primary/50 hover:brightness-125 transition-all duration-300">
                Create Your Free Account
              </Button>
              <Link to="/courses" onClick={scrollToTop}>
                <Button variant="outline" size="lg" className="text-sm sm:text-lg px-6 sm:px-8 w-full sm:w-auto hover:scale-110 hover:shadow-lg transition-all duration-300">
                  View Courses
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center space-y-2 group hover:scale-110 hover:rounded-lg hover:p-4 transition-all duration-500">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <badge.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm group-hover:text-primary group-hover:scale-105 transition-all duration-500">{badge.title}</h3>
                    <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-500">{badge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hero-animate opacity-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group hover:scale-105 transition-transform duration-700">
              <img 
                src={heroImage}
                alt="Students learning online with modern technology"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-lg p-4 shadow-lg hover:scale-110 hover:rotate-3 transition-all duration-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-500">50K+</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">Happy Students</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card border rounded-lg p-4 shadow-lg hover:scale-110 hover:-rotate-3 transition-all duration-500">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-500">95%</div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}