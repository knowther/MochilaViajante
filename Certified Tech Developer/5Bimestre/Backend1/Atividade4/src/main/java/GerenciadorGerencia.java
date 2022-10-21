public class GerenciadorGerencia extends Gerenciador{

    @Override
    public void verificar(Mail email) {
        if(email.getDestino().equalsIgnoreCase("gerencia@colmeia.com") || email.getAssunto().equalsIgnoreCase("Gerencia")){
            System.out.println("Enviado ao departamento gerencial");
        }else{
            if(this.getGerenciadorSeguinte() != null){
                this.getGerenciadorSeguinte().verificar(email);
            }
        };
    }
}
