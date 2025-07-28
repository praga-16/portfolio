// Application Data
const portfolioData = {
  "personalInfo": {
    "name": "Pragatheesvaran A B",
    "title": "AI/ML Engineer & Full Stack Developer",
    "location": "chennai",
    "email": "pragatheesvaranab@gmail.com",
    "phone": "+91 8220420788",
    "bio": "Passionate AI/ML engineer with experience in developing intelligent systems, machine learning models, and full-stack applications. Specialized in natural language processing, computer vision, and conversational AI."
  },
  "skills": {
    "ai_ml": [
      {"name": "Python", "level": 95},
      {"name": "TensorFlow", "level": 90},
      {"name": "PyTorch", "level": 85},
      {"name": "Scikit-learn", "level": 92},
      {"name": "OpenAI API", "level": 88},
      {"name": "Hugging Face", "level": 85}
    ],
    "frontend": [
      {"name": "React.js", "level": 90},
      {"name": "Next.js", "level": 85},
      {"name": "HTML/CSS", "level": 95}
    ],
    "backend": [
      {"name": "Node.js", "level": 85},
      {"name": "Flask", "level": 88},
      {"name": "Docker", "level": 85}
    ],
    "tools": [
      {"name": "Git", "level": 95},
      {"name": "Jupyter", "level": 92},
      {"name": "Figma", "level": 75},
      {"name": "Postman", "level": 88}
    ]
  },
  "projects": [
    {
      "id": 1,
      "title": "AI-Powered Chatbot Platform",
      "description": "Developed an intelligent chatbot platform using OpenAI GPT-4 API with natural language understanding, context awareness, and multi-turn conversations. Integrated with web applications for customer support automation.",
      "tech": ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL", "Docker"],
      "features": ["Natural Language Processing", "Context Awareness", "Multi-turn Conversations", "API Integration"],
      "status": "Production",
      "demoUrl": "#",
      "githubUrl": "#"
    },
    {
      "id": 2,
      "title": "Computer Vision Image Classifier",
      "description": "Built a deep learning model for image classification using convolutional neural networks. Achieved 95% accuracy on custom dataset with real-time inference capabilities through web interface.",
      "tech": ["Python", "TensorFlow", "Keras", "OpenCV", "Flask", "JavaScript"],
      "features": ["Real-time Classification", "Custom CNN Architecture", "Data Augmentation", "Model Optimization"],
      "status": "Completed",
      "demoUrl": "#",
      "githubUrl": "#"
    },
    {
      "id": 3,
      "title": "Sentiment Analysis Dashboard",
      "description": "Created a comprehensive sentiment analysis tool for social media monitoring using transformer models. Features real-time data processing, interactive visualizations, and automated reporting.",
      "tech": ["Python", "Hugging Face", "Streamlit", "Pandas", "Plotly", "Twitter API"],
      "features": ["Real-time Analysis", "Interactive Dashboards", "Automated Reports", "Multi-platform Support"],
      "status": "Active",
      "demoUrl": "#",
      "githubUrl": "#"
    },
    {
      "id": 4,
      "title": "ML Model Deployment Pipeline",
      "description": "Designed and implemented an automated ML pipeline for model training, validation, and deployment using MLOps best practices. Includes A/B testing, monitoring, and automated retraining.",
      "tech": ["Python", "MLflow", "Docker", "Kubernetes", "AWS", "GitHub Actions"],
      "features": ["Automated Training", "A/B Testing", "Model Monitoring", "CI/CD Pipeline"],
      "status": "Production",
      "demoUrl": "#",
      "githubUrl": "#"
    },
    {
      "id": 5,
      "title": "Predictive Analytics Platform",
      "description": "Developed a machine learning platform for predictive analytics in e-commerce, featuring customer lifetime value prediction, churn analysis, and recommendation systems.",
      "tech": ["Python", "Scikit-learn", "XGBoost", "React", "Node.js", "MongoDB"],
      "features": ["Customer LTV Prediction", "Churn Analysis", "Recommendation Engine", "Interactive Dashboard"],
      "status": "Production",
      "demoUrl": "#",
      "githubUrl": "#"
    },
    {
      "id": 6,
      "title": "Neural Network Visualizer",
      "description": "Built an interactive web application for visualizing neural network architectures and training processes. Helps users understand deep learning concepts through real-time animations and explanations.",
      "tech": ["JavaScript", "D3.js", "React", "Python", "TensorFlow.js", "WebGL"],
      "features": ["Interactive Visualizations", "Real-time Training", "Educational Content", "Custom Architectures"],
      "status": "Open Source",
      "demoUrl": "#",
      "githubUrl": "#"
    }
  ],
  "experience": [
    {
      "company": "TechCorp AI",
      "position": "Senior AI/ML Engineer",
      "duration": "2022 - Present",
      "description": "Leading development of AI-powered products, managing ML infrastructure, and mentoring junior developers. Built scalable machine learning systems serving millions of users."
    },
    {
      "company": "DataScience Inc",
      "position": "Machine Learning Engineer",
      "duration": "2020 - 2022",
      "description": "Developed and deployed machine learning models for predictive analytics, automated data pipelines, and collaborated with cross-functional teams to deliver AI solutions."
    },
    {
      "company": "StartupXYZ",
      "position": "Full Stack Developer",
      "duration": "2019 - 2020",
      "description": "Built web applications using modern technologies, integrated AI services, and contributed to the development of the company's core product platform."
    }
  ],
  "chatbotResponses": {
    "greeting": "Hi! I'm Alex's AI assistant. I can tell you about Alex's skills, projects, experience, and background in AI/ML. What would you like to know?",
    "skills": "Alex is highly skilled in AI/ML technologies including Python, TensorFlow, PyTorch, and Scikit-learn. On the frontend, Alex works with React, Next.js, and modern JavaScript. For backend development, Alex uses Node.js, FastAPI, and various databases. Alex is also experienced with cloud platforms like AWS and Google Cloud.",
    "projects": "Alex has worked on several impressive AI/ML projects including an AI chatbot platform, computer vision image classifier, sentiment analysis dashboard, ML deployment pipeline, predictive analytics platform, and a neural network visualizer. Each project demonstrates different aspects of AI/ML expertise.",
    "experience": "Alex has 5+ years of experience in AI/ML and software development. Currently working as Senior AI/ML Engineer at TechCorp AI, previously at DataScience Inc as ML Engineer, and started as Full Stack Developer at StartupXYZ. Alex has experience with both startups and larger companies.",
    "education": "Alex has a strong background in Computer Science with specialization in Artificial Intelligence and Machine Learning. Continuously learning through courses, certifications, and hands-on projects to stay updated with the latest AI/ML technologies.",
    "contact": "You can reach Alex at alex.johnson@email.com or +1 (555) 123-4567. Alex is based in San Francisco, CA and is open to discussing new opportunities and collaborations.",
    "default": "I can help you learn about Alex's skills, projects, experience, education, or contact information. What specific aspect would you like to know more about?"
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing app...');
    
    // Wait a brief moment to ensure all elements are ready
    setTimeout(() => {
        initializeNavigation();
        initializeTypingAnimation();
        populateProjects();
        populateSkills();
        populateExperience();
        initializeChatbot();
        initializeContactForm();
        initializeScrollAnimations();
        console.log('All components initialized successfully');
    }, 100);
});

// Navigation Functions
function initializeNavigation() {
    console.log('Initializing navigation...');
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.getElementById('navbar');
    
    if (!navToggle || !navMenu || !navbar) {
        console.error('Navigation elements not found');
        return;
    }
    
    // Mobile menu toggle
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Nav toggle clicked');
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links - Fixed implementation
    document.addEventListener('click', function(e) {
        // Check if clicked element is a navigation link
        if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
            const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
            const href = link.getAttribute('href');
            
            if (href && href !== '#') {
                e.preventDefault();
                console.log('Navigation clicked:', href);
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    // Close mobile menu if open
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    
                    // Smooth scroll to target
                    const offsetTop = targetElement.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    console.log('Scrolling to:', href);
                } else {
                    console.error('Target element not found:', href);
                }
            }
        }
    });
    
    console.log('Navigation initialized successfully');
}

// Typing Animation
function initializeTypingAnimation() {
    console.log('Initializing typing animation...');
    
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) {
        console.error('Typed text element not found');
        return;
    }
    
    const texts = [
        "AI/ML Engineer",
        "Full Stack Developer", 
        "Machine Learning Expert",
        "Data Scientist",
        "Python Developer"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    
    function typeWriter() {
        const currentText = texts[textIndex];
        
        if (isWaiting) {
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeWriter();
            }, 2000);
            return;
        }
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isWaiting = true;
            }
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, speed);
    }
    
    typeWriter();
    console.log('Typing animation initialized');
}

// Populate Projects
function populateProjects() {
    console.log('Populating projects...');
    
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid not found');
        return;
    }
    
    projectsGrid.innerHTML = '';
    
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-status">${project.status}</span>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-features">
                    <h4>Key Features:</h4>
                    <div class="features-list">
                        ${project.features.map(feature => `<div class="feature-item">${feature}</div>`).join('')}
                    </div>
                </div>
                <div class="project-links">
                    <a href="${project.demoUrl}" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="project-link">
                        <i class="fab fa-github"></i>
                        Source Code
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    console.log('Projects populated successfully');
}

// Populate Skills
function populateSkills() {
    console.log('Populating skills...');
    
    const skillCategories = {
        'ai-ml-skills': portfolioData.skills.ai_ml,
        'frontend-skills': portfolioData.skills.frontend,
        'backend-skills': portfolioData.skills.backend,
        'tools-skills': portfolioData.skills.tools
    };
    
    Object.entries(skillCategories).forEach(([elementId, skills]) => {
        const container = document.getElementById(elementId);
        if (!container) {
            console.error('Skills container not found:', elementId);
            return;
        }
        
        container.innerHTML = '';
        
        skills.forEach(skill => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            
            skillItem.innerHTML = `
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-level="${skill.level}"></div>
                </div>
            `;
            
            container.appendChild(skillItem);
        });
    });
    
    console.log('Skills populated successfully');
}

// Populate Experience
function populateExperience() {
    console.log('Populating experience...');
    
    const timeline = document.getElementById('timeline');
    if (!timeline) {
        console.error('Timeline element not found');
        return;
    }
    
    timeline.innerHTML = '';
    
    portfolioData.experience.forEach((job, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3 class="timeline-company">${job.company}</h3>
                <h4 class="timeline-position">${job.position}</h4>
                <p class="timeline-duration">${job.duration}</p>
                <p class="timeline-description">${job.description}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
    
    console.log('Experience populated successfully');
}

// Chatbot Functions
function initializeChatbot() {
    console.log('Initializing chatbot...');
    
    const chatbotButton = document.getElementById('chatbot-button');
    const chatbotWidget = document.getElementById('chatbot-widget');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInputField = document.getElementById('chatbot-input-field');
    const chatbotSend = document.getElementById('chatbot-send');
    
    if (!chatbotButton || !chatbotWidget) {
        console.error('Chatbot elements not found');
        return;
    }
    
    // Toggle chatbot widget
    chatbotButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Chatbot button clicked');
        chatbotWidget.classList.remove('hidden');
        chatbotWidget.classList.add('active');
    });
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Chatbot close clicked');
            chatbotWidget.classList.remove('active');
            setTimeout(() => {
                chatbotWidget.classList.add('hidden');
            }, 300);
        });
    }
    
    // Send message functionality
    if (chatbotSend && chatbotInputField) {
        chatbotSend.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
        
        chatbotInputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    }
    
    // Suggestion buttons
    document.querySelectorAll('.suggestion-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const query = this.getAttribute('data-query');
            if (chatbotInputField) {
                chatbotInputField.value = query;
                sendMessage();
            }
        });
    });
    
    function sendMessage() {
        if (!chatbotInputField || !chatbotMessages) return;
        
        const message = chatbotInputField.value.trim();
        if (!message) return;
        
        console.log('Sending message:', message);
        
        // Add user message
        addMessage(message, 'user');
        chatbotInputField.value = '';
        
        // Generate bot response
        setTimeout(() => {
            const response = generateBotResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }
    
    function addMessage(text, sender) {
        if (!chatbotMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.textContent = text;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function generateBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech')) {
            return portfolioData.chatbotResponses.skills;
        } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
            return portfolioData.chatbotResponses.projects;
        } else if (lowerMessage.includes('experience') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
            return portfolioData.chatbotResponses.experience;
        } else if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('learn')) {
            return portfolioData.chatbotResponses.education;
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
            return portfolioData.chatbotResponses.contact;
        } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return portfolioData.chatbotResponses.greeting;
        } else {
            return portfolioData.chatbotResponses.default;
        }
    }
    
    console.log('Chatbot initialized successfully');
}

// Contact Form
function initializeContactForm() {
    console.log('Initializing contact form...');
    
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Contact form submitted');
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    console.log('Contact form initialized successfully');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #21c55d;' : 'background: #ef4444;'}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Scroll Animations
function initializeScrollAnimations() {
    console.log('Initializing scroll animations...');
    
    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                entry.target.style.width = level + '%';
            }
        });
    }, observerOptions);
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // Animate cards on scroll
    const animateElements = document.querySelectorAll('.project-card, .timeline-item, .contact-item');
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(element);
    });
    
    console.log('Scroll animations initialized successfully');
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Additional interactive effects
window.addEventListener('load', function() {
    console.log('Window loaded - adding additional effects...');
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', debounce(() => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }, 10));
    
    console.log('All effects loaded successfully');
});
