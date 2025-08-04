function showSection(sectionName) {
    // Hide all page sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Hide or show home content
    const homeContent = document.getElementById('home-content');
    
    if (sectionName === 'home') {
        // Show home content
        homeContent.classList.remove('hidden');
    } else {
        // Hide home content and show selected section
        homeContent.classList.add('hidden');
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize page - show home by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});