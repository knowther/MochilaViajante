
const alicia = [30, 30, 30];
const bob = [30,30, 48];

findWinner(alicia, bob);

function findWinner(a=[], b=[]){
    let aliciaPoints =0;
    let bobPoints =0;
    let isAliciaWin;
    for(let i =0; i < a.length; i++){
        if(a[i] > b[i]){
            aliciaPoints = aliciaPoints + 1;
        }
        else if(a[i] < b[i]){
            bobPoints = bobPoints + 1;
        }else{
        }
    }
    if(aliciaPoints > bobPoints){
        console.log(`Alice ganhou com ${aliciaPoints} pontos`);
    }else{
        console.log(`Bob ganhou com ${bobPoints} pontos`);
    }
}