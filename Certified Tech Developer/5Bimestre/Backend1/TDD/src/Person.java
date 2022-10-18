import java.time.LocalDate;
import java.util.*;

public class Person {
    private String nome;
    private String sobrenome;
    private String email;

    private Date dataNascimento;



    public Person(String nome, String sobrenome, String email, Date dataNascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.dataNascimento = dataNascimento;

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(Date dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String nomeCompleto(){
        return sobrenome + " " + nome;
    }


    public boolean isToBeOfAge(Date born, Date atualDate){
        Calendar a = getCalendar(born);
        Calendar b = getCalendar(atualDate);
        int diff = b.get(Calendar.YEAR) - a.get(Calendar.YEAR);

        return diff > 18;
    }

    public static Calendar getCalendar(Date date){
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        return cal;
    }
}
