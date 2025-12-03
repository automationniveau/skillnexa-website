import { additionalCourseDetails } from './additionalCourseDetails';

// Comprehensive course details mapping for all 24 courses
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

export const courseDetails: Record<string, CourseDetail> = {
  // AI/ML Courses
  'ai-ml-1': {
    id: 'ai-ml-1',
    title: 'AI/ML Course - Level 1: Beginner (Foundations)',
    description: 'Build coding, math, and conceptual foundations. Learn AI/ML basics, Python programming, mathematics for AI, and hands-on projects including student score prediction and spam email classifier.',
    price: 18500,
    originalPrice: 25000,
    duration: '8-10 weeks',
    students: 12500,
    rating: 4.9,
    reviews: 1890,
    category: 'AI/ML',
    thumbnail: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=800',
    instructor: {
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist & Educator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 15000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. Sarah Chen is a leading AI researcher with over 10 years of experience in machine learning and deep learning. She has published 50+ research papers and has taught thousands of students worldwide.'
    },
    syllabus: [
      {
        title: 'Introduction to AI & ML',
        lessons: 6,
        duration: '8 hours',
        topics: ['What is AI, ML, DL? Real-world applications', 'Healthcare, finance, chatbots, robotics use cases', 'Myths & ethics in AI', 'AI career paths and opportunities']
      },
      {
        title: 'Mathematics for AI',
        lessons: 8,
        duration: '12 hours',
        topics: ['Linear Algebra (vectors, matrices, transformations)', 'Probability & Statistics (distributions, Bayes theorem)', 'Calculus basics (derivatives, gradients)', 'Mathematical foundations for ML algorithms']
      },
      {
        title: 'Python for AI',
        lessons: 10,
        duration: '14 hours',
        topics: ['Python basics, NumPy, Pandas, Matplotlib', 'Data preprocessing & cleaning', 'Exploratory data analysis', 'Python libraries for AI/ML development']
      },
      {
        title: 'Introduction to Machine Learning',
        lessons: 8,
        duration: '12 hours',
        topics: ['Supervised vs. Unsupervised learning', 'Simple regression, classification (scikit-learn)', 'Evaluation metrics (accuracy, precision, recall)', 'Model training and validation']
      }
    ],
    projects: [
      {
        title: 'Student Score Prediction',
        description: 'Build a machine learning model to predict student scores based on study hours using linear regression.',
        skills: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib'],
        duration: '2 weeks'
      },
      {
        title: 'Spam Email Classifier',
        description: 'Create a Naive Bayes classifier to automatically detect spam emails from a dataset.',
        skills: ['Natural Language Processing', 'Text Preprocessing', 'Naive Bayes', 'Model Evaluation'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Build strong coding foundations in Python',
      'Understand mathematical concepts essential for AI/ML',
      'Learn fundamental machine learning concepts',
      'Complete hands-on projects to apply knowledge',
      'Develop problem-solving skills for AI challenges'
    ],
    prerequisites: [
      'Basic computer literacy',
      'High school mathematics',
      'No prior programming experience required',
      'Willingness to learn and practice'
    ],
    outcomes: [
      'Proficiency in Python programming for AI/ML',
      'Understanding of core mathematical concepts',
      'Ability to build and evaluate ML models',
      'Portfolio of 2 completed projects',
      'Foundation for intermediate AI/ML courses'
    ]
  },
  'ai-ml-2': {
    id: 'ai-ml-2',
    title: 'AI/ML Course - Level 2: Intermediate (Core ML & DL)',
    description: 'Build working ML/DL models and understand algorithms deeply. Master machine learning algorithms, deep learning foundations, neural network architectures, and advanced projects like MNIST digit recognition.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 9800,
    rating: 4.8,
    reviews: 1450,
    category: 'AI/ML',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    instructor: {
      name: 'Dr. Michael Rodriguez',
      title: 'Deep Learning Specialist & ML Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 12000,
      courses: 6,
      rating: 4.8,
      bio: 'Dr. Michael Rodriguez is a deep learning expert with extensive experience in computer vision and natural language processing. He has worked with leading tech companies and has mentored hundreds of ML engineers.'
    },
    syllabus: [
      {
        title: 'Machine Learning Algorithms',
        lessons: 12,
        duration: '18 hours',
        topics: ['Linear & Logistic Regression', 'Decision Trees, Random Forests', 'KNN, SVM', 'Clustering: K-Means, DBSCAN', 'Dimensionality reduction: PCA, t-SNE']
      },
      {
        title: 'Deep Learning Foundations',
        lessons: 10,
        duration: '15 hours',
        topics: ['Neural networks basics (perceptron, activation functions)', 'Forward & backpropagation', 'Gradient descent & optimizers', 'Deep learning frameworks']
      },
      {
        title: 'Neural Network Architectures',
        lessons: 8,
        duration: '12 hours',
        topics: ['CNNs for image tasks', 'RNNs, LSTMs for sequence data', 'Autoencoders', 'Transfer learning']
      },
      {
        title: 'Data Handling & Pipelines',
        lessons: 6,
        duration: '9 hours',
        topics: ['Feature engineering', 'Model selection & hyperparameter tuning', 'Cross-validation', 'ML pipeline development']
      }
    ],
    projects: [
      {
        title: 'Handwritten Digit Recognition',
        description: 'Build a CNN model to recognize handwritten digits using the MNIST dataset.',
        skills: ['TensorFlow', 'Keras', 'Computer Vision', 'CNN', 'Model Optimization'],
        duration: '3 weeks'
      },
      {
        title: 'Movie Review Sentiment Analysis',
        description: 'Create an RNN model for sentiment analysis of movie reviews using NLP techniques.',
        skills: ['Natural Language Processing', 'RNN', 'LSTM', 'Text Processing', 'Sentiment Analysis'],
        duration: '3 weeks'
      },
      {
        title: 'Customer Segmentation',
        description: 'Implement clustering algorithms to segment customers based on their behavior.',
        skills: ['Unsupervised Learning', 'K-Means', 'DBSCAN', 'Data Visualization', 'Business Analytics'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Master core machine learning algorithms',
      'Understand deep learning fundamentals',
      'Build and deploy neural networks',
      'Learn advanced data preprocessing techniques',
      'Complete complex ML/DL projects'
    ],
    prerequisites: [
      'AI/ML Level 1 completion or equivalent knowledge',
      'Strong Python programming skills',
      'Understanding of basic mathematics',
      'Familiarity with data analysis libraries'
    ],
    outcomes: [
      'Expertise in ML algorithms and deep learning',
      'Ability to build production-ready models',
      'Portfolio of 3 advanced projects',
      'Skills in model optimization and deployment',
      'Foundation for advanced AI specialization'
    ]
  },
  'ai-ml-3': {
    id: 'ai-ml-3',
    title: 'AI/ML Course - Level 3: Advanced (Specialization & Research)',
    description: 'Move into cutting-edge AI, deployment, and specialization. Master transformers, LLMs, generative AI, NLP, computer vision, reinforcement learning, MLOps, and ethics in AI with capstone projects.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 months',
    students: 7200,
    rating: 4.9,
    reviews: 1100,
    category: 'AI/ML',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Alex Kumar',
      title: 'AI Research Director & MLOps Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 8000,
      courses: 4,
      rating: 4.9,
      bio: 'Dr. Alex Kumar is a leading AI researcher specializing in large language models and MLOps. He has published groundbreaking research in top-tier conferences and has led AI teams at major tech companies.'
    },
    syllabus: [
      {
        title: 'Advanced Deep Learning',
        lessons: 10,
        duration: '15 hours',
        topics: ['Transformers & Attention mechanisms', 'Large Language Models (LLMs)', 'Generative AI: GANs, Diffusion Models', 'Advanced optimization techniques']
      },
      {
        title: 'Natural Language Processing (NLP)',
        lessons: 8,
        duration: '12 hours',
        topics: ['Text preprocessing, embeddings (Word2Vec, BERT)', 'Chatbots, machine translation', 'Prompt engineering & fine-tuning LLMs', 'Advanced NLP applications']
      },
      {
        title: 'Computer Vision (CV)',
        lessons: 8,
        duration: '12 hours',
        topics: ['Object detection (YOLO, Faster R-CNN)', 'Image segmentation (U-Net)', 'Transfer learning', 'Advanced CV techniques']
      },
      {
        title: 'Reinforcement Learning (RL)',
        lessons: 6,
        duration: '9 hours',
        topics: ['Markov Decision Processes', 'Q-learning, Deep Q-Networks', 'Applications in robotics & gaming', 'Advanced RL algorithms']
      },
      {
        title: 'MLOps & Deployment',
        lessons: 6,
        duration: '9 hours',
        topics: ['Model serving with Flask/FastAPI', 'Docker & Kubernetes basics', 'ML pipelines with TensorFlow Serving', 'CI/CD for ML', 'Model monitoring']
      },
      {
        title: 'Ethics & Explainability',
        lessons: 4,
        duration: '6 hours',
        topics: ['Bias in ML models', 'Explainable AI (SHAP, LIME)', 'Responsible AI practices', 'AI governance and compliance']
      }
    ],
    projects: [
      {
        title: 'AI-Powered Chatbot with LLM Fine-tuning',
        description: 'Build and deploy a sophisticated chatbot using fine-tuned language models for specific domains.',
        skills: ['LLM Fine-tuning', 'Prompt Engineering', 'API Development', 'Model Deployment', 'Natural Language Understanding'],
        duration: '4 weeks'
      },
      {
        title: 'Self-Driving Car Simulation',
        description: 'Create a reinforcement learning agent for autonomous vehicle control in a simulated environment.',
        skills: ['Reinforcement Learning', 'Computer Vision', 'Simulation', 'Deep Q-Networks', 'Robotics'],
        duration: '5 weeks'
      },
      {
        title: 'Face Mask Detection System',
        description: 'Develop a real-time face mask detection system using computer vision and deploy it as a web application.',
        skills: ['Computer Vision', 'Object Detection', 'Real-time Processing', 'Web Deployment', 'Model Optimization'],
        duration: '3 weeks'
      },
      {
        title: 'ML Model Deployment on Cloud',
        description: 'Deploy a complete ML pipeline on cloud infrastructure with monitoring and scaling capabilities.',
        skills: ['MLOps', 'Cloud Computing', 'Docker', 'Kubernetes', 'Model Monitoring', 'CI/CD'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Master cutting-edge AI technologies',
      'Learn advanced deployment and MLOps',
      'Understand AI ethics and responsible development',
      'Build production-ready AI systems',
      'Develop expertise in AI research methodologies'
    ],
    prerequisites: [
      'AI/ML Level 2 completion or equivalent experience',
      'Strong understanding of deep learning',
      'Experience with ML frameworks',
      'Basic knowledge of cloud computing'
    ],
    outcomes: [
      'Expertise in advanced AI technologies',
      'Skills in AI system deployment and MLOps',
      'Portfolio of 4 capstone projects',
      'Understanding of AI ethics and governance',
      'Readiness for AI research or senior engineering roles'
    ]
  },
  // Cybersecurity Courses
  'cyber-1': {
    id: 'cyber-1',
    title: 'Cybersecurity - Level 1: Foundations (Beginner)',
    description: 'Build awareness, digital hygiene, and essential technical literacy. Learn cybersecurity basics, computer & network fundamentals, cryptography, and practical security skills.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 11200,
    rating: 4.7,
    reviews: 1650,
    category: 'Cybersecurity',
    thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800',
    instructor: {
      name: 'Alex Rodriguez',
      title: 'Cybersecurity Specialist & Digital Forensics Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 18000,
      courses: 12,
      rating: 4.7,
      bio: 'Alex Rodriguez is a cybersecurity expert with over 8 years of experience in digital forensics and incident response. He has worked with government agencies and Fortune 500 companies to secure their digital infrastructure.'
    },
    syllabus: [
      {
        title: 'Introduction to Cybersecurity',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is cybersecurity? Why it matters in today\'s world', 'Types of threats: malware, phishing, ransomware, social engineering', 'Basics of cyber laws, ethics & responsible use', 'Cybersecurity career paths and opportunities']
      },
      {
        title: 'Computer & Network Basics',
        lessons: 6,
        duration: '8 hours',
        topics: ['Operating systems (Windows, Linux basics)', 'Networking fundamentals (IP, DNS, HTTP/HTTPS, firewalls)', 'Cryptography 101: symmetric/asymmetric encryption, hashing', 'Network protocols and security']
      },
      {
        title: 'Practical Security Skills',
        lessons: 6,
        duration: '8 hours',
        topics: ['Setting up secure passwords, 2FA', 'Identifying phishing attempts', 'Using VPNs & firewalls', 'Linux terminal basics and security commands']
      }
    ],
    projects: [
      {
        title: 'Secure Password Management System',
        description: 'Create a secure password management system with encryption and best practices.',
        skills: ['Password Security', 'Encryption', 'Security Best Practices', 'User Interface Design'],
        duration: '2 weeks'
      },
      {
        title: 'Phishing Detection Training',
        description: 'Build a system to identify and analyze phishing attempts with real-world examples.',
        skills: ['Email Security', 'Social Engineering', 'Threat Analysis', 'Security Awareness'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Build strong cybersecurity awareness',
      'Learn digital hygiene best practices',
      'Master essential technical literacy',
      'Understand basic security concepts',
      'Develop practical security skills'
    ],
    prerequisites: [
      'Basic computer literacy',
      'No prior cybersecurity experience required',
      'Willingness to learn security concepts',
      'Access to a computer with internet'
    ],
    outcomes: [
      'Understanding of cybersecurity fundamentals',
      'Ability to identify common threats',
      'Skills in basic security practices',
      'Foundation for intermediate cybersecurity courses',
      'Portfolio of 2 security projects'
    ]
  },
  'cyber-2': {
    id: 'cyber-2',
    title: 'Cybersecurity - Level 2: Core Technical Skills (Intermediate)',
    description: 'Move from awareness into hands-on defensive & offensive basics. Master network security, system security, web application security, ethical hacking, and digital forensics.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 8900,
    rating: 4.8,
    reviews: 1200,
    category: 'Cybersecurity',
    thumbnail: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800',
    instructor: {
      name: 'Sarah Johnson',
      title: 'Penetration Tester & Security Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 14000,
      courses: 8,
      rating: 4.8,
      bio: 'Sarah Johnson is a certified penetration tester with extensive experience in red team operations and security architecture. She has conducted security assessments for major corporations and government agencies.'
    },
    syllabus: [
      {
        title: 'Network Security',
        lessons: 6,
        duration: '10 hours',
        topics: ['TCP/IP deep dive', 'Firewalls, IDS/IPS', 'Securing wireless networks', 'Network monitoring and analysis']
      },
      {
        title: 'System Security',
        lessons: 6,
        duration: '10 hours',
        topics: ['Hardening Windows/Linux systems', 'Malware analysis basics', 'Endpoint protection', 'System monitoring and logging']
      },
      {
        title: 'Web & Application Security',
        lessons: 6,
        duration: '10 hours',
        topics: ['Common vulnerabilities (OWASP Top 10)', 'SQL injection, XSS, CSRF', 'Secure coding practices', 'Web application testing']
      },
      {
        title: 'Introduction to Ethical Hacking',
        lessons: 6,
        duration: '10 hours',
        topics: ['Reconnaissance & scanning (Nmap, Wireshark)', 'Basics of penetration testing', 'Hands-on with tools (Burp Suite, Metasploit)', 'Vulnerability assessment']
      },
      {
        title: 'Digital Forensics Basics',
        lessons: 4,
        duration: '6 hours',
        topics: ['How breaches are investigated', 'Log analysis', 'Chain of custody', 'Forensic tools and techniques']
      }
    ],
    projects: [
      {
        title: 'Network Security Assessment',
        description: 'Conduct a comprehensive network security assessment using industry-standard tools.',
        skills: ['Network Security', 'Vulnerability Assessment', 'Penetration Testing', 'Security Tools'],
        duration: '3 weeks'
      },
      {
        title: 'System Hardening Project',
        description: 'Harden a Windows and Linux system against common attack vectors.',
        skills: ['System Security', 'OS Hardening', 'Security Configuration', 'Compliance'],
        duration: '3 weeks'
      },
      {
        title: 'Web Application Penetration Test',
        description: 'Perform a complete penetration test on a web application and document findings.',
        skills: ['Web Security', 'OWASP Testing', 'Vulnerability Assessment', 'Report Writing'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Master defensive security skills',
      'Learn offensive security basics',
      'Understand digital forensics',
      'Build technical expertise',
      'Develop hands-on security skills'
    ],
    prerequisites: [
      'Cybersecurity Level 1 completion or equivalent knowledge',
      'Basic networking knowledge',
      'Understanding of operating systems',
      'Familiarity with command line interfaces'
    ],
    outcomes: [
      'Expertise in network and system security',
      'Skills in ethical hacking and penetration testing',
      'Understanding of digital forensics',
      'Portfolio of 3 security assessment projects',
      'Foundation for advanced cybersecurity specialization'
    ]
  },
  'cyber-3': {
    id: 'cyber-3',
    title: 'Cybersecurity - Level 3: Advanced Cybersecurity',
    description: 'Specialization, certifications, job-ready expertise. Master advanced network security, ethical hacking & penetration testing, cloud security, incident response, and GRC.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 months',
    students: 6500,
    rating: 4.9,
    reviews: 850,
    category: 'Cybersecurity',
    thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    instructor: {
      name: 'Dr. Maria Santos',
      title: 'Chief Information Security Officer & GRC Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 10000,
      courses: 6,
      rating: 4.9,
      bio: 'Dr. Maria Santos is a CISO with over 15 years of experience in cybersecurity governance, risk management, and compliance. She has led security transformations at major enterprises and is a recognized expert in GRC frameworks.'
    },
    syllabus: [
      {
        title: 'Advanced Network Security',
        lessons: 8,
        duration: '12 hours',
        topics: ['Intrusion detection & prevention systems', 'VPN tunneling, Zero Trust Networks', 'Advanced cryptography (PKI, certificates)', 'Network security architecture']
      },
      {
        title: 'Ethical Hacking & Penetration Testing',
        lessons: 10,
        duration: '15 hours',
        topics: ['Red Team vs Blue Team methodology', 'Exploit development', 'Social engineering attacks', 'Advanced Metasploit, Kali Linux usage']
      },
      {
        title: 'Cloud & Application Security',
        lessons: 6,
        duration: '9 hours',
        topics: ['Securing AWS, Azure, GCP', 'Container security (Docker, Kubernetes)', 'API security', 'Cloud security architecture']
      },
      {
        title: 'Incident Response & Forensics',
        lessons: 6,
        duration: '9 hours',
        topics: ['Threat hunting', 'Reverse engineering malware', 'Security Information & Event Management (SIEM tools like Splunk)', 'Incident response procedures']
      },
      {
        title: 'Governance, Risk & Compliance',
        lessons: 4,
        duration: '6 hours',
        topics: ['ISO 27001, GDPR, HIPAA', 'Risk assessment frameworks', 'Cybersecurity policies', 'Compliance management']
      }
    ],
    projects: [
      {
        title: 'Simulated Penetration Test Report',
        description: 'Conduct a comprehensive penetration test and create a detailed report with remediation recommendations.',
        skills: ['Penetration Testing', 'Report Writing', 'Risk Assessment', 'Remediation Planning'],
        duration: '4 weeks'
      },
      {
        title: 'Cyber Range / CTF Competition',
        description: 'Participate in and design cybersecurity competitions and capture-the-flag events.',
        skills: ['Competitive Security', 'Team Collaboration', 'Problem Solving', 'Security Tools'],
        duration: '3 weeks'
      },
      {
        title: 'Certification Preparation',
        description: 'Prepare for industry certifications like CEH, CompTIA Security+, or CISSP.',
        skills: ['Certification Study', 'Exam Preparation', 'Industry Knowledge', 'Professional Development'],
        duration: '6 weeks'
      }
    ],
    goals: [
      'Achieve cybersecurity specialization',
      'Prepare for industry certifications',
      'Master advanced security techniques',
      'Build job-ready expertise',
      'Develop leadership skills in security'
    ],
    prerequisites: [
      'Cybersecurity Level 2 completion or equivalent experience',
      'Strong understanding of security concepts',
      'Experience with security tools',
      'Basic knowledge of compliance frameworks'
    ],
    outcomes: [
      'Expertise in advanced cybersecurity domains',
      'Skills in penetration testing and incident response',
      'Understanding of GRC and compliance',
      'Portfolio of 3 advanced security projects',
      'Readiness for senior cybersecurity roles'
    ]
  },
  // Prompt Engineering Courses
  'prompt-1': {
    id: 'prompt-1',
    title: 'Prompt Engineering - Level 1: Beginner (Foundations of Prompting)',
    description: 'Understand GenAI basics & write effective prompts. Learn about LLMs, prompt basics, simple prompting techniques, and build mini projects like AI study notes generator.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 weeks',
    students: 15800,
    rating: 4.8,
    reviews: 2100,
    category: 'Prompt Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Emily Watson',
      title: 'AI Research Scientist & Prompt Engineering Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 20000,
      courses: 10,
      rating: 4.8,
      bio: 'Dr. Emily Watson is a leading researcher in natural language processing and prompt engineering. She has published extensively on LLM optimization and has worked with major AI companies to improve prompt effectiveness.'
    },
    syllabus: [
      {
        title: 'Introduction to Generative AI',
        lessons: 4,
        duration: '6 hours',
        topics: ['What are LLMs? (GPT, Claude, Gemini, LLaMA)', 'Difference between AI, ML, and LLMs', 'Applications across industries', 'GenAI landscape and capabilities']
      },
      {
        title: 'Prompt Basics',
        lessons: 4,
        duration: '6 hours',
        topics: ['Zero-shot vs. Few-shot prompting', 'Direct instructions vs. conversation prompts', 'Format control (JSON, tables, bullet points)', 'Prompt structure and clarity']
      },
      {
        title: 'Simple Prompting Techniques',
        lessons: 4,
        duration: '6 hours',
        topics: ['Role-based prompts ("Act as a teacher/analyst")', 'Instructional clarity & constraints', 'Reframing and re-prompting', 'Basic prompt optimization']
      }
    ],
    projects: [
      {
        title: 'AI Study Notes Generator',
        description: 'Create a system that generates comprehensive study notes from educational content using effective prompts.',
        skills: ['Prompt Engineering', 'Content Generation', 'Educational Technology', 'AI Applications'],
        duration: '2 weeks'
      },
      {
        title: 'News Summarizer with Pros & Cons',
        description: 'Build a news summarization tool that provides balanced analysis with pros and cons using structured prompts.',
        skills: ['Text Summarization', 'Bias Mitigation', 'Structured Output', 'News Analysis'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Understand GenAI basics and capabilities',
      'Learn fundamental prompt engineering techniques',
      'Master simple prompting strategies',
      'Build practical AI applications',
      'Develop prompt optimization skills'
    ],
    prerequisites: [
      'Basic computer literacy',
      'No prior AI experience required',
      'Willingness to experiment with AI tools',
      'Access to AI platforms (ChatGPT, Claude, etc.)'
    ],
    outcomes: [
      'Understanding of LLM capabilities and limitations',
      'Skills in basic prompt engineering',
      'Ability to create effective prompts',
      'Portfolio of 2 AI-powered projects',
      'Foundation for advanced prompt engineering'
    ]
  },
  'prompt-2': {
    id: 'prompt-2',
    title: 'Prompt Engineering - Level 2: Intermediate (Advanced Prompting & Workflows)',
    description: 'Learn structured prompting, reasoning, and workflow design. Master advanced prompting methods, domain-specific prompting, multi-turn conversations, and prompt evaluation.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 12300,
    rating: 4.9,
    reviews: 1600,
    category: 'Prompt Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    instructor: {
      name: 'Dr. James Liu',
      title: 'Senior AI Engineer & Workflow Automation Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 16000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. James Liu is a senior AI engineer specializing in workflow automation and advanced prompt engineering. He has developed enterprise-grade AI solutions and has extensive experience in multi-agent systems.'
    },
    syllabus: [
      {
        title: 'Advanced Prompting Methods',
        lessons: 6,
        duration: '10 hours',
        topics: ['Chain-of-Thought (CoT) prompting', 'Few-shot prompting with examples', 'Self-consistency & output refinement', 'Advanced prompt patterns']
      },
      {
        title: 'Domain-Specific Prompting',
        lessons: 6,
        duration: '10 hours',
        topics: ['Academic prompts (summarization, flashcards)', 'Business prompts (email drafting, research reports)', 'Creative prompts (storytelling, image generation)', 'Technical prompts (code generation, debugging)']
      },
      {
        title: 'Multi-Turn Prompting & Agents',
        lessons: 4,
        duration: '6 hours',
        topics: ['Designing conversations with memory', 'Iterative refinement of outputs', 'Prompt chaining for complex tasks', 'Agent-based workflows']
      },
      {
        title: 'Prompt Evaluation & Debugging',
        lessons: 4,
        duration: '6 hours',
        topics: ['Why prompts fail', 'Hallucination detection', 'Bias & ethical concerns', 'Prompt testing and optimization']
      }
    ],
    projects: [
      {
        title: 'AI-Powered Career Counselor Chatbot',
        description: 'Build an intelligent career counseling system using multi-turn conversations and domain-specific prompts.',
        skills: ['Multi-turn Conversations', 'Domain Expertise', 'Career Counseling', 'Chatbot Development'],
        duration: '3 weeks'
      },
      {
        title: 'Practice Questions Generator',
        description: 'Create a system that generates practice questions for exams using advanced prompting techniques.',
        skills: ['Educational Technology', 'Question Generation', 'Assessment Design', 'Prompt Optimization'],
        duration: '3 weeks'
      },
      {
        title: 'Automated Blog Writer',
        description: 'Develop an automated blog writing system with structured sections and consistent quality.',
        skills: ['Content Generation', 'Blog Writing', 'Content Strategy', 'Automation'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Learn structured prompting techniques',
      'Master reasoning and workflow design',
      'Develop domain-specific expertise',
      'Build complex AI workflows',
      'Understand prompt evaluation methods'
    ],
    prerequisites: [
      'Prompt Engineering Level 1 completion or equivalent knowledge',
      'Experience with basic prompt engineering',
      'Understanding of AI model capabilities',
      'Familiarity with multiple AI platforms'
    ],
    outcomes: [
      'Expertise in advanced prompting methods',
      'Skills in workflow design and automation',
      'Understanding of domain-specific applications',
      'Portfolio of 3 advanced prompt engineering projects',
      'Foundation for expert-level prompt engineering'
    ]
  },
  'prompt-3': {
    id: 'prompt-3',
    title: 'Prompt Engineering - Level 3: Advanced (Expert Prompt Engineering)',
    description: 'Move into building scalable AI applications with prompts. Master advanced prompt architectures, LLM fine-tuning, frameworks like LangChain, MLOps, and build capstone projects.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 9200,
    rating: 4.9,
    reviews: 1100,
    category: 'Prompt Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    instructor: {
      name: 'Dr. Priya Kapoor',
      title: 'AI Systems Architect & MLOps Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 12000,
      courses: 6,
      rating: 4.9,
      bio: 'Dr. Priya Kapoor is an AI systems architect with expertise in building scalable AI applications. She has led the development of enterprise AI systems and has extensive experience in MLOps and prompt engineering at scale.'
    },
    syllabus: [
      {
        title: 'Advanced Prompt Architectures',
        lessons: 6,
        duration: '10 hours',
        topics: ['Tree-of-Thought (ToT) prompting', 'ReAct prompting (Reason + Act)', 'Tool-augmented prompting (search, APIs)', 'Advanced prompt patterns and architectures']
      },
      {
        title: 'LLM Fine-Tuning & Customization',
        lessons: 6,
        duration: '10 hours',
        topics: ['Prompt tuning vs. fine-tuning', 'Embedding models for personalization', 'Vector databases for retrieval-augmented generation (RAG)', 'Custom model training']
      },
      {
        title: 'Frameworks for Prompt Engineering',
        lessons: 6,
        duration: '10 hours',
        topics: ['LangChain & LlamaIndex basics', 'Prompt templates & pipelines', 'Building multi-agent systems', 'Enterprise prompt management']
      },
      {
        title: 'MLOps for Prompt Engineering',
        lessons: 4,
        duration: '6 hours',
        topics: ['Monitoring LLM responses', 'Logging & feedback loops', 'Deploying prompt-based apps', 'Production prompt optimization']
      }
    ],
    projects: [
      {
        title: 'Intelligent Document Q&A System',
        description: 'Build a RAG-based system that answers questions from documents using advanced prompt engineering and vector databases.',
        skills: ['RAG Systems', 'Vector Databases', 'Document Processing', 'Question Answering'],
        duration: '4 weeks'
      },
      {
        title: 'AI-Based Project Idea Generator',
        description: 'Create an intelligent system that generates personalized project ideas for students using advanced prompting techniques.',
        skills: ['Idea Generation', 'Personalization', 'Educational Technology', 'AI Creativity'],
        duration: '3 weeks'
      },
      {
        title: 'Multi-Agent System',
        description: 'Develop a multi-agent system with researcher, writer, and critic bots working together using advanced prompt architectures.',
        skills: ['Multi-Agent Systems', 'Agent Coordination', 'Workflow Automation', 'System Architecture'],
        duration: '5 weeks'
      }
    ],
    goals: [
      'Build scalable AI applications with prompts',
      'Master advanced prompt architectures',
      'Learn LLM fine-tuning and customization',
      'Develop expertise in AI frameworks',
      'Understand MLOps for prompt engineering'
    ],
    prerequisites: [
      'Prompt Engineering Level 2 completion or equivalent experience',
      'Strong understanding of prompt engineering',
      'Experience with AI frameworks',
      'Basic knowledge of machine learning concepts'
    ],
    outcomes: [
      'Expertise in advanced prompt architectures',
      'Skills in building scalable AI applications',
      'Understanding of LLM fine-tuning and RAG',
      'Portfolio of 3 capstone prompt engineering projects',
      'Readiness for senior AI engineering roles'
    ]
  },
  // Data Science Courses
  'data-1': {
    id: 'data-1',
    title: 'Data Science - Level 1: Beginner (Foundations)',
    description: 'Build programming, math, and data handling foundations. Learn data science basics, Python programming, mathematics, SQL, and hands-on projects with student performance analysis.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 14200,
    rating: 4.8,
    reviews: 1950,
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    instructor: {
      name: 'Dr. Aisha Khan',
      title: 'Data Science Educator & Analytics Expert',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 18000,
      courses: 12,
      rating: 4.8,
      bio: 'Dr. Aisha Khan is a data science educator with over 10 years of experience in analytics and machine learning. She has worked with major corporations and has taught thousands of students the fundamentals of data science.'
    },
    syllabus: [
      {
        title: 'Introduction to Data Science',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is data science? Industry use cases', 'Data lifecycle: collection → cleaning → analysis → visualization → ML', 'Data science career paths', 'Tools and technologies overview']
      },
      {
        title: 'Mathematics for Data Science',
        lessons: 6,
        duration: '9 hours',
        topics: ['Linear Algebra basics (vectors, matrices)', 'Probability & Statistics (distributions, hypothesis testing)', 'Calculus basics (derivatives, optimization)', 'Mathematical foundations for data analysis']
      },
      {
        title: 'Python for Data Science',
        lessons: 8,
        duration: '12 hours',
        topics: ['Python fundamentals', 'Libraries: NumPy, Pandas, Matplotlib, Seaborn', 'Data cleaning, preprocessing, EDA', 'Python best practices for data science']
      },
      {
        title: 'SQL for Data Handling',
        lessons: 4,
        duration: '6 hours',
        topics: ['Basics of relational databases', 'Writing queries, filtering, joins, aggregation', 'Data manipulation with SQL', 'Database design principles']
      }
    ],
    projects: [
      {
        title: 'Student Performance Analysis',
        description: 'Analyze student performance dataset to identify patterns and create insights using Python and data visualization.',
        skills: ['Data Analysis', 'Python', 'Pandas', 'Matplotlib', 'Statistical Analysis'],
        duration: '2 weeks'
      },
      {
        title: 'Sales Dashboard Creation',
        description: 'Create interactive dashboards with Pandas & Matplotlib to visualize sales data and trends.',
        skills: ['Data Visualization', 'Dashboard Creation', 'Business Analytics', 'Python Libraries'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Build strong programming foundations in Python',
      'Understand mathematical concepts for data science',
      'Learn data handling and manipulation',
      'Master basic data visualization',
      'Develop analytical thinking skills'
    ],
    prerequisites: [
      'Basic computer literacy',
      'High school mathematics',
      'No prior programming experience required',
      'Willingness to learn and practice'
    ],
    outcomes: [
      'Proficiency in Python for data science',
      'Understanding of core mathematical concepts',
      'Skills in data manipulation and visualization',
      'Portfolio of 2 data analysis projects',
      'Foundation for intermediate data science courses'
    ]
  },
  'data-2': {
    id: 'data-2',
    title: 'Data Science - Level 2: Intermediate (Core Data Science & ML)',
    description: 'Learn core ML techniques & apply them to real data. Master data wrangling, feature engineering, data visualization, machine learning basics, and model deployment.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 11800,
    rating: 4.9,
    reviews: 1650,
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    instructor: {
      name: 'Dr. Michael Chen',
      title: 'Machine Learning Engineer & Data Science Lead',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 15000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. Michael Chen is a machine learning engineer with extensive experience in building production ML systems. He has led data science teams at major tech companies and has expertise in both research and applied machine learning.'
    },
    syllabus: [
      {
        title: 'Data Wrangling & Feature Engineering',
        lessons: 6,
        duration: '9 hours',
        topics: ['Handling missing data, outliers', 'Encoding categorical variables', 'Feature scaling, normalization', 'Advanced data preprocessing techniques']
      },
      {
        title: 'Data Visualization',
        lessons: 4,
        duration: '6 hours',
        topics: ['Advanced plots with Seaborn & Plotly', 'Dashboards with PowerBI / Tableau basics', 'Interactive visualizations', 'Storytelling with data']
      },
      {
        title: 'Machine Learning Basics',
        lessons: 8,
        duration: '12 hours',
        topics: ['Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests', 'Unsupervised learning: Clustering (K-means, DBSCAN), PCA', 'Evaluation metrics: accuracy, precision, recall, F1, ROC', 'Model selection and validation']
      },
      {
        title: 'Model Deployment Basics',
        lessons: 4,
        duration: '6 hours',
        topics: ['Saving models (Pickle, Joblib)', 'Simple deployment using Flask / Streamlit', 'Model versioning', 'Basic MLOps concepts']
      }
    ],
    projects: [
      {
        title: 'Housing Price Prediction',
        description: 'Build a machine learning model to predict housing prices using regression techniques and feature engineering.',
        skills: ['Machine Learning', 'Regression', 'Feature Engineering', 'Model Evaluation'],
        duration: '3 weeks'
      },
      {
        title: 'Customer Segmentation',
        description: 'Implement clustering algorithms to segment customers based on their behavior and preferences.',
        skills: ['Clustering', 'Unsupervised Learning', 'Customer Analytics', 'Business Intelligence'],
        duration: '3 weeks'
      },
      {
        title: 'Sales Analysis Dashboard',
        description: 'Create a comprehensive dashboard for sales analysis with interactive visualizations and insights.',
        skills: ['Data Visualization', 'Dashboard Development', 'Business Analytics', 'Interactive Design'],
        duration: '2 weeks'
      }
    ],
    goals: [
      'Master core machine learning techniques',
      'Learn advanced data preprocessing',
      'Build and deploy ML models',
      'Develop data visualization skills',
      'Apply ML to real-world problems'
    ],
    prerequisites: [
      'Data Science Level 1 completion or equivalent knowledge',
      'Strong Python programming skills',
      'Understanding of basic mathematics',
      'Familiarity with data analysis libraries'
    ],
    outcomes: [
      'Expertise in machine learning algorithms',
      'Skills in data preprocessing and feature engineering',
      'Ability to build and deploy ML models',
      'Portfolio of 3 ML projects',
      'Foundation for advanced data science specialization'
    ]
  },
  'data-3': {
    id: 'data-3',
    title: 'Data Science - Level 3: Advanced (Specialization & Deployment)',
    description: 'Master advanced ML, deep learning, big data, and deployment pipelines. Learn advanced machine learning, deep learning for data science, big data & cloud, MLOps, and ethics.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 8500,
    rating: 4.9,
    reviews: 1200,
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    instructor: {
      name: 'Dr. Sarah Williams',
      title: 'Senior Data Scientist & MLOps Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 12000,
      courses: 6,
      rating: 4.9,
      bio: 'Dr. Sarah Williams is a senior data scientist with expertise in advanced machine learning and MLOps. She has led the development of large-scale data science systems and has extensive experience in cloud computing and big data technologies.'
    },
    syllabus: [
      {
        title: 'Advanced Machine Learning',
        lessons: 8,
        duration: '12 hours',
        topics: ['Gradient Boosting (XGBoost, LightGBM, CatBoost)', 'Hyperparameter tuning (GridSearch, RandomSearch, Bayesian)', 'Ensemble methods', 'Advanced model evaluation techniques']
      },
      {
        title: 'Deep Learning for Data Science',
        lessons: 8,
        duration: '12 hours',
        topics: ['Neural networks (TensorFlow, PyTorch)', 'CNNs for image data', 'RNNs, LSTMs for time-series & NLP', 'Transfer learning and pre-trained models']
      },
      {
        title: 'Big Data & Cloud',
        lessons: 6,
        duration: '9 hours',
        topics: ['Basics of Hadoop & Spark', 'Cloud ML tools: AWS Sagemaker, GCP Vertex AI, Azure ML', 'Distributed computing concepts', 'Cloud data storage and processing']
      },
      {
        title: 'MLOps & Deployment',
        lessons: 6,
        duration: '9 hours',
        topics: ['ML pipelines with MLflow / Airflow', 'Dockerizing ML models', 'CI/CD for ML', 'Model monitoring and maintenance']
      },
      {
        title: 'Ethics & Responsible AI',
        lessons: 4,
        duration: '6 hours',
        topics: ['Bias in data & models', 'Explainable AI (LIME, SHAP)', 'Data privacy & governance', 'Responsible AI practices']
      }
    ],
    projects: [
      {
        title: 'Fraud Detection System',
        description: 'Build a comprehensive fraud detection system using advanced ML techniques and deploy it on cloud infrastructure.',
        skills: ['Advanced ML', 'Fraud Detection', 'Cloud Deployment', 'Model Monitoring'],
        duration: '4 weeks'
      },
      {
        title: 'NLP-based Sentiment Analysis Tool',
        description: 'Create a sentiment analysis tool using deep learning and natural language processing techniques.',
        skills: ['Deep Learning', 'NLP', 'Sentiment Analysis', 'Text Processing'],
        duration: '3 weeks'
      },
      {
        title: 'End-to-End ML Pipeline',
        description: 'Develop a complete ML pipeline with deployment on cloud, including monitoring and maintenance.',
        skills: ['MLOps', 'Cloud Computing', 'Pipeline Development', 'Model Deployment'],
        duration: '5 weeks'
      },
      {
        title: 'Recommendation Engine',
        description: 'Build a recommendation engine for e-commerce using collaborative filtering and content-based approaches.',
        skills: ['Recommendation Systems', 'Collaborative Filtering', 'Content-Based Filtering', 'E-commerce Analytics'],
        duration: '4 weeks'
      }
    ],
    goals: [
      'Master advanced machine learning techniques',
      'Learn deep learning for data science',
      'Understand big data and cloud technologies',
      'Build production-ready ML systems',
      'Develop expertise in MLOps and deployment'
    ],
    prerequisites: [
      'Data Science Level 2 completion or equivalent experience',
      'Strong understanding of machine learning',
      'Experience with data science libraries',
      'Basic knowledge of cloud computing'
    ],
    outcomes: [
      'Expertise in advanced ML and deep learning',
      'Skills in big data and cloud technologies',
      'Understanding of MLOps and deployment',
      'Portfolio of 4 advanced data science projects',
      'Readiness for senior data science roles'
    ]
  },
  // Self Employment Courses
  'self-1': {
    id: 'self-1',
    title: 'Self Employment - Level 1: Basic (Foundations of Self-Employment)',
    description: 'Teach students the fundamentals of freelancing, gig work, and personal branding. Learn freelancing vs entrepreneurship, digital foundations, and freelancing with AI tools.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 weeks',
    students: 16800,
    rating: 4.7,
    reviews: 2200,
    category: 'Self Employment',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'Marcus Johnson',
      title: 'Entrepreneurship Coach & Freelancing Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 22000,
      courses: 15,
      rating: 4.7,
      bio: 'Marcus Johnson is an entrepreneurship coach with over 12 years of experience in freelancing and business development. He has helped thousands of students start their own businesses and build successful freelance careers.'
    },
    syllabus: [
      {
        title: 'Introduction to Self-Employment',
        lessons: 4,
        duration: '6 hours',
        topics: ['Freelancing vs. entrepreneurship', 'Platforms: Upwork, Fiverr, Toptal, LinkedIn', 'Identifying personal strengths & niche', 'Self-employment opportunities and challenges']
      },
      {
        title: 'Digital Foundations',
        lessons: 4,
        duration: '6 hours',
        topics: ['Building a professional LinkedIn profile', 'Resume & portfolio basics', 'Writing effective proposals & client communication', 'Personal branding fundamentals']
      },
      {
        title: 'Freelancing with AI Tools',
        lessons: 4,
        duration: '6 hours',
        topics: ['Using ChatGPT, Claude, Gemini for productivity', 'AI-powered content creation (blogs, social media posts)', 'Basic prompt engineering for side hustles', 'AI tools for business efficiency']
      }
    ],
    projects: [
      {
        title: 'Personal Portfolio Website',
        description: 'Create a professional portfolio website showcasing your skills and services using modern web development tools.',
        skills: ['Web Development', 'Portfolio Design', 'Personal Branding', 'Content Creation'],
        duration: '2 weeks'
      },
      {
        title: 'Professional Gig Description',
        description: 'Write compelling gig descriptions for Fiverr/Upwork that attract clients and showcase your expertise.',
        skills: ['Copywriting', 'Marketing', 'Client Communication', 'Platform Optimization'],
        duration: '1 week'
      }
    ],
    goals: [
      'Understand self-employment fundamentals',
      'Learn digital branding and marketing',
      'Master AI tools for productivity',
      'Build professional online presence',
      'Develop client communication skills'
    ],
    prerequisites: [
      'Basic computer literacy',
      'Willingness to learn business skills',
      'Access to internet and computer',
      'Motivation to start freelancing'
    ],
    outcomes: [
      'Understanding of self-employment opportunities',
      'Professional online presence',
      'Skills in AI-powered productivity',
      'Portfolio of 2 professional projects',
      'Foundation for intermediate self-employment courses'
    ]
  },
  'self-2': {
    id: 'self-2',
    title: 'Self Employment - Level 2: Intermediate (Freelancing & Digital Products)',
    description: 'Enable students to start earning through freelance projects & small-scale businesses. Master freelancing in tech and creative domains, digital products, and marketing.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 13500,
    rating: 4.8,
    reviews: 1800,
    category: 'Self Employment',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'Dr. Lisa Park',
      title: 'Digital Marketing Specialist & Business Coach',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 18000,
      courses: 12,
      rating: 4.8,
      bio: 'Dr. Lisa Park is a digital marketing specialist and business coach with expertise in helping entrepreneurs scale their businesses. She has built multiple successful online businesses and has mentored hundreds of freelancers.'
    },
    syllabus: [
      {
        title: 'Freelancing in Tech Domains',
        lessons: 6,
        duration: '9 hours',
        topics: ['AI/ML projects (resume screening, data cleaning, predictive models)', 'Data visualization dashboards for clients', 'Cybersecurity audits for small businesses', 'Tech freelancing best practices']
      },
      {
        title: 'Freelancing in Creative Domains',
        lessons: 6,
        duration: '9 hours',
        topics: ['Content writing with AI', 'Graphic design using MidJourney / Canva + AI', 'Video editing with AI tools (Descript, Runway)', 'Creative freelancing strategies']
      },
      {
        title: 'Digital Products & Passive Income',
        lessons: 4,
        duration: '6 hours',
        topics: ['Create and sell templates (Notion, resumes, pitch decks)', 'Building eBooks and guides with AI', 'Online courses & mini-workshops', 'Passive income strategies']
      },
      {
        title: 'Marketing & Client Management',
        lessons: 4,
        duration: '6 hours',
        topics: ['Building a personal brand', 'Social media growth strategies', 'Negotiation, pricing, contracts', 'Client relationship management']
      }
    ],
    projects: [
      {
        title: 'AI-Generated eBook',
        description: 'Publish a comprehensive eBook using AI tools and create a marketing strategy for sales.',
        skills: ['Content Creation', 'AI Tools', 'Publishing', 'Marketing Strategy'],
        duration: '3 weeks'
      },
      {
        title: 'Notion Template Business',
        description: 'Build and sell a small paid Notion template with marketing and sales strategy.',
        skills: ['Template Design', 'Product Development', 'Sales Strategy', 'Business Development'],
        duration: '2 weeks'
      },
      {
        title: 'Mock Client Project',
        description: 'Deliver a complete mock client project on Upwork/Fiverr showcasing your skills.',
        skills: ['Project Management', 'Client Delivery', 'Quality Assurance', 'Professional Communication'],
        duration: '3 weeks'
      }
    ],
    goals: [
      'Start earning through freelance projects',
      'Learn digital product creation',
      'Master marketing and client management',
      'Build passive income streams',
      'Develop business skills'
    ],
    prerequisites: [
      'Self Employment Level 1 completion or equivalent knowledge',
      'Basic understanding of freelancing',
      'Willingness to create and sell products',
      'Access to freelancing platforms'
    ],
    outcomes: [
      'Skills in tech and creative freelancing',
      'Understanding of digital product creation',
      'Marketing and client management expertise',
      'Portfolio of 3 business projects',
      'Foundation for advanced self-employment'
    ]
  },
  'self-3': {
    id: 'self-3',
    title: 'Self Employment - Level 3: Advanced (Entrepreneurship & Scaling)',
    description: 'Help students transition from individual freelancers to business owners. Master building AI-powered startups, scaling self-employment, monetization at scale, and legal & financial literacy.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 9800,
    rating: 4.9,
    reviews: 1400,
    category: 'Self Employment',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'Dr. Robert Kim',
      title: 'Startup Founder & Business Scaling Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 15000,
      courses: 8,
      rating: 4.9,
      bio: 'Dr. Robert Kim is a serial entrepreneur who has founded and scaled multiple successful startups. He has raised millions in funding and has extensive experience in business development, scaling, and exit strategies.'
    },
    syllabus: [
      {
        title: 'Building an AI-Powered Startup',
        lessons: 6,
        duration: '9 hours',
        topics: ['Identifying gaps & business opportunities', 'MVP (Minimum Viable Product) development', 'No-code tools (Bubble, Glide, Zapier + AI)', 'Startup validation and testing']
      },
      {
        title: 'Scaling Self-Employment into a Business',
        lessons: 6,
        duration: '9 hours',
        topics: ['Hiring & outsourcing', 'Building small teams', 'Managing multiple client projects', 'Business process optimization']
      },
      {
        title: 'Monetization at Scale',
        lessons: 4,
        duration: '6 hours',
        topics: ['Subscription-based products', 'SaaS with AI (chatbots, dashboards, niche assistants)', 'Affiliate marketing & digital partnerships', 'Revenue optimization strategies']
      },
      {
        title: 'Legal & Financial Literacy',
        lessons: 4,
        duration: '6 hours',
        topics: ['Taxes, invoicing, contracts', 'Intellectual property basics', 'Building a company (LLP, private limited)', 'Financial planning and management']
      }
    ],
    projects: [
      {
        title: 'AI-Powered Service Launch',
        description: 'Launch an AI-based service (resume AI, chatbot, content generator) with complete business plan and marketing strategy.',
        skills: ['Business Planning', 'AI Service Development', 'Market Launch', 'Strategic Planning'],
        duration: '4 weeks'
      },
      {
        title: 'Revenue Generation Challenge',
        description: 'Generate $100+ revenue from freelancing in a set timeframe with detailed tracking and optimization.',
        skills: ['Revenue Generation', 'Performance Tracking', 'Business Optimization', 'Financial Management'],
        duration: '6 weeks'
      },
      {
        title: 'Digital Product Suite',
        description: 'Create a full digital product (course, template bundle, or SaaS MVP) with complete go-to-market strategy.',
        skills: ['Product Development', 'Market Strategy', 'Business Development', 'Product Launch'],
        duration: '5 weeks'
      }
    ],
    goals: [
      'Transition from freelancer to business owner',
      'Build and scale AI-powered startups',
      'Master monetization at scale',
      'Learn legal and financial aspects',
      'Develop leadership and management skills'
    ],
    prerequisites: [
      'Self Employment Level 2 completion or equivalent experience',
      'Experience with freelancing or small business',
      'Understanding of basic business concepts',
      'Willingness to scale and grow'
    ],
    outcomes: [
      'Skills in startup development and scaling',
      'Understanding of advanced monetization',
      'Legal and financial business knowledge',
      'Portfolio of 3 advanced business projects',
      'Readiness for entrepreneurship and business leadership'
    ]
  },
  // Merge additional course details
  ...additionalCourseDetails
};
