import java.util.ArrayList;
import java.util.List;

public class Selecao {

    private String nome;
    private List<Jogador> jogadores = new ArrayList<>();

    public void addJogador(Jogador jogador){
        jogadores.add(jogador);
    }

    public void addJogadores(List<Jogador> jogadores){
        for(Jogador j : jogadores){
            this.jogadores.add(j);
        }
    }

    public Selecao(String nome) {
        this.nome = nome;
    }

    public List<Jogador> obterReservas(){
        jogadores.size();
        List<Jogador> reservas = new ArrayList<>();

        for(int i = jogadores.size() -1; i >= (jogadores.size()-5); i--){
            reservas.add(jogadores.get(i));
        }
        return reservas;
    }

    public int quantJogadores(String pos){
        List<Jogador> qntPos = new ArrayList<>();
        for(Jogador j : this.jogadores){
            if(j.getPosicao().equals(pos)){
                qntPos.add(j);
            }
        }
        if(qntPos.size() == 0){
                throw new IllegalArgumentException("Posição enviada como parâmetro não encontrada");
        }
        return qntPos.size();
    }

}
