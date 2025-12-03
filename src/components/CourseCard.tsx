import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { scrollToTop } from '@/utils/scrollToTop';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  students: number;
  rating: number;
  category: string;
  thumbnail: string;
  instructor: string;
  subCourses?: { level: 'Beginner' | 'Intermediate' | 'Advanced'; link: string }[];
}

// Course details mapping for comprehensive information
interface CourseDetail {
  syllabus: Array<{
    title: string;
    lessons: number;
    duration: string;
  }>;
  projects: string[];
  goals: string[];
}

const courseDetails: Record<string, CourseDetail> = {
  'ai-ml-1': {
    syllabus: [
      { title: 'Introduction to AI & ML', lessons: 6, duration: '8 hours' },
      { title: 'Mathematics for AI', lessons: 8, duration: '12 hours' },
      { title: 'Python for AI', lessons: 10, duration: '14 hours' },
      { title: 'Introduction to Machine Learning', lessons: 8, duration: '12 hours' }
    ],
    projects: ['Predict student scores from study hours', 'Spam email classifier (Naive Bayes)'],
    goals: ['Build coding foundations', 'Learn AI/ML basics', 'Master Python programming', 'Understand mathematics for AI']
  },
  'ai-ml-2': {
    syllabus: [
      { title: 'Machine Learning Algorithms', lessons: 12, duration: '18 hours' },
      { title: 'Deep Learning Foundations', lessons: 10, duration: '15 hours' },
      { title: 'Neural Network Architectures', lessons: 8, duration: '12 hours' },
      { title: 'Data Handling & Pipelines', lessons: 6, duration: '9 hours' }
    ],
    projects: ['Handwritten digit recognition (MNIST with CNN)', 'Movie review sentiment analysis (NLP with RNN)', 'Customer segmentation using clustering'],
    goals: ['Build working ML/DL models', 'Understand algorithms deeply', 'Master neural networks', 'Learn data pipelines']
  },
  'ai-ml-3': {
    syllabus: [
      { title: 'Advanced Deep Learning', lessons: 10, duration: '15 hours' },
      { title: 'Natural Language Processing (NLP)', lessons: 8, duration: '12 hours' },
      { title: 'Computer Vision (CV)', lessons: 8, duration: '12 hours' },
      { title: 'Reinforcement Learning (RL)', lessons: 6, duration: '9 hours' },
      { title: 'MLOps & Deployment', lessons: 6, duration: '9 hours' }
    ],
    projects: ['AI-powered chatbot with LLM fine-tuning', 'Self-driving car simulation (RL)', 'Face mask detection (CV)', 'Deploy ML model on cloud'],
    goals: ['Master cutting-edge AI', 'Learn deployment', 'Specialize in AI domains', 'Build production systems']
  },
  'cyber-1': {
    syllabus: [
      { title: 'Introduction to Cybersecurity', lessons: 4, duration: '6 hours' },
      { title: 'Computer & Network Basics', lessons: 6, duration: '8 hours' },
      { title: 'Practical Skills', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Set up secure passwords and 2FA', 'Identify phishing attempts', 'Configure VPNs & firewalls'],
    goals: ['Build awareness', 'Learn digital hygiene', 'Master technical literacy', 'Understand security basics']
  },
  'cyber-2': {
    syllabus: [
      { title: 'Network Security', lessons: 6, duration: '10 hours' },
      { title: 'System Security', lessons: 6, duration: '10 hours' },
      { title: 'Web & Application Security', lessons: 6, duration: '10 hours' },
      { title: 'Introduction to Ethical Hacking', lessons: 6, duration: '10 hours' },
      { title: 'Digital Forensics Basics', lessons: 4, duration: '6 hours' }
    ],
    projects: ['Network security assessment', 'System hardening project', 'Web application penetration test'],
    goals: ['Master defensive skills', 'Learn offensive basics', 'Understand forensics', 'Build technical expertise']
  },
  'cyber-3': {
    syllabus: [
      { title: 'Advanced Network Security', lessons: 8, duration: '12 hours' },
      { title: 'Ethical Hacking & Penetration Testing', lessons: 10, duration: '15 hours' },
      { title: 'Cloud & Application Security', lessons: 6, duration: '9 hours' },
      { title: 'Incident Response & Forensics', lessons: 6, duration: '9 hours' },
      { title: 'Governance, Risk & Compliance', lessons: 4, duration: '6 hours' }
    ],
    projects: ['Simulated penetration test report', 'Cyber range / CTF competitions', 'Certification preparation'],
    goals: ['Achieve specialization', 'Prepare for certifications', 'Master advanced techniques', 'Build job-ready expertise']
  },
  'prompt-1': {
    syllabus: [
      { title: 'Introduction to Generative AI', lessons: 4, duration: '6 hours' },
      { title: 'Prompt Basics', lessons: 4, duration: '6 hours' },
      { title: 'Simple Prompting Techniques', lessons: 4, duration: '6 hours' }
    ],
    projects: ['AI study notes generator', 'News summarizer with pros & cons output'],
    goals: ['Understand GenAI basics', 'Write effective prompts', 'Learn prompting techniques', 'Build mini projects']
  },
  'prompt-2': {
    syllabus: [
      { title: 'Advanced Prompting Methods', lessons: 6, duration: '10 hours' },
      { title: 'Domain-Specific Prompting', lessons: 6, duration: '10 hours' },
      { title: 'Multi-Turn Prompting & Agents', lessons: 4, duration: '6 hours' },
      { title: 'Prompt Evaluation & Debugging', lessons: 4, duration: '6 hours' }
    ],
    projects: ['AI-powered career counselor chatbot', 'Generate practice questions for exams', 'Automated blog writer'],
    goals: ['Learn structured prompting', 'Master reasoning techniques', 'Design workflows', 'Evaluate prompts']
  },
  'prompt-3': {
    syllabus: [
      { title: 'Advanced Prompt Architectures', lessons: 6, duration: '10 hours' },
      { title: 'LLM Fine-Tuning & Customization', lessons: 6, duration: '10 hours' },
      { title: 'Frameworks for Prompt Engineering', lessons: 6, duration: '10 hours' },
      { title: 'MLOps for Prompt Engineering', lessons: 4, duration: '6 hours' }
    ],
    projects: ['Intelligent document Q&A system (RAG + LLM)', 'AI-based project idea generator', 'Multi-agent system'],
    goals: ['Build scalable AI applications', 'Master advanced architectures', 'Deploy prompt systems', 'Create production solutions']
  },
  'data-1': {
    syllabus: [
      { title: 'Introduction to Data Science', lessons: 4, duration: '6 hours' },
      { title: 'Mathematics for Data Science', lessons: 8, duration: '12 hours' },
      { title: 'Python for Data Science', lessons: 10, duration: '14 hours' },
      { title: 'SQL for Data Handling', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Analyze student performance dataset', 'Create dashboards with Pandas & Matplotlib', 'Build a data cleaning pipeline'],
    goals: ['Build programming foundations', 'Learn data handling', 'Master Python & SQL', 'Understand data science basics']
  },
  'data-2': {
    syllabus: [
      { title: 'Data Wrangling & Feature Engineering', lessons: 8, duration: '12 hours' },
      { title: 'Data Visualization', lessons: 6, duration: '8 hours' },
      { title: 'Machine Learning Basics', lessons: 8, duration: '12 hours' },
      { title: 'Model Deployment Basics', lessons: 4, duration: '6 hours' }
    ],
    projects: ['Predict housing prices', 'Customer segmentation with clustering', 'Dashboard for sales analysis'],
    goals: ['Learn core ML techniques', 'Apply to real data', 'Master visualization', 'Deploy models']
  },
  'data-3': {
    syllabus: [
      { title: 'Advanced Machine Learning', lessons: 8, duration: '12 hours' },
      { title: 'Deep Learning for Data Science', lessons: 8, duration: '12 hours' },
      { title: 'Big Data & Cloud', lessons: 6, duration: '9 hours' },
      { title: 'MLOps & Deployment', lessons: 6, duration: '9 hours' },
      { title: 'Ethics & Responsible AI', lessons: 4, duration: '6 hours' }
    ],
    projects: ['Fraud detection system', 'NLP-based sentiment analysis tool', 'End-to-end ML pipeline', 'Recommendation engine'],
    goals: ['Master advanced ML', 'Learn deep learning', 'Deploy at scale', 'Understand AI ethics']
  },
  'self-1': {
    syllabus: [
      { title: 'Introduction to Self-Employment', lessons: 4, duration: '6 hours' },
      { title: 'Digital Foundations', lessons: 6, duration: '8 hours' },
      { title: 'Freelancing with AI Tools', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Create a personal portfolio website', 'Write a professional gig description', 'Build a personal brand strategy'],
    goals: ['Learn freelancing fundamentals', 'Build digital presence', 'Master AI tools', 'Create personal brand']
  },
  'self-2': {
    syllabus: [
      { title: 'Freelancing in Tech Domains', lessons: 8, duration: '12 hours' },
      { title: 'Freelancing in Creative Domains', lessons: 6, duration: '8 hours' },
      { title: 'Digital Products & Passive Income', lessons: 6, duration: '8 hours' },
      { title: 'Marketing & Client Management', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Publish an AI-generated eBook', 'Build a small paid Notion template', 'Deliver a mock client project'],
    goals: ['Start earning through freelancing', 'Create digital products', 'Master client management', 'Build passive income']
  },
  'self-3': {
    syllabus: [
      { title: 'Building an AI-Powered Startup', lessons: 8, duration: '12 hours' },
      { title: 'Scaling Self-Employment into a Business', lessons: 6, duration: '8 hours' },
      { title: 'Monetization at Scale', lessons: 6, duration: '8 hours' },
      { title: 'Legal & Financial Literacy', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Launch a micro-startup', 'Generate $100+ revenue from freelancing', 'Create a full digital product'],
    goals: ['Scale to business level', 'Build AI-powered startups', 'Master monetization', 'Learn business skills']
  },
  'self-ai-1': {
    syllabus: [
      { title: 'Introduction to Self-Employment in the AI Era', lessons: 4, duration: '6 hours' },
      { title: 'Personal Branding & Digital Presence', lessons: 6, duration: '8 hours' },
      { title: 'AI Tools for Beginners', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Create a Fiverr gig using AI-generated graphics', 'Build a personal portfolio site with AI content', 'Develop an AI-powered personal brand strategy'],
    goals: ['Learn AI-powered self-employment', 'Build digital presence with AI', 'Master AI productivity tools', 'Create AI-enhanced brand']
  },
  'self-ai-2': {
    syllabus: [
      { title: 'Freelancing with AI Skills', lessons: 8, duration: '12 hours' },
      { title: 'Digital Product Creation', lessons: 8, duration: '12 hours' },
      { title: 'AI for Marketing & Branding', lessons: 6, duration: '10 hours' },
      { title: 'Client Management', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Launch an AI-generated eBook for sale', 'Build a content calendar with AI', 'Deliver a mock AI-powered client project'],
    goals: ['Start earning with AI services', 'Create AI-driven products', 'Master AI marketing', 'Automate client management']
  },
  'self-ai-3': {
    syllabus: [
      { title: 'AI Product Development', lessons: 10, duration: '15 hours' },
      { title: 'Scaling Digital Business', lessons: 8, duration: '12 hours' },
      { title: 'MLOps & Deployment for Entrepreneurs', lessons: 6, duration: '10 hours' },
      { title: 'Legal & Business Skills', lessons: 6, duration: '10 hours' }
    ],
    projects: ['Create & launch an AI SaaS product', 'Build an AI-powered freelancing agency', 'Earn first $100–$500 via freelancing'],
    goals: ['Scale to AI startup', 'Build AI-driven businesses', 'Master AI deployment', 'Achieve financial success']
  },
  'dm-ai-1': {
    syllabus: [
      { title: 'Introduction to Digital Marketing', lessons: 4, duration: '6 hours' },
      { title: 'Core Digital Channels', lessons: 8, duration: '12 hours' },
      { title: 'AI in Marketing Basics', lessons: 6, duration: '8 hours' }
    ],
    projects: ['Create a social media campaign with AI-generated posts', 'Write a blog post using AI copywriting tools', 'Design AI-powered marketing materials'],
    goals: ['Learn digital marketing fundamentals', 'Master AI marketing tools', 'Create AI-powered campaigns', 'Understand marketing automation']
  },
  'dm-ai-2': {
    syllabus: [
      { title: 'SEO & AI', lessons: 6, duration: '10 hours' },
      { title: 'SEM & Paid Ads', lessons: 6, duration: '10 hours' },
      { title: 'Social Media Marketing (SMM)', lessons: 6, duration: '8 hours' },
      { title: 'Content Marketing', lessons: 6, duration: '10 hours' },
      { title: 'Analytics & CRO', lessons: 4, duration: '8 hours' }
    ],
    projects: ['Run a small budget Google Ads campaign', 'Generate an AI-driven content calendar', 'Optimize a website using AI SEO tools'],
    goals: ['Run real campaigns', 'Analyze results with AI', 'Integrate AI tools', 'Master marketing analytics']
  },
  'dm-ai-3': {
    syllabus: [
      { title: 'Advanced SEO/SEM with AI', lessons: 8, duration: '12 hours' },
      { title: 'Growth Marketing & Funnels', lessons: 8, duration: '12 hours' },
      { title: 'E-commerce & AI Marketing', lessons: 6, duration: '10 hours' },
      { title: 'AI in Branding & Strategy', lessons: 6, duration: '10 hours' }
    ],
    projects: ['Run a complete AI-powered campaign', 'Build and launch an AI-optimized eCommerce site', 'Develop an AI content generation business'],
    goals: ['Master AI-driven strategies', 'Learn growth hacking', 'Scale businesses with AI', 'Build marketing expertise']
  },
  'genai-1': {
    syllabus: [
      { title: 'Introduction to Generative AI', lessons: 4, duration: '6 hours' },
      { title: 'Core Concepts in GenAI', lessons: 8, duration: '12 hours' },
      { title: 'Practical Tools for Beginners', lessons: 6, duration: '10 hours' },
      { title: 'Introduction to AI Agents', lessons: 4, duration: '6 hours' }
    ],
    projects: ['Build a content generator (blog/social media assistant)', 'Create an AI-powered study notes generator', 'Simple rule-based chatbot using LangChain'],
    goals: ['Build GenAI fundamentals', 'Learn AI agents basics', 'Master practical tools', 'Create simple applications']
  },
  'genai-2': {
    syllabus: [
      { title: 'Advanced Generative AI', lessons: 8, duration: '12 hours' },
      { title: 'Multi-Agent Systems (MAS) Basics', lessons: 6, duration: '10 hours' },
      { title: 'MAS + GenAI', lessons: 8, duration: '12 hours' },
      { title: 'Practical Applications', lessons: 6, duration: '10 hours' }
    ],
    projects: ['Multi-agent content creation pipeline', 'AI study assistant with planner + quiz generator', 'Build a GitHub issue resolver using MAS'],
    goals: ['Build hands-on applications', 'Learn multi-agent systems', 'Master GenAI frameworks', 'Create complex workflows']
  },
  'genai-3': {
    syllabus: [
      { title: 'Advanced GenAI Techniques', lessons: 8, duration: '12 hours' },
      { title: 'Multi-Agent Reinforcement Learning', lessons: 8, duration: '12 hours' },
      { title: 'Scalable Multi-Agent Architectures', lessons: 6, duration: '10 hours' },
      { title: 'Industry Applications', lessons: 6, duration: '10 hours' }
    ],
    projects: ['AI startup idea: Autonomous customer support system', 'MAS-based research assistant', 'Swarm simulation (drones/robots coordination)'],
    goals: ['Develop advanced applications', 'Deploy autonomous systems', 'Master research techniques', 'Build industry solutions']
  }
};

export default function CourseCard({
  id,
  title,
  description,
  price,
  duration,
  students,
  rating,
  category,
  thumbnail,
  instructor,
  subCourses
}: CourseCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Card className="group hover:shadow-2xl hover:shadow-primary/50  transition-all duration-500 hover:-translate-y-6 hover:scale-110 border-border relative overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <Badge className="absolute top-4 left-4 bg-primary shadow shadow-primary/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {category}
          </Badge>
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 text-white px-2 py-1 rounded text-sm group-hover:scale-110 group-hover:bg-primary/80 transition-all duration-500">
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="[perspective:1000px]">
          <div
            className={`relative h-full min-h-[160px] transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
          >
            {/* Front */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg leading-tight group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 group-hover:text-foreground transition-colors duration-500">
                  {description}
                </p>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-500">
                  By {instructor}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <span>{duration}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:scale-110 group-hover:text-primary transition-all duration-500">
                    <span>{students.toLocaleString()} students</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back - Detailed Course Information */}
            <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
              <div className="h-full p-3">
                <div className="space-y-4 text-sm">
                  {/* Price display on back */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary">
                      ₹{price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  {/* Course Overview */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-primary">Course Overview</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* Course Details */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-primary">What You'll Learn</span>
                    </div>
                    <div className="space-y-2">
                      {(() => {
                        const details = courseDetails[id];
                        if (details && details.goals) {
                          return details.goals.slice(0, 4).map((goal: string, index: number) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{goal}</span>
                            </div>
                          ));
                        } else {
                          // Fallback content for courses without detailed data
                          const fallbackGoals = [
                            'Master core concepts and fundamentals',
                            'Build practical skills through hands-on projects',
                            'Learn industry best practices and tools',
                            'Develop a strong foundation for advanced learning'
                          ];
                          return fallbackGoals.map((goal, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{goal}</span>
                            </div>
                          ));
                        }
                      })()}
                    </div>
                  </div>

                  {/* Course Modules */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-semibold text-primary">Course Structure</span>
                    </div>
                    <div className="space-y-2">
                      {(() => {
                        const details = courseDetails[id];
                        if (details && details.syllabus) {
                          return details.syllabus.slice(0, 3).map((module: { title: string; lessons: number }, index: number) => (
                            <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                              <span className="text-muted-foreground text-sm font-medium">{module.title}</span>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <span>{module.lessons} lessons</span>
                              </div>
                            </div>
                          ));
                        } else {
                          // Fallback content
                          const fallbackModules = [
                            { title: 'Foundation Concepts', lessons: 6 },
                            { title: 'Core Skills Development', lessons: 8 },
                            { title: 'Advanced Applications', lessons: 6 }
                          ];
                          return fallbackModules.map((module, index) => (
                            <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                              <span className="text-muted-foreground text-sm font-medium">{module.title}</span>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <span>{module.lessons} lessons</span>
                              </div>
                            </div>
                          ));
                        }
                      })()}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full gap-3">
          <div className="text-2xl font-bold text-primary group-hover:scale-110 group-hover:text-secondary transition-all duration-500">
            ₹{price.toLocaleString('en-IN')}
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Button
              size="sm"
              variant="outline"
              className="w-full sm:w-auto border-primary text-primary  hover:scale-110 hover:shadow-lg transition-all duration-300"
              onClick={() => setIsFlipped((v) => !v)}
            >
              {isFlipped ? 'Show Basic Info' : 'View Details'}
            </Button>
            <Button 
              size="sm" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 text-white shadow-md shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 hover:brightness-125 hover:scale-110 transition-all duration-300"
              asChild
            >
              <Link to={`/course/${id}`} onClick={scrollToTop}>
                Enroll Now
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}