document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.login-form');
  loginForm.style.display = 'flex';
  loginForm.style.flexDirection = 'column';
  loginForm.style.width = '408px';
  loginForm.style.borderRadius = '8px';
  loginForm.style.backgroundColor = '#FFFFFF';
  loginForm.style.gap = '8px';
  loginForm.style.padding = '24px';
  loginForm.style.fontFamily = 'Montserrat, sans-serif';

  const labels = loginForm.querySelectorAll('label');
  labels.forEach(label => {
    label.style.width = '360px';
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.fontSize = '16px';
    label.style.color = '#2e2f42';
    label.style.gap = '8px';
  });

  const inputs = loginForm.querySelectorAll('input');
  inputs.forEach(input => {
    input.style.width = '100%';
    input.style.padding = '8px';
    input.style.border = '1px solid #2e2f42';
    input.style.borderRadius = '8px';
  });

  const button = loginForm.querySelector('button');
  button.style.paddingTop = '8px';
  button.style.paddingBottom = '8px';
  button.style.paddingLeft = '16px';
  button.style.paddingRight = '16px';
  button.style.backgroundColor = '#4e75ff';
  button.style.color = '#fff';
  button.style.border = 'none';
  button.style.borderRadius = '8px';
  button.style.cursor = 'pointer';
  button.style.fontSize = '16px';
  button.style.fontFamily = 'Montserrat, sans-serif';
  button.style.width = '86px';
  button.style.height = '40px';
  loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const { email, password } = loginForm.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);
    loginForm.reset();
  });
});
