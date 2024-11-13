// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formMessage').textContent = "Thank you for your message! We'll get back to you soon.";
        this.reset(); // Reset the form fields
    } else {
        document.getElementById('formMessage').textContent = "Please fill out all fields.";
    }
});
