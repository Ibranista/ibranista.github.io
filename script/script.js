/* eslint-disable linebreak-style */
const humMenu = document.querySelector('.hum-menu');
const navWrapper = document.querySelector('.nav-wrapper');
const sideNav = document.querySelector('.side-nav');
const navLinks = document.querySelectorAll('.nav-link');
const message = document.querySelector('.error');
const Toggler = (e) => {
  e.preventDefault();
  navWrapper.classList.toggle('active');
  sideNav.classList.toggle('hide');
};

humMenu.addEventListener('click', Toggler);

for (let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', () => {
    sideNav.classList.add('hide');
    navWrapper.classList.remove('active');
  });
}

// email validation
const userEmail = document.querySelector('#user-email');
const form = document.getElementById('getForm');
const { email } = form.elements;
const Name = document.querySelector('.Name');
const fullName = form.elements.fullname;
const textArea = document.querySelector('.textArea');
const textarea = form.elements.comment;
// Check email is valid
function checkEmail(input) {
  const re = /^[a-z]+$/g;

  if (re.test(input)) {
    message.innerHTML = '';
    form.submit();
  } else {
    message.innerHTML = ' email address should be written in small letters only!';
  }
}

// event listener

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let Email = email.value.replace(/[^a-zA-Z0-9 ]/g, '');
  Email = Email.replace(/[0-9]/g, '');
  checkEmail(Email);
});

const onChange = (e) => {
  e.preventDefault();
  localStorage.setItem('fname', fullName.value);
  localStorage.setItem('comment', textarea.value);
  localStorage.setItem('email', email.value);
};

const fName = localStorage.getItem('fname');
const Comment = localStorage.getItem('comment');
const Email = localStorage.getItem('email');

if (Name || Comment || Email) {
  fullName.value = fName;
  textarea.value = Comment;
  email.value = Email;
}

Name.addEventListener('change', onChange);
textArea.addEventListener('change', onChange);
userEmail.addEventListener('change', onChange);
