document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('is-open');
      // Optional: Toggle ARIA attribute for accessibility
      const isExpanded = mobileMenu.classList.contains('is-open');
      menuButton.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Optional: Close menu if clicking outside of it
  document.addEventListener('click', function (event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton && mobileMenu.classList.contains('is-open')) {
      mobileMenu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});

class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
   <header class="site-header">
            <div class="container header-container">
                <a href="index.html" class="logo">
                    DASHMESH
                </a>

                <nav class="main-nav">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="causes.html" class="nav-link">Causes</a>
                    <a href="volunteer.html" class="nav-link">Volunteer</a>
                    <a href="contact.html" class="nav-link">Contact Us</a>
                    <a href="donate.html" class="nav-link">Donate</a>
                </nav>

                <div class="mobile-menu-toggle">
                    <button class="mobile-menu-button" aria-label="Toggle Menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </div>

            <div class="mobile-menu">
                <div class="container mobile-menu-container">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="about.html" class="nav-link">About Us</a>
                    <a href="causes.html" class="nav-link">Causes</a>
                    <a href="volunteer.html" class="nav-link">Volunteer</a>
                    <a href="contact.html" class="nav-link">Contact Us</a>
                    <a href="donate.html" class="nav-link">Donate</a>
                </div>
            </div>
        </header>
    `;
  }
}
customElements.define('header-component', Header);