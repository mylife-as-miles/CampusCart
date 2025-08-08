// CampusCart Landing Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    // Mobile navigation toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = navToggle.querySelectorAll('.bar');
            bars[0].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : '';
            bars[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
            bars[2].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : '';
        });
    }

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars[0].style.transform = '';
            bars[1].style.opacity = '1';
            bars[2].style.transform = '';
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Back to top functionality
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form functionality
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }

    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
            color: white;
            padding: 16px 20px;
            border-radius: 12px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        `;

        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 5 seconds
        setTimeout(() => {
            removeNotification(notification);
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            removeNotification(notification);
        });
    }

    function removeNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .category-card, .testimonial-card, .step');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Stats counter animation
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = stat.textContent.replace(/[0-9,]+/, target.toLocaleString());
                    clearInterval(timer);
                } else {
                    stat.textContent = stat.textContent.replace(/[0-9,]+/, Math.floor(current).toLocaleString());
                }
            }, 20);
        });
    }

    // Trigger stats animation when hero section is visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const heroObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        heroObserver.observe(heroSection);
    }

    // Download button analytics (placeholder)
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Track download attempt
            console.log('Download button clicked:', this.querySelector('img').alt);
            
            // Show coming soon message for now
            showNotification('Coming soon! CampusCart will be available on app stores shortly.', 'info');
        });
    });

    // Add floating animation to hero cards
    function addFloatingAnimation() {
        const floatingCards = document.querySelectorAll('.floating-card');
        floatingCards.forEach((card, index) => {
            const randomDelay = Math.random() * 2;
            const randomDuration = 3 + Math.random() * 2;
            card.style.animationDelay = `${randomDelay}s`;
            card.style.animationDuration = `${randomDuration}s`;
        });
    }

    addFloatingAnimation();

    // Feature cards hover effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Category cards hover effects
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.category-img');
            if (img) {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.category-img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // Console welcome message
    console.log('%c🛒 Welcome to CampusCart Landing Page!', 'color: #F83758; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with ❤️ for UNN students', 'color: #4392F9; font-size: 12px;');
});

// Utility functions
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

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(function() {
    // Handle scroll-based animations here if needed
}, 100);

window.addEventListener('scroll', debouncedScrollHandler);