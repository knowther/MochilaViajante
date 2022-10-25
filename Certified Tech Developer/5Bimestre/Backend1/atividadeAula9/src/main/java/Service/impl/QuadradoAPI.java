package Service.impl;

import model.Figura;
import model.Figuras;

import java.util.List;

public class QuadradoAPI {
    public static Figura getQuadrado(String cor, Integer tamanho){
       Figura quadrado =  Figuras.fazerFiguraQuadrado(cor, tamanho);
       return quadrado;
    }
}
