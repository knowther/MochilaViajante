package com.dh.ecommerce.model;


import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Produto {

    private Long id;
    private String nome;
    private String descricao;
    private Double valor;
    private String lote;
    private String categoria;
    private String fornecedor;
}
