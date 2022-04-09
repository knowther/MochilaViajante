let numeros = [2, 4 , 6, 8, 10, 12, 14, 16]

let pares = numeros.map(num => {
    return num - 1;
});

let nomes = ['Maria', 'João', 'Pedro', 'Maria'];

let filtrarNomes = nomes.filter(name =>{
    return name === 'Maria'
})

let numerosString = [1, 5, 9, 3, 7]

let reduce = numerosString.reduce( (num, juntados) => {
    return num + '-' + juntados;
})

let animais = ['Gato', 'Cachorro', 'Leão'];

let animal = animais.forEach(animal => {
    console.log("O nome do animal é:" + animal)
})



console.log(pares)
console.log(filtrarNomes)
console.log(reduce)
console.log(