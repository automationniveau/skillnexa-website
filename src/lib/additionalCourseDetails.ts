// Additional course details for remaining courses
interface CourseDetail {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  duration: string;
  students: number;
  rating: number;
  reviews: number;
  category: string;
  thumbnail: string;
  instructor: {
    name: string;
    title: string;
    image: string;
    students: number;
    courses: number;
    rating: number;
    bio: string;
  };
  syllabus: Array<{
    title: string;
    lessons: number;
    duration: string;
    topics: string[];
  }>;
  projects: Array<{
    title: string;
    description: string;
    skills: string[];
    duration: string;
  }>;
  goals: string[];
  prerequisites: string[];
  outcomes: string[];
}

export const additionalCourseDetails: Record<string, CourseDetail> = {
  // Self Employment with AI Courses
  'self-ai-1': {
    id: 'self-ai-1',
    title: 'Self Employment with AI Trend - Level 1: Basic (Foundations of AI-Powered Self-Employment)',
    description: 'Introduce freelancing & side hustles, with AI as a productivity booster. Learn AI-powered self-employment, personal branding, and AI tools for beginners.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 weeks',
    students: 18500,
    rating: 4.8,
    reviews: 2400,
    category: 'Self Employment with AI',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'Marcus Johnson',
      title: 'AI-Powered Entrepreneurship Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 28000,
      courses: 12,
      rating: 4.8,
      bio: 'Marcus Johnson is an AI-powered entrepreneurship expert who has helped thousands of students leverage AI tools to build successful freelance businesses and startups.'
    },
    syllabus: [
      {
        title: 'Introduction to Self-Employment in the AI Era',
        lessons: 4,
        duration: '6 hours',
        topics: ['Freelancing vs entrepreneurship', 'Side hustles students can start with AI', 'Platforms: Fiverr, Upwork, LinkedIn, Freelancer', 'AI opportunities in the gig economy']
      },
      {
        title: 'Personal Branding & Digital Presence',
        lessons: 4,
        duration: '6 hours',
        topics: ['Building a LinkedIn profile optimized with AI tools', 'Creating a portfolio using Notion / Canva', 'Writing professional proposals (AI-assisted)', 'AI-powered personal branding strategies']
      },
      {
        title: 'AI Tools for Beginners',
        lessons: 4,
        duration: '6 hours',
        topics: ['ChatGPT for content writing & resumes', 'Canva + AI for social media design', 'Copy.ai/Jasper for marketing content', 'AI productivity tools and workflows']
      }
    ],
    projects: [
      {
        title: 'AI-Generated Fiverr Gig',
        description: 'Create a Fiverr gig using AI-generated graphics & description with complete marketing strategy.',
        skills: ['AI Tools', 'Gig Creation', 'Marketing Strategy', 'Content Generation'],
        duration: '2 weeks'
      },
      {
        title: 'AI-Powered Portfolio Site',
        description: 'Build a personal portfolio site with AI content and professional presentation.',
        skills: ['Web Development', 'AI Content', 'Portfolio Design', 'Personal Branding'],
        duration: '2 weeks'
      },
      {
        title: 'AI Personal Brand Strategy',
        description: 'Develop an AI-powered personal brand strategy with content calendar and growth plan.',
        skills: ['Brand Strategy', 'AI Planning', 'Content Calendar', 'Growth Planning'],
        duration: '1 week'
      }
    ],
    goals: [
      'Understand AI-powered self-employment opportunities',
      'Learn AI tools for productivity and creativity',
      'Build professional AI-enhanced online presence',
      'Master AI-assisted content creation',
      'Develop AI-driven business strategies'
    ],
    prerequisites: [
      'Basic computer literacy',
      'Willingness to learn AI tools',
      'Access to AI platforms and tools',
      'Motivation to start AI-powered freelancing'
    ],
    outcomes: [
      'Understanding of AI-powered self-employment',
      'Skills in AI tools and workflows',
      'Professional AI-enhanced online presence',
      'Portfolio of 3 AI-powered projects',
      'Foundation for intermediate AI entrepreneurship'
    ]
  },
  'self-ai-2': {
    id: 'self-ai-2',
    title: 'Self Employment with AI Trend - Level 2: Intermediate (Freelancing & Digital Products with AI)',
    description: 'Help students start earning with AI-driven services & products. Master freelancing with AI skills, digital product creation, AI for marketing, and client management.',
    price: 18500,
    originalPrice: 25000,
    duration: '8-10 weeks',
    students: 15200,
    rating: 4.9,
    reviews: 1950,
    category: 'Self Employment with AI',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'Dr. Jennifer Martinez',
      title: 'AI Business Development Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 22000,
      courses: 10,
      rating: 4.9,
      bio: 'Dr. Jennifer Martinez is an AI business development specialist with expertise in helping entrepreneurs leverage AI for scalable business growth and digital product creation.'
    },
    syllabus: [
      {
        title: 'Freelancing with AI Skills',
        lessons: 6,
        duration: '9 hours',
        topics: ['Prompt Engineering for clients', 'AI-powered content creation (blogs, LinkedIn posts)', 'AI video & podcast editing (Descript, Runway)', 'AI service delivery and optimization']
      },
      {
        title: 'Digital Product Creation',
        lessons: 6,
        duration: '9 hours',
        topics: ['AI eBooks & guides (ChatGPT + Canva)', 'Notion templates & productivity tools', 'Online mini-courses with AI-generated content', 'AI-powered product development']
      },
      {
        title: 'AI for Marketing & Branding',
        lessons: 4,
        duration: '6 hours',
        topics: ['Social media automation (Buffer + AI copy)', 'SEO content writing with AI', 'Generating product visuals with MidJourney / DALL·E', 'AI marketing strategy development']
      },
      {
        title: 'Client Management',
        lessons: 4,
        duration: '6 hours',
        topics: ['Negotiating contracts with AI-generated draft agreements', 'Automating client communication with chatbots', 'Using AI CRMs for client tracking', 'AI-powered client relationship management']
      }
    ],
    projects: [
      {
        title: 'AI-Generated eBook Launch',
        description: 'Launch an AI-generated eBook for sale with complete marketing and sales strategy.',
        skills: ['AI Content Creation', 'Publishing', 'Marketing Strategy', 'Sales Optimization'],
        duration: '3 weeks'
      },
      {
        title: 'AI Content Calendar System',
        description: 'Build a content calendar with AI-generated content and automated posting strategy.',
        skills: ['Content Strategy', 'AI Automation', 'Social Media Management', 'Content Planning'],
        duration: '2 weeks'
      },
      {
        title: 'AI-Powered Client Project',
        description: 'Deliver a mock AI-powered client project showcasing advanced AI skills and service delivery.',
        skills: ['AI Service Delivery', 'Client Management', 'Project Execution', 'Quality Assurance'],
        duration: '3 weeks'
      }
    ],
    goals: [
      'Start earning with AI-driven services',
      'Learn AI-powered digital product creation',
      'Master AI marketing and branding',
      'Build AI-enhanced client management',
      'Develop AI business automation skills'
    ],
    prerequisites: [
      'Self Employment with AI Level 1 completion or equivalent knowledge',
      'Experience with basic AI tools',
      'Understanding of freelancing concepts',
      'Willingness to create AI-powered products'
    ],
    outcomes: [
      'Skills in AI-driven freelancing services',
      'Understanding of AI-powered product creation',
      'AI marketing and branding expertise',
      'Portfolio of 3 AI business projects',
      'Foundation for advanced AI entrepreneurship'
    ]
  },
  'self-ai-3': {
    id: 'self-ai-3',
    title: 'Self Employment with AI Trend - Level 3: Advanced (AI-Powered Entrepreneurship & Scaling)',
    description: 'Scale freelancing into a startup, build AI-driven businesses, and monetize at scale. Master AI product development, scaling digital business, MLOps, and legal & business skills.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 11200,
    rating: 4.9,
    reviews: 1500,
    category: 'Self Employment with AI',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'Dr. Alex Thompson',
      title: 'AI Startup Founder & MLOps Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 18000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. Alex Thompson is an AI startup founder with expertise in building and scaling AI-powered businesses. He has founded multiple successful AI startups and has extensive experience in MLOps and AI product development.'
    },
    syllabus: [
      {
        title: 'AI Product Development',
        lessons: 8,
        duration: '12 hours',
        topics: ['Building AI-powered apps with no-code tools (Bubble, Glide, Zapier + AI)', 'Creating niche AI assistants (e.g., resume helper, study buddy)', 'Using LangChain & LlamaIndex for advanced workflows', 'AI product architecture and design']
      },
      {
        title: 'Scaling Digital Business',
        lessons: 6,
        duration: '9 hours',
        topics: ['Creating an agency (AI content, AI marketing, AI tutors)', 'Hiring & outsourcing work with AI project management tools', 'Subscription models & SaaS with AI', 'Business scaling strategies']
      },
      {
        title: 'MLOps & Deployment for Entrepreneurs',
        lessons: 6,
        duration: '9 hours',
        topics: ['Deploying AI apps on cloud (AWS/GCP)', 'Automating workflows end-to-end', 'Monetization models (ads, subscriptions, licensing)', 'AI system monitoring and maintenance']
      },
      {
        title: 'Legal & Business Skills',
        lessons: 4,
        duration: '6 hours',
        topics: ['Contracts & IP in AI-generated content', 'Setting up business entities (LLP, Pvt Ltd)', 'Financial literacy & taxation for freelancers/startups', 'AI business compliance and regulations']
      }
    ],
    projects: [
      {
        title: 'AI SaaS Product Launch',
        description: 'Create & launch an AI SaaS product (chatbot, study tool, resume builder) with complete business model.',
        skills: ['AI Product Development', 'SaaS Development', 'Business Model Design', 'Product Launch'],
        duration: '5 weeks'
      },
      {
        title: 'AI-Powered Freelancing Agency',
        description: 'Build an AI-powered freelancing agency with team management and client acquisition strategies.',
        skills: ['Agency Building', 'Team Management', 'Client Acquisition', 'Business Development'],
        duration: '4 weeks'
      },
      {
        title: 'Revenue Generation Challenge',
        description: 'Earn first $100–$500 via freelancing or digital product sales using AI-powered strategies.',
        skills: ['Revenue Generation', 'AI Strategy', 'Business Optimization', 'Financial Management'],
        duration: '6 weeks'
      }
    ],
    goals: [
      'Scale freelancing into AI-powered startups',
      'Build and deploy AI-driven businesses',
      'Master AI product development and MLOps',
      'Learn legal and business aspects of AI entrepreneurship',
      'Develop leadership skills in AI business'
    ],
    prerequisites: [
      'Self Employment with AI Level 2 completion or equivalent experience',
      'Strong understanding of AI tools and applications',
      'Experience with business development',
      'Willingness to scale and build AI businesses'
    ],
    outcomes: [
      'Skills in AI product development and deployment',
      'Understanding of AI business scaling',
      'MLOps and AI system management expertise',
      'Portfolio of 3 advanced AI business projects',
      'Readiness for AI entrepreneurship and business leadership'
    ]
  },
  // Digital Marketing with AI Courses
  'dm-ai-1': {
    id: 'dm-ai-1',
    title: 'Digital Marketing with AI - Level 1: Basic (Foundations of Digital Marketing + AI Essentials)',
    description: 'Learn fundamentals of digital marketing and how AI enhances productivity. Master core digital channels, AI in marketing basics, and create AI-powered campaigns.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 weeks',
    students: 16200,
    rating: 4.7,
    reviews: 2100,
    category: 'Digital Marketing with AI',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    instructor: {
      name: 'Dr. Jennifer Martinez',
      title: 'Digital Marketing & AI Integration Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 25000,
      courses: 14,
      rating: 4.7,
      bio: 'Dr. Jennifer Martinez is a digital marketing expert with extensive experience in AI integration for marketing campaigns. She has helped hundreds of businesses leverage AI for marketing success.'
    },
    syllabus: [
      {
        title: 'Introduction to Digital Marketing',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is digital marketing?', 'Traditional vs digital vs AI-powered marketing', 'Customer journey & digital funnels', 'Digital marketing landscape and trends']
      },
      {
        title: 'Core Digital Channels',
        lessons: 6,
        duration: '9 hours',
        topics: ['SEO (Search Engine Optimization)', 'SEM (Google Ads basics)', 'Social Media Marketing (Facebook, Instagram, LinkedIn)', 'Email marketing fundamentals']
      },
      {
        title: 'AI in Marketing Basics',
        lessons: 4,
        duration: '6 hours',
        topics: ['Using ChatGPT/Jasper for ad copy, captions & blogs', 'Canva AI for creatives', 'Intro to AI scheduling tools (Buffer, Hootsuite)', 'AI marketing automation basics']
      }
    ],
    projects: [
      {
        title: 'AI-Powered Social Media Campaign',
        description: 'Create a social media campaign with AI-generated posts and content strategy.',
        skills: ['Social Media Marketing', 'AI Content Creation', 'Campaign Strategy', 'Content Planning'],
        duration: '2 weeks'
      },
      {
        title: 'AI Blog Post Creation',
        description: 'Write a comprehensive blog post using AI copywriting tools with SEO optimization.',
        skills: ['Content Writing', 'AI Tools', 'SEO', 'Blog Strategy'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Understand digital marketing fundamentals',
      'Learn AI tools for marketing productivity',
      'Master core digital marketing channels',
      'Build AI-powered marketing campaigns',
      'Develop digital marketing strategy skills'
    ],
    prerequisites: [
      'Basic computer literacy',
      'No prior marketing experience required',
      'Willingness to learn AI tools',
      'Access to marketing platforms and AI tools'
    ],
    outcomes: [
      'Understanding of digital marketing fundamentals',
      'Skills in AI-powered marketing tools',
      'Ability to create AI-enhanced campaigns',
      'Portfolio of 2 AI marketing projects',
      'Foundation for intermediate digital marketing with AI'
    ]
  },
  'dm-ai-2': {
    id: 'dm-ai-2',
    title: 'Digital Marketing with AI - Level 2: Intermediate (Campaigns, Analytics & AI Tools)',
    description: 'Run real campaigns, analyze results, and integrate AI. Master SEO & AI, SEM & paid ads, social media marketing, content marketing, and analytics & CRO.',
    price: 18500,
    originalPrice: 25000,
    duration: '8-10 weeks',
    students: 12800,
    rating: 4.8,
    reviews: 1700,
    category: 'Digital Marketing with AI',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    instructor: {
      name: 'Dr. Michael Rodriguez',
      title: 'Performance Marketing & AI Analytics Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 20000,
      courses: 12,
      rating: 4.8,
      bio: 'Dr. Michael Rodriguez is a performance marketing expert with extensive experience in AI-driven analytics and campaign optimization. He has managed millions in ad spend and has expertise in AI-powered marketing automation.'
    },
    syllabus: [
      {
        title: 'SEO & AI',
        lessons: 6,
        duration: '9 hours',
        topics: ['Keyword research (Ahrefs, SEMrush)', 'AI-assisted SEO content writing', 'Technical SEO automation with SurferSEO, Clearscope', 'AI SEO optimization strategies']
      },
      {
        title: 'SEM & Paid Ads',
        lessons: 6,
        duration: '9 hours',
        topics: ['Running Google Ads & Meta Ads', 'A/B testing with AI-generated variations', 'AI ad performance prediction', 'Automated bidding and optimization']
      },
      {
        title: 'Social Media Marketing (SMM)',
        lessons: 4,
        duration: '6 hours',
        topics: ['Building brand presence', 'Influencer marketing with AI analytics', 'Automating posts with AI tools', 'Social media AI optimization']
      },
      {
        title: 'Content Marketing',
        lessons: 4,
        duration: '6 hours',
        topics: ['AI-driven blogs, eBooks, and video scripts', 'Generative AI for video (Runway, Pictory)', 'Prompt engineering for marketing', 'AI content strategy development']
      },
      {
        title: 'Analytics & CRO',
        lessons: 4,
        duration: '6 hours',
        topics: ['Google Analytics 4', 'AI dashboards for campaign insights', 'Predictive analytics for conversions', 'AI-powered conversion optimization']
      }
    ],
    projects: [
      {
        title: 'Google Ads Campaign with AI',
        description: 'Run a small budget Google Ads campaign with AI-generated ad copy and optimization.',
        skills: ['Google Ads', 'AI Copywriting', 'Campaign Optimization', 'Performance Analysis'],
        duration: '3 weeks'
      },
      {
        title: 'AI-Driven Content Calendar',
        description: 'Generate an AI-driven content calendar with automated content creation and scheduling.',
        skills: ['Content Strategy', 'AI Automation', 'Content Planning', 'Social Media Management'],
        duration: '2 weeks'
      },
      {
        title: 'AI SEO Website Optimization',
        description: 'Optimize a website/blog using AI SEO tools and measure performance improvements.',
        skills: ['SEO', 'AI Tools', 'Website Optimization', 'Performance Measurement'],
        duration: '3 weeks'
      }
    ],
    goals: [
      'Run real digital marketing campaigns',
      'Learn AI-powered analytics and optimization',
      'Master advanced AI marketing tools',
      'Build data-driven marketing strategies',
      'Develop AI marketing automation skills'
    ],
    prerequisites: [
      'Digital Marketing with AI Level 1 completion or equivalent knowledge',
      'Understanding of basic digital marketing concepts',
      'Experience with AI marketing tools',
      'Willingness to run real campaigns'
    ],
    outcomes: [
      'Skills in AI-powered campaign management',
      'Understanding of AI analytics and optimization',
      'Experience with real marketing campaigns',
      'Portfolio of 3 AI marketing projects',
      'Foundation for advanced AI marketing specialization'
    ]
  },
  'dm-ai-3': {
    id: 'dm-ai-3',
    title: 'Digital Marketing with AI - Level 3: Advanced (AI-Powered Growth Marketing & Strategy)',
    description: 'Master AI-driven strategies, growth hacking, and scaling businesses. Learn advanced SEO/SEM with AI, growth marketing & funnels, e-commerce & AI marketing, and AI in branding & strategy.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 9500,
    rating: 4.9,
    reviews: 1300,
    category: 'Digital Marketing with AI',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    instructor: {
      name: 'Dr. Sarah Chen',
      title: 'Growth Marketing & AI Strategy Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 16000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. Sarah Chen is a growth marketing expert with extensive experience in AI-driven business scaling. She has led marketing teams at major tech companies and has expertise in AI-powered growth strategies.'
    },
    syllabus: [
      {
        title: 'Advanced SEO/SEM with AI',
        lessons: 6,
        duration: '9 hours',
        topics: ['Voice & image search optimization', 'AI for competitor analysis', 'Smart bidding strategies with ML', 'Advanced AI SEO techniques']
      },
      {
        title: 'Growth Marketing & Funnels',
        lessons: 6,
        duration: '9 hours',
        topics: ['AI-driven customer segmentation', 'Personalized funnels with automation (HubSpot, Zapier)', 'Retargeting & remarketing using AI insights', 'AI growth hacking strategies']
      },
      {
        title: 'E-commerce & AI Marketing',
        lessons: 4,
        duration: '6 hours',
        topics: ['Shopify/WordPress AI plugins', 'AI-driven product recommendation engines', 'Dynamic pricing with AI', 'E-commerce AI optimization']
      },
      {
        title: 'AI in Branding & Strategy',
        lessons: 4,
        duration: '6 hours',
        topics: ['Sentiment analysis for brand monitoring', 'AI tools for trend prediction', 'Building viral campaigns with AI creativity', 'AI brand strategy development']
      }
    ],
    projects: [
      {
        title: 'AI-Powered Marketing Campaign',
        description: 'Build a full-stack AI-powered digital marketing campaign for a brand/startup with complete strategy.',
        skills: ['Campaign Strategy', 'AI Integration', 'Multi-channel Marketing', 'Performance Optimization'],
        duration: '4 weeks'
      },
      {
        title: 'AI-Optimized E-commerce Site',
        description: 'Build and launch an AI-optimized eCommerce site with recommendation engines and dynamic pricing.',
        skills: ['E-commerce Development', 'AI Optimization', 'Recommendation Systems', 'Dynamic Pricing'],
        duration: '5 weeks'
      },
      {
        title: 'AI Content Generation Business',
        description: 'Develop an AI content generation business model with service delivery and client management.',
        skills: ['Business Model Development', 'AI Service Delivery', 'Client Management', 'Business Scaling'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Master AI-driven growth marketing strategies',
      'Learn advanced AI marketing automation',
      'Build scalable AI marketing systems',
      'Develop AI brand strategy expertise',
      'Create AI-powered marketing businesses'
    ],
    prerequisites: [
      'Digital Marketing with AI Level 2 completion or equivalent experience',
      'Strong understanding of digital marketing',
      'Experience with AI marketing tools',
      'Willingness to build advanced AI systems'
    ],
    outcomes: [
      'Expertise in AI-driven growth marketing',
      'Skills in advanced AI marketing automation',
      'Understanding of AI brand strategy',
      'Portfolio of 3 advanced AI marketing projects',
      'Readiness for senior AI marketing roles'
    ]
  },
  // GenAI & Multi-Agent Systems Courses
  'genai-1': {
    id: 'genai-1',
    title: 'GenAI & Multi-Agent Systems - Level 1: Beginner (Foundations of GenAI & AI Agents)',
    description: 'Build strong fundamentals of generative models & introduce AI agents. Learn GenAI basics, core concepts, practical tools, and introduction to AI agents.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 15200,
    rating: 4.8,
    reviews: 1900,
    category: 'GenAI & Multi-Agent Systems',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Elena Rodriguez',
      title: 'GenAI Research Scientist & AI Agent Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 20000,
      courses: 10,
      rating: 4.8,
      bio: 'Dr. Elena Rodriguez is a GenAI research scientist with extensive experience in generative models and AI agent systems. She has published groundbreaking research in AI agents and has worked with leading AI companies.'
    },
    syllabus: [
      {
        title: 'Introduction to Generative AI',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is GenAI? (Text, image, audio, video generation)', 'Difference between traditional AI vs GenAI', 'Applications: Chatbots, content generation, code assistants', 'GenAI landscape and capabilities']
      },
      {
        title: 'Core Concepts in GenAI',
        lessons: 6,
        duration: '9 hours',
        topics: ['Basics of neural networks (MLP, CNN, RNN)', 'Introduction to Transformers & LLMs', 'Pre-training vs fine-tuning', 'Text generation with OpenAI GPT, Claude, LLaMA']
      },
      {
        title: 'Practical Tools for Beginners',
        lessons: 6,
        duration: '9 hours',
        topics: ['Hands-on with ChatGPT, Claude, Gemini', 'Image generation with DALL·E, Stable Diffusion, MidJourney', 'Audio generation with ElevenLabs, Suno AI', 'Video generation with Runway, Pika Labs']
      },
      {
        title: 'Introduction to AI Agents',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is an agent?', 'Types of agents (Reactive, Proactive, Learning-based)', 'Basics of LangChain / LlamaIndex', 'Simple chatbot with memory']
      }
    ],
    projects: [
      {
        title: 'Content Generator Assistant',
        description: 'Build a content generator (blog/social media assistant) using GenAI tools and automation.',
        skills: ['GenAI Tools', 'Content Generation', 'Automation', 'AI Applications'],
        duration: '2 weeks'
      },
      {
        title: 'AI Study Notes Generator',
        description: 'Create an AI-powered study notes generator with personalized learning content.',
        skills: ['Educational Technology', 'AI Content', 'Personalization', 'Learning Systems'],
        duration: '2 weeks'
      },
      {
        title: 'Simple Rule-Based Chatbot',
        description: 'Build a simple rule-based chatbot using LangChain with memory and context.',
        skills: ['Chatbot Development', 'LangChain', 'AI Agents', 'Conversation Design'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Build strong GenAI fundamentals',
      'Learn practical GenAI tools and applications',
      'Understand AI agent concepts',
      'Develop GenAI-powered applications',
      'Master basic AI agent development'
    ],
    prerequisites: [
      'Basic computer literacy',
      'No prior AI experience required',
      'Willingness to experiment with GenAI tools',
      'Access to GenAI platforms and tools'
    ],
    outcomes: [
      'Understanding of GenAI fundamentals',
      'Skills in practical GenAI tools',
      'Basic AI agent development knowledge',
      'Portfolio of 3 GenAI projects',
      'Foundation for intermediate GenAI and multi-agent systems'
    ]
  },
  'genai-2': {
    id: 'genai-2',
    title: 'GenAI & Multi-Agent Systems - Level 2: Intermediate (Building with GenAI & Multi-Agent Frameworks)',
    description: 'Build hands-on applications with GenAI + learn how multiple agents work together. Master advanced generative AI, multi-agent systems, MAS + GenAI, and practical applications.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 11800,
    rating: 4.9,
    reviews: 1600,
    category: 'GenAI & Multi-Agent Systems',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. James Liu',
      title: 'Multi-Agent Systems Architect & GenAI Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 18000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. James Liu is a multi-agent systems architect with extensive experience in building complex AI agent systems. He has developed enterprise-grade multi-agent solutions and has expertise in GenAI integration.'
    },
    syllabus: [
      {
        title: 'Advanced Generative AI',
        lessons: 6,
        duration: '9 hours',
        topics: ['Prompt engineering (zero-shot, few-shot, CoT)', 'Fine-tuning LLMs (LoRA, PEFT)', 'Vector databases & embeddings (Pinecone, FAISS, Weaviate)', 'Retrieval Augmented Generation (RAG)']
      },
      {
        title: 'Multi-Agent Systems (MAS) Basics',
        lessons: 6,
        duration: '9 hours',
        topics: ['What are MAS?', 'Cooperation, competition, and communication', 'Coordination problems in MAS', 'Applications: simulations, swarm robotics, marketplaces']
      },
      {
        title: 'MAS + GenAI',
        lessons: 6,
        duration: '9 hours',
        topics: ['LangChain Agents & Tools', 'AutoGen framework (Microsoft)', 'CrewAI for multi-agent workflows', 'Communication protocols between agents']
      },
      {
        title: 'Practical Applications',
        lessons: 4,
        duration: '6 hours',
        topics: ['AI customer support with multiple specialized agents', 'Research assistant with planner, summarizer, critic agents', 'AI agents for workflow automation', 'Real-world MAS implementations']
      }
    ],
    projects: [
      {
        title: 'Multi-Agent Content Pipeline',
        description: 'Create a multi-agent content creation pipeline with writer, editor, and fact-checker agents.',
        skills: ['Multi-Agent Systems', 'Content Pipeline', 'Agent Coordination', 'Workflow Automation'],
        duration: '3 weeks'
      },
      {
        title: 'AI Study Assistant',
        description: 'Build an AI study assistant with planner and quiz generator agents working together.',
        skills: ['Educational AI', 'Agent Collaboration', 'Study Systems', 'AI Tutoring'],
        duration: '3 weeks'
      },
      {
        title: 'GitHub Issue Resolver',
        description: 'Develop a GitHub issue resolver using multi-agent systems for automated problem solving.',
        skills: ['Software Development', 'Issue Resolution', 'Multi-Agent Coordination', 'Automation'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Build hands-on GenAI applications',
      'Learn multi-agent system fundamentals',
      'Master MAS + GenAI integration',
      'Develop practical multi-agent applications',
      'Understand agent coordination and communication'
    ],
    prerequisites: [
      'GenAI & Multi-Agent Systems Level 1 completion or equivalent knowledge',
      'Understanding of GenAI basics',
      'Experience with AI frameworks',
      'Willingness to build complex AI systems'
    ],
    outcomes: [
      'Skills in advanced GenAI applications',
      'Understanding of multi-agent systems',
      'Experience with MAS + GenAI integration',
      'Portfolio of 3 multi-agent projects',
      'Foundation for advanced GenAI and multi-agent specialization'
    ]
  },
  'genai-3': {
    id: 'genai-3',
    title: 'GenAI & Multi-Agent Systems - Level 3: Advanced (Research, Scaling & Autonomous Systems)',
    description: 'Develop advanced MAS applications, deploy systems, and explore research trends. Master advanced GenAI techniques, multi-agent reinforcement learning, scalable architectures, and industry applications.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 8500,
    rating: 4.9,
    reviews: 1200,
    category: 'GenAI & Multi-Agent Systems',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Priya Kapoor',
      title: 'AI Research Director & Autonomous Systems Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 15000,
      courses: 6,
      rating: 4.9,
      bio: 'Dr. Priya Kapoor is an AI research director with expertise in advanced multi-agent systems and autonomous AI. She has led research teams at major AI companies and has extensive experience in deploying large-scale AI systems.'
    },
    syllabus: [
      {
        title: 'Advanced GenAI Techniques',
        lessons: 8,
        duration: '12 hours',
        topics: ['Large-scale model training (concepts only for undergrads)', 'Fine-tuning LLMs on custom data', 'Multimodal models (text + image + audio)', 'Guardrails & responsible AI (bias, hallucinations, ethics)']
      },
      {
        title: 'Multi-Agent Reinforcement Learning (MARL)',
        lessons: 6,
        duration: '9 hours',
        topics: ['Introduction to Reinforcement Learning', 'Multi-Agent RL basics (cooperation, competition)', 'Environments: PettingZoo, Gymnasium', 'Case study: swarm robotics, autonomous fleets']
      },
      {
        title: 'Scalable Multi-Agent Architectures',
        lessons: 6,
        duration: '9 hours',
        topics: ['Agent orchestration with LangGraph', 'Memory & long-term planning in MAS', 'Distributed MAS (cloud-native AI agents)', 'Scalable AI system design']
      },
      {
        title: 'Industry Applications',
        lessons: 4,
        duration: '6 hours',
        topics: ['AI copilots (coding, business assistants)', 'Autonomous research (AI scientists)', 'Finance: trading agents', 'Robotics & IoT with MAS']
      }
    ],
    projects: [
      {
        title: 'Autonomous Customer Support System',
        description: 'Build an AI startup idea: Autonomous customer support system with multiple specialized agents.',
        skills: ['System Architecture', 'AI Agents', 'Customer Service', 'Business Development'],
        duration: '4 weeks'
      },
      {
        title: 'MAS-Based Research Assistant',
        description: 'Develop a MAS-based research assistant with planner, writer, and verifier agents.',
        skills: ['Research Automation', 'Multi-Agent Coordination', 'Information Processing', 'AI Research'],
        duration: '5 weeks'
      },
      {
        title: 'Swarm Simulation System',
        description: 'Create a swarm simulation (drones/robots coordination) using advanced multi-agent systems.',
        skills: ['Simulation', 'Swarm Intelligence', 'Robotics', 'Multi-Agent Coordination'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Develop advanced MAS applications',
      'Learn multi-agent reinforcement learning',
      'Master scalable AI system architectures',
      'Build industry-ready AI systems',
      'Explore cutting-edge AI research'
    ],
    prerequisites: [
      'GenAI & Multi-Agent Systems Level 2 completion or equivalent experience',
      'Strong understanding of GenAI and MAS',
      'Experience with AI frameworks and tools',
      'Willingness to work with advanced AI concepts'
    ],
    outcomes: [
      'Expertise in advanced GenAI and MAS',
      'Skills in multi-agent reinforcement learning',
      'Understanding of scalable AI architectures',
      'Portfolio of 3 advanced AI system projects',
      'Readiness for AI research and senior engineering roles'
    ]
  }
};
