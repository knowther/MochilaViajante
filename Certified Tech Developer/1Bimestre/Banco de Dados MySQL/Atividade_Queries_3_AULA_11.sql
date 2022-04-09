-- 1) Uma lista de todas categorias

SELECT CategoriaNome from categorias;

-- 2) Lista só com nome e descrição
SELECT CategoriaNome, Descricao from categorias;

-- 3) Uma lista de produtos
SELECT ProdutoNome FROM produtos;

-- 4) Produtos descontinuados
SELECT count(*) from produtos WHERE Descontinuado = 1;

-- 5) Na sexta-feira, você deve se reunir com o fornecedor nr. 8. Quais são os produtos que eles fornecem?
SELECT ProdutoNome, ProvedorID from produtos WHERE ProvedorID = 8;

-- 6) Queremos saber todos os produtos cujo preço unitário se encontra entre 10 e 22.
SELECT ProdutoNome, PrecoUnitario from produtos where PrecoUnitario >= 10 AND PrecoUnitario <= 22;

-- 7)Fica definido que um produto deve ser solicitado ao fornecedor se suas unidades em estoque forem inferiores ao nível de reabastecimento. Existem produtos a solicitar?
SELECT ProdutoNome from produtos WHERE UnidadesEstoque < NivelReabastecimento;

-- 8) Você quer saber todos os produtos da lista anterior, mas que as unidades pedidas sejam iguais a zero
SELECT ProdutoNome from produtos WHERE UnidadesEstoque < NivelReabastecimento AND UnidadesPedidas = 0;

SELECT * FROM clientes WHERE contato LIKE '__i%';

-- Clientes

-- 1) Obtenha uma lista de todos os clientes com contato, empresa, cargo, País. Classifique a lista por país.
SELECT Empresa , Contato, Titulo, Pais FROM clientes ORDER BY Pais;

-- 2) Queremos atender todos os clientes que possuem o título de  “Proprietário". Esse título estará em inglês (Owner).

SELECT Contato, Titulo FROM clientes WHERE Titulo LIKE 'Owner';

-- 3) A operadora de telefonia atendeu um cliente e não lembra o nome dele. Sabe apenas que começa com "C". Podemos ajudá-lo a obter uma lista com

SELECT Contato AS Nome from clientes WHERE Contato LIKE 'C%';

-- Faturas

-- 1) Obtenha uma lista de todas as faturas, ordenadas por data da fatura em ordem ascendente.

SELECT DataFatura from faturas ORDER BY DataFatura ASC;

-- 2)Agora é necessário uma lista de faturas com o país de envio "EUA" e que a FormaeEnvio seja diferente de 3.

SELECT PaisEnvio, FormaEnvio FROM faturas WHERE PaisEnvio LIKE 'USA' AND FormaEnvio != 3 ;  

-- 3) O cliente 'GOURL' fez um pedido?
SELECT * from faturas WHERE ClienteID LIKE 'GOURL';

-- 4) Você deseja visualizar todas as faturas dos funcionários 2, 3, 5, 8 e 9.

SELECT ClienteID, EmpregadoID from faturas WHERE EmpregadoID IN (2, 3, 5, 8, 9) ORDER BY EmpregadoID;


-- PARTE 2

-- 1) Obtenha a lista de todos os produtos em ordem decrescente por preço unitário.

SELECT ProdutoNome, PrecoUnitario from produtos ORDER BY PrecoUnitario DESC;

-- 2) Obtenha a lista dos 5 melhores produtos cujo preço unitário é o mais "Caro".
SELECT ProdutoNome, PrecoUnitario from produtos ORDER BY PrecoUnitario DESC LIMIT 5;

-- 3) Obtenha um top 10 dos produtos com mais unidades em estoque.
SELECT ProdutoNome, UnidadesEstoque from produtos ORDER BY UnidadesEstoque DESC LIMIT 10; 

-- DetalheFatura

-- 1) Obtenha uma lista de FaturaId, Produto, Quantidade.
SELECT FaturaId, ProdutoID, Quantidade from detalhefatura;

-- 2) Classifique a lista acima por Quantidade decrescente.
SELECT FaturaId, ProdutoID, Quantidade from detalhefatura ORDER BY Quantidade DESC;

-- 3) Filtre a mesma lista apenas para os produtos cuja quantidade esteja entre 50 e 100.
SELECT FaturaId, ProdutoID, Quantidade from detalhefatura WHERE Quantidade >=50 AND Quantidade <=100;

-- 4)Em outra nova consulta, obtenha uma lista com os seguintes nomes de coluna: Número da fatura (FaturaId), Produto (ProdutoId), Total (Preço Unitário * Quantidade)

SELECT FaturaID, ProdutoID, PrecoUnitario * Quantidade AS Total from detalhefatura;