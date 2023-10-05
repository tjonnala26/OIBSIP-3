const loginForm = document.querySelector('.login-form form');
const registerForm = document.querySelector('.Register-form form');
const loginButton = document.querySelector('.login-form button[type="submit"]');
const registerButton = document.querySelector('.Register-form button[type="submit"]');

const dummyUserData = [
  { email: 'tjonnala@gitam.in', password: 'Tarun@26' },
];

function login(event) {
  event.preventDefault();
  
  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  const user = dummyUserData.find((user) => user.email === email && user.password === password);

  if (user) {
    alert('Login successful! Redirecting to the dashboard...');
  } else {
    alert('Login failed. Please check your email and password.');
  }
}

function signup(event) {
  event.preventDefault();

  const fullName = registerForm.querySelector('input[placeholder="Full Name"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;
  const confirmPassword = registerForm.querySelector('input[placeholder="Confirm Password"]').value;


  const newUser = { fullName, email, password };

  console.log('New user registered:', newUser);
  alert('Registration successful! You can now login.');

}

if (loginForm) {
  loginForm.addEventListener('submit', login);
}

if (registerForm) {
  registerForm.addEventListener('submit', signup);
}