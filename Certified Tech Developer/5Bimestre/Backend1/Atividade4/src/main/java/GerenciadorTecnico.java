public class GerenciadorTecnico extends Gerenciador{

    @Override
    public void verificar(Mail email) {
        if(email.getDestino().equalsIgnoreCase("tecnico@colmeia.com") || email.getAssunto().equalsIgnoreCase("Tecnico")){
            System.out.println("Enviado para o departamento tecnico");
        } else if (this.getGerenciadorSeguinte() != null) {
            this.getGerenciadorSeguinte().verificar(email);
        }
    }
}
