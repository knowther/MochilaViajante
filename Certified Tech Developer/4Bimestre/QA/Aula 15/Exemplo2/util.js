const estados = [
  "Minas Gerais",
  "Rio de Janeiro",
  "Pará",
  "Pernambuco",
  "Espírito Santo",
  "São Paulo",
  "Paraná",
];
const dias = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const exReg = {
  responseOk: "Response OK",
  responseFail: "Response FAIL",
  email: "test@test.com",
  telefone: "123456789",
};

exports.arrEstados = () => estados;
exports.arrDias = () => dias;
exports.objExpReg = () => expReg;
