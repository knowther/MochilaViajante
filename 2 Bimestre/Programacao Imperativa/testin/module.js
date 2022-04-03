function aluno(nome, qntFaltas, notas){
    this.nome = nome;
    this.qntFaltas = qntFaltas;
    this.notas = notas;
    this.calcularMedia = function(){
        let qntNotas = this.notas.length;
        let totalNotas = this.aluno.notas.reduce((firstV, currV) => {
            return firstV = firstV + currV;
        })
         return totalNotas / qntNotas;
        }
}

module.exports = aluno;