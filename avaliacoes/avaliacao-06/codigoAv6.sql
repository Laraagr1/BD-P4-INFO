-- CRIANDO A TABELA DO CURSO
CREATE TABLE TB_CURSO (
  NOME TEXT NOT NULL,
  ID INTEGER PRIMARY KEY AUTOINCREMENT
);

-- CRIANDO A TABELA DO PROFESSOR
CREATE TABLE TB_PROFESSOR (
  NOME TEXT NOT NULL,
  PROFESSOR_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  CURSO_ID INT,
  FOREIGN KEY (CURSO_ID) REFERENCES TB_CURSO(ID)
);

-- CRIANDO A TABELA QUE IMPLEMENTA O RELACIONAMENTO N:N PROFESSOR/CURSO
CREATE TABLE TB_CURSO_PROFESSOR (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  CURSO_ID INT,
  PROFESSOR_ID INT,
  FOREIGN KEY (CURSO_ID) REFERENCES TB_CURSO(ID),
  FOREIGN KEY (PROFESSOR_ID) REFERENCES TB_PROFESSOR(PROFESSOR_ID)
);

-- ADICIONANDO OS CURSOS NA TABELA
INSERT INTO TB_CURSO (NOME)
  VALUES
  ('Informática'), ('Telecomunicações'), ('Eletrotécnica'), ('Mecânica'), 
  ('Edificações'), ('Turismo'), ('Química')
;

-- ADICIONANDO OS PROFESSORES NA TABELA E RELACIONANDO COM SEUS RESPECTIVOS CURSOS
INSERT INTO TB_PROFESSOR (NOME, CURSO_ID)
  VALUES 
  ('César Olávo', 1), ('Davis Macêdo', 1), ('Serra Furtado', 1), ('Mauricio Jaborandi', 1), 
  ('Marcos Lemos', 4), ('José Roberto', 1), ('Gloria Marinho', 7)
;

-- IMPLEMENTANDO O RELACIONAMENTO N:N DOS CURSOS COM OS PROFESSORES
INSERT INTO TB_CURSO_PROFESSOR (CURSO_ID, PROFESSOR_ID)
  VALUES 
  (1, 1), (1, 2), (1, 3), (1, 4), (4, 5), (1, 6), (7, 7)
;

.print
.print 'TABELA CURSOS'
SELECT * FROM TB_CURSO;

.print
.print 'TABELA PROFESSORES'
SELECT * FROM TB_PROFESSOR;

.print
.print 'TABELA CURSOS PROFESSORES'
SELECT * FROM TB_CURSO_PROFESSOR;

.print
.print 'LEITURA DA TABELA CURSOS PROFESSORES'
SELECT TB_CURSO.NOME, TB_PROFESSOR.NOME
FROM TB_CURSO, TB_PROFESSOR
INNER JOIN TB_CURSO_PROFESSOR ON TB_CURSO_PROFESSOR.CURSO_ID = TB_CURSO.ID AND 
TB_CURSO_PROFESSOR.PROFESSOR_ID = TB_PROFESSOR.PROFESSOR_ID;
.print