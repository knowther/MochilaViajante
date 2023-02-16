package com.dh.ecommerce.controller;

import com.dh.ecommerce.model.Produto;
import com.dh.ecommerce.model.dto.ProdutoDTO;
import com.dh.ecommerce.service.ProdutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
//
//    @RequestMapping(value = "/buscar/{numPedido}/{nomeUsuario}", method = RequestMethod.GET)
//    public String buscar(@PathVariable String numPedido, @PathVariable String nomeUsuario){
//        return "Numero pedido: " + numPedido + " nome usuario: " + nomeUsuario;
//    }

    ProdutoService service = new ProdutoService();

    @GetMapping()
    public List<ProdutoDTO> buscarSegundo(){
        return service.buscar();
    }

    @PostMapping()
    public Produto salvar(@RequestBody Produto produto){
        return service.salvar(produto);
    }

    @DeleteMapping("/deletar")
    public String deletar(){
        return "apagado";
    }

    @PatchMapping("/alterar")
    public String alteracaoParcial(){
        return "parcialmente alterado";
    }

    @PutMapping("/alterarAll")
    public String alteracaoTotal(){
        return "totalmente alterado";
    }


}
