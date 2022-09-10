import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class identificaExames {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int idCodAlvaro;
    private int idCodNephrosys;
    private String nomeExame;
    private String descricao;


}
