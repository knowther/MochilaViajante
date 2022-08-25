public class Cachorro extends Animal {

    public Cachorro(String nome, Short idade) {
        super(nome, idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("Au au!");
    }


    @Override
    public void locomover(String nome) {
        System.out.println(nome + " está andando.");
    }
}
