const lastTitle = document.querySelectorAll(".last-list-title");
lastTitle.forEach((element) => {
  element.addEventListener("click", () => {
    element.nextElementSibling.classList.toggle("active");
    element.parentElement.classList.toggle("active");
    element.classList.toggle("active");
  });
});

//Navbarı açma kapama
const toggleBar = document.querySelector("#change-btn");
const navbar = document.querySelector(".navbar");
toggleBar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if (navbar.className === "navbar active") {
    toggleBar.classList.replace("fa-bars-staggered", "fa-x");
  } else {
    toggleBar.classList.replace("fa-x", "fa-bars-staggered");
  }
});
const openNavDropdowns = document.querySelectorAll('.open-nav-wrapper') 
const mainCategory = document.querySelectorAll(".nav-main-title-wrapper");
mainCategory.forEach((e,index) => {
  e.addEventListener("click", () => {
    openNavDropdowns[index].classList.toggle('active')
  });
});