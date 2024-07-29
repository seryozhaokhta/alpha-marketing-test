// js/contactForm.js

export const initContactForm = () => {
  const contactForm = document.getElementById("contactForm");
  const formSuccessMessage = document.getElementById("formSuccessMessage");
  const closeSuccessMessage = document.getElementById("closeSuccessMessage");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formSuccessMessage.style.display = "block";
    contactForm.style.display = "none";
  });

  closeSuccessMessage.addEventListener("click", () => {
    formSuccessMessage.style.display = "none";
    contactForm.style.display = "block";
  });
};
