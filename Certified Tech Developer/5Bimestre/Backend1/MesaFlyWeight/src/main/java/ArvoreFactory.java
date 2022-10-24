import java.util.HashMap;
import java.util.Objects;

public class ArvoreFactory {
    private static final HashMap<String, Arvore> floresta = new HashMap<>();

    public Arvore getArvore(final String tipoComida) {
        Arvore comida = floresta.get(tipoComida);
        if (Objects.isNull(comida)) {
            comida = new Arvore(tipoComida);
            floresta.put(tipoComida, comida);
            System.out.println("Criando Objeto de Árvore tipo: " + tipoComida);
            return comida;

        }
        System.out.println("Recuperando Objeto de Árvore tipo: " + tipoComida);
        return comida;

    }
}
