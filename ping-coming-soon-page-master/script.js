const form = document.getElementById("email-form");
let email = document.querySelector(".email");
const emailError = document.querySelector(".error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (e) {
  // email.addEventListener('input')
  if (email.value === "") {
    emailError.textContent = "You need to enter an email address.";
    email.classList.toggle("active");
  }
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    email.classList.remove("active");
    emailError.textContent = "Please provide a valid email address";
  }

  emailError.className = "error";
}
