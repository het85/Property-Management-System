// Contact form
const contactForm = document.getElementById('contact-form');
const sendButton = document.getElementById('send-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');


sendButton.addEventListener('click', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (name && email && message) {
    alert('Your message has been sent. Thank you!');
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Please fill in all the fields');
  }
});
