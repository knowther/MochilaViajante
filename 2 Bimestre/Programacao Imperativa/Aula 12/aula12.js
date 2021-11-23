
const alicia = [30, 30, 30];
const bob = [31,30, 30];

console.log(findWinner(alicia, bob));

function findWinner(a=[], b=[]){
    let aliciaPoints =0;
    let bobPoints =0;
    for(let i =0; i < a.length; i++){
        a[i] > b[i] ? aliciaPoints++ : a[i] < b[i] ? bobPoints++ : a[i] === b[i];
    }
    return aliciaPoints > bobPoints ? `Alicia ganhou com ${aliciaPoints} pontos`: aliciaPoints == bobPoints ? "Empate" : `Bob ganhou com ${bobPoints} pontos` ;
}