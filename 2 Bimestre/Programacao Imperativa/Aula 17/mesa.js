let numeros = [1, 2, 3, 4];

function divSum(array){

    let total = array.reduce((acumulador, item) => {
        // return acumulador + item
       return acumulador + item
    })
   let numArray = array.map(numero => {
        return numero / total
     })

     return numArray;
}



let arrayPalavras = ['Caneta', 'Casa', 'Manjericão'];

    function test (array, num){
       let array1 = array.filter(string => {
            return string.length > num;
         })

         return array1;
    }


   
    console.log(test(arrayPalavras, 5))
// console.log(divSum(numeros))