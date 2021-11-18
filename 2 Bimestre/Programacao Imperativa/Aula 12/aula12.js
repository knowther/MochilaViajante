
const alicia = [30, 30, 30];
const bob = [30,30, 48];

console.log(findWinner(alicia, bob));

function findWinner(a=[], b=[]){
    let aliciaPoints =0;
    let bobPoints =0;
    for(let i =0; i < a.length; i++){
        if(a[i] > b[i]){
            aliciaPoints++;
        }
        else if(a[i] < b[i]){
            bobPoints++;
        }else{
        }
    }
    return aliciaPoints > bobPoints ? `Alicia ganhou com ${aliciaPoints} pontos`: `Bob ganhou com ${bobPoints} pontos`;
}