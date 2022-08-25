public class Main {
    public static void main(String[] args) {
        Cachorro cachorro = new Cachorro("Pluto", (short) 2);
        cachorro.emitirSom();
        cachorro.locomover(cachorro.getNome());
        Cavalo cavalo = new Cavalo("Jeremias", (short) 12);
        System.out.println("-----------------------------------");
        cavalo.emitirSom();
        cavalo.locomover(cavalo.getNome());
        System.out.println("-----------------------------------");
        Preguica preguica = new Preguica("Soneca", (short) 6);
        preguica.emitirSom();
        preguica.locomover(preguica.getNome());
    }
}
