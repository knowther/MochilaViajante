public class FabricaDeCarro {

    private static final FabricaDeCarro INSTANCE = new FabricaDeCarro();

    private FabricaDeCarro() {

    }

    public static FabricaDeCarro getInstance(){
        return INSTANCE;
    }

    protected int totalCarrosFiat =0;
    protected int totalCarrosFord = 0;
    protected int totalCarrosVolks = 0;

    public String criarCarroVolks(){
        return new String("Carro Volks #" + totalCarrosVolks++ + " criado");
    }

    public String criarCarroFord(){
        return new String("Carro Ford #" + totalCarrosFord++ + " criado");
    }

    public String criarCarroFiat(){
        return new String("Carro Fiat #" + totalCarrosFiat++ + " criado");
    }

    public String gerarRelatorio(){
        return new String("Total de carros Fiat vendidos: " + totalCarrosFiat + "\nTotal de carros Ford vendidos: " + totalCarrosFord + "\nTotal de carros Volks vendidos: " + totalCarrosVolks );
    }

}
