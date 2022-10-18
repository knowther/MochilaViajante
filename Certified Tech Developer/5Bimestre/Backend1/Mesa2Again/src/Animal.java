public abstract class Animal {
    private String cor;

    public Animal(String cor) {
        this.cor = cor;
    }

    public abstract String falar();
    public String andar(){
        return "Andando com as quatro patas.";
    };
}
