/* Sala 1

Fernando Bade
André Pedreschi
Johnny Wesley
Patricio
Bruno Mourão
Luiz de Souza
*/ 

-- Crie uma View com os seguintes dados do cliente: Id, contato, Fax e o telefone.
create view informacoesclientes as 
select clientes.clienteid, clientes.Contato, clientes.Fax, clientes.Telefone
from clientes;

select * from informacoesclientes;

-- 2. Liste os números de telefone dos clientes que não possuem fax.
-- Faça isso de duas maneiras diferentes:
-- a. Consultando a tabela clientes

select clientes.contato, clientes.fax, clientes.Telefone
from clientes
where fax = '';

-- b. Consultando a view do cliente 
select * from informacoesclientes
where fax = '';

-- Crie uma view com os seguintes dados do fornecedor: Id, contato,
-- empresa e endereço. Para o endereço, pegue o endereço, cidade, código
-- postal e país.

create view dadosfornecedor as
select provedorid, empresa, contato, endereco, cidade, codigopostal, pais
from provedores;

-- 2. Liste os fornecedores que moram na Avenida das Americanas, no Brasil. Faça de duas formas diferentes:

-- a. Consultando a tabela de fornecedores

select provedorid, empresa, contato, endereco, cidade, codigopostal, pais
from provedores where Endereco LIKE "%das Americanas%";


-- b. Consultando a view do fornecedor
select * from dadosfornecedor
where endereco LIKE "%das Americanas%";

-- 1) Crie uma view dos produtos que será usada ​​para controle de estoque. Inclua o id e nome do produto, preço unitário arredondado sem decimais, unidades 
-- em estoque e as unidades encomendadas. Inclua também uma nova coluna PRIORIDADE, com os seguintes valores:

CREATE VIEW prioridadeProdutos as
select ProdutoID, ProdutoNome, round(PrecoUnitario) as PrecoUnitario, UnidadesEstoque, UnidadesPedidas, CASE 
WHEN UnidadesPedidas = 0 THEN "BAIXA" 
WHEN UnidadesPedidas < UnidadesEstoque THEN "MÉDIA" 
WHEN UnidadesPedidas < UnidadesEstoque * 2 THEN "URGENTE"
WHEN UnidadesEstoque < UnidadesPedidas * 2 THEN "PRIORITÁRIO"
END as prioridade from produtos order by prioridade;

/* 2)  É necessário um relatório para identificar problemas de estoque. Utilizando a view criada no exercício anterior, indique, para cada prioridade, 
quantos produtos existem e seu preço médio. Não inclua prioridades para as que possuem menos de 5 produtos.
*/
select prioridade, count(1) as TotalProduto, avg(round(PrecoUnitario)) from prioridadeProdutos GROUP BY prioridade having TotalProduto > 5;
