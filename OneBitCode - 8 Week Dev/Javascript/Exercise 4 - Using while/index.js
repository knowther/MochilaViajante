let shipName = prompt("Qual o nome da nave?");
let isEnter = true;
let qntDobra =0;

while (isEnter) {
  isEnter = confirm("Deseja entrar em dobra espacial? \n 1- Sim \n 2 - Não");
  isEnter ? qntDobra++ : false ;
}

alert(`A nave ${shipName} realizou ${qntDobra} dobras espaciais`);
