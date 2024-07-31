// js/applicationForm.js

export const initApplicationForm = () => {
  const modal = document.getElementById("pagecrm_crmModal");
  const openButtons = document.querySelectorAll(".open-form");
  const closeButton = document.querySelector(".pagecrm_modal .pagecrm_close");
  const form = document.getElementById("pagecrm_contactForm");
  const successMessage = document.getElementById("pagecrm_formSuccessMessage");
  const closeSuccessMessageButton = document.getElementById(
    "pagecrm_closeSuccessMessage"
  );

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const phone = form.querySelector('input[name="phone"]').value;

    if (name === "admin" && phone === "admin") {
      form.style.display = "none";
      successMessage.style.display = "block";
    } else {
      alert("Введите правильные данные!");
    }
  });

  closeSuccessMessageButton.addEventListener("click", () => {
    modal.style.display = "none";
    form.style.display = "block";
    successMessage.style.display = "none";
  });
};

// Initialize the application form when the document is ready
document.addEventListener("DOMContentLoaded", initApplicationForm);
