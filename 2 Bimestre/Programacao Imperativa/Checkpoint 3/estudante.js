// Micro desafio - Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

// const Aluno = require("./modulo");

let AlunoObj = {
    aluno : new Aluno("Pedro", 6, [8.7,8.4,6]),
    calcularMedia : function(){
    let qntNotas = this.aluno.notas.length;
    let totalNotas = this.aluno.notas.reduce((firstV, currV) => {
        return firstV = firstV + currV;
    })
     return totalNotas / qntNotas;
    },
    faltou : function(){
       let newFalta = this.aluno.qntFaltas = this.aluno.qntFaltas + 1;
        return `Falta adicionada ao aluno, anteriormente tinha ${this.aluno.qntFaltas - 1} e atualmente tem ${newFalta}`;
    }
}
module.exports = AlunoObj;
