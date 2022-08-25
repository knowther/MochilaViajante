public abstract class Funcionario {

    public Funcionario(String nome, Double salario){
        this.nome = nome;
        this.salario = salario;
    }
    private String nome;
    private Double salario;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Double getSalario() {
        return salario;
    }

    public void setSalario(Double salario) {
        this.salario = salario;
    }

    public void adicionarAumento(Double valor){
        this.salario = salario + valor;
    }

    public void ganhoAnual(){
        System.out.println("O ganho anual é: " + salario * 13);
    }

    public abstract void exibeDados(String nome, Double salario);
}
