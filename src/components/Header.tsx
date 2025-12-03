import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { scrollToTop } from '@/utils/scrollToTop';
// Main course categories (8 main courses)
const mainCategories = [
  { name: 'AI/ML', link: '/courses?category=AI/ML' },
  { name: 'Cybersecurity', link: '/courses?category=Cybersecurity' },
  { name: 'Prompt Engineering', link: '/courses?category=Prompt Engineering' },
  { name: 'Data Science', link: '/courses?category=Data Science' },
  { name: 'Self Employment', link: '/courses?category=Self Employment' },
  { name: 'Self Employment with AI', link: '/courses?category=Self Employment with AI' },
  { name: 'Digital Marketing with AI', link: '/courses?category=Digital Marketing with AI' },
  { name: 'GenAI & Multi-Agent Systems', link: '/courses?category=GenAI & Multi-Agent Systems' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Row - Logo, Categories, Search, Auth Buttons */}
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Logo and Categories */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2" onClick={scrollToTop}>
            <img src="/skillnexalogo.png" alt="SKILLneXa" className="h-12" />
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="hidden md:flex items-center gap-1">
                Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {mainCategories.map((category) => (
                <DropdownMenuItem key={category.name} asChild>
                  <Link to={category.link} onClick={scrollToTop}>
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </Button>
      </div>

      {/* Bottom Row - Navigation Menu (Desktop) */}
      <div className="hidden lg:block border-t border-border/40">
        <div className="container px-4">
          <nav className="flex items-center justify-center space-x-10 py-4">
            <Link to="/" className="text-base font-medium hover:text-primary transition-colors" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/courses" className="text-base font-medium hover:text-primary transition-colors" onClick={scrollToTop}>
              Courses
            </Link>
            <Link to="/instructor" className="text-base font-medium hover:text-primary transition-colors" onClick={scrollToTop}>
              Internships / Careers
            </Link>
            <Link to="/blog" className="text-base font-medium hover:text-primary transition-colors" onClick={scrollToTop}>
              Blog
            </Link>
            <Link to="/contact" className="text-base font-medium hover:text-primary transition-colors" onClick={scrollToTop}>
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search courses..."
                className="w-full"
              />
            </div>
            
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-base font-medium hover:text-primary transition-colors" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
                Home
              </Link>
              <Link to="/courses" className="text-base font-medium hover:text-primary transition-colors" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
                Courses
              </Link>
              <Link to="/instructor" className="text-base font-medium hover:text-primary transition-colors" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
                Internships / Careers
              </Link>
              <Link to="/blog" className="text-base font-medium hover:text-primary transition-colors" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
                Blog
              </Link>
              <Link to="/contact" className="text-base font-medium hover:text-primary transition-colors" onClick={() => { scrollToTop(); setIsMenuOpen(false); }}>
                Contact
              </Link>
            </nav>
            

          </div>
        </div>
      )}
    </header>
  );
}