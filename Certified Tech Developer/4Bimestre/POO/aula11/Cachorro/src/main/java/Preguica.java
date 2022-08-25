public class Preguica extends Animal{


    public Preguica(String nome, Short idade) {
        super(nome, idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("Ainnnn");
    }

    @Override
    public void locomover(String nome) {
        System.out.println(nome + " está subindo nas árvores.");
    }
}
