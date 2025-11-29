// Contact Page JavaScript

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
        // Reset form fields after submission
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields before sending.');
    }
});
