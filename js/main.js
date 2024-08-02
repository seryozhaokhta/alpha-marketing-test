// js/main.js

import { initBurgerMenu } from "./burgerMenu.js";
import { initApplicationForm } from "./applicationForm.js";
import { initContactForm } from "./contactForm.js";

document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initApplicationForm();
  initContactForm();
});
