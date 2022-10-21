public class GerenciadorEmbalagem extends Gerenciador{



    @Override
    public void verificar(Produto produto) {
        if(produto.getEmbalagem().equalsIgnoreCase("saudável") || produto.getEmbalagem().equalsIgnoreCase("quase saudável")){
            System.out.println("Produto atendeu aos requisitos de EMBALAGEM");
            produto.setCriteriosAtendidos(produto.getCriteriosAtendidos()+ 1);

        }else{
            System.out.println("Produto não atendeu aos requisitos de EMBALAGEM");
        }
        if(produto.getCriteriosAtendidos() >=1){
            System.out.println("O produto: " + produto.getNome() + " atendeu a " + produto.getCriteriosAtendidos() + " requisitos e foi aprovado");
        }else{
            System.out.println("O produto: " + produto.getNome() + " não atendeu a nenhum requisito e não pôde ser aprovado" );
        }

    }
}
