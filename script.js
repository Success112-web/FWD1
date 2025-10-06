document.addEventListener('DOMContentLoaded', () => {
    
    // --- Contact Form Submission Handler ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic client-side validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
                formStatus.textContent = 'Please fill out all fields.';
                formStatus.style.color = '#ff6347'; // Tomato red for error
                return;
            }
            
            // In a real application, you would send this data to a server here.
            // Example: using the Fetch API or an AJAX call.

            // Simulate successful submission
            formStatus.textContent = 'Thank you! Your message has been sent successfully.';
            formStatus.style.color = 'var(--primary-color)'; // Blue glow color for success

            // Reset the form after a short delay
            setTimeout(() => {
                contactForm.reset();
                formStatus.textContent = '';
            }, 3000);
        });
    }
 // --- Skill Card Animation (Optional) ---
    // A simple JS script to enhance the glow/animation effect on skill cards
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Simple CSS Variable update for a subtle light effect based on mouse position
            card.style.setProperty('--mouse-x', ${x}px);
            card.style.setProperty('--mouse-y', ${y}px);
        });

        card.addEventListener('mouseleave', () => {
            // Reset or fade out the effect on mouse leave
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
       });
});
});