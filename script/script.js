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

// Check email is valid
function checkEmail(input) {
  const re = /^[a-z]+$/g;

  if (re.test(input)) {
    message.innerHTML = "";
    form.submit()
  } else {
    message.innerHTML =
      " email address should be written in small letters only!";
  }
}

// event listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let Email = email.value.replace(/[^a-zA-Z0-9 ]/g, "");
  Email=Email.replace(/[0-9]/g, "");
  checkEmail(Email);
});
