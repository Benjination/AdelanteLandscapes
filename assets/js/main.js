// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('show');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbarToggle.contains(event.target) && !navbarMenu.contains(event.target)) {
        navbarMenu.classList.remove('show');
      }
    });
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarMenu.classList.remove('show');
      });
    });
  }
  
  // Smooth scrolling for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
  
  // Portfolio lightbox functionality
  const portfolioItems = document.querySelectorAll('.portfolio-item img');
  portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      // Basic lightbox - can be enhanced with a library like Lightbox2
      const lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <span class="lightbox-close">&times;</span>
          <img src="${this.src}" alt="${this.alt}">
        </div>
      `;
      document.body.appendChild(lightbox);
      
      // Close lightbox
      const closeBtn = lightbox.querySelector('.lightbox-close');
      closeBtn.addEventListener('click', function() {
        document.body.removeChild(lightbox);
      });
      
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          document.body.removeChild(lightbox);
        }
      });
    });
  });
  
  // Form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('error');
          
          // Remove error class when user starts typing
          field.addEventListener('input', function() {
            this.classList.remove('error');
          });
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  });
  
  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  const animateElements = document.querySelectorAll('.service-item, .portfolio-item, .blog-card');
  animateElements.forEach(el => {
    observer.observe(el);
  });
});
