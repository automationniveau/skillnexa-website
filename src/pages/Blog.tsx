import React, { useState } from 'react';
import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Online Learning: Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the future of online education, from AI-powered personalization to immersive virtual classrooms.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    tags: ['EdTech', 'Trends', 'Future'],
    readTime: '5 min read',
    featured: true
  },
  {
    id: '2',
    title: 'How to Build a Successful Career in Web Development',
    excerpt: 'A comprehensive guide to starting and advancing your career in web development, including essential skills and career paths.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600',
    author: 'Mike Chen',
    date: '2024-03-12',
    tags: ['Career', 'Web Development', 'Skills'],
    readTime: '8 min read',
    featured: false
  },
  {
    id: '3',
    title: 'Top 10 Programming Languages to Learn in 2024',
    excerpt: 'Stay ahead of the curve with our comprehensive analysis of the most in-demand programming languages for 2024 and beyond.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600',
    author: 'David Wilson',
    date: '2024-03-10',
    tags: ['Programming', 'Languages', 'Career'],
    readTime: '6 min read',
    featured: false
  },
  {
    id: '4',
    title: 'Mastering Remote Learning: Tips for Online Students',
    excerpt: 'Learn effective strategies for staying motivated, organized, and successful while learning online from the comfort of your home.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
    author: 'Emily Davis',
    date: '2024-03-08',
    tags: ['Remote Learning', 'Study Tips', 'Productivity'],
    readTime: '7 min read',
    featured: false
  },
  {
    id: '5',
    title: 'The Rise of AI in Education: Opportunities and Challenges',
    excerpt: 'Exploring how artificial intelligence is transforming education, from personalized learning paths to automated grading systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    author: 'Dr. Alex Rodriguez',
    date: '2024-03-05',
    tags: ['AI', 'Education', 'Technology'],
    readTime: '10 min read',
    featured: false
  },
  {
    id: '6',
    title: 'Building Your First Portfolio Project: A Step-by-Step Guide',
    excerpt: 'Learn how to create impressive portfolio projects that showcase your skills and help you land your dream job in tech.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    author: 'Lisa Thompson',
    date: '2024-03-01',
    tags: ['Portfolio', 'Projects', 'Career'],
    readTime: '12 min read',
    featured: false
  }
];

const categories = ['All', 'EdTech', 'Career', 'Programming', 'AI', 'Study Tips'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.tags.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 bg-gradient-to-b from-background via-accent/10 to-background relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
             style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 80% 30%, hsl(var(--primary)) 2px, transparent 2px), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 2px, transparent 2px)', backgroundSize: '24px 24px' }}
        />
        <div className="container px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary">Skillnexa</span> Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest insights, tips, and trends in online education and technology
            </p>
          </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="min-w-[80px]"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        {featuredPost && selectedCategory === 'All' && !searchQuery && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">Featured</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold leading-tight">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    
                    <Button className="w-fit">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        {/* Articles Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {searchQuery || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
            </h2>
            <p className="text-muted-foreground">
              {regularPosts.length} articles found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-4 hover:scale-110 border-border relative overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700 ease-out"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs group-hover:scale-125 group-hover:rotate-3 transition-all duration-500">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary group-hover:scale-105 transition-all duration-500">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 group-hover:text-foreground transition-colors duration-500">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                        <User className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 group-hover:text-primary group-hover:scale-110 transition-all duration-500">
                        <Calendar className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="group-hover:text-primary group-hover:scale-110 transition-all duration-500">{post.readTime}</span>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group hover:scale-110 hover:shadow-lg transition-all duration-300">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {regularPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or browse different categories
              </p>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest articles, course updates, and exclusive content delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}