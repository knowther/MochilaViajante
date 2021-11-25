/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)

2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.


*/



let contas = [
    {"numero" : 5486273622, "tipoConta": "Conta Corrente", "saldo": 27771, "titular" : "Abigael Natte"},
    {"numero" : 1183971869, "tipoConta": "Conta Poupança", "saldo": 8675, "titular" : "Ramon Connell"},
    {"numero" : 9582019689, "tipoConta": "Conta Poupança", "saldo": 27363, "titular" : "Jarret Lafuente"},
    {"numero" : 1761924656, "tipoConta": "Conta Poupança", "saldo": 32415, "titular" : "Ansel Ardley"},
    {"numero" : 7401971607, "tipoConta": "Conta Poupança", "saldo": 18789, "titular" : "Jacki Shurmer"},
    {"numero" : 630841470, "tipoConta": "Conta Poupança", "saldo": 28776, "titular" : "Jobi Mawtus"},
    {"numero" : 4223508636, "tipoConta": "Conta Poupança", "saldo": 2177, "titular" : "Thomasin Latour"},
    {"numero" : 185979521, "tipoConta": "Conta Poupança", "saldo": 25994, "titular" : "Lonnie Verheijden"},
    {"numero" : 3151956165, "tipoConta": "Conta Corrente", "saldo": 7601, "titular" : "Alonso Wannan"},
    {"numero" : 2138105881, "tipoConta": "Conta Poupança", "saldo": 33196, "titular" : "Jarret Lafuente"}
]
   


// let JsonArray = [];

// for(let i = 0; i < contas.length; i++){
//     JsonArray.push(JSON.stringify(contas[i])) 
// }
module.exports = contas;

