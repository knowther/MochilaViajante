let body = document.querySelector("body");
let button = document.querySelector("input");
let h1 = document.querySelector("h1");
button.addEventListener("click", () => {
  body.classList.toggle("dark");
  h1.classList.toggle("dark");
});
