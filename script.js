// Main JavaScript for Statistik Writing

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for anchor links
  initSmoothScroll();
  
  // Intersection Observer for fade-in animations
  initScrollAnimations();
  
  // Form handling (if needed later)
  initFormHandling();
  
  // Scroll to top button
  initScrollToTop();
  
  // Analytics tracking (placeholder)
  initAnalytics();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const navHeight = document.querySelector('nav')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe sections
  document.querySelectorAll('section, .grid > div').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Form handling (placeholder for future contact forms)
 */
function initFormHandling() {
  const forms = document.querySelectorAll('form[data-ajax]');
  
  forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const button = form.querySelector('button[type="submit"]');
      
      // Add loading state
      if (button) {
        button.classList.add('loading');
        button.disabled = true;
      }
      
      try {
        // Placeholder for actual form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Success handling
        showNotification('Vielen Dank! Wir melden uns in Kürze.', 'success');
        form.reset();
      } catch (error) {
        // Error handling
        showNotification('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.', 'error');
      } finally {
        // Remove loading state
        if (button) {
          button.classList.remove('loading');
          button.disabled = false;
        }
      }
    });
  });
}

/**
 * Show notification (toast)
 */
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed bottom-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 ${
    type === 'success' ? 'bg-green-500' : 
    type === 'error' ? 'bg-red-500' : 
    'bg-blue-500'
  } text-white`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
  }, 10);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(20px)';
    setTimeout(() => notification.remove(), 300);
  }, 5000);
}

/**
 * Scroll to top button
 */
function initScrollToTop() {
  // Create button
  const button = document.createElement('button');
  button.innerHTML = '↑';
  button.className = 'fixed bottom-20 right-4 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg opacity-0 transition-opacity hover:bg-blue-500 z-40';
  button.setAttribute('aria-label', 'Scroll to top');
  button.style.transition = 'opacity 0.3s';
  
  document.body.appendChild(button);
  
  // Show/hide based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.style.opacity = '1';
    } else {
      button.style.opacity = '0';
    }
  });
  
  // Scroll to top on click
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Analytics tracking (placeholder)
 */
function initAnalytics() {
  // Track page view
  console.log('Page view tracked');
  
  // Track button clicks
  document.querySelectorAll('a[href*="calendly"], a[href*="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
      const action = this.href.includes('calendly') ? 'Calendly Click' : 'Phone Click';
      console.log('Event tracked:', action);
      
      // Here you would send to your analytics service
      // e.g., gtag('event', action, { ... });
    });
  });
}

/**
 * Lazy loading for images (if needed)
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Handle external links
 */
function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/**
 * Performance monitoring
 */
function logPerformance() {
  if (window.performance) {
    window.addEventListener('load', () => {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log(`Page load time: ${pageLoadTime}ms`);
    });
  }
}

// Initialize external links handling
initExternalLinks();

// Log performance in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  logPerformance();
}
