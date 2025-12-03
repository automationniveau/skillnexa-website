import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
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
  Shield,
  RefreshCw
} from 'lucide-react';
import { trendingCourses } from '@/lib/trending';

// AI/ML Course Data
const aiMlCourses = {
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
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Introduction to AI & ML',
        lessons: 6,
        duration: '8 hours',
        topics: ['What is AI, ML, DL?', 'Real-world applications', 'Myths & ethics in AI', 'AI in healthcare, finance, chatbots, robotics']
      },
      {
        title: 'Mathematics for AI',
        lessons: 10,
        duration: '12 hours',
        topics: ['Linear Algebra (vectors, matrices, transformations)', 'Probability & Statistics', 'Calculus basics (derivatives, gradients)', 'Bayes theorem']
      },
      {
        title: 'Python for AI',
        lessons: 8,
        duration: '10 hours',
        topics: ['Python basics, NumPy, Pandas', 'Matplotlib visualization', 'Data preprocessing & cleaning', 'Exploratory data analysis']
      },
      {
        title: 'Introduction to Machine Learning',
        lessons: 8,
        duration: '10 hours',
        topics: ['Supervised vs. Unsupervised learning', 'Simple regression, classification', 'scikit-learn basics', 'Evaluation metrics (accuracy, precision, recall)']
      }
    ],
    projects: [
      'Predict student scores from study hours',
      'Spam email classifier (Naive Bayes)'
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
      title: 'Deep Learning Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 12000,
      courses: 6,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'Machine Learning Algorithms',
        lessons: 12,
        duration: '16 hours',
        topics: ['Linear & Logistic Regression', 'Decision Trees, Random Forests', 'KNN, SVM', 'Clustering: K-Means, DBSCAN']
      },
      {
        title: 'Deep Learning Foundations',
        lessons: 10,
        duration: '14 hours',
        topics: ['Neural networks basics', 'Perceptron, activation functions', 'Forward & backpropagation', 'Gradient descent & optimizers']
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
        duration: '8 hours',
        topics: ['Feature engineering', 'Model selection & hyperparameter tuning', 'Cross-validation', 'MLOps basics']
      }
    ],
    projects: [
      'Handwritten digit recognition (MNIST with CNN)',
      'Movie review sentiment analysis (NLP with RNN)',
      'Customer segmentation using clustering'
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
    reviews: 980,
    category: 'AI/ML',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Alex Kumar',
      title: 'AI Research Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 8000,
      courses: 4,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Advanced Deep Learning',
        lessons: 10,
        duration: '15 hours',
        topics: ['Transformers & Attention mechanisms', 'Large Language Models (LLMs)', 'Generative AI: GANs, Diffusion Models', 'Fine-tuning techniques']
      },
      {
        title: 'Natural Language Processing (NLP)',
        lessons: 8,
        duration: '12 hours',
        topics: ['Text preprocessing, embeddings (Word2Vec, BERT)', 'Chatbots, machine translation', 'Prompt engineering', 'Fine-tuning LLMs']
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
        duration: '10 hours',
        topics: ['Markov Decision Processes', 'Q-learning, Deep Q-Networks', 'Applications in robotics & gaming', 'Policy gradient methods']
      },
      {
        title: 'MLOps & Deployment',
        lessons: 8,
        duration: '12 hours',
        topics: ['Model serving with Flask/FastAPI', 'Docker & Kubernetes basics', 'ML pipelines with TensorFlow Serving', 'CI/CD for ML']
      },
      {
        title: 'Ethics & Explainability',
        lessons: 4,
        duration: '6 hours',
        topics: ['Bias in ML models', 'Explainable AI (SHAP, LIME)', 'Responsible AI practices', 'AI governance']
      }
    ],
    projects: [
      'AI-powered chatbot with LLM fine-tuning',
      'Self-driving car simulation (RL)',
      'Face mask detection (CV)',
      'Deploy ML model on cloud (AWS/GCP)'
    ]
  },
  'cyber-1': {
    id: 'cyber-1',
    title: 'Cybersecurity - Level 1: Foundations (Beginner)',
    description: 'Build awareness, digital hygiene, and essential technical literacy. Learn cybersecurity basics, computer & network fundamentals, cryptography, and practical security skills.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 11200,
    rating: 4.7,
    reviews: 1450,
    category: 'Cybersecurity',
    thumbnail: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800',
    instructor: {
      name: 'Alex Rodriguez',
      title: 'Cybersecurity Expert & Ethical Hacker',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 18000,
      courses: 10,
      rating: 4.7
    },
    syllabus: [
      {
        title: 'Introduction to Cybersecurity',
        lessons: 6,
        duration: '8 hours',
        topics: ['What is cybersecurity? Why it matters', 'Types of threats: malware, phishing, ransomware', 'Social engineering attacks', 'Cyber laws, ethics & responsible use']
      },
      {
        title: 'Computer & Network Basics',
        lessons: 8,
        duration: '10 hours',
        topics: ['Operating systems (Windows, Linux basics)', 'Networking fundamentals (IP, DNS, HTTP/HTTPS)', 'Firewalls and network security', 'Cryptography 101: symmetric/asymmetric encryption']
      },
      {
        title: 'Practical Security Skills',
        lessons: 6,
        duration: '8 hours',
        topics: ['Setting up secure passwords, 2FA', 'Identifying phishing attempts', 'Using VPNs & firewalls', 'Linux terminal basics']
      }
    ],
    projects: [
      'Set up a secure home network',
      'Create and test strong password policies',
      'Identify and report phishing attempts'
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
      title: 'Penetration Testing Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 15000,
      courses: 8,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'Network Security',
        lessons: 8,
        duration: '12 hours',
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
        lessons: 8,
        duration: '12 hours',
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
        topics: ['How breaches are investigated', 'Log analysis', 'Chain of custody', 'Evidence collection and preservation']
      }
    ],
    projects: [
      'Conduct a penetration test on a lab environment',
      'Analyze malware samples in a sandbox',
      'Set up and configure a SIEM system'
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
      title: 'Cybersecurity Research Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 12000,
      courses: 6,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Advanced Network Security',
        lessons: 8,
        duration: '12 hours',
        topics: ['Intrusion detection & prevention systems', 'VPN tunneling, Zero Trust Networks', 'Advanced cryptography (PKI, certificates)', 'Network segmentation and micro-segmentation']
      },
      {
        title: 'Ethical Hacking & Penetration Testing',
        lessons: 10,
        duration: '15 hours',
        topics: ['Red Team vs Blue Team methodology', 'Exploit development', 'Social engineering attacks', 'Advanced Metasploit, Kali Linux usage']
      },
      {
        title: 'Cloud & Application Security',
        lessons: 8,
        duration: '12 hours',
        topics: ['Securing AWS, Azure, GCP', 'Container security (Docker, Kubernetes)', 'API security', 'Cloud security best practices']
      },
      {
        title: 'Incident Response & Forensics (Advanced)',
        lessons: 8,
        duration: '12 hours',
        topics: ['Threat hunting', 'Reverse engineering malware', 'Security Information & Event Management (SIEM tools like Splunk)', 'Incident response playbooks']
      },
      {
        title: 'Governance, Risk & Compliance (GRC)',
        lessons: 6,
        duration: '10 hours',
        topics: ['ISO 27001, GDPR, HIPAA', 'Risk assessment frameworks', 'Cybersecurity policies', 'Compliance auditing']
      }
    ],
    projects: [
      'Simulated penetration test report',
      'Cyber range / CTF competitions',
      'Preparation for CEH, CompTIA Security+, CISSP certifications'
    ]
  },
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
      title: 'AI Research Scientist & Prompt Engineer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 20000,
      courses: 12,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'Introduction to Generative AI',
        lessons: 4,
        duration: '6 hours',
        topics: ['What are LLMs? (GPT, Claude, Gemini, LLaMA)', 'Difference between AI, ML, and LLMs', 'Applications across industries', 'Understanding model capabilities and limitations']
      },
      {
        title: 'Prompt Basics',
        lessons: 6,
        duration: '8 hours',
        topics: ['Zero-shot vs. Few-shot prompting', 'Direct instructions vs. conversation prompts', 'Format control (JSON, tables, bullet points)', 'Prompt structure and clarity']
      },
      {
        title: 'Simple Prompting Techniques',
        lessons: 6,
        duration: '8 hours',
        topics: ['Role-based prompts ("Act as a teacher/analyst")', 'Instructional clarity & constraints', 'Reframing and re-prompting', 'Context setting and examples']
      }
    ],
    projects: [
      'AI study notes generator',
      'News summarizer with "pros & cons" output',
      'Personal AI writing assistant'
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
    reviews: 1650,
    category: 'Prompt Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    instructor: {
      name: 'Dr. James Liu',
      title: 'Advanced AI Systems Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 16000,
      courses: 9,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Advanced Prompting Methods',
        lessons: 8,
        duration: '12 hours',
        topics: ['Chain-of-Thought (CoT) prompting', 'Few-shot prompting with examples', 'Self-consistency & output refinement', 'Prompt chaining for complex tasks']
      },
      {
        title: 'Domain-Specific Prompting',
        lessons: 6,
        duration: '10 hours',
        topics: ['Academic prompts (summarization, flashcards)', 'Business prompts (email drafting, research reports)', 'Creative prompts (storytelling, image generation)', 'Technical documentation prompts']
      },
      {
        title: 'Multi-Turn Prompting & Agents',
        lessons: 6,
        duration: '8 hours',
        topics: ['Designing conversations with memory', 'Iterative refinement of outputs', 'Context management across turns', 'Building conversational AI workflows']
      },
      {
        title: 'Prompt Evaluation & Debugging',
        lessons: 4,
        duration: '6 hours',
        topics: ['Why prompts fail', 'Hallucination detection', 'Bias & ethical concerns', 'Performance metrics and testing']
      }
    ],
    projects: [
      'AI-powered career counselor chatbot',
      'Generate practice questions for exams',
      'Automated blog writer with structured sections'
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
    reviews: 1200,
    category: 'Prompt Engineering',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    instructor: {
      name: 'Dr. Priya Kapoor',
      title: 'AI Systems Architect & Researcher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 14000,
      courses: 7,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Advanced Prompt Architectures',
        lessons: 8,
        duration: '12 hours',
        topics: ['Tree-of-Thought (ToT) prompting', 'ReAct prompting (Reason + Act)', 'Tool-augmented prompting (search, APIs)', 'Multi-agent prompt systems']
      },
      {
        title: 'LLM Fine-Tuning & Customization',
        lessons: 6,
        duration: '10 hours',
        topics: ['Prompt tuning vs. fine-tuning', 'Embedding models for personalization', 'Vector databases for retrieval-augmented generation (RAG)', 'Custom model training']
      },
      {
        title: 'Frameworks for Prompt Engineering',
        lessons: 8,
        duration: '12 hours',
        topics: ['LangChain & LlamaIndex basics', 'Prompt templates & pipelines', 'Building multi-agent systems', 'Integration with external APIs']
      },
      {
        title: 'MLOps for Prompt Engineering',
        lessons: 6,
        duration: '10 hours',
        topics: ['Monitoring LLM responses', 'Logging & feedback loops', 'Deploying prompt-based apps', 'Performance optimization and scaling']
      }
    ],
    projects: [
      'Intelligent document Q&A system (RAG + LLM)',
      'AI-based project idea generator for students',
      'Multi-agent system (researcher + writer + critic bots)'
    ]
  },
  'data-1': {
    id: 'data-1',
    title: 'Data Science - Level 1: Beginner (Foundations)',
    description: 'Build programming, math, and data handling foundations. Learn data science basics, Python programming, mathematics, SQL, and hands-on projects with student performance analysis.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 14200,
    rating: 4.8,
    reviews: 1850,
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    instructor: {
      name: 'Dr. Aisha Khan',
      title: 'Data Science Educator & Researcher',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 22000,
      courses: 15,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'Introduction to Data Science',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is data science? Industry use cases', 'Data lifecycle: collection → cleaning → analysis → visualization → ML', 'Data science roles and career paths', 'Tools and technologies overview']
      },
      {
        title: 'Mathematics for Data Science',
        lessons: 8,
        duration: '12 hours',
        topics: ['Linear Algebra basics (vectors, matrices)', 'Probability & Statistics (distributions, hypothesis testing)', 'Calculus basics (derivatives, optimization)', 'Statistical concepts for data analysis']
      },
      {
        title: 'Python for Data Science',
        lessons: 10,
        duration: '14 hours',
        topics: ['Python fundamentals', 'Libraries: NumPy, Pandas, Matplotlib, Seaborn', 'Data cleaning, preprocessing, EDA', 'Data manipulation and analysis']
      },
      {
        title: 'SQL for Data Handling',
        lessons: 6,
        duration: '8 hours',
        topics: ['Basics of relational databases', 'Writing queries, filtering, joins, aggregation', 'Data extraction and transformation', 'Database design principles']
      }
    ],
    projects: [
      'Analyze student performance dataset',
      'Create dashboards with Pandas & Matplotlib',
      'Build a data cleaning pipeline'
    ]
  },
  'data-2': {
    id: 'data-2',
    title: 'Data Science - Level 2: Intermediate (Core Data Science & ML)',
    description: 'Learn core ML techniques & apply them to real data. Master data wrangling, feature engineering, visualization, machine learning basics, and model deployment.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 10800,
    rating: 4.9,
    reviews: 1400,
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    instructor: {
      name: 'Dr. Raj Patel',
      title: 'Machine Learning Engineer & Data Scientist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 18000,
      courses: 12,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Data Wrangling & Feature Engineering',
        lessons: 8,
        duration: '12 hours',
        topics: ['Handling missing data, outliers', 'Encoding categorical variables', 'Feature scaling, normalization', 'Feature selection and engineering techniques']
      },
      {
        title: 'Data Visualization',
        lessons: 6,
        duration: '10 hours',
        topics: ['Advanced plots with Seaborn & Plotly', 'Dashboards with PowerBI / Tableau basics', 'Interactive visualizations', 'Storytelling with data']
      },
      {
        title: 'Machine Learning Basics',
        lessons: 10,
        duration: '15 hours',
        topics: ['Supervised learning: Linear/Logistic Regression, Decision Trees, Random Forests', 'Unsupervised learning: Clustering (K-means, DBSCAN), PCA', 'Evaluation metrics: accuracy, precision, recall, F1, ROC', 'Model validation and cross-validation']
      },
      {
        title: 'Model Deployment Basics',
        lessons: 4,
        duration: '6 hours',
        topics: ['Saving models (Pickle, Joblib)', 'Simple deployment using Flask / Streamlit', 'Model monitoring and maintenance', 'Production considerations']
      }
    ],
    projects: [
      'Predict housing prices',
      'Customer segmentation with clustering',
      'Dashboard for sales analysis'
    ]
  },
  'data-3': {
    id: 'data-3',
    title: 'Data Science - Level 3: Advanced (Specialization & Deployment)',
    description: 'Master advanced ML, deep learning, big data, and deployment pipelines. Learn gradient boosting, neural networks, MLOps, cloud platforms, and ethics in AI.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 7800,
    rating: 4.9,
    reviews: 950,
    category: 'Data Science',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    instructor: {
      name: 'Dr. Lisa Wang',
      title: 'Senior Data Scientist & ML Engineer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 16000,
      courses: 10,
      rating: 4.9
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
        lessons: 10,
        duration: '15 hours',
        topics: ['Neural networks (TensorFlow, PyTorch)', 'CNNs for image data', 'RNNs, LSTMs for time-series & NLP', 'Transfer learning and pre-trained models']
      },
      {
        title: 'Big Data & Cloud',
        lessons: 6,
        duration: '10 hours',
        topics: ['Basics of Hadoop & Spark', 'Cloud ML tools: AWS Sagemaker, GCP Vertex AI, Azure ML', 'Distributed computing concepts', 'Scalable data processing']
      },
      {
        title: 'MLOps & Deployment',
        lessons: 8,
        duration: '12 hours',
        topics: ['ML pipelines with MLflow / Airflow', 'Dockerizing ML models', 'CI/CD for ML', 'Model versioning and monitoring']
      },
      {
        title: 'Ethics & Responsible AI',
        lessons: 4,
        duration: '6 hours',
        topics: ['Bias in data & models', 'Explainable AI (LIME, SHAP)', 'Data privacy & governance', 'AI ethics and responsible development']
      }
    ],
    projects: [
      'Fraud detection system',
      'NLP-based sentiment analysis tool',
      'End-to-end ML pipeline with deployment on cloud',
      'Recommendation engine for ecommerce'
    ]
  },
  'self-1': {
    id: 'self-1',
    title: 'Self Employment - Level 1: Basic (Foundations of Self-Employment)',
    description: 'Teach students the fundamentals of freelancing, gig work, and personal branding. Learn about platforms, digital foundations, and freelancing with AI tools.',
    price: 18500,
    originalPrice: 25000,
    duration: '4-6 weeks',
    students: 16800,
    rating: 4.7,
    reviews: 2200,
    category: 'Self Employment',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    instructor: {
      name: 'Marcus Johnson',
      title: 'Entrepreneur & Freelancing Expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      students: 25000,
      courses: 8,
      rating: 4.7
    },
    syllabus: [
      {
        title: 'Introduction to Self-Employment',
        lessons: 4,
        duration: '6 hours',
        topics: ['Freelancing vs. entrepreneurship', 'Platforms: Upwork, Fiverr, Toptal, LinkedIn', 'Identifying personal strengths & niche', 'Market research and opportunity identification']
      },
      {
        title: 'Digital Foundations',
        lessons: 6,
        duration: '8 hours',
        topics: ['Building a professional LinkedIn profile', 'Resume & portfolio basics', 'Writing effective proposals & client communication', 'Personal branding strategies']
      },
      {
        title: 'Freelancing with AI Tools',
        lessons: 6,
        duration: '8 hours',
        topics: ['Using ChatGPT, Claude, Gemini for productivity', 'AI-powered content creation (blogs, social media posts)', 'Basic prompt engineering for side hustles', 'Automation tools and workflows']
      }
    ],
    projects: [
      'Create a personal portfolio website',
      'Write a professional gig description for Fiverr/Upwork',
      'Build a personal brand strategy'
    ]
  },
  'self-2': {
    id: 'self-2',
    title: 'Self Employment - Level 2: Intermediate (Freelancing & Digital Products)',
    description: 'Enable students to start earning through freelance projects & small-scale businesses. Master tech freelancing, creative domains, digital products, and marketing.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 13500,
    rating: 4.8,
    reviews: 1800,
    category: 'Self Employment',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    instructor: {
      name: 'Sophie Chen',
      title: 'Digital Marketing & Business Coach',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 20000,
      courses: 10,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'Freelancing in Tech Domains',
        lessons: 6,
        duration: '10 hours',
        topics: ['AI/ML projects (resume screening, data cleaning, predictive models)', 'Data visualization dashboards for clients', 'Cybersecurity audits for small businesses', 'Web development and automation projects']
      },
      {
        title: 'Freelancing in Creative Domains',
        lessons: 6,
        duration: '8 hours',
        topics: ['Content writing with AI', 'Graphic design using MidJourney / Canva + AI', 'Video editing with AI tools (Descript, Runway)', 'Social media management and strategy']
      },
      {
        title: 'Digital Products & Passive Income',
        lessons: 8,
        duration: '12 hours',
        topics: ['Create and sell templates (Notion, resumes, pitch decks)', 'Building eBooks and guides with AI', 'Online courses & mini-workshops', 'Digital product creation and marketing']
      },
      {
        title: 'Marketing & Client Management',
        lessons: 6,
        duration: '8 hours',
        topics: ['Building a personal brand', 'Social media growth strategies', 'Negotiation, pricing, contracts', 'Client relationship management']
      }
    ],
    projects: [
      'Publish an AI-generated eBook',
      'Build a small paid Notion template',
      'Deliver a mock client project on Upwork/Fiverr'
    ]
  },
  'self-3': {
    id: 'self-3',
    title: 'Self Employment - Level 3: Advanced (Entrepreneurship & Scaling)',
    description: 'Help students transition from individual freelancers to business owners. Master AI-powered startups, scaling, monetization, legal & financial literacy, and capstone projects.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 9200,
    rating: 4.9,
    reviews: 1200,
    category: 'Self Employment',
    thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    instructor: {
      name: 'David Kim',
      title: 'Startup Founder & Business Strategist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 15000,
      courses: 6,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Building an AI-Powered Startup',
        lessons: 8,
        duration: '12 hours',
        topics: ['Identifying gaps & business opportunities', 'MVP (Minimum Viable Product) development', 'No-code tools (Bubble, Glide, Zapier + AI)', 'Startup validation and market testing']
      },
      {
        title: 'Scaling Self-Employment into a Business',
        lessons: 6,
        duration: '10 hours',
        topics: ['Hiring & outsourcing', 'Building small teams', 'Managing multiple client projects', 'Business process optimization']
      },
      {
        title: 'Monetization at Scale',
        lessons: 8,
        duration: '12 hours',
        topics: ['Subscription-based products', 'SaaS with AI (chatbots, dashboards, niche assistants)', 'Affiliate marketing & digital partnerships', 'Revenue diversification strategies']
      },
      {
        title: 'Legal & Financial Literacy',
        lessons: 6,
        duration: '10 hours',
        topics: ['Taxes, invoicing, contracts', 'Intellectual property basics', 'Building a company (LLP, private limited)', 'Financial planning and business accounting']
      }
    ],
    projects: [
      'Launch a micro-startup (AI-powered study aid, content bot, SaaS)',
      'Generate $100+ revenue from freelancing in a set timeframe',
      'Create a full digital product (course, template bundle, or SaaS MVP)'
    ]
  },
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
      rating: 4.8
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
        lessons: 6,
        duration: '8 hours',
        topics: ['Building a LinkedIn profile optimized with AI tools', 'Creating a portfolio using Notion / Canva', 'Writing professional proposals (AI-assisted)', 'Personal brand strategy with AI']
      },
      {
        title: 'AI Tools for Beginners',
        lessons: 6,
        duration: '8 hours',
        topics: ['ChatGPT for content writing & resumes', 'Canva + AI for social media design', 'Copy.ai/Jasper for marketing content', 'AI productivity tools and workflows']
      }
    ],
    projects: [
      'Create a Fiverr gig using AI-generated graphics & description',
      'Build a personal portfolio site with AI content',
      'Develop an AI-powered personal brand strategy'
    ]
  },
  'self-ai-2': {
    id: 'self-ai-2',
    title: 'Self Employment with AI Trend - Level 2: Intermediate (Freelancing & Digital Products with AI)',
    description: 'Help students start earning with AI-driven services & products. Master AI freelancing, digital product creation, AI marketing, and client management.',
    price: 18500,
    originalPrice: 25000,
    duration: '8-10 weeks',
    students: 14200,
    rating: 4.9,
    reviews: 1900,
    category: 'Self Employment with AI',
    thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    instructor: {
      name: 'Sophie Chen',
      title: 'AI Business Development Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 22000,
      courses: 14,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Freelancing with AI Skills',
        lessons: 8,
        duration: '12 hours',
        topics: ['Prompt Engineering for clients', 'AI-powered content creation (blogs, LinkedIn posts)', 'AI video & podcast editing (Descript, Runway)', 'AI automation services for businesses']
      },
      {
        title: 'Digital Product Creation',
        lessons: 8,
        duration: '12 hours',
        topics: ['AI eBooks & guides (ChatGPT + Canva)', 'Notion templates & productivity tools', 'Online mini-courses with AI-generated content', 'Digital product marketing with AI']
      },
      {
        title: 'AI for Marketing & Branding',
        lessons: 6,
        duration: '10 hours',
        topics: ['Social media automation (Buffer + AI copy)', 'SEO content writing with AI', 'Generating product visuals with MidJourney / DALL·E', 'AI-driven marketing campaigns']
      },
      {
        title: 'Client Management',
        lessons: 6,
        duration: '8 hours',
        topics: ['Negotiating contracts with AI-generated draft agreements', 'Automating client communication with chatbots', 'Using AI CRMs for client tracking', 'AI-powered project management']
      }
    ],
    projects: [
      'Launch an AI-generated eBook for sale',
      'Build a content calendar with AI',
      'Deliver a mock AI-powered client project'
    ]
  },
  'self-ai-3': {
    id: 'self-ai-3',
    title: 'Self Employment with AI Trend - Level 3: Advanced (AI-Powered Entrepreneurship & Scaling)',
    description: 'Scale freelancing into a startup, build AI-driven businesses, and monetize at scale. Master AI product development, scaling digital business, and MLOps.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 9800,
    rating: 4.9,
    reviews: 1300,
    category: 'Self Employment with AI',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    instructor: {
      name: 'David Kim',
      title: 'AI Startup Founder & Business Strategist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 18000,
      courses: 8,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'AI Product Development',
        lessons: 10,
        duration: '15 hours',
        topics: ['Building AI-powered apps with no-code tools (Bubble, Glide, Zapier + AI)', 'Creating niche AI assistants (e.g., resume helper, study buddy)', 'Using LangChain & LlamaIndex for advanced workflows', 'AI product validation and testing']
      },
      {
        title: 'Scaling Digital Business',
        lessons: 8,
        duration: '12 hours',
        topics: ['Creating an agency (AI content, AI marketing, AI tutors)', 'Hiring & outsourcing work with AI project management tools', 'Subscription models & SaaS with AI', 'Business scaling strategies']
      },
      {
        title: 'MLOps & Deployment for Entrepreneurs',
        lessons: 6,
        duration: '10 hours',
        topics: ['Deploying AI apps on cloud (AWS/GCP)', 'Automating workflows end-to-end', 'Monetization models (ads, subscriptions, licensing)', 'AI product maintenance and updates']
      },
      {
        title: 'Legal & Business Skills',
        lessons: 6,
        duration: '10 hours',
        topics: ['Contracts & IP in AI-generated content', 'Setting up business entities (LLP, Pvt Ltd)', 'Financial literacy & taxation for freelancers/startups', 'AI business compliance and regulations']
      }
    ],
    projects: [
      'Create & launch an AI SaaS product (chatbot, study tool, resume builder)',
      'Build an AI-powered freelancing agency',
      'Earn first $100–$500 via freelancing or digital product sales'
    ]
  },
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
      title: 'Digital Marketing & AI Strategist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 25000,
      courses: 16,
      rating: 4.7
    },
    syllabus: [
      {
        title: 'Introduction to Digital Marketing',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is digital marketing?', 'Traditional vs digital vs AI-powered marketing', 'Customer journey & digital funnels', 'Marketing automation basics']
      },
      {
        title: 'Core Digital Channels',
        lessons: 8,
        duration: '12 hours',
        topics: ['SEO (Search Engine Optimization)', 'SEM (Google Ads basics)', 'Social Media Marketing (Facebook, Instagram, LinkedIn)', 'Email marketing fundamentals']
      },
      {
        title: 'AI in Marketing Basics',
        lessons: 6,
        duration: '8 hours',
        topics: ['Using ChatGPT/Jasper for ad copy, captions & blogs', 'Canva AI for creatives', 'Intro to AI scheduling tools (Buffer, Hootsuite)', 'AI content generation strategies']
      }
    ],
    projects: [
      'Create a social media campaign with AI-generated posts',
      'Write a blog post using AI copywriting tools',
      'Design AI-powered marketing materials'
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
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    instructor: {
      name: 'Dr. Robert Taylor',
      title: 'AI Marketing Analytics Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 20000,
      courses: 12,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'SEO & AI',
        lessons: 6,
        duration: '10 hours',
        topics: ['Keyword research (Ahrefs, SEMrush)', 'AI-assisted SEO content writing', 'Technical SEO automation with SurferSEO, Clearscope', 'AI-powered SEO optimization']
      },
      {
        title: 'SEM & Paid Ads',
        lessons: 6,
        duration: '10 hours',
        topics: ['Running Google Ads & Meta Ads', 'A/B testing with AI-generated variations', 'AI ad performance prediction', 'Automated bidding strategies']
      },
      {
        title: 'Social Media Marketing (SMM)',
        lessons: 6,
        duration: '8 hours',
        topics: ['Building brand presence', 'Influencer marketing with AI analytics', 'Automating posts with AI tools', 'AI-driven social media strategies']
      },
      {
        title: 'Content Marketing',
        lessons: 6,
        duration: '10 hours',
        topics: ['AI-driven blogs, eBooks, and video scripts', 'Generative AI for video (Runway, Pictory)', 'Prompt engineering for marketing', 'Content automation workflows']
      },
      {
        title: 'Analytics & CRO',
        lessons: 4,
        duration: '8 hours',
        topics: ['Google Analytics 4', 'AI dashboards for campaign insights', 'Predictive analytics for conversions', 'AI-powered conversion optimization']
      }
    ],
    projects: [
      'Run a small budget Google Ads campaign',
      'Generate an AI-driven content calendar',
      'Optimize a website/blog using AI SEO tools'
    ]
  },
  'dm-ai-3': {
    id: 'dm-ai-3',
    title: 'Digital Marketing with AI - Level 3: Advanced (AI-Powered Growth Marketing & Strategy)',
    description: 'Master AI-driven strategies, growth hacking, and scaling businesses. Learn advanced SEO/SEM with AI, growth marketing, e-commerce & AI marketing, and AI in branding.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 8500,
    rating: 4.9,
    reviews: 1100,
    category: 'Digital Marketing with AI',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
    instructor: {
      name: 'Dr. Amanda Foster',
      title: 'AI Growth Marketing Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 18000,
      courses: 10,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Advanced SEO/SEM with AI',
        lessons: 8,
        duration: '12 hours',
        topics: ['Voice & image search optimization', 'AI for competitor analysis', 'Smart bidding strategies with ML', 'Advanced AI SEO techniques']
      },
      {
        title: 'Growth Marketing & Funnels',
        lessons: 8,
        duration: '12 hours',
        topics: ['AI-driven customer segmentation', 'Personalized funnels with automation (HubSpot, Zapier)', 'Retargeting & remarketing using AI insights', 'Growth hacking with AI tools']
      },
      {
        title: 'E-commerce & AI Marketing',
        lessons: 6,
        duration: '10 hours',
        topics: ['Shopify/WordPress AI plugins', 'AI-driven product recommendation engines', 'Dynamic pricing with AI', 'E-commerce automation strategies']
      },
      {
        title: 'AI in Branding & Strategy',
        lessons: 6,
        duration: '10 hours',
        topics: ['Sentiment analysis for brand monitoring', 'AI tools for trend prediction', 'Building viral campaigns with AI creativity', 'AI-powered brand strategy development']
      }
    ],
    projects: [
      'Run a complete AI-powered campaign for a brand/startup',
      'Build and launch an AI-optimized eCommerce site',
      'Develop an AI content generation business model'
    ]
  },
  'genai-1': {
    id: 'genai-1',
    title: 'GenAI & Multi-Agent Systems - Level 1: Beginner (Foundations of GenAI & AI Agents)',
    description: 'Build strong fundamentals of generative models & introduce AI agents. Learn GenAI basics, core concepts, practical tools, and introduction to AI agents.',
    price: 18500,
    originalPrice: 25000,
    duration: '6-8 weeks',
    students: 15200,
    rating: 4.8,
    reviews: 1950,
    category: 'GenAI & Multi-Agent Systems',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    instructor: {
      name: 'Dr. Elena Rodriguez',
      title: 'GenAI Research Scientist & Educator',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      students: 22000,
      courses: 14,
      rating: 4.8
    },
    syllabus: [
      {
        title: 'Introduction to Generative AI',
        lessons: 4,
        duration: '6 hours',
        topics: ['What is GenAI? (Text, image, audio, video generation)', 'Difference between traditional AI vs GenAI', 'Applications: Chatbots, content generation, code assistants', 'GenAI landscape and tools overview']
      },
      {
        title: 'Core Concepts in GenAI',
        lessons: 8,
        duration: '12 hours',
        topics: ['Basics of neural networks (MLP, CNN, RNN)', 'Introduction to Transformers & LLMs', 'Pre-training vs fine-tuning', 'Text generation with OpenAI GPT, Claude, LLaMA']
      },
      {
        title: 'Practical Tools for Beginners',
        lessons: 6,
        duration: '10 hours',
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
      'Build a content generator (blog/social media assistant)',
      'Create an AI-powered study notes generator',
      'Simple rule-based chatbot using LangChain'
    ]
  },
  'genai-2': {
    id: 'genai-2',
    title: 'GenAI & Multi-Agent Systems - Level 2: Intermediate (Building with GenAI & Multi-Agent Frameworks)',
    description: 'Build hands-on applications with GenAI + learn how multiple agents work together. Master advanced GenAI, multi-agent systems, MAS + GenAI, and practical applications.',
    price: 18500,
    originalPrice: 25000,
    duration: '10-12 weeks',
    students: 11800,
    rating: 4.9,
    reviews: 1500,
    category: 'GenAI & Multi-Agent Systems',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    instructor: {
      name: 'Dr. Michael Chen',
      title: 'Multi-Agent Systems Architect',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      students: 19000,
      courses: 11,
      rating: 4.9
    },
    syllabus: [
      {
        title: 'Advanced Generative AI',
        lessons: 8,
        duration: '12 hours',
        topics: ['Prompt engineering (zero-shot, few-shot, CoT)', 'Fine-tuning LLMs (LoRA, PEFT)', 'Vector databases & embeddings (Pinecone, FAISS, Weaviate)', 'Retrieval Augmented Generation (RAG)']
      },
      {
        title: 'Multi-Agent Systems (MAS) Basics',
        lessons: 6,
        duration: '10 hours',
        topics: ['What are MAS?', 'Cooperation, competition, and communication', 'Coordination problems in MAS', 'Applications: simulations, swarm robotics, marketplaces']
      },
      {
        title: 'MAS + GenAI',
        lessons: 8,
        duration: '12 hours',
        topics: ['LangChain Agents & Tools', 'AutoGen framework (Microsoft)', 'CrewAI for multi-agent workflows', 'Communication protocols between agents']
      },
      {
        title: 'Practical Applications',
        lessons: 6,
        duration: '10 hours',
        topics: ['AI customer support with multiple specialized agents', 'Research assistant with planner, summarizer, critic agents', 'AI agents for workflow automation', 'Multi-agent system design patterns']
      }
    ],
    projects: [
      'Multi-agent content creation pipeline (writer + editor + fact-checker agents)',
      'AI study assistant with planner + quiz generator',
      'Build a GitHub issue resolver using MAS'
    ]
  },
  'genai-3': {
    id: 'genai-3',
    title: 'GenAI & Multi-Agent Systems - Level 3: Advanced (Research, Scaling & Autonomous Systems)',
    description: 'Develop advanced MAS applications, deploy systems, and explore research trends. Master advanced GenAI techniques, multi-agent RL, scalable architectures, and industry applications.',
    price: 18500,
    originalPrice: 25000,
    duration: '12-16 weeks',
    students: 7200,
    rating: 4.9,
    reviews: 950,
    category: 'GenAI & Multi-Agent Systems',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800',
    instructor: {
      name: 'Dr. Sarah Thompson',
      title: 'Advanced AI Systems Researcher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      students: 16000,
      courses: 8,
      rating: 4.9
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
        lessons: 8,
        duration: '12 hours',
        topics: ['Introduction to Reinforcement Learning', 'Multi-Agent RL basics (cooperation, competition)', 'Environments: PettingZoo, Gymnasium', 'Case study: swarm robotics, autonomous fleets']
      },
      {
        title: 'Scalable Multi-Agent Architectures',
        lessons: 6,
        duration: '10 hours',
        topics: ['Agent orchestration with LangGraph', 'Memory & long-term planning in MAS', 'Distributed MAS (cloud-native AI agents)', 'Scalability and performance optimization']
      },
      {
        title: 'Industry Applications',
        lessons: 6,
        duration: '10 hours',
        topics: ['AI copilots (coding, business assistants)', 'Autonomous research (AI scientists)', 'Finance: trading agents', 'Robotics & IoT with MAS']
      }
    ],
    projects: [
      'AI startup idea: Autonomous customer support system',
      'MAS-based research assistant (planner + writer + verifier)',
      'Swarm simulation (drones/robots coordination)'
    ]
  }
};

const course = {
  id: '1',
  title: 'Complete Web Development Bootcamp',
  description: 'Master modern web development with HTML5, CSS3, JavaScript ES6+, React, Node.js, and MongoDB. Build real-world projects and get job-ready skills.',
  price: 18500,
  originalPrice: 25000,
  duration: '40 hours',
  students: 15420,
  rating: 4.8,
  reviews: 2340,
  category: 'Web Development',
  thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
  instructor: {
    name: 'John Smith',
    title: 'Senior Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    students: 25000,
    courses: 12,
    rating: 4.9
  },
  syllabus: [
    {
      title: 'HTML & CSS Fundamentals',
      lessons: 8,
      duration: '6 hours',
      topics: ['HTML5 Structure', 'CSS3 Styling', 'Responsive Design', 'Flexbox & Grid']
    },
    {
      title: 'JavaScript Essentials',
      lessons: 12,
      duration: '10 hours',
      topics: ['ES6+ Syntax', 'DOM Manipulation', 'Async Programming', 'APIs & Fetch']
    },
    {
      title: 'React Development',
      lessons: 10,
      duration: '15 hours',
      topics: ['Components & JSX', 'State & Props', 'Hooks', 'Context API']
    },
    {
      title: 'Backend with Node.js',
      lessons: 8,
      duration: '9 hours',
      topics: ['Express.js', 'MongoDB', 'Authentication', 'RESTful APIs']
    }
  ],
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Software Developer',
      content: 'This course transformed my career. The practical approach and real projects made all the difference.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100'
    },
    {
      name: 'Mike Chen',
      role: 'Frontend Engineer',
      content: 'Best investment I made for my career. Now working at a top tech company thanks to this course.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    }
  ]
};

const faqs = [
  {
    question: 'Do I need prior programming experience?',
    answer: 'No prior experience needed! This course starts from the basics and gradually builds up to advanced concepts.'
  },
  {
    question: 'How long do I have access to the course?',
    answer: 'You get lifetime access to the course content, including all future updates and new lessons.'
  },
  {
    question: 'Is there a certificate upon completion?',
    answer: 'Yes, you will receive a verified certificate of completion that you can add to your LinkedIn profile.'
  },
  {
    question: 'What if I\'m not satisfied with the course?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, get a full refund within 30 days.'
  }
];

export default function CourseDetail() {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState('overview');
  
  // Get course data dynamically
  const course = id && aiMlCourses[id as keyof typeof aiMlCourses] ? aiMlCourses[id as keyof typeof aiMlCourses] : course;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="space-y-4">
              <Badge className="text-sm">{course.category}</Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg text-muted-foreground">
                {course.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-500" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>

            {/* Course Video Preview */}
            <div className="relative rounded-lg overflow-hidden bg-muted">
              <img 
                src={course.thumbnail}
                alt="Course preview"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Button size="lg" className="rounded-full p-6">
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            {/* Course Syllabus */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Course Syllabus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {course.syllabus.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex justify-between items-center w-full pr-4">
                          <span className="font-medium">{section.title}</span>
                          <div className="text-sm text-muted-foreground">
                            {section.lessons} lessons • {section.duration}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 ml-4">
                          {section.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            {/* Projects Section - Only for AI/ML courses */}
            {course.projects && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Hands-on Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.projects.map((project, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{project}</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Apply your learning with real-world projects
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Instructor Info */}
            <Card>
              <CardHeader>
                <CardTitle>About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <img 
                    src={course.instructor.image}
                    alt={course.instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{course.instructor.name}</h3>
                    <p className="text-muted-foreground">{course.instructor.title}</p>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span>{course.instructor.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{course.instructor.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4 text-muted-foreground" />
                        <span>{course.instructor.courses} courses</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {course.testimonials.map((testimonial, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-primary">₹{course.price.toLocaleString('en-IN')}</span>
                    <span className="text-lg text-muted-foreground line-through">₹{course.originalPrice.toLocaleString('en-IN')}</span>
                  </div>
                  <Badge variant="destructive" className="text-sm">
                    40% OFF - Limited Time
                  </Badge>
                </div>

                {/* Enroll Button */}
                <Button size="lg" className="w-full text-lg">
                  Enroll Now
                </Button>

                {/* Features */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm">Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm">30-day money-back guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-5 h-5 text-primary" />
                    <span className="text-sm">Free course updates</span>
                  </div>
                </div>

                {/* Support Info */}
                <div className="pt-4 border-t text-center text-sm text-muted-foreground">
                  <p>Need help? Contact our support team</p>
                  <Button variant="link" size="sm" className="text-primary p-0 h-auto">
                    support@skillnexa.com
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}