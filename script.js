const submit = document.querySelector(".column__form__form__button");
const input_forms = document.querySelectorAll(".column__form__form__input");
const input_first_name = document.querySelector(".first_name");
const input_last_name = document.querySelector(".last_name");
const input_email = document.querySelector(".email");
const input_password = document.querySelector(".password");
const checker = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

submit.addEventListener("click", function (e) {
  e.preventDefault();
  let success = true;

  if (!input_first_name.value) {
    success = false;
    input_first_name.parentNode.classList.add("error");
  }

  if (!input_last_name.value) {
    success = false;
    input_last_name.parentNode.classList.add("error");
  }

  let email = document.querySelector(".email").value;
  if (email.match(checker) === null) {
    success = false;
    input_email.parentNode.classList.add("error");
  }

  if (!input_password.value) {
    success = false;
    input_password.parentNode.classList.add("error");
  }

  if (success) {
    input_forms.forEach(function (form) {
      form.value = "";
    });
    alert("Success! You will soon receive an email confirmation.");
  }
  return;
});

input_forms.forEach(function (form) {
  form.addEventListener("keydown", function () {
    form.parentNode.classList.remove("error");
  });
});
