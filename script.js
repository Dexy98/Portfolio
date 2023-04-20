const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-links");

const progress = document.querySelector(".barra-percentuale");
const progressBarPercents = [80, 50, 20];

window.addEventListener("scroll", () => {

    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("fissa");
    }else{
        navbar.classList.remove("fissa");
    }
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
              navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
          }
        });
    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".barra-percentuale").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent =
            progressBarPercents[i]; 
        });
          } 

});

window.addEventListener("resize", () => {
    window.location.reload();
  });