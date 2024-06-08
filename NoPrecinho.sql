
create database np;
drop database np;
use np; 

create table usuario(
	id_usuario int primary key auto_increment,
	nome_usuario varchar(100) not null,
	cpf_usuario varchar(11) unique not null,
	cep_usuario varchar(8) not null,
	estado_usuario varchar(50) not null,
	cidade_usuario varchar(50) not null,
	bairro_usuario varchar(50) not null,
	rua_usuario varchar(50) not null,
	telefone_usuario varchar(12) unique not null,
	email_usuario varchar(50) unique not null,
	nome_user_usuario varchar(50) unique not null,
	senha varchar(100) not null
);
select id_usuario from usuario where email_usuario = "v";
insert into usuario(nome_usuario,cpf_usuario,cep_usuario,estado_usuario,cidade_usuario,bairro_usuario,rua_usuario,telefone_usuario,email_usuario,nome_user_usuario,senha) value
("e","e","e","a","b","c","d","c","c","c","c");

select * from usuario;

create table mercado(
	id_mercado int primary key auto_increment,
	nome_fantasia varchar(50) not null,
	razao_social varchar(50) not null,
	cnpj varchar(14) unique not null,
	telefone_mercado varchar(12) unique not null,
	cep_mercado varchar(8) not null,
	estado_mercado varchar(50) not null,
	cidade_mercado varchar(50) not null,
	bairro_mercado varchar(50) not null,
	rua_mercado varchar(50) not null,
	email_mercado varchar(50) unique not null,
	logo_mercado varchar(100) unique not null,
	descricao_mercado varchar(250),
	senha varchar(150) not null
);

insert into mercado(nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha) value
("murilo","12345678901","12345678","a","b","c","d","123456789012","exemplo@email.com","murilin","murilo123","murilo123","murilo123");
insert into mercado(nome_fantasia,razao_social,cnpj,telefone_mercado,cep_mercado,estado_mercado,cidade_mercado,bairro_mercado,rua_mercado,email_mercado,logo_mercado,descricao_mercado,senha) value
("A","A","A","B","A","A","A","A","A","A","A","A","A");
select * from mercado;


-- ----------------------JUNÇAO DE DUAS TABELAS PARA O LOGIN----------------------------- --
SELECT 'usuario' AS tipo_conta, id_usuario AS id, senha
FROM usuario
WHERE email_usuario  AND senha 
UNION ALL
SELECT 'mercado' AS tipo_conta, id_mercado AS id, senha
FROM mercado
WHERE email_mercado = 'A'  AND senha='A'; 
-- ---------------------------------------------------------------------------


-- SELECT DA TABELA MERCADO E PRODUTO MERCADO  ------------ PARA A TELA 13- DE INSPECIONAR O PRODUTO
SELECT produto_mercado.*, mercado.nome_fantasia AS nome_mercado
FROM produto_mercado
JOIN mercado ON produto_mercado.mercado_id = mercado.id_mercado
WHERE produto_mercado.id_produto_mercado = 1;
-- ---------------------------------------------------------------------

-- SELECT PARA A TELA DE FEED DO MERCADO TELA 12
select * from vw_produtos_mercado;

CREATE VIEW vw_produtos_mercado AS
SELECT     mercado.logo_mercado, produto_mercado.foto_produto, produto_mercado.nome_produto, produto_mercado.marca_produto, produto_mercado.peso_produto, 
produto_mercado.preco_produto, mercado.nome_fantasia AS nome_mercado FROM produto_mercado JOIN  mercado ON produto_mercado.mercado_id = mercado.id_mercado;
-- ======================================================================================

CREATE TABLE produto_mercado (
    id_produto_mercado INT PRIMARY KEY AUTO_INCREMENT,
    nome_produto VARCHAR(50) NOT NULL,
    marca_produto VARCHAR(50) NOT NULL,
    peso_produto FLOAT NOT NULL,
    preco_produto NUMERIC(9,2) NOT NULL,
    foto_produto VARCHAR(100),
    descricao VARCHAR(250),
    mercado_id INT,
    sub_categoria_id INT, 
    CONSTRAINT fk_sub_categoria FOREIGN KEY (sub_categoria_id) REFERENCES sub_categoria(id_sub_categoria),
    CONSTRAINT fk_mercado FOREIGN KEY (mercado_id) REFERENCES mercado(id_mercado)
);

insert into produto_mercado(nome_produto,marca_produto,peso_produto,preco_produto,mercado_id,sub_categoria_id) value
("achocolatado em po","Toddy",500,10,2,1),
("Arroz Tipo 1","Alegre",1.000,27.90,2,2),
("Frango resfriado","Sadia",1.500,30.50,2,3),
("Picanha","Friboi",1.000,50.49,2,4),
("Agua com gás","Pedra azul",2.000,3.50,2,5),
("Guaraná","Coroa",2.000,5.60,2,6);
select * from produto_mercado;

-- =============================================================
create table produto_usuario(
	id_produto_usuario int primary key auto_increment,
	nome_produto varchar(50) not null,
	marca_produto varchar(50) not null,
	preco_produto numeric(9,2) not null,
	foto_produto varchar(100),
	descricao varchar(250),
	usuario_id int,
	CONSTRAINT fk_usuario FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario)
);
-- em standby ======================================================================================================
create table postagem(
	id_postagem int primary key auto_increment,
	comentario_postagem varchar(250),
	curtidas_postagem boolean,
	edit_postagem varchar(50),
	endereco varchar(100),
	produto_usuario_id int,
	CONSTRAINT fk_produto_usuario FOREIGN KEY (produto_usuario_id) REFERENCES produto_usuario(id_produto_usuario)
);
-- ==============================================================================================================================================
CREATE TABLE carrinho (
    id_carrinho INT PRIMARY KEY AUTO_INCREMENT,
    total_carrinho NUMERIC(9,2),
    data_criada DATETIME DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT,
    CONSTRAINT fkk_usuario FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario)
);

CREATE TABLE carrinho_item (
    id_carrinho_item INT PRIMARY KEY AUTO_INCREMENT,
    carrinho_id INT NOT NULL,
    produto_mercado_id INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario NUMERIC(9,2) NOT NULL,
    CONSTRAINT fk_carrinho FOREIGN KEY (carrinho_id) REFERENCES carrinho(id_carrinho),
    CONSTRAINT fk_produto_mercado FOREIGN KEY (produto_mercado_id) REFERENCES produto_mercado(id_produto_mercado)
);


CREATE TABLE categoria (
    id_categoria INT PRIMARY KEY AUTO_INCREMENT, 
    nome_categoria VARCHAR(40) NOT NULL
);

insert into categoria(nome_categoria) value
("Mercearia"),
("Carne"),
("Bebidas");
select * from categoria;

CREATE TABLE sub_categoria (
    id_sub_categoria INT PRIMARY KEY AUTO_INCREMENT,
    nome_sub_categoria VARCHAR(50),
    categoria_id INT,
    CONSTRAINT fk_categoria FOREIGN KEY (categoria_id) REFERENCES categoria(id_categoria)
);

insert into sub_categoria(nome_sub_categoria,categoria_id) value
("Achocolatados",1),
("Arroz",1),
("Aves",2),
("Bovino",2),
("Agua",3),
("Refrigerente",3);

SELECT * FROM sub_categoria;

select * from produto_mercado;
-- SELECT NA TABELA PRODUTO_MERCADO, SUB_CATEGORIA E CATEGORIA
SELECT c.nome_categoria, sc.nome_sub_categoria, pm.nome_produto, pm.marca_produto
FROM produto_mercado pm
JOIN sub_categoria sc ON pm.sub_categoria_id = sc.id_sub_categoria
JOIN categoria c ON sc.categoria_id = c.id_categoria;
-- ===========================================================================

SELECT p1.id_produto_mercado, p1.nome_produto, p1.marca_produto, p1.preco_produto, p1.mercado_id
FROM produto_mercado p1
JOIN (
    SELECT nome_produto, marca_produto
    FROM produto_mercado
    WHERE nome_produto = "Picanha" AND marca_produto = "Friboi"
    GROUP BY nome_produto, marca_produto
    HAVING COUNT(DISTINCT mercado_id) > 1
) p2 ON p1.nome_produto = p2.nome_produto AND p1.marca_produto = p2.marca_produto
WHERE p1.nome_produto =  "Picanha" AND p1.marca_produto = "Friboi" 
ORDER BY p1.nome_produto, p1.marca_produto, p1.mercado_id;


