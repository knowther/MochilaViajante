public class AssistenteAdministrativo extends Assistente{

    private String turno;

    public AssistenteAdministrativo(String nome, Double salario, String numMatricula, String turno) {
        super(nome, salario, numMatricula);
        this.turno = turno;
        if (turno.equals("noite")) {
            salario  = salario * 1.2;
        }
    }

    public String getTurno() {
        return turno;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }

    public void hasAdicional(){
        if(turno.equals("Noite")){

        }
    }

    @Override
    public void exibeDados(String nome, Double salario, String numMatricula, Double bonusSalarial) {
        System.out.println("Nome:" + nome);
        System.out.println("Salario:" + salario);
        System.out.println("Numero da matrícula: " + numMatricula);
        System.out.println("Turno: " + this.turno);
        System.out.println("Bonus salarial: " + bonusSalarial);

    }
}
