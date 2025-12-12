// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.main-nav')) {
        navList.classList.remove('active');
    }
});

// Smooth scroll for anchor links
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

// Search functionality (basic)
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // In a real implementation, this would navigate to a search results page
        }
    });
}

if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });
}

// Add hover effects to articles
document.querySelectorAll('.news-item, .pick-item, .video-item, .opinion-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.2s ease';
    });
});

// Update date dynamically
const dateElement = document.querySelector('.date');
if (dateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
}

// Image loading animation
const images = document.querySelectorAll('img');
images.forEach(img => {
    // Add fade-in effect when image loads
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    // Set initial opacity for fade-in effect
    if (!img.complete) {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
    } else {
        img.style.opacity = '1';
    }
    
    // Handle image errors
    img.addEventListener('error', function() {
        this.style.opacity = '1';
        this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        this.alt = 'Image not available';
    });
});

// Sticky header behavior
let lastScroll = 0;
const header = document.querySelector('.header');
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
    }
    
    lastScroll = currentScroll;
});

// Add click handlers for video items
document.querySelectorAll('.video-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const duration = this.querySelector('.video-duration')?.textContent || '';
        
        // Create a simple video modal (in production, integrate with actual video player)
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        modal.innerHTML = `
            <div style="max-width: 90%; max-height: 90%; text-align: center; color: white;">
                <h2 style="margin-bottom: 20px;">${title}</h2>
                <p style="margin-bottom: 20px; opacity: 0.8;">Video Player Placeholder</p>
                <p style="font-size: 14px; opacity: 0.6;">Click anywhere to close</p>
            </div>
        `;
        
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        document.body.appendChild(modal);
    });
});

// Add active state to navigation items
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove active class from all links
        document.querySelectorAll('.nav-list a').forEach(l => {
            l.classList.remove('active');
        });
        // Add active class to clicked link
        this.classList.add('active');
    });
});

