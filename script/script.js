const humMenu = document.querySelector(".hum-menu");
const navWrapper = document.querySelector(".nav-wrapper");
const sideNav = document.querySelector(".side-nav");
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);
const Toggler = (e) => {
  e.preventDefault();
  navWrapper.classList.toggle("active");
  sideNav.classList.toggle("hide");
  console.log("first");
};

humMenu.addEventListener("click", Toggler);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => sideNav.classList.add("hide"));
}
