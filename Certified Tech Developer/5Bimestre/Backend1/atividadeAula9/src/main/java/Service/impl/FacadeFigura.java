package Service.impl;

import Service.IFacadeFactory;
import model.Figura;

public class FacadeFigura implements IFacadeFactory {
    @Override
    public Figura returnFigura(String tipo, String cor, Integer tamanho) {
        if(tipo.equalsIgnoreCase("Triangulo")){
         return TrianguloAPI.getTriangulo(cor, tamanho);
        }else if(tipo.equalsIgnoreCase("Quadrado")){
           return QuadradoAPI.getQuadrado(cor, tamanho);
        }
        return null;
    }
}
