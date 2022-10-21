public class ProcessaMail {
    static CheckMail check;
    public static void main(String[] args) {
        check = new CheckMail();
        Mail mail1 = new Mail("tecnica@digitalhouse.com", "Reclamacao", "mail");
        Mail email = new Mail("tecnico@colmeia.com", "Tecnico", "johnny.wesley@gmail.com");
        check.verificar(mail1);
        check.verificar(email);
    }
}
