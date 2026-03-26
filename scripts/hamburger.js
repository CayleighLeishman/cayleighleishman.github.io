/**
 * Navigation Toggle Module
 * Responsibilities: 
 * 1. Handles mobile menu visibility.
 * 2. Manages accessibility (ARIA) states.
 * 3. Handles "Click-Outside" behavior for improved UX.
 */

const menuButton = document.getElementById("hamburger-button");
const navList = document.querySelector("nav ul");

/**
 * Toggles the mobile navigation menu.
 * Triggered by the hamburger button click.
 */
const toggleMenu = (event) => {
    // Prevent the event from bubbling up to the document 
    // (which would trigger the 'click-outside' listener immediately)
    event.stopPropagation(); 
    
    const isOpen = menuButton.classList.toggle("open");
    navList.classList.toggle("open");

    // Update Accessibility: Screen readers will announce if the menu is expanded
    menuButton.setAttribute("aria-expanded", isOpen);
};

/**
 * Closes the menu if the user clicks anywhere outside 
 * of the navigation list or the toggle button.
 */
const handleOutsideClick = (event) => {
    // Check if the click occurred inside the nav or on the button
    const isClickInside = navList.contains(event.target) || menuButton.contains(event.target);
    
    // If the click was outside and the menu is currently open, close it
    if (!isClickInside && navList.classList.contains("open")) {
        menuButton.classList.remove("open");
        navList.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
    }
};

// --- Event Listeners ---

// Listen for clicks on the hamburger button
if (menuButton && navList) {
    menuButton.addEventListener('click', toggleMenu);

    // Listen for clicks on the entire document to handle "click-away" closing
    document.addEventListener('click', handleOutsideClick);
}