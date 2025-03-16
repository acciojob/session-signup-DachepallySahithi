//your JS code here. If required.
document.getElementById('signUpForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get values from the form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Check if passwords match
            if (password === confirmPassword) {
                // Store values in sessionStorage
                sessionStorage.setItem('name', name);
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('password', password);

                // Show success alert
                alert('Sign up successful!');
            } else {
                // Show error alert
                alert('Passwords do not match');
            }
        });