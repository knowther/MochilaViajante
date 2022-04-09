
function microondasMenu(prato, tempo)
{
    let tempoPadrao;
    if(prato == 1){
        tempoPadrao = 10;
        if(tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3){
            console.log("O prato queimou.");
        }else if(tempo >= tempoPadrao * 3){
            console.log("Kabummm!!!");
        }
        else if(tempo < tempoPadrao){
            console.log("Tempo insuficiente para fazer o prato");
        }else{
            console.log("Prato pronto, bom apetite!!!");
        }
    }else if(prato == 2 || prato == 5){
        tempoPadrao = 8;
        if(tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3){
            console.log("O prato queimou.");
        }else if(tempo >= tempoPadrao * 3){
            console.log("Kabummm!!!");
        }
        else if(tempo < tempoPadrao){
            console.log("Tempo insuficiente para fazer o prato");
        }else{
            console.log("Prato pronto, bom apetite!!!");
        }
    }else if(prato == 3){
        tempoPadrao = 15;
        if(tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3){
            console.log("O prato queimou.");
        }else if(tempo >= tempoPadrao * 3){
            console.log("Kabummm!!!");
        }
        else if(tempo < tempoPadrao){
            console.log("Tempo insuficiente para fazer o prato");
        }else{
            console.log("Prato pronto, bom apetite!!!");
        }
    }else if(prato == 4){
        tempoPadrao = 12;
        if(tempo >= tempoPadrao * 2 && tempo < tempoPadrao * 3){
            console.log("O prato queimou.");
        }else if(tempo >= tempoPadrao * 3){
            console.log("Kabummm!!!");
        }
        else if(tempo < tempoPadrao){
            console.log("Tempo insuficiente para fazer o prato");
        }else{
            console.log("Prato pronto, bom apetite!!!");
        }
    }else{
        console.log("Prato inexistente.")
    }
}

microondasMenu(4, 35);