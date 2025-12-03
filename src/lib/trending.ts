export type SubCourse = {
	level: 'Beginner' | 'Intermediate' | 'Advanced';
	link: string;
};

export type TrendingCourse = {
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
	subCourses: SubCourse[];
};

export const trendingCourses: TrendingCourse[] = [
	{
		id: 'ai-ml-1',
		title: 'AI/ML Course - Level 1: Beginner (Foundations)',
		description:
			'Build coding, math, and conceptual foundations. Learn AI/ML basics, Python programming, mathematics for AI, and hands-on projects including student score prediction and spam email classifier.',
		price: 18500,
		duration: '8-10 weeks',
		students: 12500,
		rating: 4.9,
		category: 'AI/ML',
		thumbnail:
			'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Sarah Chen',
		subCourses: [
			{ level: 'Beginner', link: '/courses/ai-ml-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/ai-ml-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/ai-ml-1?level=advanced' }
		]
	},
	{
		id: 'ai-ml-2',
		title: 'AI/ML Course - Level 2: Intermediate (Core ML & DL)',
		description:
			'Build working ML/DL models and understand algorithms deeply. Master machine learning algorithms, deep learning foundations, neural network architectures, and advanced projects like MNIST digit recognition.',
		price: 18500,
		duration: '12-16 weeks',
		students: 9800,
		rating: 4.8,
		category: 'AI/ML',
		thumbnail:
			'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Michael Rodriguez',
		subCourses: [
			{ level: 'Beginner', link: '/courses/ai-ml-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/ai-ml-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/ai-ml-2?level=advanced' }
		]
	},
	{
		id: 'ai-ml-3',
		title: 'AI/ML Course - Level 3: Advanced (Specialization & Research)',
		description:
			'Move into cutting-edge AI, deployment, and specialization. Master transformers, LLMs, generative AI, NLP, computer vision, reinforcement learning, MLOps, and ethics in AI with capstone projects.',
		price: 18500,
		duration: '4-6 months',
		students: 7200,
		rating: 4.9,
		category: 'AI/ML',
		thumbnail:
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Alex Kumar',
		subCourses: [
			{ level: 'Beginner', link: '/courses/ai-ml-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/ai-ml-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/ai-ml-3?level=advanced' }
		]
	},
	{
		id: 'cyber-1',
		title: 'Cybersecurity - Level 1: Foundations (Beginner)',
		description:
			'Build awareness, digital hygiene, and essential technical literacy. Learn cybersecurity basics, computer & network fundamentals, cryptography, and practical security skills.',
		price: 18500,
		duration: '6-8 weeks',
		students: 11200,
		rating: 4.7,
		category: 'Cybersecurity',
		thumbnail:
			'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Alex Rodriguez',
		subCourses: [
			{ level: 'Beginner', link: '/courses/cyber-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/cyber-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/cyber-1?level=advanced' }
		]
	},
	{
		id: 'cyber-2',
		title: 'Cybersecurity - Level 2: Core Technical Skills (Intermediate)',
		description:
			'Move from awareness into hands-on defensive & offensive basics. Master network security, system security, web application security, ethical hacking, and digital forensics.',
		price: 18500,
		duration: '12-16 weeks',
		students: 8900,
		rating: 4.8,
		category: 'Cybersecurity',
		thumbnail:
			'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Sarah Johnson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/cyber-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/cyber-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/cyber-2?level=advanced' }
		]
	},
	{
		id: 'cyber-3',
		title: 'Cybersecurity - Level 3: Advanced Cybersecurity',
		description:
			'Specialization, certifications, job-ready expertise. Master advanced network security, ethical hacking & penetration testing, cloud security, incident response, and GRC.',
		price: 18500,
		duration: '4-6 months',
		students: 6500,
		rating: 4.9,
		category: 'Cybersecurity',
		thumbnail:
			'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Maria Santos',
		subCourses: [
			{ level: 'Beginner', link: '/courses/cyber-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/cyber-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/cyber-3?level=advanced' }
		]
	},
	{
		id: 'prompt-1',
		title: 'Prompt Engineering - Level 1: Beginner (Foundations of Prompting)',
		description:
			'Understand GenAI basics & write effective prompts. Learn about LLMs, prompt basics, simple prompting techniques, and build mini projects like AI study notes generator.',
		price: 18500,
		duration: '4-6 weeks',
		students: 15800,
		rating: 4.8,
		category: 'Prompt Engineering',
		thumbnail:
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Emily Watson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/prompt-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/prompt-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/prompt-1?level=advanced' }
		]
	},
	{
		id: 'prompt-2',
		title: 'Prompt Engineering - Level 2: Intermediate (Advanced Prompting & Workflows)',
		description:
			'Learn structured prompting, reasoning, and workflow design. Master advanced prompting methods, domain-specific prompting, multi-turn conversations, and prompt evaluation.',
		price: 18500,
		duration: '6-8 weeks',
		students: 12300,
		rating: 4.9,
		category: 'Prompt Engineering',
		thumbnail:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. James Liu',
		subCourses: [
			{ level: 'Beginner', link: '/courses/prompt-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/prompt-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/prompt-2?level=advanced' }
		]
	},
	{
		id: 'prompt-3',
		title: 'Prompt Engineering - Level 3: Advanced (Expert Prompt Engineering)',
		description:
			'Move into building scalable AI applications with prompts. Master advanced prompt architectures, LLM fine-tuning, frameworks like LangChain, MLOps, and build capstone projects.',
		price: 18500,
		duration: '10-12 weeks',
		students: 9200,
		rating: 4.9,
		category: 'Prompt Engineering',
		thumbnail:
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Priya Kapoor',
		subCourses: [
			{ level: 'Beginner', link: '/courses/prompt-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/prompt-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/prompt-3?level=advanced' }
		]
	},
	{
		id: 'data-1',
		title: 'Data Science - Level 1: Beginner (Foundations)',
		description:
			'Build programming, math, and data handling foundations. Learn data science basics, Python programming, mathematics, SQL, and hands-on projects with student performance analysis.',
		price: 18500,
		duration: '6-8 weeks',
		students: 14200,
		rating: 4.8,
		category: 'Data Science',
		thumbnail:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Aisha Khan',
		subCourses: [
			{ level: 'Beginner', link: '/courses/data-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/data-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/data-1?level=advanced' }
		]
	},
	{
		id: 'data-2',
		title: 'Data Science - Level 2: Intermediate (Core Data Science & ML)',
		description:
			'Learn core ML techniques & apply them to real data. Master data wrangling, feature engineering, visualization, machine learning basics, and model deployment.',
		price: 18500,
		duration: '10-12 weeks',
		students: 10800,
		rating: 4.9,
		category: 'Data Science',
		thumbnail:
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Raj Patel',
		subCourses: [
			{ level: 'Beginner', link: '/courses/data-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/data-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/data-2?level=advanced' }
		]
	},
	{
		id: 'data-3',
		title: 'Data Science - Level 3: Advanced (Specialization & Deployment)',
		description:
			'Master advanced ML, deep learning, big data, and deployment pipelines. Learn gradient boosting, neural networks, MLOps, cloud platforms, and ethics in AI.',
		price: 18500,
		duration: '12-16 weeks',
		students: 7800,
		rating: 4.9,
		category: 'Data Science',
		thumbnail:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Lisa Wang',
		subCourses: [
			{ level: 'Beginner', link: '/courses/data-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/data-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/data-3?level=advanced' }
		]
	},
	{
		id: 'self-1',
		title: 'Self Employment - Level 1: Basic (Foundations of Self-Employment)',
		description:
			'Teach students the fundamentals of freelancing, gig work, and personal branding. Learn about platforms, digital foundations, and freelancing with AI tools.',
		price: 18500,
		duration: '4-6 weeks',
		students: 16800,
		rating: 4.7,
		category: 'Self Employment',
		thumbnail:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Marcus Johnson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/self-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/self-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/self-1?level=advanced' }
		]
	},
	{
		id: 'self-2',
		title: 'Self Employment - Level 2: Intermediate (Freelancing & Digital Products)',
		description:
			'Enable students to start earning through freelance projects & small-scale businesses. Master tech freelancing, creative domains, digital products, and marketing.',
		price: 18500,
		duration: '6-8 weeks',
		students: 13500,
		rating: 4.8,
		category: 'Self Employment',
		thumbnail:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Sophie Chen',
		subCourses: [
			{ level: 'Beginner', link: '/courses/self-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/self-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/self-2?level=advanced' }
		]
	},
	{
		id: 'self-3',
		title: 'Self Employment - Level 3: Advanced (Entrepreneurship & Scaling)',
		description:
			'Help students transition from individual freelancers to business owners. Master AI-powered startups, scaling, monetization, legal & financial literacy, and capstone projects.',
		price: 18500,
		duration: '10-12 weeks',
		students: 9200,
		rating: 4.9,
		category: 'Self Employment',
		thumbnail:
			'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1280&q=80&auto=format&fit=crop',
		instructor: 'David Kim',
		subCourses: [
			{ level: 'Beginner', link: '/courses/self-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/self-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/self-3?level=advanced' }
		]
	},
	{
		id: 'self-ai-1',
		title: 'Self Employment with AI Trend - Level 1: Basic (Foundations of AI-Powered Self-Employment)',
		description:
			'Introduce freelancing & side hustles, with AI as a productivity booster. Learn AI-powered self-employment, personal branding, and AI tools for beginners.',
		price: 18500,
		duration: '4-6 weeks',
		students: 18500,
		rating: 4.8,
		category: 'Self Employment with AI',
		thumbnail:
			'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Marcus Johnson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/self-ai-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/self-ai-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/self-ai-1?level=advanced' }
		]
	},
	{
		id: 'self-ai-2',
		title: 'Self Employment with AI Trend - Level 2: Intermediate (Freelancing & Digital Products with AI)',
		description:
			'Help students start earning with AI-driven services & products. Master AI freelancing, digital product creation, AI marketing, and client management.',
		price: 18500,
		duration: '8-10 weeks',
		students: 14200,
		rating: 4.9,
		category: 'Self Employment with AI',
		thumbnail:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Sophie Chen',
		subCourses: [
			{ level: 'Beginner', link: '/courses/self-ai-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/self-ai-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/self-ai-2?level=advanced' }
		]
	},
	{
		id: 'self-ai-3',
		title: 'Self Employment with AI Trend - Level 3: Advanced (AI-Powered Entrepreneurship & Scaling)',
		description:
			'Scale freelancing into a startup, build AI-driven businesses, and monetize at scale. Master AI product development, scaling digital business, and MLOps.',
		price: 18500,
		duration: '12-16 weeks',
		students: 9800,
		rating: 4.9,
		category: 'Self Employment with AI',
		thumbnail:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&q=80&auto=format&fit=crop',
		instructor: 'David Kim',
		subCourses: [
			{ level: 'Beginner', link: '/courses/self-ai-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/self-ai-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/self-ai-3?level=advanced' }
		]
	},
	{
		id: 'dm-ai-1',
		title: 'Digital Marketing with AI - Level 1: Basic (Foundations of Digital Marketing + AI Essentials)',
		description:
			'Learn fundamentals of digital marketing and how AI enhances productivity. Master core digital channels, AI in marketing basics, and create AI-powered campaigns.',
		price: 18500,
		duration: '4-6 weeks',
		students: 16200,
		rating: 4.7,
		category: 'Digital Marketing with AI',
		thumbnail:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Jennifer Martinez',
		subCourses: [
			{ level: 'Beginner', link: '/courses/dm-ai-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/dm-ai-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/dm-ai-1?level=advanced' }
		]
	},
	{
		id: 'dm-ai-2',
		title: 'Digital Marketing with AI - Level 2: Intermediate (Campaigns, Analytics & AI Tools)',
		description:
			'Run real campaigns, analyze results, and integrate AI. Master SEO & AI, SEM & paid ads, social media marketing, content marketing, and analytics & CRO.',
		price: 18500,
		duration: '8-10 weeks',
		students: 12800,
		rating: 4.8,
		category: 'Digital Marketing with AI',
		thumbnail:
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Robert Taylor',
		subCourses: [
			{ level: 'Beginner', link: '/courses/dm-ai-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/dm-ai-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/dm-ai-2?level=advanced' }
		]
	},
	{
		id: 'dm-ai-3',
		title: 'Digital Marketing with AI - Level 3: Advanced (AI-Powered Growth Marketing & Strategy)',
		description:
			'Master AI-driven strategies, growth hacking, and scaling businesses. Learn advanced SEO/SEM with AI, growth marketing, e-commerce & AI marketing, and AI in branding.',
		price: 18500,
		duration: '12-16 weeks',
		students: 8500,
		rating: 4.9,
		category: 'Digital Marketing with AI',
		thumbnail:
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Amanda Foster',
		subCourses: [
			{ level: 'Beginner', link: '/courses/dm-ai-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/dm-ai-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/dm-ai-3?level=advanced' }
		]
	},
	{
		id: 'genai-1',
		title: 'GenAI & Multi-Agent Systems - Level 1: Beginner (Foundations of GenAI & AI Agents)',
		description:
			'Build strong fundamentals of generative models & introduce AI agents. Learn GenAI basics, core concepts, practical tools, and introduction to AI agents.',
		price: 18500,
		duration: '6-8 weeks',
		students: 15200,
		rating: 4.8,
		category: 'GenAI & Multi-Agent Systems',
		thumbnail:
			'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Elena Rodriguez',
		subCourses: [
			{ level: 'Beginner', link: '/courses/genai-1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/genai-1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/genai-1?level=advanced' }
		]
	},
	{
		id: 'genai-2',
		title: 'GenAI & Multi-Agent Systems - Level 2: Intermediate (Building with GenAI & Multi-Agent Frameworks)',
		description:
			'Build hands-on applications with GenAI + learn how multiple agents work together. Master advanced GenAI, multi-agent systems, MAS + GenAI, and practical applications.',
		price: 18500,
		duration: '10-12 weeks',
		students: 11800,
		rating: 4.9,
		category: 'GenAI & Multi-Agent Systems',
		thumbnail:
			'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Michael Chen',
		subCourses: [
			{ level: 'Beginner', link: '/courses/genai-2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/genai-2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/genai-2?level=advanced' }
		]
	},
	{
		id: 'genai-3',
		title: 'GenAI & Multi-Agent Systems - Level 3: Advanced (Research, Scaling & Autonomous Systems)',
		description:
			'Develop advanced MAS applications, deploy systems, and explore research trends. Master advanced GenAI techniques, multi-agent RL, scalable architectures, and industry applications.',
		price: 18500,
		duration: '12-16 weeks',
		students: 7200,
		rating: 4.9,
		category: 'GenAI & Multi-Agent Systems',
		thumbnail:
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Sarah Thompson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/genai-3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/genai-3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/genai-3?level=advanced' }
		]
	}
];


