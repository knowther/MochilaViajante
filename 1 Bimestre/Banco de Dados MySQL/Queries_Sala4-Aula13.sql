/*Sala 4
@Daniel Fontoura#5564 
@Issao Toribio Takeuchi#3233 
@Johnny Wesley#9049 
@Patricio G. Silva#9611 
@tamiris.sartor#8616 
@Giovanna Maia#0940
@Isabela Wagner#1883*/


-- Na base de dados musimundos faça as seguintes operações: Na tabela faturas:

-- 1 - O valor da fatura mais alta cujo a cidade de cobrança é “Oslo”. (MAX) = 15.86 ; id 208
select max(valor_total) from faturas where cidade_cobranca like "Oslo";
select * from faturas where valor_total = 15.86;

-- 2 - O valor da fatura mais baixa de todas. (MIN) = 0.99 (55 faturas)
select min(valor_total) from faturas;
select count(*) from faturas where valor_total = 0.99;

-- 3 - O valor médio das faturas que o país de cobrança é “Canada”. (AVG) = 5.427857
select avg(valor_total) from faturas where pais_cobranca= "Canada";

-- 4 - A quantidade de faturas que o país de cobrança é “Canada”. (COUNT) = 56
select count(id) from faturas where pais_cobranca like "Canada";
select count(*) from faturas where pais_cobranca= "Canada";
select * from faturas where pais_cobranca like "Canada";

-- 5 - O valor total somado de todas as faturas. (SUM) = 2328.60
select SUM(valor_total) from faturas;

-- 6 - Selecione o id, a data e valor das faturas com valor abaixo da média. (Subqueries e AVG)
 select id, data_fatura, valor_total from faturas where valor_total <(
select avg(valor_total) from faturas);

-- Na tabela empregados:
-- 7 - A data de nascimento do funcionário mais jovem da empresa (MAX) = 13/11/1990
select max(data_nascimento) from empregados;

-- 8 - A data de nascimento do funcionário mais velho da empresa (MIN) = 27/02/1970
select min(data_nascimento) from empregados;

-- 9 - Formate a data do nascimento dos funcionários no formato ex: "02 May 2020". (DATE_FORMAT)
SELECT DATE_FORMAT(`data_nascimento`, "%d %M %Y") from empregados; 

-- Na tabela cancoes:
-- 10 - O numero de cancoes que tem como compositor “AC/DC”. (COUNT) = 8
select count(nome) from cancoes where compositor="AC/DC";

-- 11 - A duração média das músicas em milisegundos (AVG) = 393599.2121
select avg(duracao_milisegundos) from cancoes;

-- 12 - O tamanho médio em bytes das músicas que como compositor “AC/DC”. (AVG) = 10029878.0000
select avg(bytes) from cancoes where compositor="AC/DC";

-- Na tabela clientes:
-- 13 - Quantidade de clientes que moram na cidade de “São Paulo”. (COUNT) = 2
select count(1) from clientes where cidade LIKE 'São Paulo';

-- 14 - Quantidade de clientes que moram na cidade “Paris”. (COUNT) = 2
select count(id) from clientes where cidade like "Paris";

-- 15 - Quantidade de clientes que tenham email do “yahoo”. (COUNT e LIKE) = 18
select count(id) from clientes where email like '%yahoo%';







