package com.dh.ecommerce.controller;

import com.dh.ecommerce.model.Produto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
//
//    @RequestMapping(value = "/buscar/{numPedido}/{nomeUsuario}", method = RequestMethod.GET)
//    public String buscar(@PathVariable String numPedido, @PathVariable String nomeUsuario){
//        return "Numero pedido: " + numPedido + " nome usuario: " + nomeUsuario;
//    }

    @GetMapping("/buscar")
    public String buscar(@RequestParam("numPedido") int numPedido, @RequestParam("nomeUsuario") String nomeUsuario){
        return "Numero pedido: " + numPedido + " nome usuario: " + nomeUsuario;
    }

    @PostMapping("/salvar")
    public Produto salvar(){
        return new Produto();
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
