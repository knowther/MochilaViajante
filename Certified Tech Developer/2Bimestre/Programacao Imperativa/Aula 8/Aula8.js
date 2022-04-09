

function podeSubir(altura, isAcompanhada){

    let isPodeSubir = false;
    let texto = "";

    if(altura >= 1.40 && altura <= 2.0){
        isPodeSubir = true;
        texto = "Acesso autorizado"
    }else if(altura <= 1.40 && altura >= 1.20 && isAcompanhada == true){
        isPodeSubir = true;
        texto = "Acesso autorizado com acompanhante!"
    }else{
        texto = "Acesso Negado"
    }
    return texto
}

    console.log(podeSubir(1.27, true))
