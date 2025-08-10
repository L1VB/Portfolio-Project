function showSection(sectionName) {
    // Get references to key elements
    const menuSection = document.getElementById('menu');
    const homeContent = document.getElementById('home-content');
    const mobileHomeLi = document.querySelector('nav .home-li');
    const footer = document.querySelector('footer');
    const sections = document.querySelectorAll('.page-section');
    
    // Special handling for menu toggle
    if (sectionName === 'menu') {
        // Check if menu is currently active
        if (menuSection.classList.contains('active')) {
            // Menu is active, so go back to home
            menuSection.classList.remove('active');
            homeContent.classList.remove('hidden');
            // Show mobile home button again
            if (mobileHomeLi) {
                mobileHomeLi.style.display = 'block';
            }
            // Show footer again
            if (footer) {
                footer.style.display = 'block';
            }
        } else {
            // Menu is not active, so show it
            // Hide all other page sections first
            sections.forEach(section => {
                section.classList.remove('active');
            });
            // Hide home content and show menu
            homeContent.classList.add('hidden');
            menuSection.classList.add('active');
            // Hide mobile home button when menu is active
            if (mobileHomeLi) {
                mobileHomeLi.style.display = 'none';
            }
            // Hide footer when menu is active
            if (footer) {
                footer.style.display = 'none';
            }
        }
    } else {
        // Normal section handling for non-menu sections
        
        // ALWAYS close the menu first if it's open
        if (menuSection.classList.contains('active')) {
            menuSection.classList.remove('active');
        }
        
        // Hide all page sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        if (sectionName === 'home') {
            // Show home content
            homeContent.classList.remove('hidden');
            // Make sure mobile home button is visible
            if (mobileHomeLi) {
                mobileHomeLi.style.display = 'block';
            }
            // Make sure footer is visible
            if (footer) {
                footer.style.display = 'block';
            }
        } else {
            // Hide home content and show selected section
            homeContent.classList.add('hidden');
            const targetSection = document.getElementById(sectionName);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            // Make sure mobile home button is visible for other sections
            if (mobileHomeLi) {
                mobileHomeLi.style.display = 'block';
            }
            // Make sure footer is visible for other sections
            if (footer) {
                footer.style.display = 'block';
            }
        }
    }
    
    // Reset scroll position to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Reset all dropdowns to closed state
    resetDropdowns();
}

// Function to reset all dropdowns to their default closed state
function resetDropdowns() {
    // Get all dropdown target elements
    const dropdownElements = document.querySelectorAll('.pr-open, .cl-open');
    
    dropdownElements.forEach(element => {
        // Hide the dropdown
        element.style.display = 'none';
        // Remove opened class
        element.classList.remove('dropdown-opened');
    });
    
    // Reset all arrow images to normal position
    const arrowImages = document.querySelectorAll('.pr-drop-down img, .cl-drop-down img');
    arrowImages.forEach(arrow => {
        arrow.style.transform = 'rotate(0deg)';
    });
}

// Dropdown functionality with arrow rotation
function initializeDropdowns() {
    // Get all dropdown content elements
    const dropdownContents = document.querySelectorAll('.pr-drop-down .content, .cl-drop-down .content');
    
    // Add click event listeners to each dropdown content
    dropdownContents.forEach(content => {
        content.addEventListener('click', function() {
            // Determine which dropdown was clicked
            const isProjectDropdown = this.closest('.pr-drop-down');
            const isClientDropdown = this.closest('.cl-drop-down');
            
            let targetElement;
            
            if (isProjectDropdown) {
                targetElement = document.querySelector('.pr-open');
            } else if (isClientDropdown) {
                targetElement = document.querySelector('.cl-open');
            }
            
            if (targetElement) {
                // Get the arrow image in the clicked dropdown
                const arrowImg = this.querySelector('img');
                
                // Toggle the display
                if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                    targetElement.style.display = 'block';
                    // Add opened class for styling
                    targetElement.classList.add('dropdown-opened');
                    // Flip arrow upside down
                    if (arrowImg) {
                        arrowImg.style.transform = 'rotate(180deg)';
                    }
                } else {
                    targetElement.style.display = 'none';
                    // Remove opened class
                    targetElement.classList.remove('dropdown-opened');
                    // Reset arrow to normal position
                    if (arrowImg) {
                        arrowImg.style.transform = 'rotate(0deg)';
                    }
                }
            }
        });
        
        // Add cursor pointer to indicate clickable
        content.style.cursor = 'pointer';
    });
}

// Initialize both functionalities when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    initializeDropdowns();
});