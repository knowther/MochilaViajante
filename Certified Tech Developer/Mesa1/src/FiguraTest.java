import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class FiguraTest {
    @Test
    public void testarPerimetro(){
        Figura circulo = new Circulo(2);
        assertEquals(12.56, circulo.calcularPerimetro());
        Figura quadrado = new Quadrado(5);
        assertEquals(20, quadrado.calcularPerimetro());
    }
}