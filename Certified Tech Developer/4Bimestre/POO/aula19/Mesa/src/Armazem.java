import java.util.ArrayList;
import java.util.List;

public class Armazem {

    private List<Produto> produtos = new ArrayList<>();
    double qntEspaco;
    public Armazem(){

    }
    public void addProduto(Produto p ){
        produtos.add(p);
    }

    public String calcularEspacoNecessario(){
        for(Produto p : produtos){
           qntEspaco = qntEspaco + p.calcularEspaco();
        }
        return new String("O espaço necessário para guardar os items é: " + qntEspaco+ "cm");
    }




}
