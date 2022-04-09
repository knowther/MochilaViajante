
select correios.Empresa, sum(round(Transporte)) from faturas right join correios on faturas.FormaEnvio = correios.CorreioID group by CorreioID;

select clientes.Contato, lpad(clientes.Endereco, length(clientes.Endereco)+ 10, "Endereço: "), faturas.ClienteID from clientes left join faturas on clientes.ClienteID = faturas.ClienteID where faturas.FaturaId is null;

select replace(produtos.ProdutoNome, 'Mix', 'MIX'), replace(produtos.ProdutoNome, 'Chef', 'CHEF'), categoriaNome from categorias left join produtos on produtos.CategoriaID = categorias.CategoriaID;


