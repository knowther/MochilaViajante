function acaoCarro(callback){
    return callback()
}

function andar(){
    return 'o carro está andando';
}

function parar(){
    return 'o carro parou';
}


console.log(acaoCarro(parar))