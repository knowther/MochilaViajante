for(i = 1; i <=10; i++){
    
    for(y = 1; y <= 10; y++){
       // console.log(`${i} * ${y} = ${i*y}`)
    }


    

}

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
let peliculas2 = ["ben 10", "the flash", "kimetsu no yaiba", "bleach", "rakudai kishi no calvary"]

for(i = 0; i < peliculas.length; i++){
    //console.log(peliculas[i].toUpperCase())
}

function passagemDeElementos(array1 =[], array2 = []){
    for(i = 0; i< array1.length; i++){
       console.log(array1.push());
    }
    return array1;
}

console.log(passagemDeElementos(peliculas, peliculas2))