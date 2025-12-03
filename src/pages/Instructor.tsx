import React, { useState } from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  Rocket, 
  Zap, 
  Globe, 
  Target,
  Sparkles,
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  BookOpen,
  HelpCircle
} from 'lucide-react';

const careerBenefits = [
  {
    icon: Sparkles,
    title: 'Career Growth',
    description: 'Advance your skills with opportunities to work on cutting-edge projects'
  },
  {
    icon: Rocket,
    title: 'Make Real Impact',
    description: 'Contribute to a platform that transforms millions of learners worldwide'
  },
  {
    icon: Zap,
    title: 'Flexible Work Environment',
    description: 'Remote-first culture with flexible schedules and work arrangements'
  },
  {
    icon: Globe,
    title: 'Global Team',
    description: 'Collaborate with talented professionals from around the world'
  },
  {
    icon: Target,
    title: 'Competitive Benefits',
    description: 'Competitive salary, health insurance, and professional development'
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'careers@skillnexa.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+1 (555) 123-4567',
    description: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Education St, Learning City, LC 12345',
    description: 'Our headquarters'
  }
];

const supportCategories = [
  {
    icon: BookOpen,
    title: 'Internship',
    description: 'Looking for internship opportunities to gain experience'
  },
  {
    icon: Users,
    title: 'Full-Time',
    description: 'Interested in full-time career positions'
  },
  {
    icon: MessageSquare,
    title: 'General Inquiry',
    description: 'Questions about our company and career opportunities'
  },
  {
    icon: HelpCircle,
    title: 'Technical Support',
    description: 'Help with applications and technical issues'
  }
];

export default function Instructor() {
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    position: '',
    experience: '',
    motivation: ''
  });

  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
  };

  const handleApplicationChange = (field: string, value: string) => {
    setApplicationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xkgqrkwo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactFormData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setContactFormData({
          name: '',
          email: '',
          subject: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactChange = (field: string, value: string) => {
    setContactFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
               style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
          />
          <div className="container px-4 py-16 md:py-24">
            <div className="text-center max-w-4xl mx-auto mb-16 animate-[fadeInUp_0.6s_ease_both]">
            <Badge variant="secondary" className="text-primary font-medium mb-4">
              Join Our Team at SkillNexa
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch Your Career in{' '}
              <span className="text-primary">Education Technology</span>
            </h1>
            
            <div className="text-xl text-muted-foreground space-y-4">
              <p>
                At SkillNexa, we're building the future of online learning. Join our team and help transform how millions of people learn and grow their skills.
              </p>
            </div>
          </div>

          {/* Why Join Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Why Join SkillNexa?</span></h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {careerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-2xl hover:shadow-primary/50 transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border/60 animate-[fadeInUp_0.6s_ease_both]" style={{animationDelay: `${index*120}ms`}}>
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <benefit.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">{benefit.title}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          </div>
        </section>



        {/* Career Paths */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Career Opportunities</span></h2>
            <p className="text-xl text-muted-foreground">
              Explore the diverse opportunities available at SkillNexa
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Engineering */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold">Engineering & Development</h3>
                </div>
                <div className="space-y-3 pl-15">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Full-Stack Developers</h4>
                      <p className="text-muted-foreground text-sm">Build scalable web applications using modern technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Data Scientists</h4>
                      <p className="text-muted-foreground text-sm">Work with machine learning and analytics to improve user experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group transition-transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600"
                  alt="Engineering careers"
                  className="rounded-lg shadow-xl w-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Product & Design */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group transition-transform hover:scale-105 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600"
                  alt="Product and design careers"
                  className="rounded-lg shadow-xl w-full group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold">Product & Design</h3>
                </div>
                <div className="space-y-3 pl-15">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Product Managers</h4>
                      <p className="text-muted-foreground text-sm">Lead product strategy and innovation across our platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">UX/UI Designers</h4>
                      <p className="text-muted-foreground text-sm">Create beautiful and intuitive learning experiences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="bg-surface py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Have questions about careers at SkillNexa? Contact us directly
              </p>
            </div>

            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Application Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Internship & Career Application</CardTitle>
                    <p className="text-muted-foreground">
                      Tell us about yourself and the opportunity you're interested in
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleApplicationSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="app-name">Full Name *</Label>
                          <Input
                            id="app-name"
                            value={applicationData.name}
                            onChange={(e) => handleApplicationChange('name', e.target.value)}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="app-email">Email Address *</Label>
                          <Input
                            id="app-email"
                            type="email"
                            value={applicationData.email}
                            onChange={(e) => handleApplicationChange('email', e.target.value)}
                            placeholder="your.email@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Position of Interest *</Label>
                        <Input
                          id="position"
                          value={applicationData.position}
                          onChange={(e) => handleApplicationChange('position', e.target.value)}
                          placeholder="e.g., Software Engineer, Product Manager, Data Analyst"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="experience">Your Background & Experience *</Label>
                        <Textarea
                          id="experience"
                          value={applicationData.experience}
                          onChange={(e) => handleApplicationChange('experience', e.target.value)}
                          placeholder="Tell us about your educational background, skills, and relevant experience..."
                          rows={4}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="motivation">Why do you want to join SkillNexa? *</Label>
                        <Textarea
                          id="motivation"
                          value={applicationData.motivation}
                          onChange={(e) => handleApplicationChange('motivation', e.target.value)}
                          placeholder="Share your motivation for joining our team and what excites you about the role..."
                          rows={3}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume/CV</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload your resume (PDF, DOC, DOCX)
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Max file size: 10MB
                          </p>
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full text-sm sm:text-base">
                        Submit Application
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our terms and conditions
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">123 Education St, Learning City</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM EST</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Link */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Looking for Quick Answers?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Check out our FAQ section for immediate answers to common questions
                    </p>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Visit FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How Can We Help */}
        <section className="container px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">How Can We Help?</span></h2>
            <p className="text-xl text-muted-foreground">
              Choose the category that best describes your inquiry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
