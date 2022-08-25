public class AssistenteTecnico extends Assistente{



    public AssistenteTecnico(String nome, Double salario, String numMatricula, Double bonusSalarial) {
        super(nome, salario,numMatricula);
        salario += bonusSalarial;
    }


    @Override
    public void exibeDados(String nome, Double salario, String numMatricula, Double bonusSalarial){
        System.out.println("Nome:" + nome);
        System.out.println("Salario:" + salario);
        System.out.println("Numero da matrícula: " + numMatricula);
        System.out.println("Bonus salarial: " + bonusSalarial);
    }

}
