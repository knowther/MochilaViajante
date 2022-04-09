
/*
Faça uma consulta sobre o faturamento do e-market. Inclua as seguintes informações:

-ID da fatura
-data da fatura
-nome da empresa de correio (O id da empresa consta da tabela faturas no campo FormaEnvio)
-nome do cliente
-categoria do produto vendido
-nome do produto(Você chega ao produto consultando os detalhes da fatura)
-preço unitário
-quantidade

*/
select faturas.FaturaId, faturas.DataFatura, correios.Empresa, clientes.Contato, produtos.ProdutoNome, categorias.CategoriaNome, detalhefatura.PrecoUnitario, detalhefatura.Quantidade from faturas 
join correios on faturas.FormaEnvio = correios.CorreioID 
join clientes on faturas.ClienteID = clientes.ClienteID 
join detalhefatura on detalhefatura.FaturaId = faturas.FaturaId
join produtos on detalhefatura.ProdutoID = produtos.ProdutoID
join categorias on produtos.CategoriaID = categorias.CategoriaID;

-- 1) Liste todas as categorias junto com informações sobre seus produtos. Incluir todas as categorias, mesmo que não tenham produtos.
select categorias.CategoriaNome, produtos.ProdutoNome from categorias left join produtos on categorias.CategoriaID = produtos.ProdutoID;

-- 2) Liste as informações de contato de clientes que nunca compraram no emarket.
select clientes.Contato, clientes.Fax from clientes left join faturas on faturas.ClienteID = clientes.ClienteID where faturas.ClienteID is null;

-- 3) Faça uma lista de produtos. Para cada um, indique seu nome, categoria e as informações de contato de seu fornecedor. Lembre-se que podem existir produtos para os quais o fornecedor não foi indicado.
select produtos.ProdutoNome, categorias.CategoriaNome, provedores.Contato, provedores.Fax from produtos 
join categorias on produtos.CategoriaID = categorias.CategoriaID
join provedores on produtos.ProvedorID = provedores.ProvedorID;

-- 4) Para cada categoria, liste o preço unitário médio de seus produtos.
select categorias.CategoriaNome, avg(round(produtos.PrecoUnitario)) from produtos join categorias on produtos.CategoriaID = categorias.CategoriaID GROUP BY categorias.CategoriaID;

-- 5) Para cada cliente, indique a última nota fiscal de compra. Inclua clientes que nunca compraram no e-market.
select c.Contato, c.ClienteID, UltimaFatura  from clientes as c left join (select f.ClienteID, max(DataFatura) as UltimaFatura from faturas as f group by f.ClienteID) as fa on fa.ClienteID = c.ClienteID;

-- 6) Todas as faturas têm uma empresa de correio associada (envio). Gere uma lista com todas as empresas de correio e o número de faturas correspondentes. Execute a consulta usando RIGHT JOIN.
select correios.Empresa, count(faturas.FormaEnvio) from faturas right join correios on faturas.FormaEnvio = correios.CorreioID group by correios.CorreioID;
