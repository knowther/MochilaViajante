import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PessoaTest {
    static Pessoa pessoa;

    @BeforeAll
    static void criarPessoa(){
        pessoa = new Pessoa();
    }

    @Test
    void idadeMenor18(){
      assertFalse(pessoa.verificarMaioridade(17), "Idade menor que 18");
    }

    @Test
    void idadeMaior18(){
        assertTrue(pessoa.verificarMaioridade(19), "Idade maior que 18");
    }

    @Test
    void numerosIguais(){
        assertTrue(pessoa.validaIgualdadeNumeros(2,2));
    }

    @Test
    void numerosDiferentes(){
        assertFalse(pessoa.validaIgualdadeNumeros(2,1));
    }

    @Test
    void retorna20(){
        assertEquals(20, pessoa.retorna20());
    }

}