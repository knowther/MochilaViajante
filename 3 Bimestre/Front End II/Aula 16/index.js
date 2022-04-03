let validacao = true;

let userObj = {
  name: "user",
  address: {
    city: {
      name: "Carpina",
      cep: "2567-852",
    },
  },
};

let minhaPromise = new Promise(function (resolve, reject) {
  if (validacao) {
    resolve(userObj);
  } else {
    reject("promise não ok");
  }
});

minhaPromise
  .then(function (resultado) {
    console.log(resultado);
  })
  .catch(function (erro) {
    console.log(erro);
  });
