import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, BookOpen, TrendingUp, Star, Shield, Zap, Globe, Target, Heart, Sparkles, Rocket, Crosshair, Handshake, Users2, Flame } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Students',
    description: 'Active learners worldwide'
  },
  {
    icon: Award,
    value: '200+',
    label: 'Mentors',
    description: 'Industry experts'
  },
  {
    icon: TrendingUp,
    value: '85%',
    label: 'Placements',
    description: 'Job placement rate'
  },
  {
    icon: BookOpen,
    value: '1,000+',
    label: 'Classes Completed',
    description: 'Successful sessions'
  }
];

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300',
    description: 'Former Google engineer with 15+ years in EdTech'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Curriculum',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
    description: 'PhD in Computer Science, ex-Stanford professor'
  },
  {
    name: 'Emily Davis',
    role: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
    description: 'Full-stack developer and technical architect'
  },
  {
    name: 'David Wilson',
    role: 'Head of Student Success',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
    description: 'Career coach with 10+ years experience'
  }
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero section animation
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.hero-animate');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-[fadeInScale_1s_ease-out_both]');
              }, index * 200);
            });
            heroObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Stats section animation
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.stat-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-[slideInUp_0.8s_ease-out_both]');
              }, index * 150);
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Vision section animation
    const visionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.vision-animate');
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-[slideInLeft_1s_ease-out_both]');
              }, index * 300);
            });
            visionObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Approach section animation
    const approachObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.approach-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-[slideInRight_0.8s_ease-out_both]');
              }, index * 200);
            });
            approachObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    // Team section animation
    const teamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-[bounceIn_1s_ease-out_both]');
              }, index * 150);
            });
            teamObserver.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    if (heroRef.current) heroObserver.observe(heroRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);
    if (visionRef.current) visionObserver.observe(visionRef.current);
    if (approachRef.current) approachObserver.observe(approachRef.current);
    if (teamRef.current) teamObserver.observe(teamRef.current);

    return () => {
      heroObserver.disconnect();
      statsObserver.disconnect();
      visionObserver.disconnect();
      approachObserver.disconnect();
      teamObserver.disconnect();
    };
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
               style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
          />
          <div ref={heroRef} className="container px-4">
            <div className="text-center mb-12 hero-animate opacity-0">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">About SkillNexa</span>
              </h2>
              <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                  At SkillNexa, we believe the best time to shape your future is now.
                  That's why we bring industry-ready, trending courses specially designed for undergrads like you.
                </p>
                <p>
                  From AI to Digital Marketing, from Data Science to Entrepreneurship—SkillNexa helps you not just learn, but also apply skills that employers love.
                </p>
                <p className="text-lg font-medium text-primary">
                  Because the truth is: Degrees alone don't guarantee success. Skills do.
                  And SkillNexa is where skills meet next-gen learners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-surface py-16">
          <div ref={statsRef} className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Our Impact</span></h2>
              <p className="text-xl text-muted-foreground">
                Real numbers that showcase our commitment to education excellence
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="stat-card text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 opacity-0 translate-y-8">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <stat.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </div>
                    <div className="font-semibold mb-1 group-hover:text-primary group-hover:scale-105 transition-all duration-500">{stat.label}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section ref={visionRef} className="container px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-4xl mx-auto">
              <div className="space-y-6 text-center vision-animate opacity-0 translate-x-8">
                <h2 className="text-3xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Vision</span></h2>
                <p className="text-xl text-muted-foreground">
                  "To be the most trusted edtech partner for students worldwide—bridging the gap between classroom education and real-world success."
                </p>
              </div>
              
              <div className="space-y-6 text-center vision-animate opacity-0 translate-x-8">
                <h2 className="text-3xl font-bold"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Mission</span></h2>
                <p className="text-xl text-muted-foreground">
                  "To bridge the gap between academia and industry by equipping undergraduates with practical, trending skills that accelerate their careers."
                </p>
              </div>
            </div>

            {/* Impact Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-8"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Our Approach</span></h2>
            </div>
            
            <div ref={approachRef} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="approach-card flex items-start gap-4 opacity-0 translate-x-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Students First</h3>
                    <p className="text-muted-foreground">
                      Transforming undergrads into confident, career-ready professionals.
                    </p>
                  </div>
                </div>

                <div className="approach-card flex items-start gap-4 opacity-0 translate-x-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Bridging the Skill Gap</h3>
                    <p className="text-muted-foreground">
                      Delivering trending courses that industries demand today and tomorrow.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Building a Future-Ready Generation</h3>
                    <p className="text-muted-foreground">
                      Creating changemakers, innovators, and leaders who thrive in a fast-changing world.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Beyond Degrees</h3>
                    <p className="text-muted-foreground">
                      Inspiring students to think big, explore new possibilities, and achieve success through skill-based learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section className="relative py-16">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
          <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">What Makes SkillNexa Special</span></h2>
            <div className="text-muted-foreground max-w-4xl mx-auto space-y-4">
              <p>
                At SkillNexa, we don't just teach—we transform the way you learn, grow, and succeed. Here's what sets us apart:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_0s_both] bg-white/85 backdrop-blur rounded-xl">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Sparkles className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">Future-Focused Learning</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  Courses built around what industries demand today and tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_0.15s_both] bg-white/85 backdrop-blur rounded-xl">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Rocket className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">Hands-On Experience</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  Real projects, case studies, and challenges that turn knowledge into action.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_0.3s_both] bg-white/85 backdrop-blur rounded-xl">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Crosshair className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">Career-Driven Approach</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  Every module designed to give you an edge in jobs, startups, and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_0.45s_both] bg-white/85 backdrop-blur rounded-xl">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Handshake className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">Mentorship That Matters</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  Learn directly from experts who've walked the path, not just read the books.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_0.6s_both] bg-white/85 backdrop-blur rounded-xl">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Users2 className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">A Thriving Community</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  Network with ambitious peers, share ideas, and grow together.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_0.75s_both] bg-white/85 backdrop-blur rounded-xl">
              <CardContent className="p-6">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 ring-4 ring-primary/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <Flame className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">Beyond Certificates</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  Gain confidence, adaptability, and the mindset to lead in a changing world.
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-surface py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Our Core Values</span></h2>
              <div className="text-xl text-muted-foreground max-w-4xl mx-auto space-y-4">
                <p>
                  At SkillNexa, everything we do is guided by values that empower learning, growth, and transformation.
                </p>
                <p className="text-lg font-medium text-primary">
                  Our values aren't just words—they're the foundation of how SkillNexa shapes futures.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Excellence in Learning</h3>
                  <p className="text-muted-foreground">
                    We strive to deliver world-class, future-ready courses that inspire confidence and success.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Growth Mindset</h3>
                  <p className="text-muted-foreground">
                    We believe in continuous learning, adaptability, and unlocking new opportunities at every step.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Collaboration & Community</h3>
                  <p className="text-muted-foreground">
                    We grow stronger together, fostering a culture of support, idea-sharing, and collective success.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Innovation at Heart</h3>
                  <p className="text-muted-foreground">
                    We embrace change, challenge norms, and create solutions that prepare learners for tomorrow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Impact-Driven</h3>
                  <p className="text-muted-foreground">
                    Every course, every experience, every interaction is designed to make a real difference in careers and lives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Integrity & Trust</h3>
                  <p className="text-muted-foreground">
                    We build SkillNexa on honesty, transparency, and genuine commitment to our learners' growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Meet Our Team</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate educators and technologists working together to revolutionize online learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="team-card text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 opacity-0 scale-75">
                <CardContent className="p-6">
                  <div className="relative mb-4 group-hover:scale-110 transition-transform duration-500">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-primary group-hover:scale-105 transition-all duration-500">{member.name}</h3>
                  <div className="text-primary font-medium mb-2 group-hover:scale-105 transition-all duration-500">{member.role}</div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}