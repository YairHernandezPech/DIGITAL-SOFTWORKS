// Simple and Clean - No Complex Animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all sections and navigation links
    const sections = document.querySelectorAll('section, .Servicios');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Simple navigation - just update active state
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
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
    
    // Floating animation for decorative images
    const floatingImages = document.querySelectorAll('.floating-image');
    floatingImages.forEach((img, index) => {
        img.style.animationDelay = `${index * 0.3}s`;
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
    
    // Gallery items - simple and clean
    const galleryItems = document.querySelectorAll('.gallery > div');
    galleryItems.forEach((item, index) => {
        // No complex animations, just simple hover effects
    });
    
    // Add simple CSS for active navigation state
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
        
        /* Simple floating animation */
        @keyframes simpleFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        
        .floating-image {
            animation: simpleFloat 4s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize page quickly
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});

// Simple loading screen effect
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
        transition: opacity 0.3s ease-out;
    `;
    
    loader.innerHTML = `
        <div style="text-align: center; color: #E099DA;">
            <h2 style="font-size: 2rem; margin-bottom: 20px;">DIGITAL SOFTWORKS</h2>
            <div style="width: 50px; height: 50px; border: 3px solid #E099DA; border-top: 3px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    // Remove loader quickly
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.remove();
        }, 300);
    }, 800);
    
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
