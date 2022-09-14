public class RefrigeranteFactory {

    public Refigerante fazerRefri(String tipo){
        Refigerante refri = null;

                if(tipo.equals("K")){
                    return new RefriCola();
                }else if(tipo.equals("L")){
                    return new RefriLaranja();
                }else return null;
    }

}
