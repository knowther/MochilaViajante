import com.dh.digitalhouse.model.Empresa;
import com.dh.digitalhouse.model.Funcionario;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Empresa empresa = new Empresa("69.32.0001/32", "Knup Ltda");
        Funcionario func1 = new Funcionario("Maria", "Melo", "243.543.532-54", 2394D);
        Funcionario func2 = new Funcionario("Lira", "Junior", "654.364.342-05", 2145D);
        Funcionario func3 = new Funcionario("Edvaldo", "Gomes", "943.564.671-00", 4528D);
        Funcionario func4 = new Funcionario("Pedro", "João", "644.431.865-02", 2045D);
        Funcionario func5 = new Funcionario("Karla", "Gio", "146.763.484-67", 23250D);

        List<Funcionario> funcionarios = new ArrayList<>();
        funcionarios.add(func1);
        funcionarios.add(func2);
        funcionarios.add(func3);
        funcionarios.add(func4);
        funcionarios.add(func5);

        try {
            FileWriter arq = new FileWriter("funcionario.txt");
            arq.write(empresa.getRazaoSocial()+";"+ empresa.getCNPJ()+"\n");
            funcionarios.stream().forEach(funcionario -> {
                try {
                    arq.write(funcionario.getNome()+";"+funcionario.getSobrenome()+";"+funcionario.getDocIdentificacao()+";"+ funcionario.getSalario()+"\n");

                } catch (IOException e) {
                    throw new RuntimeException(e);
                }
            });
            arq.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        try {
            File arq2 = new File("funcionario.txt");
            Scanner reader = new Scanner(arq2);
            int i = 0;
            while (reader.hasNextLine()){

                System.out.println(reader.nextLine());
            }
        } catch (FileNotFoundException e) {
            throw new RuntimeException(e);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
//

//        desafio 1
//        try{
//            FileOutputStream arquivo = new FileOutputStream("funcionarios.txt");
//            ObjectOutputStream writer = new ObjectOutputStream(arquivo);
//            writer.writeObject(empresa);
//            writer.writeObject(funcionarios);
//
//        } catch (Exception e)  {
//            e.printStackTrace();
//        }
//
//        List<Object> funcionariosFind = new ArrayList<>();
//        try{
//            FileInputStream arquivo2 = new FileInputStream("funcionarios.txt");
//            ObjectInputStream leitor = new ObjectInputStream(arquivo2);
//            funcionariosFind.add(leitor.readObject());
//            funcionariosFind.add(leitor.readObject());
//        } catch (FileNotFoundException e) {
//            throw new RuntimeException(e);
//        } catch (IOException e) {
//            throw new RuntimeException(e);
//        } catch (ClassNotFoundException e) {
//            throw new RuntimeException(e);
//        }
//
//        System.out.println(funcionariosFind);

    }
}