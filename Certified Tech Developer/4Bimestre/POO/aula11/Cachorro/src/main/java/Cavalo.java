public class Cavalo extends Animal{


    public Cavalo(String nome, Short idade) {
        super(nome, idade);
    }

    @Override
    public void emitirSom() {
        System.out.println("Nhóóóó");
    }

    @Override
    public void locomover(String nome) {
        System.out.println(nome + " está cavalgando (ele é o cavalo).");
    }
}
