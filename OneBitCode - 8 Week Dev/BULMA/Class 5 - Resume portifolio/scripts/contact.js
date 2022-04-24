const nameInput = document.querySelector("#name");
const mailInput = document.querySelector("#email");
const divMail = document.querySelector("#controlMail");
const helpVerify = document.querySelector(".help");
const warningElement = `<span class="icon is-small is-right">
<i class="fas fa-exclamation-triangle"></i>
</span>`;
mailInput.addEventListener("blur", (evt) => {
  validateMail();
});
