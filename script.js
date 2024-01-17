// Function to smoothly scroll to the target section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({
			behavior: 'smooth', // Use the native scroll behavior for smooth scrolling
        });
    }
}

// Attach click event listeners to your navigation links
document.querySelector('nav a[href="#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#about');
});

document.querySelector('nav a[href="#resume"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#resume');
});

document.querySelector('nav a[href="#portfolio"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#portfolio');
});

document.querySelector('nav a[href="#contact"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#contact');
});