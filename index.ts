// Get the button element with the id 'toggle-skills' and cast it to HTMLButtonElement
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;

// Get the section element with the id 'skills' and cast it to HTMLElement
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add a click event listener to the toggleButton
toggleButton.addEventListener('click', () => {
    // Check if the display style of skillsSection is set to 'none'
    if (skillsSection.style.display === 'none') {
        // If true, set the display style to 'block' to show the skills section
        skillsSection.style.display = 'block';
        // Change the button text to 'Hide Skills'
        toggleButton.textContent = 'Hide Skills';
    } else {
        // If the display style is not 'none', hide the skills section by setting display to 'none'
        skillsSection.style.display = 'none';
        // Change the button text to 'Show Skills'
        toggleButton.textContent = 'Show Skills';
    }
});
