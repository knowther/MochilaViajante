public class Mail {
    private String destino;
    private String assunto;
    private String remetente;

    public Mail(String destino, String assunto, String remetente) {
        this.destino = destino;
        this.assunto = assunto;
        this.remetente = remetente;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public String getAssunto() {
        return assunto;
    }

    public void setAssunto(String assunto) {
        this.assunto = assunto;
    }

    public String getRemetente() {
        return remetente;
    }

    public void setRemetente(String remetente) {
        this.remetente = remetente;
    }
}
