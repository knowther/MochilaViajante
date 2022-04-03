const soma = require("./soma");
const subtrair = require("./subtrair");
const multiplicar = require("./multiplicar");
const dividir = require("./divisao");

let calculadora = (valor1, valor2, operacao) => console.log(operacao(valor1, valor2)); 

calculadora(5, 2, subtrair);