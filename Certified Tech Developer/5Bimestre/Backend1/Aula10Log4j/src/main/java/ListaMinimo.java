import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.DoubleSummaryStatistics;
import java.util.List;
import java.util.stream.Collectors;

public class ListaMinimo {
    private static final Logger logger = Logger.getLogger(ListaMaximo.class);
    List<Integer> inteiros = new ArrayList<>();

    public ListaMinimo(List<Integer> inteiros) {
        this.inteiros = inteiros;
        if(this.inteiros.size()> 5){
            logger.info("O comprimento da lista é maior que 5.");
        }else if(inteiros.size() > 10){
            logger.info("O comprimento da lista é maior que 10.");
        }
        calcularMinimo();
        if(inteiros.size() == 0){
            logger.error("A lista é igual a ZERO.");
        }
    }


    public void calcularMinimo(){

        int valorMinimo= inteiros.get(0);
        for (int i = 0; i < inteiros.size(); i++) {
            if(inteiros.get(i) < valorMinimo){
                valorMinimo = inteiros.get(i);
            }
        }
        logger.info("O menor número da lista é " + valorMinimo);
    }
}
