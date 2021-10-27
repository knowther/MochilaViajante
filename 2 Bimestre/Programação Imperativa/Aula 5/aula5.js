

function teste(x, y){
    return y - x
}

function parseInch(cm){
   return cm * 2.54;
}

function parseURL(domain){
    return `http://${domain}.com.br`;
}

function addExclamation(phrase){
    return `${phrase}!`
}

function dogAge(year){
    return year * 7;
}

function workTime(s){

    return s / 160

}

function calcIMC(kg, hg){
    return Math.round(kg / Math.pow(hg / 100, 2));
}

function parseUpper(phrase){
    return phrase.toUpperCase();
}

function typeData(type){
    return typeof(type);
}

function calculaCirc(rad){
    return 2 * Math.PI * rad;
}


console.log("Crie uma função que converta polegadas em centímetros. Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.");
console.log(parseInch(4));
console.log("Crie uma função que receba uma string e a converta em um URL.");
console.log(parseURL("funcaojs"));
console.log("Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).");
console.log(addExclamation("Para de olhar meu código"));
console.log("Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.");
console.log(dogAge(3));
console.log("Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.");
console.log(workTime(1600));
console.log("Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores.");
console.log(calcIMC(72, 180));
console.log("Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne.");
console.log(parseUpper("palavra maiúscula"));
console.log("Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.");
console.log(typeData(2));
console.log("Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.");
console.log(calculaCirc(4));
