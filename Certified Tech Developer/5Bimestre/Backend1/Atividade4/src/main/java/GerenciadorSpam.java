public class GerenciadorSpam extends Gerenciador{

    @Override
    public void verificar(Mail email) {
        System.out.println("Email marcado como spam");
    }
}
