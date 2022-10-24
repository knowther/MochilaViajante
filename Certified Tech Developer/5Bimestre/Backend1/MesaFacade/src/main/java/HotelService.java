import java.time.LocalDate;
import java.util.List;

public class HotelService {
    private List<Hotel> hoteis;

    public HotelService(List<Hotel> hoteis) {
        this.hoteis = hoteis;
    }

    public Hotel buscarHotel(LocalDate dataPartida, LocalDate dataRetorno, String cidade){
        Hotel hotel = null;
        for(Hotel h: this.hoteis){
            if(h.getDataEntrada().equals(dataPartida) && h.getDataSaida().equals(dataRetorno) && h.getCidade().equalsIgnoreCase(cidade)){
                hotel = h;
            }else{
                System.out.println("Hotel não encotrado.");
            }
        }
        return hotel;
    }
}
