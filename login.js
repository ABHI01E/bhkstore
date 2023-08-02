const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulate server-side validation with mock data.
  if (username === 'exampleUser' && password === 'examplePassword') {
    // Login successful, redirect to the main page or perform necessary actions.
    alert('Login successful! Redirecting to the main page...');
    // In a real application, you can redirect to the main page using window.location.href.
    // window.location.href = 'main-page.html';
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});