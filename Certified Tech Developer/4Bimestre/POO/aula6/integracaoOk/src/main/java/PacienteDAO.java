import javax.persistence.EntityManager;

public class PacienteDAO {

    private EntityManager em;

    public PacienteDAO() {
        em = Singleton.getConnection();
    }

    public void inserir(Paciente pac){
        em.getTransaction().begin();
        em.persist(pac);
        em.getTransaction().commit();
    }

}
