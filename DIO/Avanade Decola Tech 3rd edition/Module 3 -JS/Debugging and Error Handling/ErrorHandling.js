function readArray(array, numElements) {
  try {
    if (readArray.arguments.length == 0)
      throw new ReferenceError("Sem parâmetros");
    if (typeof array !== "object")
      throw new TypeError("Parâmetro 1 da função não é um objeto.");
    if (typeof numElements !== "number")
      throw ReferenceError(
        "Segundo parâmetro da função deve ser do tipo numérico."
      );
    array.forEach((el, i) => {
      if (typeof el !== "number")
        throw new TypeError(`"Índice ${i} do array não é um número"`);
    });
    if (array.length !== numElements)
      throw new RangeError("Número de índices do array incompatível");
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Erro do tipo ReferenceError!");
      console.log(error.message);
    } else if (error instanceof TypeError) {
      console.log("Erro do tipo TypeError!");
      console.log(error.message);
    } else if (error instanceof RangeError) {
      console.log("Erro do tipo RangeError!");
      console.log(error.message);
    }
  }
}

readArray();
