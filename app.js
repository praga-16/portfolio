// Black Animated Portfolio - JavaScript (Fixed)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initLoadingScreen();
    initCustomCursor();
    initParticleSystem();
    initMatrixRain();
    initTypewriter();
    initGlitchEffects();
    initSmoothScrolling();
    initScrollAnimations();
    initSkillBars();
    initProjectCards();
    initMLDemo();
    initPerformanceChart();
    initChatbot();
    initContactForm();
    initButtonRipples();
    initParallaxEffects();
    
    // Loading Screen Animation
    function initLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (!loadingScreen) return;
        
        const loadingProgress = document.querySelector('.loading-progress');
        
        // Simulate loading progress
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 1000);
                }, 500);
            }
            if (loadingProgress) {
                loadingProgress.style.width = progress + '%';
            }
        }, 100);
    }
    
    // Custom Cursor
    function initCustomCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: #00ffff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            
            // Update mouse spotlight
            const spotlight = document.getElementById('mouseSpotlight');
            if (spotlight) {
                spotlight.style.left = e.clientX - 100 + 'px';
                spotlight.style.top = e.clientY - 100 + 'px';
            }
        });
        
        // Cursor interactions
        document.querySelectorAll('button, a, .nav-link').forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.background = '#ff00ff';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.background = '#00ffff';
            });
        });
    }
    
    // Particle System (Simplified to prevent crashes)
    function initParticleSystem() {
        const canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        
        try {
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const particles = [];
            const particleCount = 50; // Reduced count
            
            class Particle {
                constructor() {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                    this.vx = (Math.random() - 0.5) * 0.3;
                    this.vy = (Math.random() - 0.5) * 0.3;
                    this.size = Math.random() * 2 + 1;
                    this.color = '#00ffff';
                    this.opacity = Math.random() * 0.5 + 0.2;
                }
                
                update() {
                    this.x += this.vx;
                    this.y += this.vy;
                    
                    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
                }
                
                draw() {
                    ctx.globalAlpha = this.opacity;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Initialize particles
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
            
            function animate() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    particle.update();
                    particle.draw();
                });
                
                requestAnimationFrame(animate);
            }
            
            animate();
        } catch (error) {
            console.log('Particle system initialization failed:', error);
        }
    }
    
    // Matrix Rain Effect (Simplified)
    function initMatrixRain() {
        const matrixRain = document.getElementById('matrixRain');
        if (!matrixRain) return;
        
        try {
            const characters = '01';
            const dropCount = 10; // Reduced for performance
            
            for (let i = 0; i < dropCount; i++) {
                const drop = document.createElement('div');
                drop.style.cssText = `
                    position: absolute;
                    top: -100px;
                    left: ${Math.random() * 100}%;
                    color: #00ff41;
                    font-family: 'Courier New', monospace;
                    font-size: 14px;
                    opacity: 0.3;
                    animation: matrixDrop ${8 + Math.random() * 4}s linear infinite;
                    animation-delay: ${Math.random() * 3}s;
                `;
                drop.textContent = characters[Math.floor(Math.random() * characters.length)];
                matrixRain.appendChild(drop);
            }
            
            // Add matrix drop animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes matrixDrop {
                    to {
                        transform: translateY(calc(100vh + 100px));
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        } catch (error) {
            console.log('Matrix rain initialization failed:', error);
        }
    }
    
    // Typewriter Effect
    function initTypewriter() {
        const texts = [
            'AI/ML ENGINEER',
            'DATA SCIENTIST',
            'PYTHON DEVELOPER',
            'NLP SPECIALIST',
            'DEEP LEARNING EXPERT'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;
        
        function typeWriter() {
            if (!typingElement) return;
            
            try {
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
            } catch (error) {
                console.log('Typewriter error:', error);
            }
        }
        
        typeWriter();
    }
    
    // Glitch Effects
    function initGlitchEffects() {
        const glitchElements = document.querySelectorAll('.glitch-text');
        
        glitchElements.forEach(element => {
            setInterval(() => {
                if (Math.random() < 0.1) {
                    element.style.animation = 'none';
                    element.offsetHeight; // Trigger reflow
                    element.style.animation = 'glitch 0.3s ease-in-out';
                }
            }, 3000);
        });
    }
    
    // Smooth Scrolling (Fixed)
    function initSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                try {
                    const href = this.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        const targetId = href.substring(1);
                        const targetSection = document.getElementById(targetId);
                        
                        if (targetSection) {
                            const offsetTop = targetSection.offsetTop - 80;
                            window.scrollTo({
                                top: offsetTop,
                                behavior: 'smooth'
                            });
                        }
                    }
                } catch (error) {
                    console.log('Navigation error:', error);
                }
            });
        });
        
        // Update active nav link
        window.addEventListener('scroll', function() {
            try {
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
            } catch (error) {
                console.log('Scroll update error:', error);
            }
        });
    }
    
    // Scroll Animations
    function initScrollAnimations() {
        try {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        // Add stagger animation for skill categories
                        if (entry.target.classList.contains('skill-category')) {
                            const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 200;
                            entry.target.style.animationDelay = delay + 'ms';
                        }
                    }
                });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('.neon-card, .floating-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'all 0.8s ease-out';
                observer.observe(card);
            });
        } catch (error) {
            console.log('Scroll animations error:', error);
        }
    }
    
    // Skill Bars Animation
    function initSkillBars() {
        try {
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const width = progressBar.getAttribute('data-width');
                        
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                        }, 500);
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => {
                skillObserver.observe(bar);
            });
        } catch (error) {
            console.log('Skill bars error:', error);
        }
    }
    
    // Project Cards 3D Effects
    function initProjectCards() {
        const projectCards = document.querySelectorAll('.flip-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
            });
            function showGithub() {
  window.open("https://github.com/praga-16/TAMIL-ARTICLE-SENTIMENT-ANALYSIS-LEVERAGING-BERT-FOR-ACCURACY", "_blank");
}

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
            });
        });
    }
    
    // ML Demo Functionality (Fixed)
    function initMLDemo() {
        const sentimentInput = document.getElementById('sentimentInput');
        const analyzeSentimentBtn = document.getElementById('analyzeSentiment');
        const sentimentResult = document.getElementById('sentimentResult');
        
        if (!sentimentInput || !analyzeSentimentBtn || !sentimentResult) return;
        
        const sentimentKeywords = {
            positive: ['amazing', 'excellent', 'great', 'fantastic', 'wonderful', 'awesome', 'love', 'perfect', 'brilliant', 'outstanding', 'good', 'nice', 'happy'],
            negative: ['terrible', 'awful', 'horrible', 'bad', 'worst', 'hate', 'disappointing', 'poor', 'useless', 'pathetic', 'sad', 'angry']
        };
        
        analyzeSentimentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            try {
                const text = sentimentInput.value.trim().toLowerCase();
                
                if (!text) {
                    showSentimentResult('ERROR: No input text detected', 'neutral');
                    return;
                }
                
                // Show loading animation
                const originalHTML = this.innerHTML;
                this.innerHTML = '<span>ANALYZING...</span>';
                this.disabled = true;
                
                // Simulate AI processing
                setTimeout(() => {
                    try {
                        const sentiment = analyzeSentiment(text);
                        showSentimentResult(
                            `[ANALYSIS_COMPLETE] SENTIMENT: ${sentiment.label} | CONFIDENCE: ${sentiment.confidence}%`,
                            sentiment.label.toLowerCase()
                        );
                        
                        this.innerHTML = originalHTML;
                        this.disabled = false;
                    } catch (error) {
                        console.log('Analysis error:', error);
                        showSentimentResult('ERROR: Analysis failed', 'neutral');
                        this.innerHTML = originalHTML;
                        this.disabled = false;
                    }
                }, 2000);
            } catch (error) {
                console.log('ML Demo error:', error);
                showSentimentResult('ERROR: System malfunction', 'neutral');
                this.innerHTML = '<span>ANALYZE</span>';
                this.disabled = false;
            }
        });
        
        function analyzeSentiment(text) {
            let positiveScore = 0;
            let negativeScore = 0;
            
            sentimentKeywords.positive.forEach(word => {
                if (text.includes(word)) positiveScore += 2;
            });
            
            sentimentKeywords.negative.forEach(word => {
                if (text.includes(word)) negativeScore += 2;
            });
            
            // Add some AI-like randomness
            positiveScore += Math.random() * 0.5;
            negativeScore += Math.random() * 0.5;
            
            let sentiment, confidence;
            
            if (positiveScore > negativeScore) {
                sentiment = 'POSITIVE';
                confidence = Math.min(95, Math.round(70 + positiveScore * 8));
            } else if (negativeScore > positiveScore) {
                sentiment = 'NEGATIVE';
                confidence = Math.min(95, Math.round(70 + negativeScore * 8));
            } else {
                sentiment = 'NEUTRAL';
                confidence = Math.round(60 + Math.random() * 25);
            }
            
            return { label: sentiment, confidence };
        }
        
        function showSentimentResult(message, sentiment) {
            try {
                sentimentResult.textContent = message;
                sentimentResult.className = `demo-result ${sentiment}`;
                sentimentResult.classList.remove('hidden');
            } catch (error) {
                console.log('Result display error:', error);
            }
        }
    }
    
    // Performance Chart (Simplified)
    function initPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;
        
        try {
            const modelData = {
                labels: ['Accuracy', 'Precision', 'Recall', 'F1-Score', 'AUC-ROC'],
                datasets: [{
                    label: 'BERT Sentiment Model',
                    data: [94, 92, 89, 90, 96],
                    backgroundColor: 'rgba(0, 255, 255, 0.2)',
                    borderColor: '#00ffff',
                    borderWidth: 3,
                    pointBackgroundColor: '#00ffff',
                    pointBorderColor: '#00ffff',
                    pointRadius: 6
                }, {
                    label: 'Random Forest CKD',
                    data: [87, 85, 88, 86, 91],
                    backgroundColor: 'rgba(0, 128, 255, 0.2)',
                    borderColor: '#0080ff',
                    borderWidth: 3,
                    pointBackgroundColor: '#0080ff',
                    pointBorderColor: '#0080ff',
                    pointRadius: 6
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
                            text: 'ML MODEL PERFORMANCE MATRIX',
                            color: '#00ffff',
                            font: {
                                size: 16,
                                weight: 'bold',
                                family: 'Courier New'
                            }
                        },
                        legend: {
                            labels: {
                                color: '#ffffff',
                                font: {
                                    family: 'Courier New'
                                }
                            }
                        }
                    },
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 100,
                            ticks: {
                                color: '#888888',
                                stepSize: 20,
                                font: {
                                    family: 'Courier New'
                                }
                            },
                            pointLabels: {
                                color: '#ffffff',
                                font: {
                                    size: 12,
                                    family: 'Courier New'
                                }
                            },
                            grid: {
                                color: 'rgba(0, 255, 255, 0.3)'
                            },
                            angleLines: {
                                color: 'rgba(0, 255, 255, 0.3)'
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.log('Chart initialization error:', error);
        }
    }
    
    // AI Chatbot (Fixed)
    function initChatbot() {
        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotInput = document.getElementById('chatbotInputField');
        const chatbotSend = document.getElementById('chatbotSend');
        const chatbotMessages = document.getElementById('chatbotMessages');
        
        if (!chatbotToggle || !chatbotWindow || !chatbotClose || !chatbotInput || !chatbotSend || !chatbotMessages) {
            console.log('Chatbot elements missing');
            return;
        }
        
        const responses = {
            skills: "[DATABASE_QUERY] Pragatheesvaran specializes in Python, TensorFlow, PyTorch, BERT, and advanced ML frameworks. Expert in NLP, forecasting, and statistical analysis with real-world project experience.",
            projects: "[PROJECT_SCAN] Repository contains 4 major projects: Demand forecasting with PySpark, Tamil NLP sentiment analysis using BERT, chronic kidney disease detection, and e-commerce sales forecasting.",
            experience: "[EXPERIENCE_LOG] Internship completed at Axias Global Automation Group. Multiple certifications from Google and Microsoft. Currently pursuing B.Tech in AI/ML.",
            contact: "[CONTACT_INFO] Email: pragatheesvaranab@gmail.com | LinkedIn: pragatheesvaran-ab | GitHub: github.com/praga-16 | Location: Chennai, Tamil Nadu",
            education: "[EDUCATION_DATA] B.Tech in Artificial Intelligence and Machine Learning, Saveetha Engineering College, Chennai (2021-2025) | CGPA: 7.5/10",
            default: "[SYSTEM_READY] I can provide information about Pragatheesvaran's skills, projects, experience, education, or contact details. What data do you need?"
        };
        
        let isChatbotOpen = false;
        
        chatbotToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            try {
                isChatbotOpen = !isChatbotOpen;
                if (isChatbotOpen) {
                    chatbotWindow.classList.remove('hidden');
                    chatbotInput.focus();
                } else {
                    chatbotWindow.classList.add('hidden');
                }
            } catch (error) {
                console.log('Chatbot toggle error:', error);
            }
        });
        
        chatbotClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            try {
                isChatbotOpen = false;
                chatbotWindow.classList.add('hidden');
            } catch (error) {
                console.log('Chatbot close error:', error);
            }
        });
        
        chatbotSend.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sendMessage();
        });
        
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
        
        function sendMessage() {
            try {
                const message = chatbotInput.value.trim();
                if (!message) return;
                
                addMessage(message, 'user');
                chatbotInput.value = '';
                
                showTypingIndicator();
                
                setTimeout(() => {
                    hideTypingIndicator();
                    const response = generateResponse(message);
                    addMessage(response, 'bot');
                }, 1500);
            } catch (error) {
                console.log('Send message error:', error);
            }
        }
        
        function addMessage(message, sender) {
            try {
                const messageElement = document.createElement('div');
                messageElement.classList.add('chatbot-message');
                messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
                
                if (sender === 'bot') {
                    messageElement.innerHTML = `<span class="message-prefix">[AI]:</span> <span>${message}</span>`;
                } else {
                    messageElement.textContent = message;
                }
                
                chatbotMessages.appendChild(messageElement);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            } catch (error) {
                console.log('Add message error:', error);
            }
        }
        
        function generateResponse(message) {
            const lowerMessage = message.toLowerCase();
            
            if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
                return responses.skills;
            } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
                return responses.projects;
            } else if (lowerMessage.includes('experience') || lowerMessage.includes('internship')) {
                return responses.experience;
            } else if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
                return responses.contact;
            } else if (lowerMessage.includes('education') || lowerMessage.includes('college')) {
                return responses.education;
            } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                return "[GREETING_PROTOCOL] Hello, human. I am Pragatheesvaran's AI assistant. How may I assist you today?";
            } else {
                return responses.default;
            }
        }
        
        function showTypingIndicator() {
            try {
                const indicator = document.createElement('div');
                indicator.classList.add('chatbot-message', 'bot-message', 'typing-indicator');
                indicator.innerHTML = '<span class="message-prefix">[AI]:</span> <span>Processing query...</span>';
                chatbotMessages.appendChild(indicator);
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            } catch (error) {
                console.log('Typing indicator error:', error);
            }
        }
        
        function hideTypingIndicator() {
            try {
                const indicator = chatbotMessages.querySelector('.typing-indicator');
                if (indicator) {
                    indicator.remove();
                }
            } catch (error) {
                console.log('Hide typing indicator error:', error);
            }
        }
    }
    
    // Contact Form (Fixed)
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            try {
                const formData = {
                    name: document.getElementById('contactName').value,
                    email: document.getElementById('contactEmail').value,
                    subject: document.getElementById('contactSubject').value,
                    message: document.getElementById('contactMessage').value
                };
                
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalHTML = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span>TRANSMITTING...</span>';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showNotification('[SUCCESS] Message transmitted successfully! Response incoming...', 'success');
                    contactForm.reset();
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                }, 2500);
            } catch (error) {
                console.log('Contact form error:', error);
            }
        });
    }
    
    // Button Ripple Effects
    function initButtonRipples() {
        document.querySelectorAll('.neon-button').forEach(button => {
            button.addEventListener('click', function(e) {
                try {
                    const ripple = this.querySelector('.button-ripple');
                    if (ripple) {
                        const rect = this.getBoundingClientRect();
                        const size = Math.max(rect.width, rect.height);
                        const x = e.clientX - rect.left - size / 2;
                        const y = e.clientY - rect.top - size / 2;
                        
                        ripple.style.width = ripple.style.height = size + 'px';
                        ripple.style.left = x + 'px';
                        ripple.style.top = y + 'px';
                        ripple.style.transform = 'scale(0)';
                        ripple.style.animation = 'ripple 0.6s linear';
                        
                        setTimeout(() => {
                            ripple.style.animation = '';
                        }, 600);
                    }
                } catch (error) {
                    console.log('Ripple effect error:', error);
                }
            });
        });
    }
    
    // Parallax Effects (Simplified)
    function initParallaxEffects() {
        try {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.parallax-section');
                
                parallaxElements.forEach(element => {
                    const rate = scrolled * -0.1; // Reduced intensity
                    element.style.transform = `translateY(${rate}px)`;
                });
            });
        } catch (error) {
            console.log('Parallax error:', error);
        }
    }
    
    // Global Functions (Fixed)
    window.scrollToSection = function(sectionId) {
        try {
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        } catch (error) {
            console.log('Scroll to section error:', error);
        }
    };
    
    window.scrollToTop = function() {
        try {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } catch (error) {
            console.log('Scroll to top error:', error);
        }
    };
    
    window.showDemo = function(projectName) {
        showNotification(`[DEMO_LAUNCH] ${projectName} demo initialized. This is a portfolio demonstration.`, 'info');
    };
    
    window.showGithub = function(projectName) {
        showNotification(`[REPOSITORY_ACCESS] ${projectName} GitHub repository. Visit github.com/praga-16`, 'info');
    };
    
    // Notification System (Fixed)
    function showNotification(message, type = 'info') {
        try {
            const notification = document.createElement('div');
            notification.className = `notification notification--${type}`;
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 30px;
                background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(20px);
                color: #ffffff;
                padding: 15px 20px;
                border-radius: 8px;
                border: 1px solid #00ffff;
                box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
                z-index: 10000;
                max-width: 400px;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
                animation: slideIn 0.5s ease-out;
            `;
            
            if (type === 'success') {
                notification.style.borderColor = '#00ff41';
                notification.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.3)';
            } else if (type === 'error') {
                notification.style.borderColor = '#ff0080';
                notification.style.boxShadow = '0 0 20px rgba(255, 0, 128, 0.3)';
            }
            
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.5s ease-in forwards';
                setTimeout(() => {
                    if (document.body.contains(notification)) {
                        document.body.removeChild(notification);
                    }
                }, 500);
            }, 4000);
        } catch (error) {
            console.log('Notification error:', error);
        }
    }
    
    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
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
    document.head.appendChild(notificationStyle);
    
    // Window resize handler
    window.addEventListener('resize', () => {
        try {
            const canvas = document.getElementById('particleCanvas');
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        } catch (error) {
            console.log('Resize error:', error);
        }
    });
    
    console.log('[SYSTEM_INITIALIZED] Black animated portfolio loaded successfully!');
});
