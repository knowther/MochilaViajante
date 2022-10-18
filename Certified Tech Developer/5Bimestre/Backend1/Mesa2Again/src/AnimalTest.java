import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class AnimalTest {

    @Test
    void estaAndandoeMiando(){
        Animal gato = new Gato("Siamês");
        assertTrue(gato.andar().contains("Andando"));
        assertEquals("Miau", gato.falar());
    }

    @Test
    void estaAndandoeLatindo(){
        Animal cachoro = new Cachorro("Bulldog");
        assertTrue(cachoro.andar().contains("Andando"));
        assertEquals("Au Au!", cachoro.falar());
    }



}