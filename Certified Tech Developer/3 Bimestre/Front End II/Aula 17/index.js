let searchBtn = document.querySelector("#searchBtn");
let numberInpt = document.querySelector("#qntDog");
let response = document.querySelector("#response");
let divImgs = document.querySelector(".images");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (numberInpt.value !== "" && numberInpt.value > 0) {
    response.innerHTML = "";
    fetch(`https://dog.ceo/api/breeds/image/random/${numberInpt.value}`)
      .then((resultado) => {
        console.log(resultado);
        return resultado.json();
      })
      .then((resultado) => {
        console.log(resultado.message);
        renderImgs(resultado.message);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    response.innerHTML = "Insira ao menos um número para buscar.";
  }
});

function renderImgs(arrayImg) {
  arrayImg.forEach((element, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", element);
    divImgs.appendChild(img);
  });
}
