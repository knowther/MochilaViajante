function ContaBancaria(numConta, tipoConta, saldo, titular) {
  this.numConta = numConta;
  this.tipoConta = tipoConta;
  this.saldo = saldo;
  this.titular = titular;
}

let banco = {
  nome: "Break Room 2",
  clientes: [
    new ContaBancaria(5486273622, "Conta Corrente", 27771, "Abigael Natte"),
    new ContaBancaria(1183971869, "Conta Poupança", 8675, "Ramon Connell"),
    new ContaBancaria(9582019689, "Conta Poupança", 27363, "Jarret Lafuente"),
    new ContaBancaria(1761924656, "Conta Poupança", 32415, "Ansel Ardley"),
    new ContaBancaria(7401971607, "Conta Poupança", 18789, "Jacki Shurmer"),
    new ContaBancaria(630841470, "Conta Corrente", 28776, "Jobi Mawtus"),
    new ContaBancaria(4223508636, "Conta Corrente", 2177, "Thomasin Latour"),
    new ContaBancaria(185979521, "Conta Poupança", 25994, "Lonnie Verheijden"),
    new ContaBancaria(3151956165, "Conta Corrente", 7601, "Alonso Wannan"),
    new ContaBancaria(2138105881, "Conta Poupança", 33196, "Bendite Huggett"),
  ],
  consultarCliente: function (titularAcc) {
    return this.clientes.find((obj) => obj.titular === titularAcc);
  },

  deposito: function (titularAcc, qntDeposito) {
    return `Depósito realizado, seu novo saldo é: ${(this.clientes.find(
      (obj) => obj.titular === titularAcc
    ).saldo += qntDeposito)}`;
  },
  saque: function (titularAcc, qntSaque) {
    let newSaldo = (this.clientes.find(
      (obj) => obj.titular === titularAcc
    ).saldo -= qntSaque);
    if (newSaldo < 0) {
      return "Fundos Insuficientes";
    } else {
      return "Extração feita com sucesso, seu novo saldo é: " + newSaldo;
    }
  },
};

let arrayPersons = [
  { nome: "Pedro", idade: 27 },
  { nome: "Marias", idade: 15 },
];


function arrayPerson (array, property){
   let newObj = [];
   let newArray = array.map(obj =>{
      return obj[property]; 
    })
    newArray.forEach( (obj, index) =>{
     newObj[index] = {[property] : obj}
    })
    return newObj
}

console.log(arrayPerson(arrayPersons, 'idade'));

console.log(banco.consultarCliente("Jacki Shurmer"));
console.log(banco.deposito("Jacki Shurmer", 80000));
console.log(banco.saque("Jacki Shurmer", 8000));
