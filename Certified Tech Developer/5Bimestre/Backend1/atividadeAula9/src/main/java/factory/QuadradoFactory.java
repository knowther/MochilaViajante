package factory;

import model.Figura;

import java.util.HashMap;
import java.util.Objects;

public class QuadradoFactory {

    private static final HashMap<Integer, Figura> QUADRADOS = new HashMap<>();


    public static Figura getFiguraQuadrado(String cor, Integer altura){
        Figura figura = QUADRADOS.get(altura);

        if(Objects.isNull(figura)){
            figura = new Figura(cor, altura);
            QUADRADOS.put(altura, figura);
//            System.out.println("Criando Figura Quadrado do tamanho: " + figura.getTamanho());
        }
//        System.out.println("Recuperando objeto Figura tipo quadrado" );
        return figura;
    }
}
