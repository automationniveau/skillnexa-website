import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle, 
  Award,
  BookOpen,
  Target,
  ArrowLeft,
  Calendar,
  User,
  TrendingUp
} from 'lucide-react';
import { trendingCourses } from '@/lib/trending';
import { courseDetails } from '@/lib/courseDetails';

// Fallback course details for courses not yet in the detailed mapping
interface Course {
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
}

const generateFallbackCourseDetails = (course: Course) => ({
  id: course.id,
  title: course.title,
  description: course.description,
  price: course.price,
  originalPrice: 25000,
  duration: course.duration,
  students: course.students,
  rating: course.rating,
  reviews: Math.floor(course.students * 0.15),
  category: course.category,
  thumbnail: course.thumbnail,
  instructor: {
    name: course.instructor,
    title: 'Expert Instructor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    students: Math.floor(course.students * 1.2),
    courses: 8,
    rating: course.rating,
    bio: 'Experienced instructor with extensive knowledge in the field and a passion for teaching students.'
  },
  syllabus: [
    {
      title: 'Foundation Concepts',
      lessons: 6,
      duration: '8 hours',
      topics: ['Introduction to core concepts', 'Fundamental principles', 'Basic terminology', 'Industry overview']
    },
    {
      title: 'Core Skills Development',
      lessons: 8,
      duration: '12 hours',
      topics: ['Essential skills and techniques', 'Practical applications', 'Hands-on exercises', 'Skill building activities']
    },
    {
      title: 'Advanced Applications',
      lessons: 6,
      duration: '10 hours',
      topics: ['Advanced techniques', 'Real-world applications', 'Best practices', 'Industry standards']
    }
  ],
  projects: [
    {
      title: 'Capstone Project',
      description: 'Apply all learned concepts in a comprehensive project that demonstrates mastery of the subject.',
      skills: ['Project Management', 'Problem Solving', 'Technical Skills', 'Presentation'],
      duration: '3 weeks'
    },
    {
      title: 'Portfolio Project',
      description: 'Create a portfolio-worthy project that showcases your skills and knowledge.',
      skills: ['Portfolio Development', 'Skill Demonstration', 'Professional Presentation', 'Documentation'],
      duration: '2 weeks'
    }
  ],
  goals: [
    'Master core concepts and fundamentals',
    'Build practical skills through hands-on projects',
    'Learn industry best practices and tools',
    'Develop a strong foundation for advanced learning',
    'Create a portfolio of completed projects'
  ],
  prerequisites: [
    'Basic computer literacy',
    'Willingness to learn and practice',
    'Access to required software/tools',
    'Commitment to complete the course'
  ],
  outcomes: [
    'Strong understanding of core concepts',
    'Practical skills applicable in real-world scenarios',
    'Portfolio of completed projects',
    'Foundation for advanced learning',
    'Industry-relevant knowledge and skills'
  ]
});

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  // Get course data from trending courses or detailed mapping
  const course = trendingCourses.find(c => c.id === id);
  const detailedCourse = courseDetails[id] || (course ? generateFallbackCourseDetails(course) : null);

  if (!course && !detailedCourse) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/courses">Back to Courses</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const currentCourse = detailedCourse || course;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="gap-2">
            <Link to="/courses">
              <ArrowLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </Button>
        </div>

        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Course Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Badge className="mb-4">{currentCourse.category}</Badge>
              <h1 className="text-3xl font-bold mb-4">{currentCourse.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentCourse.description}
              </p>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-semibold">{currentCourse.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Students</p>
                  <p className="font-semibold">{currentCourse.students.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Rating</p>
                  <p className="font-semibold">{currentCourse.rating}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="font-semibold">
                    {currentCourse.id.includes('-1') ? 'Beginner' : 
                     currentCourse.id.includes('-2') ? 'Intermediate' : 'Advanced'}
                  </p>
                </div>
              </div>
            </div>

            {/* Learning Goals */}
            {detailedCourse?.goals && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What You'll Learn
                </h3>
                <ul className="space-y-2">
                  {detailedCourse.goals.map((goal: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Course Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={currentCourse.thumbnail} 
                    alt={currentCourse.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-primary">
                    ₹{currentCourse.price.toLocaleString('en-IN')}
                  </div>
                  {detailedCourse?.originalPrice && (
                    <div className="text-lg text-muted-foreground line-through">
                      ₹{detailedCourse.originalPrice.toLocaleString('en-IN')}
                    </div>
                  )}
                </div>
                <Button size="lg" className="w-full mb-4">
                  Enroll Now
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>30-day money-back guarantee</p>
                  <p>Lifetime access to course materials</p>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Syllabus */}
            {detailedCourse?.syllabus && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Course Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {detailedCourse.syllabus.map((module: { title: string; lessons: number; duration: string; topics: string[] }, index: number) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center justify-between w-full mr-4">
                            <span className="font-medium">{module.title}</span>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Play className="w-4 h-4" />
                                {module.lessons} lessons
                              </span>
                              <span>{module.duration}</span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 mt-4">
                            {module.topics.map((topic: string, topicIndex: number) => (
                              <li key={topicIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}

            {/* Projects */}
            {detailedCourse?.projects && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Hands-on Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {detailedCourse.projects.map((project: { title: string; description: string; skills: string[]; duration: string }, index: number) => (
                      <div key={index} className="border rounded-lg p-6">
                        <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.skills.map((skill: string, skillIndex: number) => (
                            <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>Duration: {project.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Prerequisites & Outcomes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailedCourse?.prerequisites && (
                <Card>
                  <CardHeader>
                    <CardTitle>Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {detailedCourse.prerequisites.map((prereq: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {detailedCourse?.outcomes && (
                <Card>
                  <CardHeader>
                    <CardTitle>Learning Outcomes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {detailedCourse.outcomes.map((outcome: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Instructor */}
            {detailedCourse?.instructor && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    Instructor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <img 
                      src={detailedCourse.instructor.image} 
                      alt={detailedCourse.instructor.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h4 className="font-semibold">{detailedCourse.instructor.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{detailedCourse.instructor.title}</p>
                    <p className="text-xs text-muted-foreground mb-4">{detailedCourse.instructor.bio}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold">{detailedCourse.instructor.students.toLocaleString()}</p>
                        <p className="text-muted-foreground">Students</p>
                      </div>
                      <div>
                        <p className="font-semibold">{detailedCourse.instructor.courses}</p>
                        <p className="text-muted-foreground">Courses</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Course Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Course Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Students</span>
                    <span className="font-semibold">{currentCourse.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="font-semibold">{currentCourse.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reviews</span>
                    <span className="font-semibold">{detailedCourse?.reviews?.toLocaleString() || '1,200+'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span className="font-semibold">Dec 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}