import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Validate {

    static List<Person> list = new ArrayList<>();

    public static List<Person> getList() {
        return list;
    }

    public static void validacao(List<Person> pessoas) {
        pessoas.stream().filter(person -> person.getNome().length() >=5 && person.isToBeOfAge(person.getDataNascimento(), new Date(2021, 9, 21))).forEach(person -> list.add(person));

    }

}
