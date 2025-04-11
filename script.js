window.addEventListener('DOMContentLoaded', function () {
      document.getElementById('signup-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }

        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        alert('Sign up successful!');
      });
    });