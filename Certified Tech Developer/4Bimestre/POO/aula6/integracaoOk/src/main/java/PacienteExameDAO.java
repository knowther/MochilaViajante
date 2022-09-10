import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;
import java.util.Map;

public class PacienteExameDAO {
    private EntityManager em;

    public PacienteExameDAO() {
        em = Singleton.getConnection();
    }

    public void inserir(PacienteExame pacE){
        em.getTransaction().begin();
        em.persist(pacE);
        em.getTransaction().commit();
    }

    public List getResults(Long cod){
        em.getTransaction().begin();
//        Query query = em.createQuery("SELECT p from PacienteExame p WHERE p.paciente.idPaciente = :cod");
//        query.setParameter("cod", cod);

        List<PacienteExame> listaExames = (List<PacienteExame>) em.find(PacienteExame.class, cod);
        em.getTransaction().commit();
        return listaExames;
    }


}
