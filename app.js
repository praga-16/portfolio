// Portfolio JavaScript - Pragatheesvaran A B
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initTypewriter();
    initThemeToggle();
    initSmoothScrolling();
    initSkillBars();
    initMLDemo();
    initPerformanceChart();
    initChatbot();
    initContactForm();
    initScrollAnimations();
    
    // Typewriter Effect for Hero Section
    function initTypewriter() {
        const texts = [
            'AI/ML Engineer',
            'Data Scientist',
            'Python Developer',
            'NLP Specialist'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;
        
        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    setTimeout(typeWriter, 500);
                } else {
                    setTimeout(typeWriter, deletingSpeed);
                }
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === currentText.length) {
                    isDeleting = true;
                    setTimeout(typeWriter, pauseTime);
                } else {
                    setTimeout(typeWriter, typingSpeed);
                }
            }
        }
        
        typeWriter();
    }
    
    // Theme Toggle Functionality - Fixed
    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const savedTheme = localStorage.getItem('theme') || 'dark';
        
        // Set initial theme
        document.documentElement.setAttribute('data-color-scheme', savedTheme);
        updateThemeIcon(savedTheme);
        
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            const currentTheme = document.documentElement.getAttribute('data-color-scheme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            
            // Add theme transition effect
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
            
            console.log('Theme changed to:', newTheme);
        });
        
        function updateThemeIcon(theme) {
            themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        }
    }
    
    // Smooth Scrolling Navigation - Fixed
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const href = this.getAttribute('href');
                if (!href || !href.startsWith('#')) return;
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    console.log('Scrolling to section:', targetId);
                }
            });
        });
        
        // Update active nav link based on scroll position
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const top = section.offsetTop;
                const bottom = top + section.offsetHeight;
                const id = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
                
                if (scrollPos >= top && scrollPos <= bottom) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                }
            });
        });
    }
    
    // Animated Skill Bars
    function initSkillBars() {
        const skillProgressBars = document.querySelectorAll('.skill-progress');
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    progressBar.style.setProperty('--target-width', width + '%');
                    progressBar.classList.add('animate');
                }
            });
        }, observerOptions);
        
        skillProgressBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }
    
    // ML Demo Functionality
    function initMLDemo() {
        const sentimentInput = document.getElementById('sentimentInput');
        const analyzeSentimentBtn = document.getElementById('analyzeSentiment');
        const sentimentResult = document.getElementById('sentimentResult');
        
        if (!sentimentInput || !analyzeSentimentBtn || !sentimentResult) {
            console.log('ML Demo elements not found');
            return;
        }
        
        // Predefined responses for demo purposes
        const sentimentResponses = {
            positive: [
                'amazing', 'excellent', 'great', 'fantastic', 'wonderful', 'awesome',
                'love', 'perfect', 'brilliant', 'outstanding', 'superb', 'magnificent'
            ],
            negative: [
                'terrible', 'awful', 'horrible', 'bad', 'worst', 'hate',
                'disappointing', 'poor', 'useless', 'pathetic', 'disgusting'
            ]
        };
        
        analyzeSentimentBtn.addEventListener('click', function() {
            const text = sentimentInput.value.trim().toLowerCase();
            
            if (!text) {
                showSentimentResult('Please enter some text to analyze.', 'neutral');
                return;
            }
            
            // Show loading state
            analyzeSentimentBtn.innerHTML = '<span class="loading"></span> Analyzing...';
            analyzeSentimentBtn.disabled = true;
            
            // Simulate API delay
            setTimeout(() => {
                const sentiment = analyzeSentiment(text);
                showSentimentResult(
                    `Sentiment: ${sentiment.label} (Confidence: ${sentiment.confidence}%)`,
                    sentiment.label.toLowerCase()
                );
                
                // Reset button
                analyzeSentimentBtn.innerHTML = 'Analyze Sentiment';
                analyzeSentimentBtn.disabled = false;
            }, 1500);
        });
        
        function analyzeSentiment(text) {
            let positiveScore = 0;
            let negativeScore = 0;
            
            // Simple keyword-based sentiment analysis for demo
            sentimentResponses.positive.forEach(word => {
                if (text.includes(word)) positiveScore += 2;
            });
            
            sentimentResponses.negative.forEach(word => {
                if (text.includes(word)) negativeScore += 2;
            });
            
            // Add some randomness to make it more realistic
            const randomFactor = Math.random() * 0.3;
            positiveScore += randomFactor;
            negativeScore += randomFactor;
            
            let sentiment, confidence;
            
            if (positiveScore > negativeScore) {
                sentiment = 'Positive';
                confidence = Math.min(95, Math.round(65 + positiveScore * 5));
            } else if (negativeScore > positiveScore) {
                sentiment = 'Negative';
                confidence = Math.min(95, Math.round(65 + negativeScore * 5));
            } else {
                sentiment = 'Neutral';
                confidence = Math.round(50 + Math.random() * 20);
            }
            
            return { label: sentiment, confidence };
        }
        
        function showSentimentResult(message, sentiment) {
            sentimentResult.textContent = message;
            sentimentResult.className = `demo-result ${sentiment}`;
            sentimentResult.classList.remove('hidden');
        }
    }
    
    // Performance Chart Initialization
    function initPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;
        
        // Sample ML model performance data
        const modelData = {
            labels: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'AUC-ROC'],
            datasets: [{
                label: 'BERT Sentiment Model',
                data: [94, 92, 89, 90, 96],
                backgroundColor: '#1FB8CD',
                borderColor: '#1FB8CD',
                borderWidth: 2,
                fill: false
            }, {
                label: 'Random Forest CKD',
                data: [87, 85, 88, 86, 91],
                backgroundColor: '#FFC185',
                borderColor: '#FFC185',
                borderWidth: 2,
                fill: false
            }, {
                label: 'XGBoost Forecasting',
                data: [91, 89, 92, 90, 94],
                backgroundColor: '#B4413C',
                borderColor: '#B4413C',
                borderWidth: 2,
                fill: false
            }]
        };
        
        new Chart(ctx, {
            type: 'radar',
            data: modelData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'ML Model Performance Comparison',
                        color: '#f5f5f5',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    legend: {
                        labels: {
                            color: '#f5f5f5',
                            usePointStyle: true
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#a7a9a9',
                            stepSize: 20
                        },
                        pointLabels: {
                            color: '#f5f5f5',
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: 'rgba(167, 169, 169, 0.3)'
                        },
                        angleLines: {
                            color: 'rgba(167, 169, 169, 0.3)'
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 6,
                        hoverRadius: 8
                    },
                    line: {
                        borderWidth: 3
                    }
                }
            }
        });
    }
    
    // Chatbot Functionality - Fixed
    function initChatbot() {
        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotInput = document.getElementById('chatbotInputField');
        const chatbotSend = document.getElementById('chatbotSend');
        const chatbotMessages = document.getElementById('chatbotMessages');
        
        if (!chatbotToggle || !chatbotWindow || !chatbotClose) {
            console.log('Chatbot elements not found');
            return;
        }
        
        // Chatbot responses
        const responses = {
            skills: "Pragatheesvaran is proficient in Python, TensorFlow, PyTorch, BERT, and various ML libraries. He specializes in NLP, forecasting, and statistical analysis with hands-on experience in real-world projects.",
            projects: "He has worked on 4 major projects including demand forecasting with PySpark, Tamil sentiment analysis using BERT, chronic kidney disease detection, and e-commerce sales forecasting. Each project demonstrates practical application of ML techniques.",
            experience: "He completed an internship at Axias Global Automation Group focusing on operational analytics and has various certifications from Google and Microsoft. Currently pursuing B.Tech in AI/ML.",
            contact: "You can reach Pragatheesvaran at pragatheesvaranab@gmail.com or connect via LinkedIn at pragatheesvaran-ab. Feel free to check out his GitHub projects at github.com/praga-16",
            education: "He is currently pursuing B.Tech in Artificial Intelligence and Machine Learning from Saveetha Engineering College, Chennai (2021-2025) with a CGPA of 7.5/10.",
            default: "I can help you learn about Pragatheesvaran's skills, projects, experience, education, or contact information. What would you like to know?"
        };
        
        let isChatbotOpen = false;
        
        // Make sure chatbot starts closed
        chatbotWindow.classList.add('hidden');
        
        chatbotToggle.addEventListener('click', function(e) {
            e.preventDefault();
            isChatbotOpen = !isChatbotOpen;
            chatbotWindow.classList.toggle('hidden', !isChatbotOpen);
            
            if (isChatbotOpen) {
                chatbotInput.focus();
                console.log('Chatbot opened');
            } else {
                console.log('Chatbot closed');
            }
        });
        
        chatbotClose.addEventListener('click', function(e) {
            e.preventDefault();
            isChatbotOpen = false;
            chatbotWindow.classList.add('hidden');
            console.log('Chatbot closed via close button');
        });
        
        chatbotSend.addEventListener('click', sendMessage);
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        function sendMessage() {
            const message = chatbotInput.value.trim();
            if (!message) return;
            
            // Add user message
            addMessage(message, 'user');
            chatbotInput.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Generate bot response
            setTimeout(() => {
                hideTypingIndicator();
                const response = generateResponse(message);
                addMessage(response, 'bot');
            }, 1000);
        }
        
        function addMessage(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chatbot-message');
            messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
            messageElement.textContent = message;
            
            chatbotMessages.appendChild(messageElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function generateResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
                return responses.skills;
            } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
                return responses.projects;
            } else if (lowerMessage.includes('experience') || lowerMessage.includes('internship') || lowerMessage.includes('job')) {
                return responses.experience;
            } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
                return responses.contact;
            } else if (lowerMessage.includes('education') || lowerMessage.includes('college') || lowerMessage.includes('degree')) {
                return responses.education;
            } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
                return "Hi! I'm Pragatheesvaran's AI assistant. I can help you learn more about his skills, projects, and experience in AI/ML. What would you like to know?";
            } else {
                return responses.default;
            }
        }
        
        function showTypingIndicator() {
            const typingElement = document.createElement('div');
            typingElement.classList.add('chatbot-message', 'bot-message', 'typing-indicator');
            typingElement.innerHTML = '<span class="loading"></span> Typing...';
            chatbotMessages.appendChild(typingElement);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
        
        function hideTypingIndicator() {
            const typingIndicator = chatbotMessages.querySelector('.typing-indicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
        }
    }
    
    // Contact Form Handling
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                subject: document.getElementById('contactSubject').value,
                message: document.getElementById('contactMessage').value
            };
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Scroll Animations
    function initScrollAnimations() {
        const animateElements = document.querySelectorAll('.animate-on-scroll, .project-card, .skill-category, .timeline-item');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
        
        animateElements.forEach(element => {
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });
    }
    
    // Utility Functions
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--color-surface);
            color: var(--color-text);
            padding: 16px 20px;
            border-radius: 8px;
            border: 1px solid var(--color-border);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease-out;
        `;
        
        if (type === 'success') {
            notification.style.borderColor = 'var(--color-success)';
            notification.style.backgroundColor = 'var(--color-bg-3)';
        } else if (type === 'error') {
            notification.style.borderColor = 'var(--color-error)';
            notification.style.backgroundColor = 'var(--color-bg-4)';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Remove notification after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-in forwards';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }
    
    // Add slide animations for notifications
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Initialize navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(19, 52, 59, 0.98)';
            } else {
                navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            }
        }
    });
    
    // Add project card interactions - Fixed
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const buttons = card.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const projectTitle = card.querySelector('h3').textContent;
                if (this.textContent.includes('Demo')) {
                    showNotification(`Demo for "${projectTitle}" would open here. This is a portfolio demonstration.`, 'info');
                } else if (this.textContent.includes('GitHub')) {
                    showNotification(`GitHub repository for "${projectTitle}" would open here. Check out github.com/praga-16`, 'info');
                }
            });
        });
    });
    
    console.log('Portfolio website initialized successfully!');
});
