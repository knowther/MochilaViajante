public class Jogador {

    private int numCamisa;
    private String sobrenome;
    private String posicao;

    public Jogador(int numCamisa, String sobrenome, String posicao){
        this.numCamisa = numCamisa;
        this.sobrenome = sobrenome;
        this.posicao = posicao;
    }

    public int getNumCamisa() {
        return numCamisa;
    }

    public void setNumCamisa(int numCamisa) {
        this.numCamisa = numCamisa;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public String getPosicao() {
        return posicao;
    }

    public void setPosicao(String posicao) {
        this.posicao = posicao;
    }

    @Override
    public String toString() {
        return "Jogador{" +
                "numCamisa=" + numCamisa +
                ", sobrenome='" + sobrenome + '\'' +
                '}';
    }
}
