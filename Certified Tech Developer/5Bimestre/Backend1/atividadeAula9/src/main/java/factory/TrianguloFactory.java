package factory;

import model.Figura;

import java.util.HashMap;
import java.util.Objects;

public class TrianguloFactory {

    private static final HashMap<String, Figura> TRIANGULOS = new HashMap<>();


    public static Figura getFiguraTriangulo(String cor, Integer altura){
        Figura figura = TRIANGULOS.get(cor);

        if(Objects.isNull(figura)){
            figura = new Figura(cor, altura);
            TRIANGULOS.put(cor, figura);
//            System.out.println("Criando Figura Triângulo da cor: " + figura.getCor());
        }
//        System.out.println("Recuperando objeto Figura tipo triângulo." );
        return figura;
    }
}
