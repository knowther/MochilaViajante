public class ComprarIphone {
    public Iphone pedido(String modelo){
        Iphone dispositivo = null;

        if(modelo.equals("X")){
            return new Iphone11();
        }else if(modelo.equals("11")){
            return new IphoneX();
        }else return null;
    }
}
