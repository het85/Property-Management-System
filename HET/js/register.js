// Check if data exists in localStorage
const loggedInUser = localStorage.getItem('loggedInUser');

// If data exists, redirect to home page
if (loggedInUser) {
  window.location.href = 'index.html';
} else {
  // If data doesn't exist, proceed with form submission
  const registerForm = document.getElementById('register-form');
  const registerButton = document.getElementById('register-button');
  const nameInput = document.getElementById('name');
  const emailInput2 = document.getElementById('email');
  const passwordInput2 = document.getElementById('password');

  registerButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput2.value;
    const password = passwordInput2.value;

    // Check if the name, email, and password are valid
    if (name && email && password) {
      // Store the email in local storage
      localStorage.setItem('loggedInUser', email);

      // Redirect the user to the home page
      window.location.href = 'index.html';
    } else {
      alert('Please fill in all the fields');
    }
  });
}
