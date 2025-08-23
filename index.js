// Smooth Navigation and Section Transitions
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all sections and navigation links
    const sections = document.querySelectorAll('section, .Servicios');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add fade-in animation to all sections initially
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
    });
    
    // Show first section (hero) immediately
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Hide all sections with fade out
                sections.forEach(section => {
                    section.style.opacity = '0';
                    section.style.transform = 'translateY(30px)';
                });
                
                // Show target section with fade in
                setTimeout(() => {
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                    
                    // Smooth scroll to section
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 300);
                
                // Update active navigation state
                updateActiveNav(this);
            }
        });
    });
    
    // Update active navigation link
    function updateActiveNav(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        activeLink.classList.add('active');
    }
    
    // Intersection Observer for scroll-based animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Add entrance animation
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                
                // Add staggered animation for child elements
                const animatedElements = section.querySelectorAll('.contact-item, .form-group, .social-link, .gallery > div');
                animatedElements.forEach((el, index) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = 'all 0.6s ease-out';
                    
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 200 + (index * 100));
                });
                
                // Update active navigation based on current section
                updateActiveNavOnScroll(section);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Update active navigation based on scroll position
    function updateActiveNavOnScroll(currentSection) {
        const sectionId = currentSection.id;
        const correspondingNavLink = document.querySelector(`[href="#${sectionId}"]`);
        
        if (correspondingNavLink) {
            updateActiveNav(correspondingNavLink);
        }
    }
    
    // Parallax effect for hero section background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.backgroundPosition = `center ${rate}px`;
        }
    });
    
    // Floating animation for decorative images
    const floatingImages = document.querySelectorAll('.floating-image');
    floatingImages.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Form submission handling with animation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            // Button loading animation
            submitBtn.textContent = 'Enviando...';
            submitBtn.style.background = 'linear-gradient(45deg, #666, #999)';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                // Success animation
                submitBtn.textContent = '¡Mensaje Enviado!';
                submitBtn.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
                
                // Reset form
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = 'linear-gradient(45deg, #E099DA, #ff6b9d)';
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }
    
    // Smooth reveal animation for gallery items
    const galleryItems = document.querySelectorAll('.gallery > div');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.8)';
        item.style.transition = 'all 0.6s ease-out';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 500 + (index * 200));
    });
    
    // Add CSS for active navigation state
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.active {
            color: #E099DA !important;
            text-shadow: 0 0 10px rgba(224, 153, 218, 0.5);
            transform: scale(1.1);
            transition: all 0.3s ease;
        }
        
        .nav-link:hover {
            color: #E099DA !important;
            transform: translateY(-2px);
            transition: all 0.3s ease;
        }
        
        /* Smooth transitions for all sections */
        section, .Servicios {
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        /* Enhanced floating animation */
        @keyframes enhancedFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(1deg); }
            50% { transform: translateY(-20px) rotate(0deg); }
            75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        .floating-image {
            animation: enhancedFloat 6s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize page with smooth entrance
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add loading screen effect
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #000, #1a1a1a);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: #E099DA;">
            <h2 style="font-size: 2rem; margin-bottom: 20px;">DIGITAL SOFTWORKS</h2>
            <div style="width: 50px; height: 50px; border: 3px solid #E099DA; border-top: 3px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Remove loader after page loads
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 1000);
    
    // Add spin animation
    const spinStyle = document.createElement('style');
    spinStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(spinStyle);
});
