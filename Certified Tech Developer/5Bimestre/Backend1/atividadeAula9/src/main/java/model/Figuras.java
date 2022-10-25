package model;

import factory.QuadradoFactory;
import factory.TrianguloFactory;

import java.util.ArrayList;
import java.util.List;

public class Figuras {

    private static List<Figura> figuras = new ArrayList<>();

    public static Figura fazerFiguraTriangulo(String cor, Integer tamanho){
        Figura figura = TrianguloFactory.getFiguraTriangulo(cor, tamanho);
        figuras.add(figura);
        return figura;
    }

    public static Figura fazerFiguraQuadrado(String cor, Integer tamanho){
        Figura figura = QuadradoFactory.getFiguraQuadrado(cor, tamanho);
        figuras.add(figura);
        return figura;
    }

    public static List<Figura> getFiguras() {
        return figuras;
    }

    public void setFiguras(List<Figura> figuras) {
        this.figuras = figuras;
    }
}
