import Service.IFacadeFactory;
import Service.impl.FacadeFigura;
import Service.impl.QuadradoAPI;
import model.Figura;
import model.Figuras;

public class Main {
    public static void main(String[] args) {
        FacadeFigura facadeFigura = new FacadeFigura();

        for (int i = 0; i < 1000000; i++) {
            facadeFigura.returnFigura("Triangulo", "Azul", 200);
            facadeFigura.returnFigura("Quadrado", "Azul", 300);
            facadeFigura.returnFigura("Quadrado", "Rosa", 300);
        }

        System.out.println(Figura.contador);
        System.out.println(Figuras.getFiguras().size());
    }
}
