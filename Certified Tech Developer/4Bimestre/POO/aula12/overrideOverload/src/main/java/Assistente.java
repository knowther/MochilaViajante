public abstract class Assistente extends Funcionario{

    private String numMatricula;
    private double bonusSalarial;
    public Assistente(String nome, Double salario, String numMatricula) {
        super(nome, salario);
    }

    public String getNumMatricula() {
        return numMatricula;
    }

    public void setNumMatricula(String numMatricula) {
        this.numMatricula = numMatricula;
    }

    @Override
    public void exibeDados(String nome, Double salario) {
        System.out.println("Nome:" + nome);
        System.out.println("Salario:" + salario);
        System.out.println("Numero da matrícula: " + this.numMatricula);
    }

    public abstract void exibeDados(String nome, Double salario, String numMatricula, Double bonusSalarial);
}
