package service;

import dao.IDao;
import impl.MedDAOH2;
import model.Medicamento;

public class MedicamentoService {

    public Medicamento salvar(Medicamento medicamento){
        IDao<Medicamento> medicamentoIDao = new MedDAOH2();
        return medicamentoIDao.salvar(medicamento);
    }
}
