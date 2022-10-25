package Service;

import model.Figura;
import model.Figuras;

public interface IFacadeFactory {
    Figura returnFigura(String tipo, String cor, Integer tamanho);
}
