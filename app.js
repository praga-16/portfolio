// Global Variables
let currentTheme = 'dark';
let particlesLoaded = false;
let matrixAnimation = null;

// Typewriter Text Array
const typewriterTexts = [
    'AI/ML Engineer',
    'Data Scientist', 
    'Python Developer',
    'NLP Specialist',
    'Deep Learning Expert'
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Initialize Website
function initializeWebsite() {
    showLoadingScreen();
    setTimeout(() => {
        hideLoadingScreen();
        initializeComponents();
    }, 3000);
}

// Loading Screen Functions
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 500);
}

// Initialize All Components
function initializeComponents() {
    initializeParticles();
    initializeMatrixRain();
    initializeTypewriter();
    initializeSentimentAnalysis();
    initializeChatbot();
    initializeCharts();
    initializeScrollAnimations();
    initializeCustomCursor();
    initializeThemeToggle();
}

// Particle.js Configuration
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#00ffff' },
                shape: { type: 'circle' },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00ffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    repulse: { distance: 100, duration: 0.4 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
        particlesLoaded = true;
    }
}

// Matrix Rain Effect
function initializeMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = 15;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    matrixAnimation = setInterval(drawMatrix, 35);
    
    // Adjust canvas on resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Typewriter Effect
function initializeTypewriter() {
    const typewriterElement = document.getElementById('typewriter');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = typewriterTexts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typewriterTexts.length;
            }
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
                return;
            }
        }
        
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
    
    typeWriter();
}

// Sentiment Analysis Implementation
function initializeSentimentAnalysis() {
    const analyzeButton = document.getElementById('analyzeSentiment');
    const sentimentInput = document.getElementById('sentimentInput');
    const resultDisplay = document.getElementById('sentimentResult');
    
    // Simple sentiment analysis (in a real implementation, you'd use an API)
    const positiveWords = ['good', 'great', 'excellent', 'awesome', 'fantastic', 'love', 'like', 'amazing', 'wonderful', 'perfect'];
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'horrible', 'worst', 'stupid', 'disgusting', 'annoying'];
    
    analyzeButton.addEventListener('click', function() {
        const text = sentimentInput.value.toLowerCase().trim();
        
        if (!text) {
            resultDisplay.innerHTML = '<div class="error">Please enter some text to analyze.</div>';
            return;
        }
        
        // Simple scoring algorithm
        let score = 0;
        const words = text.split(/\s+/);
        
        words.forEach(word => {
            if (positiveWords.some(pw => word.includes(pw))) score++;
            if (negativeWords.some(nw => word.includes(nw))) score--;
        });
        
        let sentiment, color, emoji;
        
        if (score > 0) {
            sentiment = 'Positive';
            color = '#00ff00';
            emoji = '😊';
        } else if (score < 0) {
            sentiment = 'Negative';
            color = '#ff4444';
            emoji = '😞';
        } else {
            sentiment = 'Neutral';
            color = '#ffff00';
            emoji = '😐';
        }
        
        resultDisplay.innerHTML = `
            <div class="sentiment-result" style="border-left-color: ${color}">
                <h4>${emoji} Sentiment: <span style="color: ${color}">${sentiment}</span></h4>
                <p>Confidence Score: ${Math.abs(score)}</p>
                <p>Analysis: The text appears to have a ${sentiment.toLowerCase()} emotional tone.</p>
            </div>
        `;
        
        // Add animation
        resultDisplay.classList.add('fade-in');
    });
}

// AI Chatbot Implementation
function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    
    // Predefined responses
    const responses = {
        'hello': 'Hi there! I\'m here to help you learn about this portfolio. What would you like to know?',
        'hi': 'Hello! How can I assist you today?',
        'skills': 'This portfolio showcases expertise in AI/ML, Python, TensorFlow, PyTorch, NLP, and data science.',
        'projects': 'The portfolio includes several ML projects: predictive analytics, NLP sentiment analysis, and computer vision applications.',
        'experience': 'The developer has experience in machine learning, data analysis, and AI model development.',
        'contact': 'You can reach out through the contact section or connect via LinkedIn and GitHub.',
        'education': 'Educational background includes computer science studies at Saveetha Engineering College.',
        'default': 'I\'m here to help! You can ask me about skills, projects, experience, or how to get in touch.'
    };
    
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.style.display = chatbotContainer.style.display === 'flex' ? 'none' : 'flex';
    });
    
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.style.display = 'none';
    });
    
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Show typing indicator
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
    
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    function getBotResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, response] of Object.entries(responses)) {
            if (lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return responses.default;
    }
    
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

// Charts Implementation
function initializeCharts() {
    const ctx = document.getElementById('performanceChart')?.getContext('2d');
    
    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Epoch 1', 'Epoch 2', 'Epoch 3', 'Epoch 4', 'Epoch 5'],
                datasets: [{
                    label: 'Model Accuracy',
                    data: [0.65, 0.75, 0.82, 0.88, 0.93],
                    borderColor: '#00ffff',
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Validation Accuracy',
                    data: [0.60, 0.70, 0.78, 0.84, 0.89],
                    borderColor: '#ff00ff',
                    backgroundColor: 'rgba(255, 0, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1,
                        ticks: {
                            color: '#ffffff'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#ffffff'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        }
                    }
                }
            }
        });
    }
}

// Custom Cursor
function initializeCustomCursor() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update cursor position
        document.body.style.setProperty('--cursor-x', mouseX + 'px');
        document.body.style.setProperty('--cursor-y', mouseY + 'px');
    });
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section, .demo-card').forEach(el => {
        observer.observe(el);
    });
}

// Theme Toggle (though it's already dark)
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        // Toggle between dark variations
        document.documentElement.classList.toggle('ultra-dark');
    });
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Window Resize Handler
window.addEventListener('resize', () => {
    if (particlesLoaded) {
        pJSDom[0].pJS.fn.vendors.destroypJS();
        pJSDom = [];
        initializeParticles();
    }
});

// Performance Optimization
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

// Export functions for global access
window.portfolioFunctions = {
    initializeComponents,
    initializeParticles,
    initializeMatrixRain
};
