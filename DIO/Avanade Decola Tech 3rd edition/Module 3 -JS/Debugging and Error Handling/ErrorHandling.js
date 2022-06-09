function readArray(array) {
  console.log(typeof array);
  readArray.arguments.length == 0
    ? console.log(new ReferenceError("Sem Argumentos"))
    : console.log("Nº de argumentos corretos.");
  typeof array !== "object"
    ? console.log(new TypeError("Parâmetro não é um objeto."))
    : console.log("Parâmetro aceito");
  array.forEach((el, i) => {
    typeof el !== "number"
      ? console.log(new TypeError(`"Índice ${i} do array não é um número"`))
      : console.log("Todos índices do Array são compatíveis.");
  });
}

readArray([1, 2, "B", 3]);
