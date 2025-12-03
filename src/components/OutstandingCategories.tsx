import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Shield, MessageSquare, BarChart3, Briefcase, Sparkles, Megaphone, Cpu } from 'lucide-react';

const categories = [
  {
    title: 'AI/ML',
    description: 'Master artificial intelligence and machine learning from foundations to advanced applications',
    courses: 3,
    gradient: 'from-blue-500 to-purple-600',
    link: '/courses?category=AI/ML',
    icon: Brain
  },
  {
    title: 'Cybersecurity',
    description: 'Learn ethical hacking, digital forensics, and advanced security techniques',
    courses: 3,
    gradient: 'from-red-500 to-pink-600',
    link: '/courses?category=Cybersecurity',
    icon: Shield
  },
  {
    title: 'Prompt Engineering',
    description: 'Master the art of prompt engineering and AI agent development',
    courses: 3,
    gradient: 'from-green-500 to-teal-600',
    link: '/courses?category=Prompt Engineering',
    icon: MessageSquare
  },
  {
    title: 'Data Science',
    description: 'Build expertise in data analysis, machine learning, and big data technologies',
    courses: 3,
    gradient: 'from-orange-500 to-yellow-600',
    link: '/courses?category=Data Science',
    icon: BarChart3
  },
  {
    title: 'Self Employment',
    description: 'Learn freelancing, entrepreneurship, and building successful businesses',
    courses: 3,
    gradient: 'from-indigo-500 to-blue-600',
    link: '/courses?category=Self Employment',
    icon: Briefcase
  },
  {
    title: 'Self Employment with AI',
    description: 'Leverage AI tools for freelancing and building AI-powered businesses',
    courses: 3,
    gradient: 'from-purple-500 to-pink-600',
    link: '/courses?category=Self Employment with AI',
    icon: Sparkles
  },
  {
    title: 'Digital Marketing with AI',
    description: 'Master AI-powered digital marketing strategies and automation',
    courses: 3,
    gradient: 'from-cyan-500 to-blue-600',
    link: '/courses?category=Digital Marketing with AI',
    icon: Megaphone
  },
  {
    title: 'GenAI & Multi-Agent Systems',
    description: 'Build advanced generative AI applications and multi-agent systems',
    courses: 3,
    gradient: 'from-emerald-500 to-teal-600',
    link: '/courses?category=GenAI & Multi-Agent Systems',
    icon: Cpu
  }
];

export default function OutstandingCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.category-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-[bounceIn_1s_ease-out_both]');
              }, index * 100);
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
  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      />
      <div ref={sectionRef} className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Future-Ready Tracks</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
            <p>
              At SkillNexa, we've curated courses in the most in-demand fields—designed to prepare you for tomorrow's opportunities. From technology and business to creativity and innovation, each track is built to give you practical knowledge, real-world application, and career acceleration.
            </p>
            <p className="text-lg font-medium text-primary">
              Choose your path. Shape your future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {categories.map((category, index) => (
            <Link key={category.title} to={category.link}>
              <Card className="category-card group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 cursor-pointer border-border/60 backdrop-blur-sm bg-white/80 relative overflow-hidden opacity-0 scale-75">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                    <category.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-500">
                    {category.description}
                  </p>
                  
                  <div className="text-xs text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                    {category.courses} levels available
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}