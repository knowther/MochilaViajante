import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Arvore> arvores = new ArrayList<>();
        final ArvoreFactory floresta = new ArvoreFactory();

        Arvore arvore1 = floresta.getArvore("Ornamental");
        arvore1.setAltura(200);
        arvore1.setLargura(400);
        arvore1.setCor("Verde");

        Arvore arvore2 = floresta.getArvore("Frutíferas");
        arvore2.setAltura(500);
        arvore2.setLargura(300);
        arvore2.setCor("Vermelho");

        Arvore arvore3 = floresta.getArvore("Florífera");
        arvore3.setAltura(100);
        arvore3.setLargura(200);
        arvore3.setCor("Azul");

        for(int i = 0; i < 1000000; i++){
            if(i < 500000){
                final Arvore arvore = floresta.getArvore("Ornamental");
                arvores.add(arvore);
            }else{
                final Arvore arvore = floresta.getArvore("Frutíferas");
                arvores.add(arvore);
            }
        }
        System.out.println("Total de árvores na floresta:" + arvores.size());
        Runtime runtime = Runtime.getRuntime();
        System.out.println("Memória utilizada: " + (runtime.totalMemory() - runtime.freeMemory()) / (1024*1024));
    }




}
