function loopDePares(num){
    for(let i =0; i < 100; i++){
        if((i + 2) % 2 === 0){
            console.log(`O número ${i + 2} é par`)
        }else{
            console.log(i);
        }
    }
}

function loopDeImpares(num, palavra){
    for(let i =0; i < 100; i++){
        if((i + 2) % 2 === 1){
            console.log(palavra)
        }else{
            console.log(i);
        }
    }
}

loopDeImpares(1, 'impar')


function soma(num){
    let soma = 0;
    for(i = 1; i <= num; i++){
        soma = soma + i;
    }
    console.log(soma)
}

soma(8)


function newArray(num){
    let array = [];
    for(let i = 1; i <= num; i++){
        array.push(i)
    }
    return array
}

console.log(newArray(32))


function split(string){
    let array = [];
    for(let i = 0; i < string.length; i++){
        array.push(string[i])
    }
    return array;
}

console.log(split("paralelepípedo"))

let arrayNum = [1, 0, 6, 0, 7, 8, 0]

function moverZeros(array){
    
    let arrayCom0 = array.filter(num => {
      return num === 0
    })
    let arraySem0 = array.filter(num =>{
       return num !== 0
    })
    let finalArray = [...arraySem0, ...arrayCom0]
    return finalArray;
}

console.log(moverZeros(arrayNum));  


function arrayHandler(array1, array2){
     for(let i = 0; i < array1.length; i++){
         console.log(`Eu sou ${array1[i]} e eu sou ${array2[i]}`)
     }
}

arrayHandler([1,2,3], ["o", "l", "a"])


function arrayObjects(num){
    let arrayObj = []
    for(i = 1; i <= num; i++){
        arrayObj.push(
            {valor: i}
            )
    }
    return arrayObj
}

console.log(arrayObjects(8));


function arrayObjectsTwo(num, valueName){
    let arrayObj = []
    for(i = 1; i <= num; i++){
        arrayObj.push(
          {[valueName] : i}
            )
    }
    return arrayObj
}

console.log(arrayObjectsTwo(8, "numero"))

