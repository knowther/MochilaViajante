import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UsuarioTest {

    @Test
    void baixar1(){
        Usuario usuario = new Usuario(1, "PREMIUM");
        new ServicoDownloadProxy().baixar(usuario);
    }

    @Test
    void baixar2(){
        Usuario usuario = new Usuario(1, "FREE");
        new ServicoDownloadProxy().baixar(usuario);
    }

}