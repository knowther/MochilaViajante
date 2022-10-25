package service;

import java.time.LocalDate;

public interface IBuscaService {

    public void buscarHotel(LocalDate dataEntrada, LocalDate dataSaida, String cidade);
    public void buscarVoo(LocalDate dataPartida, LocalDate dataRetorno, String origem, String destino);
}
