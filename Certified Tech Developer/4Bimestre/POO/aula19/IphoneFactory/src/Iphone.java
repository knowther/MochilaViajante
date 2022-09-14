public class Iphone {
    private String nome;
    private int numVendas;
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    public void venda(){
        System.out.println(this.nome + " vendido com sucesso!");
    }
}
