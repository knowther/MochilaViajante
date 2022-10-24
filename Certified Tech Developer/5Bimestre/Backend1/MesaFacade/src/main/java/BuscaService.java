import java.time.LocalDate;

public class BuscaService implements IBuscaService{

    private VoosService voosService;
    private HotelService hotelService;

    public BuscaService(VoosService voosService, HotelService hotelService) {
        this.voosService = voosService;
        this.hotelService = hotelService;
    }

    @Override
    public void buscarHotel(LocalDate dataEntrada, LocalDate dataSaida, String cidade) {
        Hotel hotel = hotelService.buscarHotel(dataEntrada, dataSaida, cidade);
        if(hotel != null){
            System.out.println("Hotel encontrado na cidade de: " + hotel.getCidade() + " com os critérios selecionados.\n" + hotel);
        }
    }

    @Override
    public void buscarVoo(LocalDate dataPartida, LocalDate dataRetorno, String origem, String destino) {
        Voo voo = voosService.buscarVoo(dataPartida, dataRetorno, origem, destino);
        if(voo != null){
            System.out.println("Voo encontrado para: " +  voo.getDestino() + " com os critérios selecionados. \n" + voo);
        }
    }
}
