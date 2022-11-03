package com.dh.clinica.dao;

import java.util.List;
import java.util.Optional;

public interface IDao<T> {

    public T salvar (T t);

    public Optional<T> buscar (Integer id);

    public void excluir (Integer id);

    public List<T> buscarTodos();
}
