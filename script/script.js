const humMenu = document.querySelector(".hum-menu");
const navWrapper = document.querySelector(".nav-wrapper");
const sideNav = document.querySelector(".side-nav");
const Toggler = (e) => {
  e.preventDefault();
  navWrapper.classList.toggle("active");
  sideNav.classList.toggle("hide");
};

humMenu.addEventListener("click", Toggler);
