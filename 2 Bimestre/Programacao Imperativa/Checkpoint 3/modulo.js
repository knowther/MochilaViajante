function aluno(nome, qntFaltas, notas){
    this.nome = nome;
    this.qntFaltas = qntFaltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let qntNotas = this.notas.length;
        let totalNotas = this.notas.reduce((firstV, currV) => {
            return firstV = firstV + currV;
        })
         return totalNotas / qntNotas;
        }
    this.faltou = function(){
        let newFalta = this.aluno.qntFaltas = this.aluno.qntFaltas + 1;
         return `Falta adicionada ao aluno, anteriormente tinha ${this.aluno.qntFaltas - 1} e atualmente tem ${newFalta}`;
     }
}

module.exports = aluno;