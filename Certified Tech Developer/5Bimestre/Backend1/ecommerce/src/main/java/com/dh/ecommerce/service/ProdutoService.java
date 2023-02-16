package com.dh.ecommerce.service;

import com.dh.ecommerce.dao.ProdutoDAO;
import com.dh.ecommerce.model.Produto;
import com.dh.ecommerce.model.dto.ProdutoDTO;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;

public class ProdutoService {

    ProdutoDAO produtoDAO = new ProdutoDAO();
    public List<ProdutoDTO> buscar(){
        List<Produto> produtoList = produtoDAO.buscar();
        List<ProdutoDTO> produtoDTOList = new ArrayList<>();

        ObjectMapper mapper = new ObjectMapper();

        for(Produto p: produtoList){
            produtoDTOList.add(mapper.convertValue(p, ProdutoDTO.class));
        }
        return produtoDTOList;

    }

    public Produto salvar(Produto produto){
        return produtoDAO.salvar(produto);
    }
}
