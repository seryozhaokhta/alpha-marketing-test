// js/applicationForm.js

export const initApplicationForm = () => {
  const form = document.querySelector(".application-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Добавьте здесь логику для обработки формы, например, отправку данных на сервер
    alert("Заявка отправлена!");
  });
};
