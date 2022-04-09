const Json = require("./aula15Atividade");
function ContaBancaria(numero, tipoConta, saldo, titular){
    this.numero = numero;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

let accArray = [];

for(let i =0; i < Json.length; i++){
   accArray.push(new ContaBancaria(Json[i].numero, Json[i].tipoConta, Json[i].saldo, Json[i].titular)) 
}


banco = {
  clientes: accArray,
  consultarcliente: function (titularAcc) {
    return this.clientes.find((obj) => obj.titular === titularAcc);
  },
};

console.log(banco.consultarcliente("Jarret Lafuente"));