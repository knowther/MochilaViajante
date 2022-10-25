import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class ListaInteiros {
    private static final Logger logger = Logger.getLogger(ListaInteiros.class);
    List<Integer> inteiros = new ArrayList<>();

    public ListaInteiros(List<Integer> inteiros) {
        this.inteiros = inteiros;
        if(this.inteiros.size()> 5){
            logger.info("O comprimento da lista é maior que 5.");
        }else if(inteiros.size() > 10){
            logger.info("O comprimento da lista é maior que 10.");
        }
        calcularMedia();
        if(inteiros.size() == 0){
            logger.error("A lista é igual a ZERO.");
        }
    }


    public void calcularMedia(){

        int soma = 0;
        for (int i = 0; i < inteiros.size(); i++) {
            soma = soma + inteiros.get(i);
        }
        logger.info("A média dos números é " + soma / inteiros.size());
    }



}
