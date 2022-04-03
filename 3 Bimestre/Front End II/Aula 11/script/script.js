// informações capturadas
let username = document.querySelector("#nomeUsuario");
let surname = document.querySelector("#sobrenomeUsuario");
let height = document.querySelector("#alturaUsuario");
let biograph = document.querySelector("#biograph");
let sexUser = document.querySelector("#sexoUsuario");
let chosenIten = document.querySelector("#itemUsuario");
// inputs
let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let altura = document.querySelector("#idade");
let biografia = document.querySelector("#biografia");
let saveBtn = document.querySelector("#salvar");
let radioGroup = document.getElementsByName("radioGrupo");
let listItem = document.querySelector("#listaItens");
let checkBox = document.querySelector("#checkbox");
let terms = document.querySelector("#terms");
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (checkBox.checked) {
    let nameArray = nome.value.split(" ");
    username.innerText = nameArray[0];
    surname.innerText = nameArray[1];
    height.innerText = altura.value;
    radioGroup.forEach((radio) => {
      if (radio.checked) {
        sexUser.innerText = radio.value;
      }
    });
    chosenIten.innerText = listItem.value;
    biograph.innerText = biografia.value;
    terms.innerText = "";
  } else {
    terms.innerText = "Aceite os temos para continuar.";
  }
});
