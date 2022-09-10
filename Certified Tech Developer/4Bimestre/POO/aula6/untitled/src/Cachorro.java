import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class Cachorro {
    private String primeiroNome;
    private String raca;
    private int anoAproximado;
    private float peso;
    private boolean temChip;
    private boolean estaFerido;

    public Cachorro(String primeiroNome, String raca, int anoAproximado, float peso, boolean temChip, boolean estaFerido) {
        this.primeiroNome = primeiroNome;
        this.raca = raca;
        this.anoAproximado = anoAproximado;
        this.peso = peso;
        this.temChip = temChip;
        this.estaFerido = estaFerido;
    }

    public String getPrimeiroNome() {
        return primeiroNome;
    }

    public void setPrimeiroNome(String primeiroNome) {
        this.primeiroNome = primeiroNome;
    }

    public String getRaca() {
        return raca;
    }

    public void setRaca(String raca) {
        this.raca = raca;
    }

    public int getAnoAproximado() {
        return anoAproximado;
    }

    public void setAnoAproximado(int anoAproximado) {
        this.anoAproximado = anoAproximado;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    public boolean isTemChip() {
        return temChip;
    }

    public void setTemChip(boolean temChip) {
        this.temChip = temChip;
    }

    public boolean isEstaFerido() {
        return estaFerido;
    }

    public void setEstaFerido(boolean estaFerido) {
        this.estaFerido = estaFerido;
    }

    public void idadeCachorro(){
       Date dataAtual = new Date();
//        Calendar calendar = Calendar.getInstance();
//        calendar.setTime(dataAtual);
//       int anoAtual =  calendar.get(Calendar.YEAR);
        SimpleDateFormat getYearFormat = new SimpleDateFormat("yyyy");
        String currentYear = getYearFormat.format(dataAtual);
        int anoAtual = Integer.valueOf(currentYear);
        int idade = anoAtual - this.anoAproximado;
       System.out.println("O cachorro tem aproximadamente " + idade + " anos.");
    }
    public void possuiChip(){
        if(this.temChip){
            System.out.println("O cachorro possui chip.");
        }
    }

    public void aptoAdocao(){
        if(!this.isEstaFerido() && this.peso > 5){
            System.out.println("O cachorro está apto para adoção!!");
        }else{

        }
    }


}
