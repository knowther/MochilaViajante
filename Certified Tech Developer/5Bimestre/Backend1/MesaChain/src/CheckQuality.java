public class CheckQuality {
    Gerenciador inicial;
    public CheckQuality(){
        this.inicial = new GerenciadorLote();
        Gerenciador gerenciadorPeso = new GerenciadorPeso();
        Gerenciador gerenciadorEmbalagem = new GerenciadorEmbalagem();
        this.inicial.setGerenciadorSeguinte(gerenciadorPeso);
        gerenciadorPeso.setGerenciadorSeguinte(gerenciadorEmbalagem);

    }
    public void verificarProduto(Produto produto){
        this.inicial.verificar(produto);
    }
}
