public abstract class Gerenciador {

    private Gerenciador gerenciadorSeguinte;

    public Gerenciador getGerenciadorSeguinte() {
        return gerenciadorSeguinte;
    }

    public void setGerenciadorSeguinte(Gerenciador gerenciadorSeguinte) {
        this.gerenciadorSeguinte = gerenciadorSeguinte;
    }

    public abstract void verificar(Mail email);
}
