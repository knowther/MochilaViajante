const AlunoObj = require("./estudantes");
const AlunoConst = require('./modulo');

let curso = {
    nomeCurso : "Node.js",
    notaAprovacao : 7,
    faltasMax: 6,
    listaEstudantes: AlunoObj,
    addAluno : function(Aluno){
        this.listaEstudantes.push(Aluno)
    },
    verificarAprovacao: function(Aluno){ 
      return Aluno.qntFaltas < this.faltasMax && Aluno.calcularMedia() >= this.notaAprovacao ? true : Aluno.qntFaltas === this.faltasMax ? Aluno.calcularMedia().toFixed(1) >= parseFloat(this.notaAprovacao * 1.10).toFixed(1) : false; 
    },
    alunosAprovados : function(){
        let isAprovados = []
        this.listaEstudantes.forEach((obj, index) => {
          isAprovados[index] = this.verificarAprovacao(obj);
        })
        return isAprovados;
    }

}  
//Adicinando aluno
curso.addAluno(new AlunoConst("Johnny Wesley", 0, [10,10,10]))
//Verificando se um aluno foi aprovado
console.log(curso.verificarAprovacao(curso.listaEstudantes[0])); 
//Devolvendo um array booleano de alunos que foram aprovados ou não
console.log(curso.alunosAprovados());


