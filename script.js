// CSS-only navigation using :target pseudo-selector
// Enhanced for proper section switching

document.addEventListener('DOMContentLoaded', function() {
    // Function to show only the targeted section
    function updateSectionDisplay() {
        const hash = window.location.hash;
        const sections = document.querySelectorAll('.page-section');
        
        // Hide all sections first
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the targeted section or home if no hash
        if (hash && hash !== '#home') {
            const targetSection = document.querySelector(hash);
            if (targetSection && targetSection.classList.contains('page-section')) {
                targetSection.style.display = 'block';
            }
        } else {
            // Show home section when no hash or #home
            document.querySelector('#home').style.display = 'block';
        }
    }
    
    // Update on page load
    updateSectionDisplay();
    
    // Update when hash changes
    window.addEventListener('hashchange', updateSectionDisplay);
    
    // Smooth scrolling to top when section changes
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
        });
    });
});