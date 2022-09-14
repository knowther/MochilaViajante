public class Main {
    public static void main(String[] args) {
        Armazem armazem = new Armazem();
        armazem.addProduto(ProdutoFactory.getInstance().armazenar("FUTEBOL"));
        armazem.addProduto(ProdutoFactory.getInstance().armazenar("CAIXA10X10"));
        System.out.println(armazem.calcularEspacoNecessario());
    }
}
