import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Star } from 'lucide-react';
import { scrollToTop } from '@/utils/scrollToTop';

const newCourses = [
  {
    id: 'ai-ml-3',
    title: 'AI/ML Course - Level 3: Advanced (Specialization & Research)',
    description: 'Move into cutting-edge AI, deployment, and specialization. Master transformers, LLMs, generative AI, NLP, computer vision, reinforcement learning, MLOps, and ethics in AI.',
    price: 18500,
    duration: '4-6 months',
    students: 7200,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    instructor: 'Dr. Alex Kumar',
    isNew: true
  },
  {
    id: 'genai-3',
    title: 'GenAI & Multi-Agent Systems - Level 3: Advanced (Research, Scaling & Autonomous Systems)',
    description: 'Develop advanced MAS applications, deploy systems, and explore research trends. Master advanced GenAI techniques, multi-agent reinforcement learning, and scalable architectures.',
    price: 18500,
    duration: '12-16 weeks',
    students: 8500,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    instructor: 'Dr. Priya Kapoor',
    isNew: true
  },
  {
    id: 'self-ai-3',
    title: 'Self Employment with AI Trend - Level 3: Advanced (AI-Powered Entrepreneurship & Scaling)',
    description: 'Scale freelancing into a startup, build AI-driven businesses, and monetize at scale. Master AI product development, scaling digital business, MLOps, and legal & business skills.',
    price: 18500,
    duration: '12-16 weeks',
    students: 11200,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400',
    instructor: 'Dr. Alex Thompson',
    isNew: true
  },
  {
    id: 'dm-ai-3',
    title: 'Digital Marketing with AI - Level 3: Advanced (AI-Powered Growth Marketing & Strategy)',
    description: 'Master AI-driven strategies, growth hacking, and scaling businesses. Learn advanced SEO/SEM with AI, growth marketing & funnels, e-commerce & AI marketing, and AI in branding & strategy.',
    price: 18500,
    duration: '12-16 weeks',
    students: 9500,
    rating: 4.9,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    instructor: 'Dr. Sarah Chen',
    isNew: true
  }
];

export default function NewReleases() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
      />
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">New Releases</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh content from our expert instructors, just launched this month
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {newCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-2xl hover:shadow-primary/50  transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border relative overflow-hidden">
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-t-lg group-hover:scale-130 transition-transform duration-700 ease-out"
                />
                {course.isNew && (
                  <Badge className="absolute top-3 left-3 bg-green-500 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    New
                  </Badge>
                )}
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-base line-clamp-2 group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                  {course.title}
                </CardTitle>
                <p className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-500">by {course.instructor}</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors duration-500">
                  {course.description}
                </p>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <Clock className="h-3 w-3 group-hover:rotate-180 transition-transform duration-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" />
                    {course.rating}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-500">₹{course.price.toLocaleString()}</span>
                  <Link to={`/course/${course.id}`} onClick={scrollToTop}>
                    <Button 
                      size="sm" 
                      className="text-xs px-3 py-1 hover:scale-110 hover:shadow-lg transition-all duration-300"
                    >
                      Enroll
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/courses" onClick={scrollToTop}>
            <Button variant="outline" size="lg">
              View All New Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}