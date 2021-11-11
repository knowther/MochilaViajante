let nome = "   Johnny Wesley Mendonça Parente   ";

console.log(nome.length);
nome = nome.trim();
console.log(nome.split(" "));

let lista = ["Johnny", "Pedro", "Elias"];

console.log("Acessar elementos específicos de um array.");
console.log(lista[1]);


console.log("Modificar cada um dos elementos de um array e imprimi-los no console.");

console.log(lista);

lista[0]= "Ruan";

lista[1] = "Tobias";

lista[2] = "Matheus";


console.log(lista);

console.log("Adicionar elementos a um array.")
lista.push("Mendonça");
console.log(lista);

console.log("Extrair elementos de um array.");
console.log(lista);
lista.shift();
console.log(lista);

lista2 = lista;

lista2.push("Johnny");


console.log("Comparar elementos de um array com os elementos de outro. ")
console.log(lista.includes("Johnny") || lista2.includes("Johnny"))

console.log(inverterArray(lista));

numArray = [20, 20, 20, 19];

console.log(somarArray(numArray));


function inverterArray(lista = []){
  lista.reverse();
  return lista;
}

function somarArray(numArray = []){

    let sum= 0;

  numArray.forEach(function(n){
      sum += n;
  }) 



  return sum;

}

