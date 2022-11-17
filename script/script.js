const humMenu = document.querySelector(".hum-menu");
const navWrapper = document.querySelector(".nav-wrapper");
const sideNav = document.querySelector(".side-nav");
const navLinks = document.querySelectorAll(".nav-link");
let message = document.querySelector(".error");
const Toggler = (e) => {
  e.preventDefault();
  navWrapper.classList.toggle("active");
  sideNav.classList.toggle("hide");
  console.log("first");
};

humMenu.addEventListener("click", Toggler);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    sideNav.classList.add("hide");
    navWrapper.classList.remove("active");
  });
}

// email validation
const userEmail = document.querySelector("#user-email");
const formButton = document.querySelector(".btn-get");
const form = document.getElementById("getForm");
const email = form.elements["email"];
const emailRegex = "^[a-z0-9_-]+$";
const Name = document.querySelector(".Name");
const fullName = form.elements["fullname"];
const textArea = document.querySelector(".textArea");
const textarea = form.elements["comment"];
// Check email is valid
function checkEmail(input) {
  const re = /^[a-z]+$/g;

  if (re.test(input)) {
    message.innerHTML = "";
    form.submit();
  } else {
    message.innerHTML =
      " email address should be written in small letters only!";
  }
}

// event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let Email = email.value.replace(/[^a-zA-Z0-9 ]/g, "");
  Email = Email.replace(/[0-9]/g, "");
  checkEmail(Email);
});

const onChange = (e) => {
  e.preventDefault();
  localStorage.setItem("fname", fullName.value);
  localStorage.setItem("comment", textarea.value);
  localStorage.setItem("email", email.value);
};

let fName = localStorage.getItem("fname");
let Comment = localStorage.getItem("comment");
let Email = localStorage.getItem("email");

if (Name || Comment || Email) {
  fullName.value = fName;
  textarea.value = Comment;
  email.value = Email;
} else {
  console.log("no values yet!");
}

Name.addEventListener("change", onChange);
textArea.addEventListener("change", onChange);
userEmail.addEventListener("change", onChange);
