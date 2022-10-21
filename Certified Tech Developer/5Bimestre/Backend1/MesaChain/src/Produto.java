public class Produto {
    private String nome;
    private int lote;
    private int peso;
    private String embalagem;

    private int criteriosAtendidos;

    public Produto(String nome, int lote, int peso, String embalagem) {
        this.nome = nome;
        this.lote = lote;
        this.peso = peso;
        this.embalagem = embalagem;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getLote() {
        return lote;
    }

    public void setLote(int lote) {
        this.lote = lote;
    }

    public int getPeso() {
        return peso;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public String getEmbalagem() {
        return embalagem;
    }

    public void setEmbalagem(String embalagem) {
        this.embalagem = embalagem;
    }

    public int getCriteriosAtendidos() {
        return criteriosAtendidos;
    }

    public void setCriteriosAtendidos(int criteriosAtendidos) {
        this.criteriosAtendidos = criteriosAtendidos;
    }
}
