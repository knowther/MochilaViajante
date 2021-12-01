let numeros = [1, 2, 3, 4];

function divSum(array) {
  let total = array.reduce((acumulador, item) => {
    return acumulador + item;
  });
  let numArray = array.map((numero) => {
    return numero / total;
  });
  return numArray;
}

let arrayPalavras = ["Caneta", "Casa", "Manjericão"];

function stringCounter(array, num) {
  let array1 = array.filter((string) => {
    return string.length > num;
  });

  return array1;
}

let animais = ["Gato", "Cachorro", "Cavalo"];

console.log(stringCounter(arrayPalavras, 5));

let stringAnimal = animais.forEach((animal) => {
  console.log(`O animal é ${animal}`);
});
