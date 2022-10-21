public class ServicoDownloadProxy implements Baixar{

    @Override
    public void baixar(Usuario usuario) {
        if(usuario.getIpoUsuario().equalsIgnoreCase("Premium")){
            new ServicoDownload().baixar(usuario);
        }else if(usuario.getIpoUsuario().equalsIgnoreCase("Free")){
            System.out.println("Usuário não pode baixar a música, pois é gratuito");
        }
    }
}
