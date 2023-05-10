// Criação de um Banco de Dados e de uma tabela

var sqlite3 = require('sqlite3');
 
var db = new sqlite3.Database('BD_SCA.db');
 
db.serialize(function() {

// Criando a tabela
 db.run("CREATE TABLE IF NOT EXISTS TB_ALUNO (id INTEGER PRIMARY KEY, nome TEXT)");
 
// Inserindo dados na tabela
 db.run("INSERT INTO TB_ALUNO (nome) VALUES ('Gabriel Moreira'), ('Lara Agrela'), ('Carolina Severo'), ('João Paulo'), ('Lucas Davi')" 
);
// Consultando dados da tabela
 db.each("SELECT id, nome FROM TB_ALUNO", function(err, row) {
    console.log(row.id + ": " + row.nome);
  });
});
 
db.close();
