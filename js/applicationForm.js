// js/applicationForm.js

export const initApplicationForm = () => {
  const form = document.querySelector(".application-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Заявка отправлена!");
  });
};
