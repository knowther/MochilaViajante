import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Singleton {
    private static EntityManager connection;
    private static EntityManagerFactory emf;


    public static EntityManager getConnection(){
        if(connection == null){
            setConnection();
        }
        return connection;
    }

    public static void setConnection(){
        emf = Persistence.createEntityManagerFactory("integracao");
        connection = emf.createEntityManager();
    }
}
