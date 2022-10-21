import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ProdutoTest {
    static CheckQuality checar;
    @BeforeAll
    static void inicializadores(){

        checar = new CheckQuality();
    }
    @Test
    void produto1(){
        Produto p1 = new Produto("Bola", 2001, 180, "muito danificada");
        this.checar.verificarProduto(p1);
        assertEquals(0, p1.getCriteriosAtendidos());
    }

    @Test
    void produto2(){
        Produto p2 = new Produto("Ursinho", 2000, 1800, "saudável");
        this.checar.verificarProduto(p2);
        assertEquals(3, p2.getCriteriosAtendidos());
    }

}