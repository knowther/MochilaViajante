// setTimeout(() => {
//   document.getElementById('initialTitle').innerHTML = "Bem-vindo (a) ao pedra papel e tesoura."
//   document.body.style.background = "url(./gameAssets/background.jpg) no-repeat fixed center";
//   document.body.style.backgroundSize = "cover";
// }, 5000);

let contadorRodadas = 1;
let contadorPessoa = 0;
let contadorMaquina = 0;

function escolhaPedra() {
  rodarGame(1);
}
function escolhaPapel() {
  rodarGame(2);
}
function escolhaTesoura() {
  rodarGame(3);
}
function rodarGame(escolhaUsuario) {
  if (contadorRodadas < 4) {
    let escolhaPessoa = verificaEscolha(escolhaUsuario);
    alert("Você escolheu " + escolhaPessoa);
    let maquina = parseInt(Math.random() * 3 + 1);
    let escolhaMaquina = verificaEscolha(maquina);
    alert("Computador escolheu " + escolhaMaquina);
    switch (escolhaUsuario) {
      case 1:
        if (maquina == 1) {
          alert("Empate");
        } else if (maquina == 2) {
          alert("Máquina venceu");
          contadorMaquina++;
        } else if (maquina == 3) {
          alert("Você venceu");
          contadorPessoa++;
        }
        break;
      case 2:
        if (maquina == 1) {
          alert("Você venceu");
          contadorPessoa++;
        } else if (maquina == 2) {
          alert("Empate");
        } else if (maquina == 3) {
          alert("Máquina venceu");
          contadorMaquina++;
        }
        break;
      case 3:
        if (maquina == 1) {
          alert("Máquina venceu");
          contadorMaquina++;
        } else if (maquina == 2) {
          alert("Você venceu");
          contadorPessoa++;
        } else if (maquina == 3) {
          alert("Empate");
        }
        break;
      default:
        alert("Digite um número de 1 a 3");
    }
    contadorRodadas++;
    if (contadorRodadas == 4) {
      alert(
        `Você pontuou ${contadorPessoa}, a máquina pontuou ${contadorMaquina}`
      );
      confirm("Limite de 3 rodadas foi atingido, deseja recomeçar?")
        ? ((contadorRodadas = 1), (contadorMaquina = 0), (contadorPessoa = 0))
        : (contadorRodadas = 4);
    }
  } else {
    confirm("Limite de 3 rodadas foi atingido, deseja recomeçar?")
      ? ((contadorRodadas = 1), (contadorMaquina = 0), (contadorPessoa = 0))
      : (contadorRodadas = 4);
  }
}

function verificaEscolha(escolha) {
  let escolhido = "";
  if (escolha == 1) {
    escolhido = "Pedra";
  } else if (escolha == 2) {
    escolhido = "Papel";
  } else if (escolha == 3) {
    escolhido = "Tesoura";
  }
  return escolhido;
}
