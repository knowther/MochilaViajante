const listaPessoas = require('./pessoas') 

function regularNote(personArray){

    personArray.filter(obj,  => {
       return obj.indexOf.opiniao === 1
    })

}

console.log(regularNote(listaPessoas));





