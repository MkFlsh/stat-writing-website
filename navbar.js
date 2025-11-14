// Custom Navbar Component
class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <a href="/" class="flex items-center">
                <span class="text-2xl font-bold text-blue-600">Statistik</span>
                <span class="text-2xl font-bold text-gray-900">Writing</span>
              </a>
            </div>
            
            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-8">
              <a href="#leistungen" class="text-gray-700 hover:text-blue-600 font-medium">Leistungen</a>
              <a href="#prozess" class="text-gray-700 hover:text-blue-600 font-medium">Prozess</a>
              <a href="#testimonials" class="text-gray-700 hover:text-blue-600 font-medium">Referenzen</a>
              <a href="#faq" class="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
              <a href="/calendly" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                Erstgespräch
              </a>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
              <button id="mobile-menu-button" class="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-200">
          <div class="px-4 pt-2 pb-4 space-y-2">
            <a href="#leistungen" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Leistungen</a>
            <a href="#prozess" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Prozess</a>
            <a href="#testimonials" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">Referenzen</a>
            <a href="#faq" class="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium">FAQ</a>
            <a href="/calendly" class="block px-3 py-2 bg-blue-600 text-white text-center rounded-lg font-semibold hover:bg-blue-500">
              Erstgespräch
            </a>
          </div>
        </div>
      </nav>
    `;
    
    // Mobile menu toggle
    const menuButton = this.querySelector('#mobile-menu-button');
    const mobileMenu = this.querySelector('#mobile-menu');
    
    if (menuButton && mobileMenu) {
      menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    
    // Close mobile menu when clicking a link
    const mobileLinks = this.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
