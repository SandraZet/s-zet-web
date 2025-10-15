// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');
const contactForm = document.querySelector('.contact-form');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const email = formData.get('_replyto');
    const name = formData.get('name');
    const message = formData.get('message');

    if (!name || !email || !message || !isValidEmail(email)) {
        showNotification('Bitte füllen Sie alle Felder korrekt aus.', 'error');
        return;
    }

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showNotification('Vielen Dank für Ihre Nachricht! Ich melde mich.', 'success');
            contactForm.reset();
        } else {
            showNotification('Fehler beim Senden, bitte versuchen Sie es später.', 'error');
        }
    } catch (error) {
        showNotification('Fehler beim Senden, bitte versuchen Sie es später.', 'error');
    }
});


// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type) {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
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
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.portfolio-item, .app-item, .skill-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Add CSS for animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .portfolio-item,
    .app-item,
    .skill-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background: white;
            width: 100%;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
            padding: 2rem 0;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

document.head.appendChild(animationStyles);

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load (optional)
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 150);
//     }
// });

// Modal functionality for Impressum and Datenschutz
document.addEventListener('DOMContentLoaded', () => {
    const impressumModal = document.getElementById('impressum');
    const datenschutzModal = document.getElementById('datenschutz');
    const barrierefreiheitModal = document.getElementById('barrierefreiheit');
    const impressumLink = document.querySelector('a[href="#impressum"]');
    const datenschutzLink = document.querySelector('a[href="#datenschutz"]');
    const barrierefreiheitLink = document.querySelector('a[href="#barrierefreiheit"]');
    const closeBtns = document.querySelectorAll('.close');

    // Open modals
    if (impressumLink) {
        impressumLink.addEventListener('click', (e) => {
            e.preventDefault();
            impressumModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (datenschutzLink) {
        datenschutzLink.addEventListener('click', (e) => {
            e.preventDefault();
            datenschutzModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    if (barrierefreiheitLink) {
        barrierefreiheitLink.addEventListener('click', (e) => {
            e.preventDefault();
            barrierefreiheitModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            impressumModal.style.display = 'none';
            datenschutzModal.style.display = 'none';
            barrierefreiheitModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === impressumModal || e.target === datenschutzModal || e.target === barrierefreiheitModal) {
            impressumModal.style.display = 'none';
            datenschutzModal.style.display = 'none';
            barrierefreiheitModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            impressumModal.style.display = 'none';
            datenschutzModal.style.display = 'none';
            barrierefreiheitModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
