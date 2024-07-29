// js/burgerMenu.js

export const initBurgerMenu = () => {
  const burgerMenu = document.getElementById("burger-menu");
  const nav = document.getElementById("nav");
  const searchBar = document.getElementById("search-bar");

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("open");
    nav.classList.toggle("open");
    searchBar.classList.toggle("open");
  });
};
