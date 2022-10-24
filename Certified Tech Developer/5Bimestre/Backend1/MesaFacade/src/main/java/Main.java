import java.time.LocalDate;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        Voo voo1 = new Voo(LocalDate.of(2022, 10, 24), LocalDate.of(2022, 10, 30), "Carpina", "Recife");
        Hotel hotel1 = new Hotel(LocalDate.of(2022, 10, 24), LocalDate.of(2022, 10, 29), "Recife");
        IBuscaService buscaService = new BuscaService(new VoosService(Arrays.asList(voo1)), new HotelService(Arrays.asList(hotel1)));


        buscaService.buscarVoo(LocalDate.of(2022, 10, 24), LocalDate.of(2022, 10, 30), "Carpina", "Recife");
        buscaService.buscarHotel(LocalDate.of(2022, 10, 24), LocalDate.of(2022, 10, 29), "Recife");
    }
}
