public class ProdutoFactory {

    private static ProdutoFactory INSTANCE;


    private ProdutoFactory(){

    }

    public static ProdutoFactory getInstance(){
        if(INSTANCE == null){
            return INSTANCE = new ProdutoFactory();
        }
        return INSTANCE;
    }

    public Produto armazenar(String tipo){
        Produto produto = null;
        if(tipo.equals("FUTEBOL")){
            Bola bola = new Bola(11);
            return bola;
        }else if (tipo.equals("BOLATENIS")){
            Bola bola = new Bola(0.32);
            return bola;
        } else if (tipo.equals("CAIXA10X10")) {
            Caixa caixa = new Caixa(10);
            return caixa;
        }else return null;
    }
}
