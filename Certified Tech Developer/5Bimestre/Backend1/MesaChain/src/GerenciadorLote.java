public class GerenciadorLote extends Gerenciador{



    @Override
    public void verificar(Produto produto) {
        if(produto.getLote() >= 1000 && produto.getLote()<= 2000){
            System.out.println("Produto atendeu aos requisitos de LOTE");
            produto.setCriteriosAtendidos(produto.getCriteriosAtendidos()+ 1);
            this.getGerenciadorSeguinte().verificar(produto);
        }else{
            System.out.println("Produto não atendeu aos requisitos de LOTE");
            this.getGerenciadorSeguinte().verificar(produto);
        }
    }
}
