document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "user@example.com" && password === "password123") {
        document.getElementById('signinMessage').textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = "home.html"; 
        }, 2000);
    } else {
        document.getElementById('signinMessage').textContent = "Invalid email or password. Please try again.";
    }
});
