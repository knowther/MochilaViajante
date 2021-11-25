const Json = require("./aula15Atividade");
let objConta;
objConta = JSON.parse(Json);
banco = {
  clientes: objConta,
  consultarcliente: function (titularAcc) {
    return this.clientes.find((obj) => obj.titular === titularAcc);
  },
};

console.log(banco.consultarcliente("Alonso Wannan"));
