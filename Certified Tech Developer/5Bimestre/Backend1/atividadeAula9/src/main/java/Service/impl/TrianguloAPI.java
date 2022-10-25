package Service.impl;

import model.Figura;
import model.Figuras;

public class TrianguloAPI {

    public static Figura getTriangulo(String cor, Integer tamanho){
        Figura triangulo =  Figuras.fazerFiguraTriangulo(cor, tamanho);
        return triangulo;
    }
}
