public class Computador {
    String tipoComputador;
    private int ram;
    private int hd;

    public Computador(){}
    public Computador(String tipoComputador) {
        this.tipoComputador = tipoComputador;

    }

    public String getTipoComputador() {
        return tipoComputador;
    }

    public void setTipoComputador(String tipoComputador) {
        this.tipoComputador = tipoComputador;
    }

    public int getRam() {
        return ram;
    }

    public void setRam(int ram) {
        this.ram = ram;
    }

    public int getHd() {
        return hd;
    }

    public void setHd(int hd) {
        this.hd = hd;
    }

    public void descricaoPC(){
        System.out.println("É um "+ tipoComputador+ " com " + this.hd + "GB de HD e " + this.ram + "GB de RAM");
    }

    @Override
    public String toString() {
        return "Computador{" +
                "tipoComputador='" + tipoComputador + '\'' +
                ", ram=" + ram +
                ", hd=" + hd +
                '}';
    }
}
