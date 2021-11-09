
var nome = "Aline Ferreira";
var idade = 33;
var peso = 63.7;
var altura = 1.53;
var plano = false;
var imc = Math.round(peso / Math.pow(altura, 2) );

console.log(`${nome} tem ${idade} anos e seu índice de massa corporal é de ${imc}`);