
var n1, n2, n3;

function adicionar(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao (a, b){
    return a / b;
}

function quadradoNumero(dobro){
    return multiplicacao(dobro, dobro);
}

function mediaTresNumeros(n1, n2, n3){
    let a = adicionar(n1, n2);
    let b = adicionar(a, n3);
    return divisao(b, 3);
    
}

function calculaPorcentagem(a, b){
    return b / 100 * a;
}

function geradorPorcentagem(a,b){
    return divisao(a, b) * 100;
}


console.log("---------------Operações-------------------")
n1 = 20; n2= 48;
console.log(`Soma: ${n1} + ${n2} =  ${adicionar(n1, n2)}`);
n1 = 457; n2 = 54;
console.log(`Subtração: ${n1} - ${n2} =  ${subtracao(n1, n2)}`)
n1= 45; n2= 73;
console.log(`Multiplicação: ${n1} x ${n2} =  ${multiplicacao(n1, n2)}`);
n1 = 15; n2 = 4;
console.log(`Divisão: ${n1} / ${n2} =  ${divisao(n1, n2)}`);
n1 = 0; n2 = 4;
console.log(`Divisão: ${n1} / ${n2} =  ${divisao(n1, n2)}`);
n1= 74;
console.log(`Elevar ao quadrado: ${n1} x ${n1} = ${quadradoNumero(n1)}`)
n1 = 18; n2 = 14; n3=21;
console.log(`A média entre os números ${n1}, ${n2} e ${n3} é ${Math.round(mediaTresNumeros(n1, n2, n3))}`)
n1 = 300; n2=15;
console.log(`${n2}% de ${n1} é: ${calculaPorcentagem(n1,n2)}`);
n1 = 2; n2= 200;
console.log(`${n1} é ${geradorPorcentagem(2, 200)}% de ${n2} `);