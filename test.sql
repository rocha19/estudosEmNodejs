CREATE TABLE usuarios(
    id int(20) NOT NULL AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    email VARCHAR(100) NULL,
    idade smallint(10) NOT NULL,
    primary key (id)
) default charset = utf8;

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Marcelo",
    "rochaarqueologia@outlook.com",
    30
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Rocha"
    "rocha@rocha.com",
    28
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "joao"
    "joao@joao.com",
    28
);