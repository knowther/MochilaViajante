public abstract class Animal {

    private String nome;
    private Short idade;

    public Animal(String nome, Short idade) {
        this.nome = nome;
        this.idade = idade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Short getIdade() {
        return idade;
    }

    public void setIdade(Short idade) {
        this.idade = idade;
    }

    public abstract void emitirSom();

    public abstract void locomover(String nome);
}
