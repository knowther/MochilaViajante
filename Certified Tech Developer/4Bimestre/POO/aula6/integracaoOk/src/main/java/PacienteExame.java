import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "paciente_Exame")
public class PacienteExame implements Serializable{
    @Id
    @ManyToOne(optional = false)
    @JoinColumn(name = "paciente", nullable = false)
    private Paciente paciente;
    @Id
    private String idCodAlvaro;

    private String dataResultado;
    private String resultado;

    public Paciente getPaciente() {
        return paciente;
    }


    public Paciente getIdPaciente() {
        return paciente;
    }

    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    public String getIdCodAlvaro() {
        return idCodAlvaro;
    }

    public void setIdCodAlvaro(String idCodAlvaro) {
        this.idCodAlvaro = idCodAlvaro;
    }

    public String getDataResultado() {
        return dataResultado;
    }

    public void setDataResultado(String dataResultado) {
        this.dataResultado = dataResultado;
    }

    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }

    @Override
    public String toString() {
        return "PacienteExame{" +
                "idPaciente='" + paciente.getNome() + '\'' +
                ", idCodAlvaro='" + idCodAlvaro + '\'' +
                ", dataResultado='" + dataResultado + '\'' +
                ", resultado='" + resultado + '\'' +
                '}';
    }
}
