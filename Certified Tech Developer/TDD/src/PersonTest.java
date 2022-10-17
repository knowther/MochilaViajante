import org.junit.Assert;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;


class PersonTest {
    Person pessoa1 = new Person("Adan", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa2 = new Person("Paul", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa3 = new Person("Biu", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa4 = new Person("Marc", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa5 = new Person("Dac", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa6 = new Person("Johnny", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa7 = new Person("Marcos", "Wesley", "Teste@teste.com", new Date(2015, 03,29));
    Person pessoa8 = new Person("Ednaldo", "Wesley", "Teste@teste.com", new Date(2001, 03,29));
    Person pessoa9 = new Person("Pereira", "Wesley", "Teste@teste.com", new Date(2001, 03,29));
    Person pessoa10 = new Person("Charles", "Wesley", "Teste@teste.com", new Date(2015, 03,29));

    @Test
    public void nomeCompleto(){
        assertEquals(true, pessoa1.nomeCompleto().equals(pessoa1.getSobrenome()+ " "+ pessoa1.getNome()));
    }

    @Test
    public void eMaiorQue18(){
      assertEquals(true,  pessoa1.isToBeOfAge(pessoa1.getDataNascimento(), new Date(2021, 9, 21)));
    }

    @Test
    public void listasPessoas(){
        Validate.validacao(Arrays.asList(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6, pessoa7, pessoa8, pessoa9, pessoa10));
        assertTrue(Validate.getList().size() ==2);
    }

}