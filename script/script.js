const humMenu = document.querySelector(".hum-menu");
const navWrapper = document.querySelector(".nav-wrapper");
const sideNav = document.querySelector(".side-nav");
const Toggler = () => {
  navWrapper.classList.toggle("active");
  sideNav.classList.toggle("hide");
};

humMenu.addEventListener("click", Toggler);
