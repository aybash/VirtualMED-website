



document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let hasError = false;
    const formData = {}; // Object to store form data

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });

    // First Name Validation
    const fname = document.querySelector('input[name="fname"]').value;
    if (fname === '') {
        document.getElementById('fnameError').textContent = 'First name is required';
        hasError = true;
    } else {
        formData.firstName = fname;
    }

    // Last Name Validation
    const lname = document.querySelector('input[name="lname"]').value;
    if (lname === '') {
        document.getElementById('lnameError').textContent = 'Last name is required';
        hasError = true;
    } else {
        formData.lastName = lname;
    }

    // Email Validation
    const email = document.querySelector('input[type="email"]').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        hasError = true;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        hasError = true;
    } else {
        formData.email = email;
    }

    // Age Validation
    const age = document.querySelector('input[type="number"]').value;
    if (age === '') {
        document.getElementById('ageError').textContent = 'Age is required';
        hasError = true;
    } else if (isNaN(age) || age < 18 || age > 100) {
        document.getElementById('ageError').textContent = 'Age must be between 18 and 100';
        hasError = true;
    } else {
        formData.age = age;
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById('genderLabel').textContent = 'Please select your gender';
        hasError = true;
    } else {
        formData.gender = gender.value;
    }

    // Password Validation
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        hasError = true;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
        hasError = true;
    }

    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
        hasError = true;
    } else if (confirmPassword !== password) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        hasError = true;
    }

    // Terms and Conditions Validation
    const termsChecked = document.getElementById('terms').checked;
    if (!termsChecked) {
        document.getElementById('termsError').textContent = 'You must agree to the terms';
        hasError = true;
    }

    // If no errors, process the form data
    if (!hasError) {
        formData.password = password;

        // Display Success Message
        const successMessage = 'Form submitted successfully!';
        alert(successMessage);

        // Display Form Summary
        displaySummary(formData);
    }
});

function displaySummary(formData) {
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = `
        <strong>First Name:</strong> ${formData.firstName} <br>
        <strong>Last Name:</strong> ${formData.lastName} <br>
        <strong>Email:</strong> ${formData.email} <br>
        <strong>Age:</strong> ${formData.age} <br>
        <strong>Gender:</strong> ${formData.gender} <br>
    `;
}

// Real-time validation for email
document.querySelector('input[name="email"]').addEventListener('input', function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.value)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
    } else {
        document.getElementById('emailError').textContent = '';
    }
});



//country

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso",
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
    "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
    "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const select = document.getElementById('countries');

countries.forEach(country => {
    const option = document.createElement('option');
    option.value = country;
    option.textContent = country;
    select.appendChild(option);
});




