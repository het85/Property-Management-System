const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  // Check if the email and password are correct
  if (email === 'admin' && password === 'admin') {
    // Store the email in local storage
    localStorage.setItem('loggedInUser', email);

    // Redirect the user to the home page
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
});

// Check if the user is already logged in
const loggedInUser = localStorage.getItem('loggedInUser');

if (loggedInUser) {
  // Redirect the user to the home page
  window.location.href = 'index.html';
}
