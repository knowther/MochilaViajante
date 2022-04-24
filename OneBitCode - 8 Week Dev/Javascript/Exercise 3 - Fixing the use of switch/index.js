let lightYearValue = prompt("Qual a distância em anos-luz?");
let selectedOpt = parseInt(
  prompt(
    "Pra qual operação deseja converter? \n 1-Parsec (sec) \n 2-Unidade astronônima (AU) \n 3- Quilômetros(Km) "
  )
);

let unidadeSelecionada;
let convertedDistance;
let result;
switch (selectedOpt) {
  case 1:
    unidadeSelecionada = "Parsec";
    result = lightYearValue * 0.306601;
    break;
  case 2:
    unidadeSelecionada = "Unidade astronônima";
    result = lightYearValue * 63241.1;
    break;
  case 3:
    unidadeSelecionada = "Quilômetros";
    result = lightYearValue * 9.5 * Math.pow(10, 12);

    break;
  default:
    unidadeSelecionada = "Unidade não identificada.";
    result = "Conversão fora do escopo.";
}

alert(
  `Distância em anos luz: ${lightYearValue} \n ${unidadeSelecionada} : ${result}.`
);
