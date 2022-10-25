import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.List;

public class ListaMaximo {
    private static final Logger logger = Logger.getLogger(ListaMaximo.class);
    List<Integer> inteiros = new ArrayList<>();

    public ListaMaximo(List<Integer> inteiros) {
        this.inteiros = inteiros;
        if(this.inteiros.size()> 5){
            logger.info("O comprimento da lista é maior que 5.");
        }else if(inteiros.size() > 10){
            logger.info("O comprimento da lista é maior que 10.");
        }
        calcularMaximo();
        if(inteiros.size() == 0){
            logger.error("A lista é igual a ZERO.");
        }
    }


    public void calcularMaximo(){

        int valorMaximo= 0;
        for (int i = 0; i < inteiros.size(); i++) {
           if(valorMaximo < inteiros.get(i)){
                valorMaximo = inteiros.get(i);
           }
        }
        logger.info("O maior número da lista é " + valorMaximo);
    }



}
