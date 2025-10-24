document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const registrationForm = document.getElementById('registrationForm');
    const successPage = document.getElementById('successPage');
    const backBtn = document.getElementById('backBtn');
    
    // Form validation function
    function validateForm() {
        let isValid = true;
        
        // First Name validation
        const firstName = document.getElementById('firstName');
        const firstNameError = document.getElementById('firstNameError');
        if (firstName.value.trim() === '') {
            firstNameError.style.display = 'block';
            firstName.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            firstNameError.style.display = 'none';
            firstName.style.borderColor = '#ddd';
        }
        
        // Last Name validation
        const lastName = document.getElementById('lastName');
        const lastNameError = document.getElementById('lastNameError');
        if (lastName.value.trim() === '') {
            lastNameError.style.display = 'block';
            lastName.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            lastNameError.style.display = 'none';
            lastName.style.borderColor = '#ddd';
        }
        
        // Email validation
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.style.display = 'block';
            email.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            email.style.borderColor = '#ddd';
        }
        
        // Password validation
        const password = document.getElementById('password');
        const passwordError = document.getElementById('passwordError');
        if (password.value.length < 8) {
            passwordError.style.display = 'block';
            password.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            passwordError.style.display = 'none';
            password.style.borderColor = '#ddd';
        }
        
        // Confirm Password validation
        const confirmPassword = document.getElementById('confirmPassword');
        const confirmPasswordError = document.getElementById('confirmPasswordError');
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.style.display = 'block';
            confirmPassword.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
            confirmPassword.style.borderColor = '#ddd';
        }
        
        // Phone validation (optional)
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (phone.value.trim() !== '' && !phoneRegex.test(phone.value.replace(/\D/g, ''))) {
            phoneError.style.display = 'block';
            phone.style.borderColor = '#e74c3c';
            isValid = false;
        } else {
            phoneError.style.display = 'none';
            phone.style.borderColor = '#ddd';
        }
        
        // Terms validation
        const terms = document.getElementById('terms');
        const termsError = document.getElementById('termsError');
        if (!terms.checked) {
            termsError.style.display = 'block';
            isValid = false;
        } else {
            termsError.style.display = 'none';
        }
        
        return isValid;
    }
    
    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // If form is valid, show success page
            registrationForm.style.display = 'none';
            successPage.style.display = 'block';
            
            // In a real application, you would send the form data to a server here
            console.log('Form submitted successfully!');
        }
    });
    
    // Back button handler
    backBtn.addEventListener('click', function() {
        // Reset form and show registration form again
        form.reset();
        registrationForm.style.display = 'block';
        successPage.style.display = 'none';
        
        // Reset error messages and styles
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.style.display = 'none';
        });
        
        const inputs = document.querySelectorAll('input, select');
        inputs.forEach(function(input) {
            input.style.borderColor = '#ddd';
        });
    });
    
    // Real-time validation for some fields
    document.getElementById('firstName').addEventListener('blur', validateForm);
    document.getElementById('lastName').addEventListener('blur', validateForm);
    document.getElementById('email').addEventListener('blur', validateForm);
    document.getElementById('password').addEventListener('blur', validateForm);
    document.getElementById('confirmPassword').addEventListener('blur', validateForm);
    document.getElementById('phone').addEventListener('blur', validateForm);
});
