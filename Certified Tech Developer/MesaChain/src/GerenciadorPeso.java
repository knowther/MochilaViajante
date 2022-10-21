public class GerenciadorPeso extends Gerenciador{



    @Override
    public void verificar(Produto produto) {
        if(produto.getPeso() >= 1000 && produto.getPeso()<= 2000){
            System.out.println("Produto atendeu aos requisitos de PESO");
            produto.setCriteriosAtendidos(produto.getCriteriosAtendidos()+ 1);
            this.getGerenciadorSeguinte().verificar(produto);
        }else{
            System.out.println("Produto não atendeu aos requisitos de PESO");
            this.getGerenciadorSeguinte().verificar(produto);
        }
    }
}
