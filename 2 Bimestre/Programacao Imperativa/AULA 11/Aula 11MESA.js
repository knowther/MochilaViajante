

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculas2 = ["ben 10", "the flash", "kimetsu no yaiba", "bleach", "rakudai kishi no calvary"]


function maisculas(filmes){
    console.log("----------------atv. 1-------------------");
    for(i = 0; i < peliculas.length; i++){
        filmes[i] = filmes[i].toUpperCase();
     
     }
     return filmes
}



function passagemDeElementos(array1 = [], array2 = []){
  console.log("--------------------atv. 2----------------");   
    for(i = 0; i< array2.length; i++){
     array1.push(array2.pop().toUpperCase())
    }
    return array1;
}

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


function compararAsiaEuropa(asiaScores = [], euroScores = []){
    compareAsiaEurope = [];
    console.log("---------------------atv. 3 -------------------------");
    for(i = 0; i < asiaScores.length; i++){
        compareAsiaEurope[i] = asiaScores[i] === euroScores[i];
    }

    return compareAsiaEurope;

}

const participanteA = [5, 8, 4, 9, 5];
const participanteB = [8, 7, 8, 6, 8];
const participanteC = [7, 5, 10, 8, 3];

function calcularMedia(participante){
    let sum = 0;
    let media;
    participante.forEach(n => {
        sum += n 
    })
    media = sum / participante.length
    return media;
}
function pontuacaoMaior(participante){
    let biggestScore = 0;
    participante.forEach(n =>{
        if (n > biggestScore){
            biggestScore = n;
        }

    });
    return biggestScore;
}
function competicao(participanteA, participanteB, participanteC){
    
    let participantes = [participanteA, participanteB, participanteC];
    let medias = [];
    let bigScore = [];
    let i = 0;
            participantes.forEach(participante =>{
           medias[i] = calcularMedia(participante);
           bigScore[i] = pontuacaoMaior(participante);
           i++;

            })
       if(medias[0] > medias[1] && medias[0] > medias[2]){
           console.log("O vencedor da modalidade de médias é o participante A");
       }else if(medias[1] > medias[0] && medias[1] > medias[2]){
           console.log("O vencedor da modalidade de médias é o participante B")
       }else if(medias[2] > medias[0] && medias[2] > medias[1]){
           console.log("O vencedor da modalidade de médias é o participante C")
       }
       if(bigScore[0] > bigScore[1] && bigScore[0] > bigScore[2]){
        console.log("O vencedor da modalidade de de maior pontuação única é o participante A");
    }else if(bigScore[1] > bigScore[0] && bigScore[1] > bigScore[2]){
        console.log("O vencedor da modalidade de maior pontuação única é o participante B")
    }else if(bigScore[2] > bigScore[0] && bigScore[2] > bigScore[1]){
        console.log("O vencedor da modalidade de maior pontuação única é o participante C")
    }
    }
competicao(participanteA, participanteB, participanteC);



//console.log(maisculas(peliculas));
//console.log(passagemDeElementos(peliculas, peliculas2));

//console.log(competicao(participanteA, participanteB, participanteC))