document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission until validation passes

    // Get form elements
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailError = document.getElementById('emailError');
    let passwordError = document.getElementById('passwordError');

    // Clear any previous errors
    emailError.textContent = '';
    passwordError.textContent = '';

    let isValid = true; // Flag to track validation status

    // Email validation (checking if it's a valid email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.value || !emailPattern.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation (checking for minimum length, numbers, and special characters)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password.value || !passwordPattern.test(password.value)) {
        passwordError.textContent = 'Password must be at least 8 characters, contain one number and one special character.';
        isValid = false;
    }

    // If the form is valid, simulate form submission or actually submit
    if (isValid) {
        alert('Form Submitted Successfully!');
        
         this.submit();
    }
});
