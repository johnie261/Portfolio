
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('text-box');

let contactElement = {
    name : '',
    email : '',
    message : ''
}

function dataLocalStorage() {
    localStorage.setItem('name', JSON.stringify(contactElement));
  }

  formVal.addEventListener('change', () => {
    contactElement.name = nameInput.value;
    contactElement.email = emailInput.value;
    contactElement.message = messageInput.value;
    dataLocalStorage();
  });

if (JSON.parse(localStorage.getItem('name')) !== null) {
    contactElement = JSON.parse(localStorage.getItem('name'));
    nameInput.setAttribute('value', contactElement.name);
    emailInput.setAttribute('value', contactElement.email);
    messageInput.setAttribute('value', contactElement.message);
    messageInput.value = contactElement.message;   
  }