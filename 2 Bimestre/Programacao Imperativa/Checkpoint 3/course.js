const AlunoObj = require("./estudante")

let curso = {
    nomeCurso : "Node.js",
    notaAprovacao : 7,
    faltasMax: 6,
    listaEstudantes: [],
    addAluno : function(Aluno){
        this.listaEstudantes.push(Aluno)
    },
    verificarAprovacao: function(Aluno){ 
      return Aluno.aluno.qntFaltas < this.faltasMax && Aluno.calcularMedia() >= this.notaAprovacao ? true : Aluno.aluno.qntFaltas === this.faltasMax ? Aluno.calcularMedia().toFixed(1) >= parseFloat(this.notaAprovacao * 1.10).toFixed(1) : false; 
    },
    alunosAprovados : function(){
        let isAprovados = []
        this.listaEstudantes.forEach((obj, index) => {
          isAprovados[index] = this.verificarAprovacao(obj);
        })
        return isAprovados;
    }

}  
curso.addAluno(AlunoObj);
curso.addAluno(AlunoObj);
curso.addAluno(AlunoObj);
curso.addAluno(AlunoObj);

// console.log(AlunoObj.calcularMedia().toFixed(1));
console.log(curso.alunosAprovados());
// console.log(parseFloat((curso.notaAprovacao * 1.10).toFixed(2)));