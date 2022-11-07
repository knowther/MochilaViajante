package com.dh.documento;

import com.dh.documento.model.Cachorro;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Cachorro> cachorros = new ArrayList<>();
        Cachorro cao1 = new Cachorro("Bolinha", 10);
        Cachorro cao2 = new Cachorro("Bisteca", 5);
        Cachorro cao3 = new Cachorro("Captucha", 3);

        cachorros.add(cao1);
        cachorros.add(cao2);
        cachorros.add(cao3);

//        inicializando processo de salvar no arquivo
        FileOutputStream arquivo = null;
        try {
            arquivo = new FileOutputStream("cachorros.txt");
            ObjectOutputStream writer = new ObjectOutputStream(arquivo);
            writer.writeObject(cachorros);
        }catch (FileNotFoundException e){
            e.printStackTrace();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

//        recuperando
        List<Cachorro> listFind = new ArrayList<>();
        FileInputStream arquivo2;

        try{
            arquivo2 = new FileInputStream("cachorros.txt");
            ObjectInputStream leitor = new ObjectInputStream(arquivo2);

            listFind = (List<Cachorro>) leitor.readObject();
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }

        for(Cachorro cachorro : listFind){
            System.out.println(cachorro);
        }
    }


}
