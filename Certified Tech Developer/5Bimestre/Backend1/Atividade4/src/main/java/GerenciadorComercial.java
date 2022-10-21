public class GerenciadorComercial extends Gerenciador{

    @Override
    public void verificar(Mail email) {
        if(email.getDestino().equalsIgnoreCase("comercial@colmeia.com") || email.getAssunto().equalsIgnoreCase("Comercial")){
            System.out.println("Enviado para o departamento comercial");
        } else if (this.getGerenciadorSeguinte() != null) {
            this.getGerenciadorSeguinte().verificar(email);
        }
    }
}
