public class ServicoDownload implements Baixar {
    @Override
    public void baixar(Usuario usuario) {
        System.out.println("Usuário "+ usuario.getId() + " está baixando musica.");
    }
}
