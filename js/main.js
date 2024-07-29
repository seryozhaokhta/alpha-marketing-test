// js/main.js

import { initBurgerMenu } from "./burgerMenu.js";
import { initApplicationForm } from "./applicationForm.js";
import { initContactForm } from "./contactForm.js";
import { initMap } from "./map.js";

document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initApplicationForm();
  initContactForm();
  initMap();
});
