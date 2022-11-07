package com.dh.mesa;

import com.dh.mesa.model.Contato;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        List<Contato> contatos = new ArrayList<>();

        Contato contato1 = new Contato("Mateus Kaique Lima", "Kaiquinhotop2010@hotmail.com", "(24) 3563-3877");
        Contato contato2 = new Contato("Malu Mirella Adriana Caldeira", "ultimosolteirao@hotmail.com", "(69) 98150-0210");
        Contato contato3 = new Contato("Francisca Francisca Monteiro", "francisca.francisca.monteiro@arteche.com.br", "(81) 2606-4483");
        Contato contato4 = new Contato("Gael Iago Joaquim Farias", "gael-farias77@umbernardo.com.br", "(93) 2541-2063");
        Contato contato5 = new Contato("Raquel Alana Marlene Jesus", "raquel_jesus@capgemini.com", "(79) 2765-7249");

        contatos.add(contato1);
        contatos.add(contato2);
        contatos.add(contato3);
        contatos.add(contato4);
        contatos.add(contato5);

//        escrevendo arq
        try{
            FileOutputStream arquivo = new FileOutputStream("contatos.txt");
            ObjectOutputStream writer = new ObjectOutputStream(arquivo);
            writer.writeObject(contatos);

        } catch (Exception e)  {
           e.printStackTrace();
        }

//        lendo arq
        List<Contato> contatosFind = new ArrayList<>();
        try{
            FileInputStream arquivo2 = new FileInputStream("contatos.txt");
            ObjectInputStream leitor = new ObjectInputStream(arquivo2);
            contatosFind = (List<Contato>) leitor.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        contatos.stream().forEach(contato -> System.out.println(contato.getNome() + " - " + contato.getEmail() + " - " + contato.getTelefone()));

    }
}
