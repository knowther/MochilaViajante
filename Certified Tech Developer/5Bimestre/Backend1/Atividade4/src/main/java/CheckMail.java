public class CheckMail {
    Gerenciador gerencia;

    public CheckMail(){
        this.gerencia = new GerenciadorGerencia();
        Gerenciador comercial = new GerenciadorComercial();
        Gerenciador tecnico = new GerenciadorTecnico();
        Gerenciador spam = new GerenciadorSpam();

        this.gerencia.setGerenciadorSeguinte(comercial);
        comercial.setGerenciadorSeguinte(tecnico);
        tecnico.setGerenciadorSeguinte(spam);
    }

    public void verificar(Mail email){
        this.gerencia.verificar(email);
    }
}
