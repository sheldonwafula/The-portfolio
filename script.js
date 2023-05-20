// form validation
const yourName = document.querySelector('.yourname');
const yourEmail = document.querySelector('.youremail');
const error = document.querySelector('#error');
const form = document.querySelector('#form');
const sub = document.querySelector('#submit-button');
const yourmessage = document.querySelector('.yourmassage');

sub.addEventListener('click', (e) => {
  e.preventDefault();
  error.innerHTML = '';
  if (yourName.value === '' || yourName.value == null) {
    error.innerHTML = 'Please enter your name';
  } else if (yourEmail.value === '' || yourEmail.value == null) {
    error.innerHTML = 'Please enter your email';
  } else if (yourEmail.value !== yourEmail.value.toLocaleLowerCase()) {
    error.innerHTML = 'Please use lower case characters for the email address';
    yourEmail.className = 'invalid';
    error.className = 'error';
    error.className = 'error active';
  } else if (yourmessage.value === '' || yourmessage.value == null) {
    yourmessage.className = 'invalid';
    error.innerHTML = 'Please enter your message';
    error.className = 'error';
  } else {
    form.submit();
  }
});

// local storage
const contactForm = document.querySelector('.form-section');
const yourNames = document.querySelector('.yourname');
const yourEmails = document.querySelector('.youremail');

const yourmessages = document.querySelector('.yourmassage');

yourNames.value = '';
yourEmails.value = '';
yourmessages.value = '';

function dataSave() {
  const dataForm = {
    ourNames: yourNames.value,
    ourEmails: yourEmails.value,
    ourmessages: yourmessages.value,
  };
  localStorage.setItem('userInfo', JSON.stringify(dataForm));
}
contactForm.addEventListener('change', dataSave);

window.onload = () => {
  let item = localStorage.getItem('userInfo');
  item = JSON.parse(item);

  if (item) {
    yourNames.value = item.ourNames;
    yourEmails.value = item.ourEmails;
    yourmessages.value = item.ourmessages;
  }
};
