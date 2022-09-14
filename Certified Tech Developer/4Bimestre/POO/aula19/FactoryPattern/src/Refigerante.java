public abstract class Refigerante {

    private String nome;


    public String getName(){
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void abrir(){
        System.out.println("Você abriu uma lata de " + getName());
    }

}
