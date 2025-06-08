
// JavaScript for mobile navigation toggle (if needed)
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navLinks = document.querySelector('.header-nav');

// This is a placeholder for a more robust mobile menu.
// For an exact clone, you would typically implement a sliding or modal menu.
mobileMenuButton.addEventListener('click', () => {
    // In a real scenario, you'd toggle classes to show/hide a mobile menu overlay
    console.log('Mobile menu button clicked!');
    // Example: navLinks.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Experience Section Tab Functionality
document.addEventListener('DOMContentLoaded', () => {
    const companyTabs = document.querySelectorAll('.company-tab');
    const experienceContents = document.querySelectorAll('.experience-content');

    companyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            companyTabs.forEach(t => {
                t.classList.remove('active-tab');
                t.style.color = '#6b7280'; /* gray-500 */
                t.style.fontWeight = '600'; /* font-semibold */
            });

            // Add active class to clicked tab
            tab.classList.add('active-tab');
            tab.style.color = '#1a1a1a'; /* gray-900 */
            tab.style.fontWeight = '700'; /* font-bold */

            // Hide all experience content
            experienceContents.forEach(content => content.classList.add('hidden'));

            // Show content for the active tab
            const targetCompany = tab.dataset.company;
            document.getElementById(`experience-details-${targetCompany}`).classList.remove('hidden');
        });
    });

    // Set initial active tab (Apple)
    document.querySelector('.company-tab[data-company="apple"]').click();
});