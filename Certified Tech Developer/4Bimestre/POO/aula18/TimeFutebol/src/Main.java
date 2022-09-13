import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        Selecao selecao = new Selecao("Brasil");

        Jogador j1 = new Jogador(1, "Silva", "Defensor");
        Jogador j2 = new Jogador(2, "Ronaldo", "Atacante");
        Jogador j3 = new Jogador(3, "Elias", "Atacante");
        Jogador j4 = new Jogador(4, "Francisco", "Goleiro");
        Jogador j5 = new Jogador(5, "Ednaldo", "Defensor");
        Jogador j6 = new Jogador(6, "Eduardo", "Atacante");
        Jogador j7 = new Jogador(7, "Pedro", "Meio Campista");
        Jogador j8 = new Jogador(8, "Matias", "Defensor");
        Jogador j9 = new Jogador(9, "Cristiano", "Atacante");
        Jogador j10 = new Jogador(10, "Beraldo", "Goleiro");
        Jogador j11 = new Jogador(11, "Melo", "Defensor");
        Jogador j12 = new Jogador(12, "Elias", "Meio Campista");
        Jogador j13 = new Jogador(13, "Santiago", "Atacante");
        Jogador j14 = new Jogador(14, "Moreira", "Meio Campista");
        Jogador j15 = new Jogador(15, "Marcolino", "Defensor");
        Jogador j16 = new Jogador(16, "José", "Goleiro");
        Jogador j17 = new Jogador(17, "Pereira", "Atacante");
        Jogador j18 = new Jogador(18, "Cláudio", "Defensor");
        Jogador j19 = new Jogador(19, "Murilo", "Meio Campista");
        Jogador j20 = new Jogador(20, "Carlos", "Goleiro");
        Jogador j21 = new Jogador(21, "Coeli", "Atacante");
        Jogador j22 = new Jogador(22, "Vilas", "Goleiro");
        Jogador j23 = new Jogador(23, "Souza", "Defensor");
        selecao.addJogadores(Arrays.asList(j1, j2, j3, j4, j5, j6, j7, j8, j9, j10, j11, j12, j13, j14, j15, j16, j17, j18, j19, j20, j21, j22, j23));
        System.out.println(selecao.obterReservas());
        System.out.println(selecao.quantJogadores("Meio Campista"));
    }
}
